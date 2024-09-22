document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  const html = document.querySelector('html'),
    globalWrap = document.querySelector('.global-wrap'),
    body = document.querySelector('body'),
    menuToggle = document.querySelector(".hamburger"),
    menuList = document.querySelector(".main-nav"),
    searchOpenButton = document.querySelector(".search-button"),
    searchCloseIcon = document.querySelector(".icon__search__close"),
    searchOverlay = document.querySelector(".search__overlay"),
    searchInput = document.querySelector(".search__text"),
    search = document.querySelector(".search"),
    toggleTheme = document.querySelector(".toggle-theme"),
    btnScrollToTop = document.querySelector(".top");


  /* =======================================================
  // Menu + Search + Theme Switcher
  ======================================================= */
  menuToggle.addEventListener("click", () => {
    menu();
  });

  searchOpenButton.addEventListener("click", () => {
    searchOpen();
  });

  searchCloseIcon.addEventListener("click", () => {
    searchClose();
  });

  searchOverlay.addEventListener("click", () => {
    searchClose();
  });


  // Menu
  function menu() {
    menuToggle.classList.toggle("is-open");
    menuList.classList.toggle("is-visible");
  }


  // Search
  function searchOpen() {
    search.classList.add("is-visible");
    body.classList.add("search-is-visible");
    globalWrap.classList.add("is-active");
    menuToggle.classList.remove("is-open");
    menuList.classList.remove("is-visible");
    setTimeout(function () {
      searchInput.focus();
    }, 250);
  }

  function searchClose() {
    search.classList.remove("is-visible");
    body.classList.remove("search-is-visible");
    globalWrap.classList.remove("is-active");
  }

  document.addEventListener('keydown', function(e){
    if (e.key == 'Escape') {
      searchClose();
    }
  });


  // Theme Switcher
  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      darkMode();
    });
  };

  function darkMode() {
    if (html.classList.contains('dark-mode')) {
      html.classList.remove('dark-mode');
      localStorage.removeItem("theme");
      document.documentElement.removeAttribute("dark");
    } else {
      html.classList.add('dark-mode');
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("dark", "");
    }
  };


  /* ================================================================
  // Stop Animations During Window Resizing and Switching Theme Modes
  ================================================================ */
  let disableTransition;

  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      stopAnimation();
    });
  }

  window.addEventListener("resize", () => {
    stopAnimation();
  });

  function stopAnimation() {
    document.body.classList.add("disable-animation");
    clearTimeout(disableTransition);
    disableTransition = setTimeout(() => {
      document.body.classList.remove("disable-animation");
    }, 100);
  };


  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");


  /* =======================
  // LazyLoad Images
  ======================= */
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  })


  /* =======================
  // Zoom Image
  ======================= */
  const lightense = document.querySelector(".page__content img, .post__content img, .gallery__image img"),
  imageLink = document.querySelectorAll(".page__content a img, .post__content a img, .gallery__image a img");

  if (imageLink) {
    for (const i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
    for (const i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
  };

  if (lightense) {
    Lightense(".page__content img:not(.no-lightense), .post__content img:not(.no-lightense), .gallery__image img:not(.no-lightense)", {
    padding: 60,
    offset: 30
    });
  };


// =====================
// Load More Posts
// =====================
var load_posts_button = document.querySelector('.load-more-posts');
var current_page = 1;

function loadMorePosts(e) {
  e.preventDefault();
  console.log('Load more posts clicked');
  var paginationContainer = document.querySelector(".pagination");
  current_page++;
  console.log('Current page:', current_page);
  console.log('Total pages:', pagination_available_pages_number);

  if (current_page <= pagination_available_pages_number) {
    var nextPageUrl = new URL(`page/${current_page}/`, base_url).href;
    console.log('Fetching URL:', nextPageUrl);
    
    fetch(nextPageUrl)
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(html => {
        console.log('HTML received, length:', html.length);
        console.log('HTML content:', html.substring(0, 200) + '...'); // Log the first 200 characters
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        var newPosts = doc.querySelectorAll(".article--grid");
        console.log('New posts found:', newPosts.length);
        var grid = document.querySelector(".grid");
        
        newPosts.forEach(post => {
          grid.appendChild(post);
        });

        console.log('Posts appended to grid');

        // Reinitialize LazyLoad for new images
        new LazyLoad({
          elements_selector: ".lazy"
        });

        // Check if we've reached the last page
        if (current_page >= pagination_available_pages_number) {
          console.log('Last page reached, hiding button');
          paginationContainer.style.display = "none";
        }
      })
      .catch(error => {
        console.error('Error:', error);
        paginationContainer.style.display = "none";
      });
  } else {
    console.log('No more pages, hiding button');
    paginationContainer.style.display = "none";
  }
}

if (load_posts_button) {
  load_posts_button.addEventListener("click", loadMorePosts);
  console.log('Load more posts button listener added');
} else {
  console.log('Load more posts button not found');
}

console.log('base_url:', base_url);
console.log('pagination_available_pages_number:', pagination_available_pages_number);


  /* =======================
  // Scroll Top Button
  ======================= */
  btnScrollToTop.addEventListener("click", function () {
    if (window.scrollY != 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }
  });

});


/* =======================
  // active-toc (Optimized)
  ======================= */
  document.addEventListener("DOMContentLoaded", function() {
    const tocLinks = document.querySelectorAll(".toc a");
    const contentArea = document.querySelector(".post-content") || document.body;
    let activeLink = null;
  
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const tocLink = findTocLink(id);
          
          if (activeLink) {
            activeLink.classList.remove('active');
          }
          
          if (tocLink) {
            tocLink.classList.add('active');
            activeLink = tocLink;
          }
        }
      });
    }, observerOptions);
  
    tocLinks.forEach(link => {
      const targetId = decodeURIComponent(link.getAttribute('href').substring(1));
      const targetElement = findTargetElement(targetId);
      
      if (targetElement) {
        observer.observe(targetElement);
      }
    });
  
    // 스크롤 이벤트 핸들러 (옵션)
    let ticking = false;
    document.addEventListener('scroll', function(e) {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          highlightTocOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  
    function highlightTocOnScroll() {
      const scrollPosition = window.scrollY;
      let closestHeading = null;
      let closestDistance = Infinity;
  
      tocLinks.forEach(link => {
        const targetId = decodeURIComponent(link.getAttribute('href').substring(1));
        const targetElement = findTargetElement(targetId);
        
        if (targetElement) {
          const distance = Math.abs(targetElement.getBoundingClientRect().top);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestHeading = targetElement;
          }
        }
      });
  
      if (closestHeading) {
        const id = closestHeading.id;
        const tocLink = findTocLink(id);
        
        if (activeLink) {
          activeLink.classList.remove('active');
        }
        
        if (tocLink) {
          tocLink.classList.add('active');
          activeLink = tocLink;
        }
      }
    }
  
    function findTocLink(id) {
      for (let link of tocLinks) {
        const linkId = decodeURIComponent(link.getAttribute('href').substring(1));
        if (linkId === id || linkId === cleanId(id)) {
          return link;
        }
      }
      return null;
    }
  
    function findTargetElement(id) {
      // 정확한 ID 매치
      let element = document.getElementById(id);
      if (element) return element;
  
      // 정제된 ID로 매치 시도
      element = document.getElementById(cleanId(id));
      if (element) return element;
  
      // 부분 ID 매치 (howto-step-1, faq-question-0 등)
      const partialMatches = document.querySelectorAll(`[id^="${cleanId(id)}"]`);
      if (partialMatches.length === 1) return partialMatches[0];
  
      return null;
    }
  
    function cleanId(id) {
      // URL 인코딩된 문자 디코딩
      id = decodeURIComponent(id);
      // 공백과 특수 문자 제거
      return id.replace(/[^\w\-]+/g, '');
    }
  });



/* =======================
  // language-switcher
  ======================= */
  document.addEventListener('DOMContentLoaded', (event) => {
    const dropdown = document.querySelector('.lang-switcher__dropdown');
    dropdown.addEventListener('click', function(e) {
      e.stopPropagation();
      this.querySelector('.lang-switcher__dropdown-content').classList.toggle('show');
    });
  
    window.onclick = function(event) {
      if (!event.target.matches('.lang-switcher__dropbtn')) {
        const dropdowns = document.getElementsByClassName("lang-switcher__dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  });
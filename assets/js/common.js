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
var loadMorePosts = function() {
  var loadMoreButton = document.querySelector('.load-more-posts');
  var grid = document.querySelector('.grid');

  if (loadMoreButton) {
    loadMoreButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (pagination_next_url) {
        fetch(pagination_next_url)
          .then(response => response.text())
          .then(html => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, 'text/html');
            var newPosts = doc.querySelectorAll('.article--grid');
            var newPaginationScript = doc.querySelector('script:not([src])');
            
            newPosts.forEach(function(post) {
              grid.appendChild(post);
            });

            if (newPaginationScript) {
              eval(newPaginationScript.textContent);
            }

            new LazyLoad({
              elements_selector: ".lazy"
            });

            // Hide load more button if no more posts
            if (pagination_next_page_number > pagination_available_pages_number) {
              loadMoreButton.style.display = 'none';
            }
          })
          .catch(error => {
            console.error('Error loading more posts:', error);
            loadMoreButton.style.display = 'none';
          });
      } else {
        loadMoreButton.style.display = 'none';
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', loadMorePosts);


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
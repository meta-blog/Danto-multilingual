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
  // Load More Posts
var load_posts_button = document.querySelector('.load-more-posts');
if (load_posts_button) {
    load_posts_button.addEventListener("click", function(e) {
        e.preventDefault();
        var pagination = document.querySelector(".pagination");
        
        // 현재 URL에서 언어 코드 추출
        var currentPath = window.location.pathname;
        var langCode = currentPath.split('/')[1];  // URL의 첫 번째 세그먼트를 언어 코드로 가정
        
        // URL 구성 (언어 코드 포함)
        var nextPageUrl = '/' + langCode + '/posts/page/' + pagination_next_page_number + '/';
        console.log("Next page URL:", nextPageUrl);

        fetch(nextPageUrl)
            .then(function(response) {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Network response was not ok.');
            })
            .then(function(html) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(html, 'text/html');
                var newArticles = doc.querySelectorAll(".article--grid");
                var grid = document.querySelector(".grid");

                console.log("New articles found:", newArticles.length);

                newArticles.forEach(function(article) {
                    grid.appendChild(article);
                });

                // LazyLoad 적용
                if (typeof LazyLoad !== 'undefined') {
                    new LazyLoad({
                        elements_selector: ".lazy"
                    });
                } else {
                    console.error("LazyLoad is not defined");
                }

                pagination_next_page_number++;
                console.log("Next page number:", pagination_next_page_number);
                console.log("Available pages:", pagination_available_pages_number);

                if (pagination_next_page_number > pagination_available_pages_number) {
                    pagination.style.display = "none";
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
    });
} else {
    console.error("Load more button not found");
}

// 페이지 로드 시 변수 확인
console.log("Current URL:", window.location.href);
console.log("Initial pagination_next_page_number:", pagination_next_page_number);
console.log("Initial pagination_available_pages_number:", pagination_available_pages_number);


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
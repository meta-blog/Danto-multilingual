// 메인 JavaScript 파일
document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  // DOM 요소 캐싱
  const html = document.documentElement;
  const body = document.body;
  const globalWrap = document.querySelector('.global-wrap');
  
  // 이벤트 위임을 사용한 클릭 이벤트 처리
  document.addEventListener('click', function(e) {
    if (e.target.matches('.hamburger')) {
      toggleMenu();
    } else if (e.target.matches('.search-button')) {
      openSearch();
    } else if (e.target.matches('.icon__search__close, .search__overlay')) {
      closeSearch();
    } else if (e.target.matches('.toggle-theme')) {
      toggleTheme();
    } else if (e.target.matches('.top')) {
      scrollToTop();
    }
  });

  // 검색 기능
  function openSearch() {
    body.classList.add('search-is-visible');
    globalWrap.classList.add('is-active');
    setTimeout(() => document.querySelector('.search__text').focus(), 250);
  }

  function closeSearch() {
    body.classList.remove('search-is-visible');
    globalWrap.classList.remove('is-active');
  }

  // ESC 키로 검색 닫기
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeSearch();
  });

  // 테마 전환 기능
  function toggleTheme() {
    html.classList.toggle('dark-mode');
    localStorage.setItem('theme', html.classList.contains('dark-mode') ? 'dark' : 'light');
    html.setAttribute('dark', html.classList.contains('dark-mode') ? '' : null);
    stopAnimation();
  }

  // 애니메이션 일시 중지 기능
  let disableTransition;
  function stopAnimation() {
    body.classList.add('disable-animation');
    clearTimeout(disableTransition);
    disableTransition = setTimeout(() => body.classList.remove('disable-animation'), 100);
  }

  // 필요한 경우에만 외부 라이브러리 로드
  if (document.querySelector('.post__content iframe, .page__content iframe')) {
    loadScript('path/to/reframe.min.js', function() {
      reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");
    });
  }

  if (document.querySelector('.lazy')) {
    loadScript('path/to/lazyload.min.js', function() {
      new LazyLoad({ elements_selector: '.lazy' });
    });
  }

  if (document.querySelector('.page__content img, .post__content img, .gallery__image img')) {
    loadScript('path/to/lightense.min.js', function() {
      Lightense('.page__content img:not(.no-lightense), .post__content img:not(.no-lightense), .gallery__image img:not(.no-lightense)', {
        padding: 60,
        offset: 30
      });
    });
  }

  // 스크립트 동적 로딩 함수
  function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  }

  // 기타 함수들 (toggleMenu, scrollToTop 등) 구현
  // ...

});

// 필요한 경우 별도의 모듈로 분리하여 지연 로딩
// load-more-posts.js, active-toc.js, language-switcher.js 등
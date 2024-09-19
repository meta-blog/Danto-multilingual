/* =======================
  // active-toc (Optimized)
  ======================= */
  document.addEventListener("DOMContentLoaded", function() {
    const tocLinks = document.querySelectorAll(".toc a"); // TOC의 링크들
    const headings = document.querySelectorAll("h2, h3, h4"); // 감지할 섹션의 헤더들
  
    let activeLink = null;
  
    const observerOptions = {
      root: null, // viewport를 기준으로 관찰
      rootMargin: '0px 0px -75% 0px', // 뷰포트의 상단에서 빠르게 감지
      threshold: 0.1 // 10%만 화면에 보여도 감지
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const tocLink = document.querySelector(`.toc a[href="#${id}"]`);
  
        if (entry.isIntersecting) {
          if (activeLink) {
            activeLink.classList.remove('active');
          }
          tocLink.classList.add('active');
          activeLink = tocLink;
        }
      });
    }, observerOptions);
  
    headings.forEach(heading => {
      if (heading.id) {
        observer.observe(heading); // 각 헤더를 관찰
      }
    });
  });
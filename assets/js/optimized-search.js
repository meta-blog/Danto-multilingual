let searchIndex = null;
let searchResults = document.getElementById("js-results-container");
let searchInput = document.getElementById("js-search-input");
let searchClose = document.querySelector(".icon__search__close");
let searchOverlay = document.querySelector(".search__overlay");
const contextDive = 95;

function getCurrentLanguage() {
    const path = window.location.pathname.split('/')[1];
    const supportedLanguages = ['us', 'in', 'cn', 'tw', 'mx', 'br', 'jp', 'kr', 'vn', 'tr', 'id', 'th'];
    return supportedLanguages.includes(path) ? path : 'us';
}

function getIndexPath() {
    const lang = getCurrentLanguage();
    return `/${lang}/index.json`;
}

const translations = {
    'us': { 'noResults': 'No results found...' },
    'in': { 'noResults': 'No results found...' },
    'cn': { 'noResults': '没有找到结果...' },
    'tw': { 'noResults': '沒有找到結果...' },
    'mx': { 'noResults': 'No se encontraron resultados...' },
    'br': { 'noResults': 'Nenhum resultado encontrado...' },
    'jp': { 'noResults': '結果が見つかりません...' },
    'kr': { 'noResults': '결과를 찾을 수 없습니다...' },
    'vn': { 'noResults': 'Không tìm thấy kết quả...' },
    'tr': { 'noResults': 'Sonuç bulunamadı...' },
    'id': { 'noResults': 'Tidak ada hasil yang ditemukan...' },
    'th': { 'noResults': 'ไม่พบผลลัพธ์...' }
};

function getTranslation(key) {
    const lang = getCurrentLanguage();
    return translations[lang]?.[key] || translations['us'][key];
}

function initializeSearchIndex() {
    if (searchIndex) return Promise.resolve();

    return fetch(getIndexPath())
        .then(response => response.json())
        .then(data => {
            searchIndex = new Fuse(data, {
                keys: ['title', 'content'],
                includeMatches: true,
                minMatchCharLength: 3,
                threshold: 0.3
            });
        });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function search(query) {
    while (searchResults.firstChild) {
        searchResults.removeChild(searchResults.firstChild);
    }

    if (query.length < 3) {
        searchResults.style.display = "none";
        return;
    }

    const results = searchIndex.search(query);

    if (results.length > 0) {
        searchResults.style.display = "block";
        results.slice(0, 10).forEach((result, index) => {
            const item = result.item;
            const matches = result.matches[0];
            let snippet = matches.value.substring(matches.indices[0][0] - contextDive, matches.indices[0][1] + contextDive);
            snippet = snippet.replace(new RegExp(query, 'gi'), match => `<mark>${match}</mark>`);

            const html = `
                <div class="search-results-item">
                    <a href="${item.permalink}" class="search-results-image" style="background-image: url(${item.image})"></a>
                    <div class="search-results-content">
                        <time class="search-result-date" datetime="${item.date}">${item.date}</time>
                        <a href="${item.permalink}" class="search-result-title">${item.title}</a>
                        <p class="search-result-excerpt">${snippet}</p>
                    </div>
                </div>
            `;

            searchResults.insertAdjacentHTML('beforeend', html);
        });
    } else {
        searchResults.style.display = "block";
        searchResults.insertAdjacentHTML('beforeend', `<div class="no-results">${getTranslation('noResults')}</div>`);
    }
}

const debouncedSearch = debounce(search, 300);

document.addEventListener('DOMContentLoaded', () => {
    initializeSearchIndex().then(() => {
        searchInput.addEventListener("input", function() {
            debouncedSearch(this.value.trim());
        });

        searchClose.addEventListener("click", function() {
            searchInput.value = "";
            searchResults.style.display = "none";
        });

        searchOverlay.addEventListener("click", function() {
            searchInput.value = "";
            searchResults.style.display = "none";
        });
    });
});
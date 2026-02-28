/* =============================================
   GLOBE — app.js
   Renders continents, country cards, search,
   and country detail modal.
   ============================================= */

'use strict';

// ── Merge all country arrays into one ──
const ALL_COUNTRIES = [
     ...(typeof AFRICA_COUNTRIES !== 'undefined' ? AFRICA_COUNTRIES : []),
     ...(typeof ASIA_COUNTRIES !== 'undefined' ? ASIA_COUNTRIES : []),
     ...(typeof EUROPE_COUNTRIES !== 'undefined' ? EUROPE_COUNTRIES : []),
     ...(typeof NORTH_AMERICA_COUNTRIES !== 'undefined' ? NORTH_AMERICA_COUNTRIES : []),
     ...(typeof SOUTH_AMERICA_COUNTRIES !== 'undefined' ? SOUTH_AMERICA_COUNTRIES : []),
     ...(typeof OCEANIA_COUNTRIES !== 'undefined' ? OCEANIA_COUNTRIES : []),
     ...(typeof ANTARCTICA_TERRITORIES !== 'undefined' ? ANTARCTICA_TERRITORIES : []),
];

// ── Continent ID map ──
const CONTINENT_SECTION_ID = {
     'Africa': 'africa',
     'Asia': 'asia',
     'Europe': 'europe',
     'North America': 'north-america',
     'South America': 'south-america',
     'Oceania': 'oceania',
     'Antarctica': 'antarctica',
};

// ── Unsplash photo URL ──
function photoUrl(query) {
     const encoded = encodeURIComponent(query || 'travel landscape');
     return `https://source.unsplash.com/800x500/?${encoded}`;
}

// ── Flag URL ──
function flagUrl(code) {
     if (!code) return '';
     return `https://flagcdn.com/w160/${code.toLowerCase()}.png`;
}

// ── Safe continent key for CSS ──
function contKey(name) {
     return (name || '').toLowerCase().replace(/\s+/g, '-');
}

// ═══════════════════════════════════════════
//  STARS
// ═══════════════════════════════════════════
function generateStars() {
     const container = document.getElementById('starsContainer');
     if (!container) return;
     const count = 120;
     for (let i = 0; i < count; i++) {
          const s = document.createElement('div');
          s.className = 'star';
          const size = Math.random() * 2.5 + 0.5;
          s.style.cssText = `
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      width:${size}px;height:${size}px;
      --dur:${(Math.random() * 4 + 2).toFixed(1)}s;
      animation-delay:${(Math.random() * 5).toFixed(1)}s;
    `;
          container.appendChild(s);
     }
}

// ═══════════════════════════════════════════
//  CONTINENT INFO
// ═══════════════════════════════════════════
function renderContinentInfo(cont) {
     const id = cont.code;
     const descEl = document.getElementById(`desc-${id}`);
     const factsEl = document.getElementById(`facts-${id}`);
     if (descEl) descEl.textContent = cont.description || '';
     if (factsEl) {
          factsEl.innerHTML = (cont.fun_facts || []).map(f =>
               `<div class="fact-chip">${f}</div>`
          ).join('');
     }
}

// ═══════════════════════════════════════════
//  CARD HTML
// ═══════════════════════════════════════════
function renderCard(c) {
     const ck = contKey(c.continent);
     const langs = Array.isArray(c.languages) ? c.languages.slice(0, 2).join(', ') : c.languages;
     return `
  <div class="country-card" data-code="${c.code}" data-name="${c.name}" tabindex="0" role="button" aria-label="View details for ${c.name}">
    <div class="card-photo">
      <img src="${photoUrl(c.photo_query)}" alt="${c.name}" loading="lazy" onerror="this.src='https://source.unsplash.com/800x500/?travel,landscape'"/>
      <div class="card-photo-overlay"></div>
      <div class="card-flag">
        <img src="${flagUrl(c.code)}" alt="${c.name} flag" loading="lazy"/>
      </div>
      <div class="card-continent-dot dot-${ck}"></div>
    </div>
    <div class="card-body">
      <div class="card-name">${c.name}</div>
      <div class="card-capital">🏛 Capital: <span>${c.capital || '—'}</span></div>
      <div class="card-languages"><strong>🗣</strong>${langs || 'Various'}</div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════
//  MODAL
// ═══════════════════════════════════════════
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
let currentCountry = null;

function openModal(c) {
     currentCountry = c;
     const ck = contKey(c.continent);
     const badge = c.continent || '';

     document.getElementById('modalFlag').src = flagUrl(c.code);
     document.getElementById('modalFlag').alt = `${c.name} flag`;
     document.getElementById('modalName').textContent = c.name;
     document.getElementById('modalCapital').textContent = `🏛 ${c.capital || '—'}`;
     document.getElementById('modalPhoto').src = photoUrl(c.photo_query);
     document.getElementById('modalPhoto').alt = `${c.name} landmark`;

     const badgeEl = document.getElementById('modalContinentBadge');
     badgeEl.textContent = badge;
     badgeEl.className = `modal-continent-badge badge-${ck}`;

     // Quick stats
     document.getElementById('modalQuickStats').innerHTML = `
    <span class="qstat">👥 ${c.population || '—'}</span>
    <span class="qstat">📐 ${c.area || '—'}</span>
    <span class="qstat">💰 ${c.currency || '—'}</span>
  `;

     // Langs HTML
     const langsHtml = (Array.isArray(c.languages) ? c.languages : [c.languages]).map(l =>
          `<span class="lang-tag">${l}</span>`).join('');

     // Tourist spots
     const spotsHtml = (c.tourist_spots || []).map(s =>
          `<span class="spot-tag">📍 ${s}</span>`).join('');

     // Fun facts
     const factsHtml = (c.fun_facts || []).map(f =>
          `<li>${f}</li>`).join('');

     document.getElementById('modalBody').innerHTML = `
    <div class="modal-section full">
      <div class="modal-section-title">🌐 Languages</div>
      <div class="modal-section-content"><div class="spots-list">${langsHtml || 'Various'}</div></div>
    </div>
    <div class="modal-section full">
      <div class="modal-section-title">👥 People & Ethnic Groups</div>
      <div class="modal-section-content">${c.people || '—'}</div>
    </div>
    <div class="modal-section full">
      <div class="modal-section-title">🎭 Culture & Traditions</div>
      <div class="modal-section-content">${c.culture || '—'}</div>
    </div>
    <div class="modal-section full">
      <div class="modal-section-title">📍 Famous Tourist Spots</div>
      <div class="modal-section-content"><div class="spots-list">${spotsHtml || '—'}</div></div>
    </div>
    <div class="modal-section full">
      <div class="modal-section-title">✨ What Makes It Unique</div>
      <div class="modal-section-content">${c.uniqueness || '—'}</div>
    </div>
    <div class="modal-section full">
      <div class="modal-section-title">💡 Fun Facts</div>
      <div class="modal-section-content"><ul class="funfact-list">${factsHtml || '<li>—</li>'}</ul></div>
    </div>
  `;

     modalOverlay.classList.add('open');
     document.body.style.overflow = 'hidden';
     modalClose.focus();
}

function closeModal() {
     modalOverlay.classList.remove('open');
     document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ═══════════════════════════════════════════
//  RENDER GRID
// ═══════════════════════════════════════════
function renderGrid(gridId, countries) {
     const el = document.getElementById(gridId);
     if (!el) return;
     if (!countries.length) {
          el.innerHTML = '<p style="color:var(--text-muted);padding:20px;">No countries found.</p>';
          return;
     }
     el.innerHTML = countries.map(renderCard).join('');
     el.querySelectorAll('.country-card').forEach(card => {
          const clickHandler = () => {
               const country = countries.find(c => c.code === card.dataset.code && c.name === card.dataset.name);
               if (country) openModal(country);
          };
          card.addEventListener('click', clickHandler);
          card.addEventListener('keypress', e => { if (e.key === 'Enter') clickHandler(); });
     });
}

// ═══════════════════════════════════════════
//  SEARCH
// ═══════════════════════════════════════════
const searchInput = document.getElementById('globalSearch');
const searchClear = document.getElementById('searchClear');
const searchSection = document.getElementById('searchResultsSection');
const searchGrid = document.getElementById('searchResultsGrid');
const searchTermEl = document.getElementById('searchTermDisplay');
const noResultsEl = document.getElementById('noResults');
const mainContent = document.getElementById('mainContent');
let searchTimer;

function doSearch(term) {
     const q = term.trim().toLowerCase();
     if (!q) {
          searchSection.style.display = 'none';
          mainContent.style.display = '';
          searchClear.classList.remove('visible');
          return;
     }
     searchClear.classList.add('visible');
     const results = ALL_COUNTRIES.filter(c => {
          const langs = Array.isArray(c.languages) ? c.languages.join(' ') : (c.languages || '');
          return (
               c.name.toLowerCase().includes(q) ||
               (c.capital || '').toLowerCase().includes(q) ||
               langs.toLowerCase().includes(q) ||
               (c.continent || '').toLowerCase().includes(q) ||
               (c.culture || '').toLowerCase().includes(q) ||
               (c.people || '').toLowerCase().includes(q)
          );
     });
     searchSection.style.display = '';
     mainContent.style.display = 'none';
     searchTermEl.textContent = `"${term.trim()}"`;

     if (!results.length) {
          searchGrid.innerHTML = '';
          noResultsEl.style.display = '';
     } else {
          noResultsEl.style.display = 'none';
          renderGrid('searchResultsGrid', results);
          // rebind for search results
          searchGrid.querySelectorAll('.country-card').forEach(card => {
               card.addEventListener('click', () => {
                    const country = results.find(c => c.code === card.dataset.code && c.name === card.dataset.name);
                    if (country) openModal(country);
               });
          });
     }
     searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

searchInput.addEventListener('input', () => {
     clearTimeout(searchTimer);
     searchTimer = setTimeout(() => doSearch(searchInput.value), 280);
});
searchClear.addEventListener('click', () => {
     searchInput.value = '';
     doSearch('');
     searchInput.focus();
});

// ═══════════════════════════════════════════
//  NAVBAR SCROLL
// ═══════════════════════════════════════════
window.addEventListener('scroll', () => {
     document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ═══════════════════════════════════════════
//  HAMBURGER
// ═══════════════════════════════════════════
document.getElementById('hamburger').addEventListener('click', () => {
     document.getElementById('mobileMenu').classList.toggle('open');
});
function closeMobileMenu() {
     document.getElementById('mobileMenu').classList.remove('open');
}
window.closeMobileMenu = closeMobileMenu;

// ═══════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════
function init() {
     generateStars();

     // Render continent info
     if (typeof CONTINENTS !== 'undefined') {
          CONTINENTS.forEach(cont => renderContinentInfo(cont));
     }

     // Render each continent grid
     const continentMap = {
          'Africa': { id: 'grid-africa', data: typeof AFRICA_COUNTRIES !== 'undefined' ? AFRICA_COUNTRIES : [] },
          'Asia': { id: 'grid-asia', data: typeof ASIA_COUNTRIES !== 'undefined' ? ASIA_COUNTRIES : [] },
          'Europe': { id: 'grid-europe', data: typeof EUROPE_COUNTRIES !== 'undefined' ? EUROPE_COUNTRIES : [] },
          'North America': { id: 'grid-north-america', data: typeof NORTH_AMERICA_COUNTRIES !== 'undefined' ? NORTH_AMERICA_COUNTRIES : [] },
          'South America': { id: 'grid-south-america', data: typeof SOUTH_AMERICA_COUNTRIES !== 'undefined' ? SOUTH_AMERICA_COUNTRIES : [] },
          'Oceania': { id: 'grid-oceania', data: typeof OCEANIA_COUNTRIES !== 'undefined' ? OCEANIA_COUNTRIES : [] },
          'Antarctica': { id: 'grid-antarctica', data: typeof ANTARCTICA_TERRITORIES !== 'undefined' ? ANTARCTICA_TERRITORIES : [] },
     };

     Object.values(continentMap).forEach(({ id, data }) => {
          renderGrid(id, data);
     });

     // Intersection observer for lazy continent sections
     const sections = document.querySelectorAll('.continent-section');
     const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
               }
          });
     }, { threshold: 0.05 });
     sections.forEach(s => observer.observe(s));
}

document.addEventListener('DOMContentLoaded', init);

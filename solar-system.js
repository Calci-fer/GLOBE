/* =============================================
   GLOBE — solar-system.js
   Renders planets, dwarf planets, Sun modal,
   star field, orbit decoration, and size chart.
   ============================================= */
'use strict';

const SS = SOLAR_SYSTEM;

// ── Planet type helpers ──
function planetCategory(p) {
     if (p.id === 'mercury' || p.id === 'venus' || p.id === 'earth' || p.id === 'mars') return 'rocky';
     if (p.id === 'jupiter' || p.id === 'saturn') return 'gas';
     return 'ice';
}

// ── Stars background ──
function generateStars() {
     const container = document.getElementById('starsBg');
     if (!container) return;
     for (let i = 0; i < 180; i++) {
          const s = document.createElement('div');
          s.className = 'star-dot';
          const size = Math.random() * 2.5 + 0.5;
          s.style.cssText = `
      left:${Math.random() * 100}%;top:${Math.random() * 100}%;
      width:${size}px;height:${size}px;
      --dur:${(Math.random() * 4 + 2).toFixed(1)}s;
      animation-delay:${(Math.random() * 6).toFixed(1)}s;
    `;
          container.appendChild(s);
     }
}

// ── Orbit decoration ──
function buildOrbitAnim() {
     const wrap = document.getElementById('orbitAnim');
     if (!wrap) return;
     const rings = [60, 100, 140, 185, 230];
     const planets = [
          { emoji: '🌑', r: 60, size: 14, dur: 8 },
          { emoji: '🌕', r: 100, size: 16, dur: 14 },
          { emoji: '🌍', r: 140, size: 18, dur: 22 },
          { emoji: '🔴', r: 185, size: 16, dur: 36 },
          { emoji: '🪐', r: 230, size: 22, dur: 60 },
     ];
     rings.forEach(r => {
          const el = document.createElement('div');
          el.className = 'orbit-ring';
          el.style.cssText = `width:${r * 2}px;height:${r * 2}px;`;
          wrap.appendChild(el);
     });
     planets.forEach(p => {
          const el = document.createElement('div');
          el.className = 'orbit-planet';
          el.textContent = p.emoji;
          el.style.cssText = `
      font-size:${p.size}px;
      --r:${p.r}px;
      margin-left:-${p.size / 2}px;
      margin-top:-${p.size / 2}px;
      animation-duration:${p.dur}s;
    `;
          wrap.appendChild(el);
     });
     // Center sun
     const sun = document.createElement('div');
     sun.textContent = '☀️';
     sun.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:28px;';
     wrap.appendChild(sun);
}

// ── Key facts bar ──
function renderFactsBar() {
     const el = document.getElementById('keyFactsBar');
     if (!el) return;
     el.innerHTML = SS.key_facts.map(f => `
    <div class="fact-chip">
      <span class="fi">${f.icon}</span>
      <span class="fl">${f.label}:</span>
      <span class="fv">${f.value}</span>
    </div>
  `).join('');
}

// ── Sun section ──
function renderSun() {
     const s = SS.sun;
     const descEl = document.getElementById('sunDesc');
     const statsEl = document.getElementById('sunStats');
     if (descEl) descEl.textContent = s.description;
     if (statsEl) {
          statsEl.innerHTML = s.quick_stats.map(q => `
      <div class="sun-stat">
        <div class="sun-stat-label">${q.icon} ${q.label}</div>
        <div class="sun-stat-value">${q.value}</div>
      </div>
    `).join('');
     }
     document.getElementById('btnSunDetail').addEventListener('click', () => openModal('sun', null));
}

// ── Planet cards ──
function renderPlanets() {
     const grid = document.getElementById('planetsGrid');
     if (!grid) return;
     grid.innerHTML = SS.planets.map(p => {
          const cat = planetCategory(p);
          const qs = (p.quick_stats || []).slice(0, 4).map(q => `
      <div class="pq">
        <div class="pq-label">${q.icon} ${q.label}</div>
        <div class="pq-value">${q.value}</div>
      </div>
    `).join('');
          return `
      <div class="planet-card" data-id="${p.id}"
           style="--planet-color:${p.color};--planet-glow:${p.glow}40;">
        <div class="planet-card-header">
          <div class="planet-order">#${p.order}</div>
          <div class="planet-orb-wrap" style="background:radial-gradient(circle,${p.glow}30,transparent 70%);">
            <div class="planet-orb-glow" style="background:radial-gradient(circle,${p.glow}40,transparent 70%);"></div>
            <span style="font-size:2.8rem;position:relative;z-index:1;">${p.emoji}</span>
          </div>
          <div class="planet-name">${p.name}</div>
          <div class="planet-tagline">${p.tagline}</div>
          <div class="planet-type-badge cat-${cat}">${p.type}</div>
        </div>
        <div class="planet-card-body">
          <div class="planet-quick">${qs}</div>
          <div class="planet-moons-rings">
            <span class="pr-badge">🌙 ${p.moons} Moon${p.moons !== 1 ? 's' : ''}</span>
            ${p.rings ? '<span class="pr-badge">💍 Has Rings</span>' : ''}
          </div>
        </div>
        <div class="planet-card-footer">
          <button class="btn-explore" data-id="${p.id}">Explore ${p.name} →</button>
        </div>
      </div>
    `;
     }).join('');

     // bind clicks
     grid.querySelectorAll('.planet-card, .btn-explore').forEach(el => {
          el.addEventListener('click', (e) => {
               e.stopPropagation();
               const id = el.dataset.id || el.closest('.planet-card').dataset.id;
               const planet = SS.planets.find(p => p.id === id);
               if (planet) openModal('planet', planet);
          });
     });
}

// ── Size comparison ──
function renderSizeCompare() {
     const wrap = document.getElementById('sizeCompare');
     if (!wrap) return;
     // relative pixel sizes (logarithmic scale for visibility)
     const items = [
          { name: 'Sun', emoji: '☀️', px: 110, color: '#FFD70040', glow: '#FF8C00', km: '1,392,700 km' },
          { name: 'Jupiter', emoji: '🪐', px: 56, color: '#C88B3A40', glow: '#E8A246', km: '139,820 km' },
          { name: 'Saturn', emoji: '🪐', px: 48, color: '#E4D19140', glow: '#C9B454', km: '116,460 km' },
          { name: 'Uranus', emoji: '🔵', px: 28, color: '#7DE8E840', glow: '#4BC5D4', km: '50,724 km' },
          { name: 'Neptune', emoji: '🌀', px: 27, color: '#4169E140', glow: '#1E90FF', km: '49,244 km' },
          { name: 'Earth', emoji: '🌍', px: 18, color: '#3A8FD140', glow: '#2ecc71', km: '12,742 km' },
          { name: 'Venus', emoji: '🌕', px: 17, color: '#E8C56D40', glow: '#D4A017', km: '12,104 km' },
          { name: 'Mars', emoji: '🔴', px: 13, color: '#C1440E40', glow: '#FF4500', km: '6,779 km' },
          { name: 'Mercury', emoji: '🌑', px: 10, color: '#B5B5B540', glow: '#888', km: '4,879 km' },
     ];
     wrap.innerHTML = items.map(it => `
    <div class="size-item">
      <div class="size-ball" style="width:${it.px}px;height:${it.px}px;background:radial-gradient(circle,${it.color},transparent);--planet-glow:${it.glow}60;font-size:${Math.max(it.px * 0.5, 12)}px;box-shadow:0 0 ${it.px / 2}px ${it.glow}60;">
        ${it.emoji}
      </div>
      <div class="size-label">${it.name}</div>
      <div class="size-km">${it.km}</div>
    </div>
  `).join('');
}

// ── Dwarf planets ──
function renderDwarfPlanets() {
     const grid = document.getElementById('dwarfGrid');
     if (!grid) return;
     grid.innerHTML = SS.dwarf_planets.map(d => `
    <div class="dwarf-card" data-id="${d.id}">
      <div class="dwarf-header">
        <div class="dwarf-orb" style="background:radial-gradient(circle,${d.color}30,transparent);">⚫</div>
        <div>
          <div class="dwarf-name">${d.name}</div>
          <div class="dwarf-type">${d.type}</div>
        </div>
      </div>
      <div class="dwarf-tagline">${d.tagline}</div>
      <div class="dwarf-desc">${d.description}</div>
      <div class="dwarf-meta">
        <span class="dmeta">📏 ${d.diameter}</span>
        <span class="dmeta">⏱️ ${d.orbital_period}</span>
        <span class="dmeta">🌙 ${d.moons} Moon${d.moons !== 1 ? 's' : ''}</span>
      </div>
    </div>
  `).join('');

     grid.querySelectorAll('.dwarf-card').forEach(card => {
          card.addEventListener('click', () => {
               const d = SS.dwarf_planets.find(x => x.id === card.dataset.id);
               if (d) openModal('dwarf', d);
          });
     });
}

// ── Modal ──
const modalOverlay = document.getElementById('ssModal');
const modalClose = document.getElementById('ssModalClose');

function openModal(type, data) {
     const orbEl = document.getElementById('ssModalOrb');
     const typeEl = document.getElementById('ssModalType');
     const nameEl = document.getElementById('ssModalName');
     const tagEl = document.getElementById('ssModalTagline');
     const quickEl = document.getElementById('ssModalQuick');
     const bodyEl = document.getElementById('ssModalBody');
     const card = document.getElementById('ssModalCard');

     let glow = 'rgba(124,106,240,0.2)';
     let emoji = '☀️';
     let typeTxt = '';
     let name = '';
     let tagline = '';
     let quickStats = [];
     let desc = '';
     let facts = [];
     let extraSections = '';

     if (type === 'sun') {
          const s = SS.sun;
          emoji = '☀️'; glow = '#FF8C0040';
          typeTxt = s.type; name = s.name; tagline = 'The Heart of Our Solar System';
          quickStats = s.quick_stats;
          desc = s.description; facts = s.fun_facts;
          extraSections = `
      <div class="mb-section">
        <div class="mb-title">🧪 Composition</div>
        <div class="comp-tags">${(s.composition || []).map(c => `<span class="comp-tag">${c}</span>`).join('')}</div>
      </div>
      <div class="mb-section">
        <div class="mb-title">📊 Key Stats</div>
        <div class="mb-grid">
          <div class="mb-stat"><div class="mb-stat-label">Diameter</div><div class="mb-stat-value">${s.diameter}</div></div>
          <div class="mb-stat"><div class="mb-stat-label">Mass</div><div class="mb-stat-value">${s.mass}</div></div>
          <div class="mb-stat"><div class="mb-stat-label">Surface Temp</div><div class="mb-stat-value">${s.surface_temp}</div></div>
          <div class="mb-stat"><div class="mb-stat-label">Age</div><div class="mb-stat-value">${s.age}</div></div>
        </div>
      </div>
    `;
     } else if (type === 'planet') {
          const p = data;
          emoji = p.emoji; glow = p.glow + '40';
          typeTxt = p.type; name = p.name; tagline = p.tagline;
          quickStats = p.quick_stats;
          desc = p.description; facts = p.fun_facts;
          extraSections = `
      <div class="mb-section">
        <div class="mb-title">📊 Physical Data</div>
        <div class="mb-grid">
          <div class="mb-stat"><div class="mb-stat-label">Diameter</div><div class="mb-stat-value">${p.diameter}</div></div>
          <div class="mb-stat"><div class="mb-stat-label">Mass</div><div class="mb-stat-value">${p.mass}</div></div>
          <div class="mb-stat"><div class="mb-stat-label">Distance from Sun</div><div class="mb-stat-value">${p.distance_from_sun}</div></div>
          <div class="mb-stat"><div class="mb-stat-label">Gravity</div><div class="mb-stat-value">${p.gravity}</div></div>
          <div class="mb-stat"><div class="mb-stat-label">Rotation Period</div><div class="mb-stat-value">${p.rotation_period}</div></div>
          <div class="mb-stat"><div class="mb-stat-label">Orbital Period</div><div class="mb-stat-value">${p.orbital_period}</div></div>
        </div>
      </div>
      <div class="mb-section">
        <div class="mb-title">💨 Atmosphere</div>
        <div class="mb-content">${p.atmosphere}</div>
      </div>
    `;
     } else {
          const d = data;
          emoji = '⚫'; glow = d.color + '40';
          typeTxt = d.type; name = d.name; tagline = d.tagline;
          quickStats = [
               { icon: '📏', label: 'Diameter', value: d.diameter },
               { icon: '☀️', label: 'Dist. Sun', value: d.distance_from_sun },
               { icon: '⏱️', label: 'Orbital Period', value: d.orbital_period },
               { icon: '🌙', label: 'Moons', value: `${d.moons}` },
          ];
          desc = d.description; facts = d.fun_facts;
          extraSections = '';
     }

     // Apply modal glow
     card.style.setProperty('--modal-glow', glow);
     orbEl.style.setProperty('--modal-glow', glow);

     orbEl.textContent = emoji;
     orbEl.style.background = `radial-gradient(circle, ${glow}, transparent 70%)`;
     typeEl.textContent = typeTxt;
     nameEl.textContent = name;
     tagEl.textContent = tagline;

     quickEl.innerHTML = (quickStats || []).map(q => `
    <div class="qchip">
      <span class="qchip-i">${q.icon}</span>
      <span class="qchip-l">${q.label}</span>
      <span class="qchip-v">${q.value}</span>
    </div>
  `).join('');

     bodyEl.innerHTML = `
    <div class="mb-section">
      <div class="mb-title">🌐 Overview</div>
      <div class="mb-content">${desc}</div>
    </div>
    ${extraSections}
    <div class="mb-section">
      <div class="mb-title">💡 Fascinating Facts</div>
      <ul class="fact-list">${(facts || []).map(f => `<li>${f}</li>`).join('')}</ul>
    </div>
  `;

     modalOverlay.classList.add('open');
     document.body.style.overflow = 'hidden';
}

function closeModal() {
     modalOverlay.classList.remove('open');
     document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Hamburger ──
document.getElementById('hamburger').addEventListener('click', () => {
     document.getElementById('mobileMenu').classList.toggle('open');
});
function closeMobileMenu() {
     document.getElementById('mobileMenu').classList.remove('open');
}
window.closeMobileMenu = closeMobileMenu;

// ── Navbar scroll ──
window.addEventListener('scroll', () => {
     document.getElementById('ssNav').style.background =
          window.scrollY > 40 ? 'rgba(2,4,10,0.97)' : 'rgba(2,4,10,0.85)';
}, { passive: true });

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
     generateStars();
     buildOrbitAnim();
     renderFactsBar();
     renderSun();
     renderPlanets();
     renderSizeCompare();
     renderDwarfPlanets();
});

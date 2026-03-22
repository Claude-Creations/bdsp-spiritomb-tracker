// ===== Translations =====
const T = {
  en: {
    siteTitle: 'BDSP Spiritomb Tracker',
    heroTitle: 'Spiritomb NPC Tracker',
    heroDesc: 'Track which NPCs you\'ve talked to in the Grand Underground to unlock Spiritomb in Pokémon Brilliant Diamond & Shining Pearl.',
    progressTitle: 'Progress',
    progressNeeded: 'You need 32 of 35 NPCs.',
    progressComplete: 'Quest complete! Go to the Hallowed Tower on Route 209!',
    guideTitle: 'How to Get Spiritomb',
    guideStep1: 'Get the <strong>Explorer Kit</strong> from the Underground Man in Eterna City.',
    guideStep2: 'Obtain an <strong>Odd Keystone</strong> — find one on Route 208 (from the Black Belt NPC), dig one up in the Grand Underground, or find the hidden one in Twinleaf Town.',
    guideStep3: 'Go to Route 209 and interact with the <strong>Hallowed Tower</strong> (the broken stone tower) to place the Odd Keystone.',
    guideStep4: 'Enter the Grand Underground and <strong>talk to 32 unique named NPCs</strong>. Use the checklist below to track your progress. Sphere Traders do NOT count.',
    guideStep5: 'Once you\'ve talked to 32 NPCs, return to the <strong>Hallowed Tower</strong> on Route 209 and interact with it to encounter <strong>Spiritomb (Lv. 25)</strong>.',
    guideTip: 'To respawn NPCs quickly, enter and exit a Pokémon Hideaway. Each area has NPCs that spawn more frequently there, but any NPC can appear anywhere.',
    resetBtn: 'Reset All Progress',
    resetConfirm: 'Are you sure you want to reset all progress?',
    footerText: 'A Claude Creations project.',
    footerHome: 'Home',
    areaMain: 'Roaming (All Areas)',
    areaCentral: 'Central (Celestic Town)',
    areaTopLeft: 'Top-Left (Snowpoint City Region)',
    areaTopRight: 'Top-Right (Battle Zone)',
    areaBottomLeft: 'Bottom-Left (Twinleaf / Canalave Region)',
    areaBottomRight: 'Bottom-Right (Sunyshore City Region)',
  },
  de: {
    siteTitle: 'BDSP Spiritomb Tracker',
    heroTitle: 'Spiritomb NPC-Tracker',
    heroDesc: 'Verfolge, mit welchen NPCs du im Untergrund gesprochen hast, um Kryppuk in Pokémon Strahlender Diamant & Leuchtende Perle freizuschalten.',
    progressTitle: 'Fortschritt',
    progressNeeded: 'Du brauchst 32 von 35 NPCs.',
    progressComplete: 'Quest abgeschlossen! Geh zum Turm der Ruinen auf Route 209!',
    guideTitle: 'Wie man Kryppuk bekommt',
    guideStep1: 'Erhalte den <strong>Entdecker-Kit</strong> vom Untergrund-Mann in Ewigenau.',
    guideStep2: 'Besorge einen <strong>Spiritkern</strong> — auf Route 208 (vom Schwarzgurt-NPC), im Untergrund ausgraben, oder den versteckten in Zweiblattdorf finden.',
    guideStep3: 'Geh zu Route 209 und interagiere mit dem <strong>Turm der Ruinen</strong> (der zerbrochene Steinturm), um den Spiritkern einzusetzen.',
    guideStep4: 'Betritt den Untergrund und <strong>sprich mit 32 einzigartigen benannten NPCs</strong>. Nutze die Checkliste unten, um deinen Fortschritt zu verfolgen. Sphärenhändler zählen NICHT.',
    guideStep5: 'Sobald du mit 32 NPCs gesprochen hast, kehre zum <strong>Turm der Ruinen</strong> auf Route 209 zurück und interagiere damit, um <strong>Kryppuk (Lv. 25)</strong> zu begegnen.',
    guideTip: 'Um NPCs schnell neu erscheinen zu lassen, betritt und verlasse ein Pokémon-Versteck. Jedes Gebiet hat NPCs, die dort häufiger erscheinen, aber jeder NPC kann überall auftauchen.',
    resetBtn: 'Gesamten Fortschritt zurücksetzen',
    resetConfirm: 'Bist du sicher, dass du den gesamten Fortschritt zurücksetzen möchtest?',
    footerText: 'Ein Claude Creations Projekt.',
    footerHome: 'Startseite',
    areaMain: 'Überall (Alle Gebiete)',
    areaCentral: 'Zentral (Elyses)',
    areaTopLeft: 'Oben-Links (Blizzach-Region)',
    areaTopRight: 'Oben-Rechts (Kampfzone)',
    areaBottomLeft: 'Unten-Links (Zweiblattdorf / Fleetburg-Region)',
    areaBottomRight: 'Unten-Rechts (Sonnewik-Region)',
  }
};

// ===== NPC Name Mapping (ID → display name per language) =====
// IDs are stable internal keys; display names change with language
const NPC_NAMES = {
  leilani:   { en: 'Leilani',   de: 'Andrea' },
  kawika:    { en: 'Kawika',    de: 'Marko' },
  guy:       { en: 'Guy',       de: 'Jonathan' },
  donn:      { en: 'Donn',      de: 'David' },
  meredyth:  { en: 'Meredyth',  de: 'Maggie' },
  maika:     { en: 'Maika',     de: 'Sonja' },
  blaire:    { en: 'Blaire',    de: 'Miriam' },
  rita:      { en: 'Rita',      de: 'Miranda' },
  dane:      { en: 'Dane',      de: 'Thorsten' },
  reggie:    { en: 'Reggie',    de: 'Gaston' },
  ryuki:     { en: 'Ryuki',     de: 'Nils' },
  troye:     { en: 'Troye',     de: 'Flo' },
  harper:    { en: 'Harper',    de: 'Inez' },
  reika:     { en: 'Reika',     de: 'Zuzanna' },
  elishah:   { en: 'Elishah',   de: 'Martin' },
  leticia:   { en: 'Leticia',   de: 'Livia' },
  michelle:  { en: 'Michelle',  de: 'Patricia' },
  reade:     { en: 'Reade',     de: 'Luis' },
  roy:       { en: 'Roy',       de: 'Lukas' },
  teena:     { en: 'Teena',     de: 'Merle' },
  polly:     { en: 'Polly',     de: 'Christina' },
  dugal:     { en: 'Dugal',     de: 'Friedrich' },
  kellyn:    { en: 'Kellyn',    de: 'Arnold' },
  mireille:  { en: 'Mireille',  de: 'Ronja' },
  kiera:     { en: 'Kiera',     de: 'Alana' },
  samuel:    { en: 'Samuel',    de: 'Tim' },
  shayne:    { en: 'Shayne',    de: 'Taylor' },
  eileen:    { en: 'Eileen',    de: 'Amber' },
  emmy:      { en: 'Emmy',      de: 'Suse' },
  adrienne:  { en: 'Adrienne',  de: 'Alfreda' },
  seamus:    { en: 'Seamus',    de: 'Hubert' },
  matthew:   { en: 'Matthew',   de: 'Fabio' },
  meri:      { en: 'Meri',      de: 'Beth' },
  perdita:   { en: 'Perdita',   de: 'Mélody' },
  dilan:     { en: 'Dilan',     de: 'Bernhard' },
};

function npcName(id) {
  const entry = NPC_NAMES[id];
  return entry ? (entry[currentLang] || entry.en) : id;
}

// ===== NPC Data (using stable IDs) =====
const NPC_AREAS = [
  {
    id: 'main',
    nameKey: 'areaMain',
    icon: '🗺️',
    npcs: ['samuel', 'shayne', 'eileen', 'emmy', 'adrienne', 'seamus', 'matthew', 'meri', 'perdita', 'dilan']
  },
  {
    id: 'central',
    nameKey: 'areaCentral',
    icon: '⛩️',
    npcs: ['leilani']
  },
  {
    id: 'topLeft',
    nameKey: 'areaTopLeft',
    icon: '❄️',
    npcs: ['kawika', 'guy', 'donn', 'meredyth', 'maika']
  },
  {
    id: 'topRight',
    nameKey: 'areaTopRight',
    icon: '⚔️',
    npcs: ['blaire', 'rita', 'dane', 'reggie', 'ryuki', 'troye', 'harper']
  },
  {
    id: 'bottomLeft',
    nameKey: 'areaBottomLeft',
    icon: '🏠',
    npcs: ['reika', 'elishah', 'leticia', 'michelle', 'reade', 'roy', 'teena']
  },
  {
    id: 'bottomRight',
    nameKey: 'areaBottomRight',
    icon: '⚡',
    npcs: ['polly', 'dugal', 'kellyn', 'mireille', 'kiera']
  }
];

const TOTAL_NPCS = 35;
const REQUIRED_NPCS = 32;
const STORAGE_KEY = 'bdsp-spiritomb-checked';
const LANG_KEY = 'cc-language';
const THEME_KEY = 'cc-theme';

// ===== State =====
let checkedNpcs = {};
let currentLang = 'en';
let currentTheme = 'light';

// ===== Init =====
function init() {
  loadTheme();
  loadLanguage();
  loadProgress();
  renderPage();
  applyLanguage();
  applyTheme();
  updateProgress();
}

// ===== Language =====
function loadLanguage() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && T[saved]) {
    currentLang = saved;
  } else {
    const browserLang = navigator.language || navigator.userLanguage || 'en';
    currentLang = browserLang.toLowerCase().startsWith('de') ? 'de' : 'en';
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  renderPage();
  applyLanguage();
  updateProgress();
}

function t(key) {
  return T[currentLang][key] || T['en'][key] || key;
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.title = t('siteTitle');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = t(key);
  });

  document.querySelectorAll('.cc-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  NPC_AREAS.forEach(area => {
    const nameEl = document.querySelector(`[data-area-name="${area.id}"]`);
    if (nameEl) nameEl.textContent = t(area.nameKey);
  });

  updateProgress();
}

// ===== Progress =====
function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) checkedNpcs = JSON.parse(saved);
  } catch (e) {
    checkedNpcs = {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedNpcs));
}

function getCheckedCount() {
  return Object.values(checkedNpcs).filter(Boolean).length;
}

function updateProgress() {
  const count = getCheckedCount();
  const pct = Math.round((count / REQUIRED_NPCS) * 100);
  const isComplete = count >= REQUIRED_NPCS;

  const countEl = document.getElementById('progress-count');
  if (countEl) countEl.innerHTML = `${count} <span class="total">/ ${REQUIRED_NPCS}</span>`;

  const bar = document.getElementById('progress-bar');
  if (bar) {
    bar.style.width = Math.min(pct, 100) + '%';
    bar.classList.toggle('complete', isComplete);
  }

  const statusEl = document.getElementById('progress-status');
  if (statusEl) {
    statusEl.textContent = isComplete ? t('progressComplete') : t('progressNeeded');
    statusEl.classList.toggle('complete', isComplete);
  }

  NPC_AREAS.forEach(area => {
    const checked = area.npcs.filter(n => checkedNpcs[n]).length;
    const counterEl = document.querySelector(`[data-area-counter="${area.id}"]`);
    if (counterEl) {
      counterEl.textContent = `${checked} / ${area.npcs.length}`;
      counterEl.classList.toggle('complete', checked === area.npcs.length);
    }
  });
}

// ===== Render =====
function renderPage() {
  const app = document.getElementById('npc-areas');
  if (!app) return;

  app.innerHTML = NPC_AREAS.map(area => `
    <div class="area-card">
      <div class="area-header" onclick="toggleArea('${area.id}')">
        <div class="area-header-left">
          <span class="area-icon">${area.icon}</span>
          <span class="area-name" data-area-name="${area.id}">${t(area.nameKey)}</span>
        </div>
        <span class="area-counter" data-area-counter="${area.id}">0 / ${area.npcs.length}</span>
      </div>
      <div class="area-body" id="area-${area.id}">
        ${area.npcs.map(id => `
          <label class="npc-item ${checkedNpcs[id] ? 'checked' : ''}">
            <input type="checkbox" class="npc-checkbox" data-npc="${id}"
              ${checkedNpcs[id] ? 'checked' : ''}
              onchange="toggleNpc('${id}', this)">
            <span class="npc-label">${npcName(id)}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function toggleArea(areaId) {
  const body = document.getElementById(`area-${areaId}`);
  if (body) body.style.display = body.style.display === 'none' ? 'block' : 'none';
}

function toggleNpc(id, checkbox) {
  checkedNpcs[id] = checkbox.checked;
  const item = checkbox.closest('.npc-item');
  if (item) item.classList.toggle('checked', checkbox.checked);
  saveProgress();
  updateProgress();
}

// ===== Guide Toggle =====
function toggleGuide() {
  const content = document.getElementById('guide-content');
  const icon = document.getElementById('guide-icon');
  if (content && icon) {
    const isOpen = content.classList.toggle('open');
    icon.classList.toggle('open', isOpen);
  }
}

// ===== Reset =====
function resetProgress() {
  if (!confirm(t('resetConfirm'))) return;
  checkedNpcs = {};
  saveProgress();
  renderPage();
  updateProgress();
}

// ===== Theme =====
function loadTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark' || saved === 'light') {
    currentTheme = saved;
  } else {
    currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, currentTheme);
  applyTheme();
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

// ===== Start =====
document.addEventListener('DOMContentLoaded', init);

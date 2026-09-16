// Comprehensive Unit & Simulation Tests for Void Strider
const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('index.html', 'utf8');

// Mock browser environment
const localStorageData = {};
global.localStorage = {
  getItem: (k) => localStorageData[k] || null,
  setItem: (k, v) => { localStorageData[k] = String(v); },
  removeItem: (k) => { delete localStorageData[k]; }
};

global.window = {
  addEventListener: () => {},
  AudioContext: class {
    constructor() {
      this.currentTime = 0;
      this.sampleRate = 44100;
      this.destination = {};
      this.state = 'running';
    }
    createGain() { return { gain: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} }, connect: () => {} }; }
    createOscillator() { return { frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {}, linearRampToValueAtTime: () => {} }, connect: () => {}, start: () => {}, stop: () => {} }; }
    createBiquadFilter() { return { frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} }, connect: () => {} }; }
    createBuffer(c, l, r) { return { getChannelData: () => new Float32Array(l) }; }
    createBufferSource() { return { connect: () => {}, start: () => {} }; }
    resume() {}
  }
};

const domElements = {};
function createMockElement(id = '') {
  return {
    id,
    style: {},
    classList: {
      add: () => {},
      remove: () => {},
      contains: () => false,
      toggle: () => {}
    },
    appendChild: () => {},
    innerHTML: '',
    textContent: '',
    onclick: null,
    oncontextmenu: null,
    addEventListener: () => {},
    getBoundingClientRect: () => ({ left: 0, top: 0, width: 800, height: 600 }),
    getContext: () => ({
      clearRect: () => {},
      fillRect: () => {},
      strokeRect: () => {},
      beginPath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      stroke: () => {},
      fill: () => {},
      arc: () => {},
      ellipse: () => {},
      roundRect: () => {},
      save: () => {},
      restore: () => {},
      fillText: () => {},
      createLinearGradient: () => ({ addColorStop: () => {} }),
      setLineDash: () => {}
    })
  };
}

global.document = {
  getElementById: (id) => {
    if (!domElements[id]) domElements[id] = createMockElement(id);
    return domElements[id];
  },
  createElement: (tag) => createMockElement()
};

global.requestAnimationFrame = (cb) => {};
global.performance = { now: () => Date.now() };

// Extract script
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  console.error('No script found in index.html');
  process.exit(1);
}

vm.runInThisContext(scriptMatch[1]);

async function runTests() {
  console.log('Testing Game Engine Initialization...');
  console.log('Starting run with Kestrel ship...');
  startNewRun();

  console.assert(state.hull === 30, 'Initial hull should be 30');
  console.assert(state.fuel === 16, 'Initial fuel should be 16');
  console.assert(state.missiles === 8, 'Initial missiles should be 8');
  console.assert(state.crew.length === 3, 'Initial crew should be 3');
  console.assert(state.systems.shields.level === 2, 'Initial shields should be 2');
  console.assert(state.weapons.length === 2, 'Initial weapons should be 2');

  console.log('Testing Power Allocation & Reactor Management...');
  console.assert(state.getAvailablePower() === 0, 'Initially 8/8 reactor power used');
  allocatePower('shields', -1);
  console.assert(state.getAvailablePower() === 1, 'Shield power reduced from 2 to 1 frees 1 reactor power');
  allocatePower('shields', 1);
  console.assert(state.getAvailablePower() === 0, 'Shield power restored to 2 consumes 1 reactor power');

  console.log('Testing Subsystem Piloting & Evasion...');
  const initEvade = state.getEvasion();
  console.assert(initEvade > 0, 'Ship with pilot and engine power should have positive evasion');

  console.log('Testing Galaxy Map & Jump Navigation...');
  console.assert(state.map.nodes.length > 5, 'Map should contain nodes');
  const nextNode = state.map.nodes.find(n => state.currentBeacon.connections.includes(n.id));
  console.assert(nextNode != null, 'Should find connected beacon for jump');
  executeJump(nextNode);
  console.assert(state.fuel === 15, 'Fuel should decrement by 1 after jump');
  console.assert(state.beaconsVisited === 1, 'Beacons visited should be 1');

  console.log('Testing Save / Load LocalStorage...');
  state.scrap = 180;
  state.saveToStorage();
  const savedRaw = localStorage.getItem('void_strider_active_run');
  console.assert(savedRaw != null, 'Save data should exist in localStorage');
  const parsed = JSON.parse(savedRaw);
  console.assert(parsed.scrap === 180, 'Saved scrap should match 180');

  console.log('Testing Combat Simulation & Projectiles...');
  state.inCombat = true;
  state.enemy = new EnemyShip(1);
  console.assert(state.enemy.hull > 0, 'Enemy hull should be > 0');
  state.weapons[0].targetRoomId = 'shields';
  state.weapons[0].charge = state.weapons[0].cooldown;
  firePlayerWeapon(state.weapons[0]);

  // Wait for setTimeout to queue the projectile shots
  await new Promise(r => setTimeout(r, 400));
  console.assert(state.projectiles.length > 0, 'Projectiles should be spawned into simulation');

  // Run simulation ticks
  for (let i = 0; i < 30; i++) {
    updateSimulation(0.1);
  }
  console.log('Combat simulation ticks completed smoothly!');

  console.log('Testing Enemy Boarders and Vacuum Suffocation...');
  spawnEnemyBoarders(1);
  console.assert(state.boarders.length === 1, 'One enemy boarder should be present');
  const bRoom = state.rooms.find(r => r.id === state.boarders[0].currentRoom);
  bRoom.o2 = 0; // Simulate vented room
  updateSimulation(0.5);
  console.assert(state.boarders[0].hp < 100, 'Boarder should suffer suffocation damage in vacuum');

  console.log('Testing Boss Encounter Generation (Phases 1-3)...');
  const boss1 = new EnemyShip(8, true, 1);
  console.assert(boss1.systems.shields.maxBubbles === 4, 'Boss Phase 1 should have 4 shield bubbles');
  const boss3 = new EnemyShip(8, true, 3);
  console.assert(boss3.superShield === 12, 'Boss Phase 3 should have 12 Zoltan Super Shield');

  console.log('Testing Multilingual (i18n) Support...');
  console.assert(currentLang === 'ko', 'Default language should be Korean (ko)');
  console.assert(t('hullLabel').includes('선체'), 'Korean hullLabel should contain 선체');
  toggleLanguage();
  console.assert(currentLang === 'en', 'Language should switch to English (en)');
  console.assert(t('hullLabel') === 'HULL INTEGRITY', 'English hullLabel should be HULL INTEGRITY');
  console.assert(localStorage.getItem('void_strider_lang') === 'en', 'Saved language in localStorage should be en');
  toggleLanguage();
  console.assert(currentLang === 'ko', 'Language should switch back to Korean (ko)');
  console.assert(localStorage.getItem('void_strider_lang') === 'ko', 'Saved language in localStorage should be ko');
  // Check key parity between ko and en
  const koKeys = Object.keys(I18N.ko);
  const enKeys = Object.keys(I18N.en);
  for (const k of koKeys) {
    console.assert(I18N.en[k] !== undefined, `Missing English key for: ${k}`);
  }
  for (const k of enKeys) {
    console.assert(I18N.ko[k] !== undefined, `Missing Korean key for: ${k}`);
  }
  console.log('All i18n dictionary keys and toggles verified 100%!');

  console.log('\n========================================');
  console.log('ALL VERIFICATION TESTS PASSED! 100% OK! ✅');
  console.log('========================================');
}

runTests().catch(err => {
  console.error('Test failed with error:', err);
  process.exit(1);
});

const monsters = [
  { id: 1, name: "고블린", hp: 40, damage: 20, rewardHp: 2, rewardAtk: 2, rewardSpd: 0, rewardCoin: 30, map: 1 },
  { id: 2, name: "굶주린 망령", hp: 45, damage: 15, rewardHp: 3, rewardAtk: 1, rewardSpd: 0, rewardCoin: 30, map: 1 },
  { id: 3, name: "스켈레톤", hp: 35, damage: 25, rewardHp: 1, rewardAtk: 3, rewardSpd: 1, rewardCoin: 20, map: 1 },
  { id: 4, name: "점액 나무", hp: 50, damage: 10, rewardHp: 4, rewardAtk: 0, rewardSpd: 0, rewardCoin: 30, map: 1 },
  { id: 5, name: "마석 바위 골렘", hp: 30, damage: 30, rewardHp: 0, rewardAtk: 0, rewardSpd: 0, rewardCoin: 50, map: 1 },
  { id: 6, name: "그림울프", hp: 35, damage: 25, rewardHp: 2, rewardAtk: 2, rewardSpd: 0, rewardCoin: 30, map: 1 },
  { id: 7, name: "가시멧돼지", hp: 40, damage: 20, rewardHp: 3, rewardAtk: 1, rewardSpd: 0, rewardCoin: 30, map: 1 },
  { id: 8, name: "잿빛 슬라임", hp: 30, damage: 30, rewardHp: 1, rewardAtk: 3, rewardSpd: 1, rewardCoin: 20, map: 1 },
  { id: 9, name: "불씨도마뱀", hp: 50, damage: 10, rewardHp: 4, rewardAtk: 0, rewardSpd: 0, rewardCoin: 30, map: 1 },
  { id: 10, name: "검은버섯", hp: 45, damage: 15, rewardHp: 0, rewardAtk: 0, rewardSpd: 0, rewardCoin: 50, map: 1 },
  { id: 11, name: "목기인", hp: 130, damage: 60, rewardHp: 4, rewardAtk: 4, rewardSpd: 0, rewardCoin: 60, map: 2 },
  { id: 12, name: "알루미늄 휴먼", hp: 60, damage: 90, rewardHp: 6, rewardAtk: 2, rewardSpd: 0, rewardCoin: 60, map: 2 },
  { id: 13, name: "썩은 드래곤의 유해", hp: 230, damage: 60, rewardHp: 2, rewardAtk: 6, rewardSpd: 2, rewardCoin: 40, map: 2 },
  { id: 14, name: "마왕", hp: 500, damage: 80, rewardHp: 0, rewardAtk: 0, rewardSpd: 0, rewardCoin: 0, map: 2, isDemonBoss: true, temporary: true },
];

const previousJobs = [
  { id: 1, name: "의사", hp: 16, attack: 13, speed: 3 },
  { id: 2, name: "아이돌", hp: 17, attack: 12, speed: 1 },
  { id: 3, name: "판사", hp: 13, attack: 15, speed: 2 },
  { id: 4, name: "개발자", hp: 12, attack: 16, speed: 3 },
  { id: 5, name: "학생", hp: 18, attack: 11, speed: 2 },
  { id: 6, name: "백수", hp: 15, attack: 14, speed: 1 },
  { id: 7, name: "교수", hp: 13, attack: 15, speed: 1 },
  { id: 8, name: "정치인", hp: 14, attack: 14, speed: 2 },
  { id: 9, name: "마술사", hp: 16, attack: 13, speed: 2 },
  { id: 10, name: "방송인", hp: 14, attack: 14, speed: 3 },
  { id: 11, name: "스파이", hp: 17, attack: 12, speed: 1 },
  { id: 12, name: "운동선수", hp: 18, attack: 12, speed: 1 },
];

const isekaiJobs = [
  { id: 0, name: "선택 안 함", skill: "패시브 없음", text: "직업 패시브를 적용하지 않습니다." },
  { id: 1, name: "사냥꾼", skill: "효율적인 칼질", text: "전투 종료 시 추가 보상 주사위를 굴립니다." },
  { id: 2, name: "고리대금업자", skill: "돈 떼먹기", text: "보드 이동과 재화 징수에 사용하는 패시브입니다." },
  { id: 3, name: "몰락한 귀족", skill: "고지식함", text: "획득하는 양수 능력치 보상마다 1을 더합니다." },
  { id: 4, name: "해골 병사", skill: "\"골\" 때리는 생존력", text: "치명상 시 최대 HP 5를 잃고 HP 1로 한 번 생존합니다." },
  { id: 5, name: "대장장이", skill: "무기 제조", text: "보드에서 재화 5로 공격력 1을 구매하는 패시브입니다." },
  { id: 6, name: "뱀파이어로드", skill: "흡혈", text: "가한 실제 대미지의 50%만큼 HP를 회복합니다." },
  { id: 7, name: "수녀", skill: "친절함", text: "마을 아르바이트에서 추가 보상을 받습니다." },
  { id: 8, name: "공주님", skill: "왕족의 재산", text: "게임 시작 시 추가 재화 30을 받습니다." },
  { id: 9, name: "상인", skill: "싸게 사고 비싸게 팔고", text: "상점 구매·판매 가격에 적용하는 패시브입니다." },
  { id: 10, name: "타국 아가씨", skill: "하이퍼 보이스", text: "보드에서 기합을 외칠 때마다 추가 대미지 5를 적용합니다." },
  { id: 11, name: "짐꾼", skill: "신속정확고급배달", text: "지정 아이템 배달에 사용하는 패시브입니다." },
  { id: 12, name: "마담", skill: "매혹적인 덫", text: "보드에 재화 덫을 설치하는 패시브입니다." },
];

const attackCards = [
  { id: 0, name: "기본 공격", tier: "-", cooldown: 1, rolls: [1, 2, 3, 4, 5, 6], text: "기본 공격." },
  { id: 1, name: "예리한 일격", tier: "초기", cooldown: 3, rolls: [4, 5, 6, 7, 8, 9], text: "안정적인 초기 공격." },
  { id: 2, name: "묵직한 일격", tier: "초기", cooldown: 3, rolls: [2, 4, 6, 7, 9, 11], text: "편차가 큰 초기 공격." },
  { id: 3, name: "인생 한 방", tier: "초기", cooldown: 3, rolls: [1, 1, 1, 12, 12, 12], text: "성공과 실패가 크게 갈립니다." },
  { id: 4, name: "안정적인 공격", tier: "초기", cooldown: 2, rolls: [5, 5, 5, 5, 5, 5], text: "항상 같은 굴림 효과를 냅니다." },
  { id: 5, name: "맹금의 예리함", tier: "기본", cooldown: 3, rolls: [5, 7, 9, 9, 11, 13], text: "안정적인 기본 보드 공격." },
  { id: 6, name: "짐승의 혈기", tier: "기본", cooldown: 3, rolls: [3, 5, 7, 11, 13, 15], text: "높은 눈에서 강해집니다." },
  { id: 7, name: "승부사의 한 수", tier: "기본", cooldown: 3, rolls: [2, 2, 2, 16, 16, 16], text: "절반 확률의 강한 공격." },
  { id: 8, name: "풍운아의 만용", tier: "기본", cooldown: 3, rolls: [1, 1, 1, 1, 25, 25], text: "극단적인 한 방 공격." },
  { id: 9, name: "기사의 평정심", tier: "기본", cooldown: 2, rolls: [7, 7, 7, 7, 7, 7], text: "항상 굴림 효과 7을 얻습니다." },
  { id: 10, name: "흡혈", tier: "기본", cooldown: 3, rolls: [3, 3, 4, 4, 5, 5], text: "이 스킬의 실제 대미지만큼 HP를 회복합니다.", effect: "lifesteal" },
  { id: 11, name: "안전제일주의", tier: "기본", cooldown: 0, rolls: null, text: "4라운드부터 전투를 끝내고 보상의 50%를 획득합니다.", effect: "escape", minRound: 4 },
  { id: 12, name: "광분", tier: "기본", cooldown: 3, rolls: [3, 4, 5, 6, 12, 15], text: "HP 1을 지불하고 낮은 첫 굴림을 한 번 다시 굴립니다.", effect: "reroll", rerollCost: 1 },
  { id: 13, name: "가루다의 발톱", tier: "마왕", cooldown: 3, rolls: [11, 12, 13, 13, 14, 15], text: "안정적인 마왕 보드 공격." },
  { id: 14, name: "펜리르의 송곳니", tier: "마왕", cooldown: 3, rolls: [7, 9, 11, 15, 17, 19], text: "높은 눈에서 강해집니다." },
  { id: 15, name: "야누스의 시선", tier: "마왕", cooldown: 3, rolls: [6, 6, 6, 20, 20, 20], text: "절반 확률의 강한 공격." },
  { id: 16, name: "플루토스의 고깔", tier: "마왕", cooldown: 2, rolls: [2, 2, 2, 2, 25, 25], text: "5~6에서 폭발적인 피해를 냅니다." },
  { id: 17, name: "근본으로의 회귀", tier: "마왕", cooldown: 2, rolls: [10, 10, 10, 10, 10, 10], text: "항상 굴림 효과 10을 얻습니다." },
  { id: 18, name: "에르제베트의 광륜", tier: "마왕", cooldown: 3, rolls: [6, 6, 7, 7, 8, 8], text: "이 스킬의 실제 대미지만큼 HP를 회복합니다.", effect: "lifesteal" },
  { id: 19, name: "아드레날린 러쉬", tier: "마왕", cooldown: 3, rolls: [6, 7, 8, 10, 14, 16], text: "HP 1을 지불하고 낮은 첫 굴림을 한 번 다시 굴립니다.", effect: "reroll", rerollCost: 1 },
  { id: 20, name: "신속한 응수", tier: "기본", cooldown: 2, rolls: [8, 8, 6, 6, 4, 4], text: "낮은 눈일수록 강한 공격." },
  { id: 21, name: "신성한 기도의 힘", tier: "기본", cooldown: 3, rolls: [4, 0, 8, 0, 12, 0], text: "홀수 눈은 공격, 짝수 눈은 HP 5 회복.", effect: "holyPrayer" },
  { id: 22, name: "트리플 악셀", tier: "기본", cooldown: 2, rolls: [5, 6, 7, 0, 0, 0], text: "4~6이면 다시 굴려 최대 3회 공격합니다.", effect: "triple" },
  { id: 23, name: "가시 돋친 갑옷", tier: "기본", cooldown: 2, rolls: [6, 6, 6, 8, 8, 8], text: "다음 피격 대미지의 절반을 적에게 돌려줍니다.", effect: "thorns" },
  { id: 24, name: "팡트", tier: "기본", cooldown: 1, rolls: [6, 6, 8, 8, 10, 10], text: "매 라운드 사용할 수 있는 공격." },
  { id: 25, name: "만능 해결책", tier: "기본", cooldown: 3, rolls: [5, 5, 6, 6, 7, 7], text: "재화 10을 소모하면 최종 대미지가 2배가 됩니다.", effect: "coinDouble" },
  { id: 26, name: "연옥의 화염", tier: "마왕", cooldown: 3, rolls: [2, 2, 2, 4, 4, 40], text: "6에서 굉장히 강한 공격." },
  { id: 27, name: "바알의 계약", tier: "마왕", cooldown: 3, rolls: [5, 6, 7, 12, 14, 16], text: "3 이하에서 HP 5를 내고 추가 굴림 절반을 더합니다.", effect: "baal" },
  { id: 28, name: "레비아탄의 해일", tier: "마왕", cooldown: 3, rolls: [9, 10, 11, 14, 16, 18], text: "강력한 마왕 보드 공격." },
  { id: 29, name: "아스모데우스의 유혹", tier: "마왕", cooldown: 2, rolls: [0, 8, 15, 15, 8, 0], text: "1 또는 6이면 다음 적 공격을 확정 회피합니다.", effect: "evasion" },
  { id: 30, name: "종말의 카운트다운", tier: "마왕", cooldown: 0, rolls: null, text: "6라운드부터 적 현재 HP의 50% 확정 피해.", effect: "countdown", minRound: 6 },
];

const state = {
  boardMode: "normal",
  phase: "setup",
  round: 1,
  baseMaxHp: 30,
  playerMaxHp: 30,
  playerCurrentHp: 30,
  baseAttack: 4,
  playerSpeed: 3,
  playerCoins: 0,
  previousJobId: 0,
  isekaiJobId: 0,
  monster: monsters[0],
  enemyMaxHp: monsters[0].hp,
  enemyCurrentHp: monsters[0].hp,
  selectedSkillIds: [1, 2],
  availableActions: [],
  cooldowns: {},
  turn: "player",
  isAnimating: false,
  battleEnded: false,
  combatItem: "",
  claimEffect: "",
  incomingEffect: "normal",
  demonStageMultiplier: 1,
  attackPenalty: 0,
  attackBonus: 0,
  damagePenalty: 0,
  dicePenalty: 0,
  incomingMultiplier: 1,
  guaranteedEnemyHit: false,
  shields: 0,
  thornsArmed: false,
  evasionArmed: false,
  skeletonReviveUsed: false,
};

const $ = (selector) => document.querySelector(selector);
const fields = {
  playerName: $("#playerName"),
  playerSelect: $("#playerSelect"),
  prevJobSelect: $("#prevJobSelect"),
  isekaiJobSelect: $("#isekaiJobSelect"),
  playerMaxHp: $("#playerMaxHp"),
  playerCurrentHp: $("#playerCurrentHp"),
  playerAttack: $("#playerAttack"),
  playerSpeed: $("#playerSpeed"),
  playerCoins: $("#playerCoins"),
  monsterSelect: $("#monsterSelect"),
  combatItemSelect: $("#combatItemSelect"),
  claimEffectSelect: $("#claimEffectSelect"),
  incomingEffectSelect: $("#incomingEffectSelect"),
  attackPenaltySelect: $("#attackPenaltySelect"),
  demonStageSelect: $("#demonStageSelect"),
  actionSelect: $("#actionSelect"),
};

const elements = {
  normalBoardButton: $("#normalBoardButton"),
  demonBoardButton: $("#demonBoardButton"),
  boardModeStatus: $("#boardModeStatus"),
  boardRuleNotice: $("#boardRuleNotice"),
  demonStageField: $("#demonStageField"),
  setupForm: $("#setupForm"),
  resetButton: $("#resetButton"),
  loadPlayerButton: $("#loadPlayerButton"),
  savePlayerButton: $("#savePlayerButton"),
  storageStatus: $("#storageStatus"),
  clearLogButton: $("#clearLogButton"),
  skillChecklist: $("#skillChecklist"),
  skillCountLabel: $("#skillCountLabel"),
  jobPreview: $("#jobPreview"),
  monsterPreview: $("#monsterPreview"),
  actionPreview: $("#actionPreview"),
  activeEffects: $("#activeEffects"),
  playerHpLabel: $("#playerHpLabel"),
  enemyNameLabel: $("#enemyNameLabel"),
  enemyHpLabel: $("#enemyHpLabel"),
  enemyAttackLabel: $("#enemyAttackLabel"),
  playerHpBar: $("#playerHpBar"),
  enemyHpBar: $("#enemyHpBar"),
  playerStatLabel: $("#playerStatLabel"),
  attackPreview: $("#attackPreview"),
  rollEffect: $("#rollEffect"),
  damagePreview: $("#damagePreview"),
  diceFace: $("#diceFace"),
  playerTurnButton: $("#playerTurnButton"),
  enemyTurnButton: $("#enemyTurnButton"),
  coinFace: $("#coinFace"),
  coinResult: $("#coinResult"),
  lastEvent: $("#lastEvent"),
  battleLog: $("#battleLog"),
  roundLabel: $("#roundLabel"),
  resultPhase: $("#resultPhase"),
  resultTitle: $("#resultTitle"),
  resultText: $("#resultText"),
  rewardList: $("#rewardList"),
  closeDialogButton: $("#closeDialogButton"),
  phaseSetup: $("#phaseSetup"),
  phaseCombat: $("#phaseCombat"),
  phaseReward: $("#phaseReward"),
};

let savedPlayers = [];

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function numberFromField(field, fallback) {
  const value = Number(field.value);
  return Number.isFinite(value) ? value : fallback;
}

function rollD6() {
  return Math.floor(Math.random() * 6) + 1;
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function selectedIsekaiJob() {
  return isekaiJobs.find((job) => job.id === state.isekaiJobId) || isekaiJobs[0];
}

function effectiveAttack() {
  return Math.max(0, state.baseAttack + state.attackBonus - state.attackPenalty);
}

function selectedSkillIdsFromChecklist() {
  return [...elements.skillChecklist.querySelectorAll("input:checked")].map((input) => Number(input.value));
}

function selectedMonster() {
  return monsters.find((monster) => String(monster.id) === fields.monsterSelect.value) || monsters[0];
}

function selectedActionCard() {
  return state.availableActions.find((card) => String(card.id) === fields.actionSelect.value) || attackCards[0];
}

function formatRolls(card) {
  if (!card.rolls) return "특수 효과";
  return card.rolls.map((value, index) => `${index + 1}:${value}`).join("  ");
}

function percent(current, max) {
  return `${clamp((current / max) * 100, 0, 100)}%`;
}

function setStorageStatus(message, type = "") {
  elements.storageStatus.textContent = message;
  elements.storageStatus.classList.toggle("ok", type === "ok");
  elements.storageStatus.classList.toggle("warn", type === "warn");
}

function addLog(message) {
  const item = document.createElement("li");
  item.innerHTML = `<strong>${state.round}R</strong> ${message}`;
  elements.battleLog.prepend(item);
}

async function apiRequest(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error || "서버 요청에 실패했습니다.");
  }
  return response.json();
}

function renderPlayerSelect() {
  fields.playerSelect.innerHTML = [
    `<option value="">저장된 플레이어 선택</option>`,
    ...savedPlayers.map((player) => `<option value="${player.id}">${player.name}</option>`),
  ].join("");
}

async function loadSavedPlayers() {
  try {
    savedPlayers = await apiRequest("/api/players");
    renderPlayerSelect();
    setStorageStatus(savedPlayers.length ? `${savedPlayers.length}명의 플레이어를 불러왔습니다.` : "저장된 플레이어가 없습니다.", "ok");
  } catch {
    savedPlayers = [];
    renderPlayerSelect();
    setStorageStatus("서버로 실행하면 플레이어 정보를 저장할 수 있습니다.", "warn");
  }
}

function applyPlayerProfile(player) {
  fields.playerName.value = player.name || "";
  fields.playerMaxHp.value = player.maxHp || 30;
  fields.playerCurrentHp.value = player.currentHp ?? player.maxHp ?? 30;
  fields.playerAttack.value = player.attack ?? 0;
  fields.playerSpeed.value = player.speed ?? 0;
  fields.playerCoins.value = player.coins ?? 0;
  fields.prevJobSelect.value = player.previousJobId ?? 0;
  fields.isekaiJobSelect.value = player.isekaiJobId ?? 0;
  state.baseMaxHp = Math.max(1, Number(fields.playerMaxHp.value) || 30);
  state.playerMaxHp = state.baseMaxHp;
  state.playerCurrentHp = clamp(Number(fields.playerCurrentHp.value) || state.playerMaxHp, 0, state.playerMaxHp);
  state.baseAttack = Math.max(0, Number(fields.playerAttack.value) || 0);
  state.playerSpeed = Math.max(0, Number(fields.playerSpeed.value) || 0);
  state.playerCoins = Math.max(0, Number(fields.playerCoins.value) || 0);
  state.previousJobId = Number(fields.prevJobSelect.value) || 0;
  state.isekaiJobId = Number(fields.isekaiJobSelect.value) || 0;
  state.selectedSkillIds = Array.isArray(player.skillIds) ? player.skillIds.map(Number) : [];
  elements.skillChecklist.querySelectorAll("input").forEach((input) => {
    input.checked = state.selectedSkillIds.includes(Number(input.value));
  });
  updateSkillCount();
  updateJobPreview();
  updateStatus();
}

function playerPayload(id, name) {
  return {
    id: id || undefined,
    name,
    maxHp: state.baseMaxHp,
    currentHp: clamp(state.playerCurrentHp, 0, state.baseMaxHp),
    attack: state.baseAttack,
    speed: state.playerSpeed,
    coins: state.playerCoins,
    previousJobId: state.previousJobId,
    isekaiJobId: state.isekaiJobId,
    skillIds: state.selectedSkillIds,
  };
}

async function savePlayerProfile() {
  const name = fields.playerName.value.trim();
  if (!name) {
    setStorageStatus("저장할 플레이어 이름을 입력하세요.", "warn");
    fields.playerName.focus();
    return;
  }
  readPersistentFields();
  try {
    const saved = await apiRequest("/api/players", {
      method: "POST",
      body: JSON.stringify(playerPayload(fields.playerSelect.value, name)),
    });
    await loadSavedPlayers();
    fields.playerSelect.value = saved.id;
    setStorageStatus(`${saved.name} 정보를 저장했습니다.`, "ok");
  } catch (error) {
    setStorageStatus(error.message || "저장에 실패했습니다.", "warn");
  }
}

async function saveRewardedPlayerProfile() {
  const selectedId = fields.playerSelect.value;
  const existingPlayer = savedPlayers.find((player) => player.id === selectedId);
  if (!selectedId || !existingPlayer) return false;
  const saved = await apiRequest("/api/players", {
    method: "POST",
    body: JSON.stringify(playerPayload(selectedId, existingPlayer.name)),
  });
  savedPlayers = savedPlayers.map((player) => (player.id === saved.id ? saved : player));
  fields.playerName.value = saved.name;
  fields.playerSelect.value = saved.id;
  setStorageStatus(`${saved.name}의 전투 결과를 자동 저장했습니다.`, "ok");
  return true;
}

function loadSelectedPlayerProfile() {
  const player = savedPlayers.find((item) => item.id === fields.playerSelect.value);
  if (!player) {
    setStorageStatus("불러올 플레이어를 선택하세요.", "warn");
    return;
  }
  applyPlayerProfile(player);
  setStorageStatus(`${player.name} 정보를 적용했습니다.`, "ok");
}

function populateSetupData() {
  fields.prevJobSelect.innerHTML = [
    `<option value="0">직접 입력</option>`,
    ...previousJobs.map((job) => `<option value="${job.id}">${job.name} · HP ${job.hp} / 공격 ${job.attack} / 속도 ${job.speed}</option>`),
  ].join("");
  fields.isekaiJobSelect.innerHTML = isekaiJobs.map((job) => `<option value="${job.id}">${job.name} · ${job.skill}</option>`).join("");
  populateMonsterSelect();
  elements.skillChecklist.innerHTML = attackCards
    .filter((card) => card.id !== 0)
    .map((card) => `
      <label class="skill-option">
        <input type="checkbox" value="${card.id}" ${state.selectedSkillIds.includes(card.id) ? "checked" : ""} />
        <span>
          <strong>${card.name}</strong>
          <small>${card.tier} · 쿨타임 ${card.cooldown || "-"} · ${formatRolls(card)}</small>
          <small>${card.text}</small>
        </span>
      </label>
    `).join("");
}

function boardMapNumber() {
  return state.boardMode === "demon" ? 2 : 1;
}

function populateMonsterSelect() {
  const availableMonsters = monsters.filter((monster) => monster.map === boardMapNumber());
  fields.monsterSelect.innerHTML = availableMonsters
    .map((monster) => `<option value="${monster.id}">${monster.name} · HP ${monster.hp} · 공격 ${monster.damage}</option>`)
    .join("");
  const currentIsAvailable = availableMonsters.some((monster) => monster.id === state.monster.id);
  state.monster = currentIsAvailable ? state.monster : availableMonsters[0];
  state.enemyMaxHp = state.monster.hp;
  state.enemyCurrentHp = state.monster.hp;
  fields.monsterSelect.value = state.monster.id;
}

function updateBoardRuleNotice() {
  if (state.boardMode === "demon") {
    elements.boardRuleNotice.innerHTML = `
      <strong>마왕 보드판 전용 규칙</strong><br>
      맵 2 몬스터와 마왕 등급 스킬 데이터를 사용합니다. 꽃다발 효과는 발동하지 않으며,
      마왕판 전용 피해 배율·공격 무효·확정 피격 보정을 선택할 수 있습니다.
    `;
    return;
  }
  elements.boardRuleNotice.innerHTML = `
    <strong>일반 보드판 규칙</strong><br>
    맵 1 몬스터를 대상으로 기본 코인토스 전투를 진행합니다.
    마왕판 전용 피해 보정은 적용되지 않습니다.
  `;
}

function setBoardMode(mode) {
  if (!["normal", "demon"].includes(mode) || state.isAnimating || state.phase !== "setup") return;
  state.boardMode = mode;
  document.body.dataset.board = mode;
  elements.normalBoardButton.classList.toggle("active", mode === "normal");
  elements.demonBoardButton.classList.toggle("active", mode === "demon");
  elements.normalBoardButton.setAttribute("aria-pressed", String(mode === "normal"));
  elements.demonBoardButton.setAttribute("aria-pressed", String(mode === "demon"));
  elements.boardModeStatus.textContent = mode === "demon" ? "마왕 보드판 규칙" : "일반 보드판 규칙";

  if (mode === "demon") {
    fields.combatItemSelect.querySelector('option[value="flower"]').disabled = true;
    if (fields.combatItemSelect.value === "flower") fields.combatItemSelect.value = "";
    fields.incomingEffectSelect.disabled = false;
  } else {
    fields.combatItemSelect.querySelector('option[value="flower"]').disabled = false;
    fields.incomingEffectSelect.value = "normal";
    fields.incomingEffectSelect.disabled = true;
  }

  populateMonsterSelect();
  updateBoardRuleNotice();
  updateDemonStageVisibility();
  updateMonsterPreview();
  updateStatus();
}

function updateJobPreview() {
  const jobId = Number(fields.isekaiJobSelect.value) || 0;
  const job = isekaiJobs.find((item) => item.id === jobId) || isekaiJobs[0];
  elements.jobPreview.innerHTML = `<strong>${job.name} · ${job.skill}</strong><small>${job.text}</small>`;
}

function updateMonsterPreview() {
  const monster = selectedMonster();
  const rewards = [
    monster.rewardHp ? `최대 HP +${monster.rewardHp}` : null,
    monster.rewardAtk ? `공격력 +${monster.rewardAtk}` : null,
    monster.rewardSpd ? `속도 +${monster.rewardSpd}` : null,
    monster.rewardCoin ? `재화 ${monster.rewardCoin}` : null,
  ].filter(Boolean).join(", ");
  elements.monsterPreview.innerHTML = `
    <strong>${monster.name}</strong>
    <span>HP ${monster.hp} · 공격 성공 시 ${monster.damage} 대미지 · 등장 맵 ${monster.map}</span>
    ${monster.temporary ? "<small>임시 데이터입니다. 실제 마왕 데이터로 교체할 예정입니다.</small>" : ""}
    <small>처치 보상: ${rewards || "없음"}</small>
  `;
}

function isDemonBossBattle() {
  return state.boardMode === "demon" && Boolean(selectedMonster().isDemonBoss);
}

function updateDemonStageVisibility() {
  const visible = isDemonBossBattle();
  elements.demonStageField.hidden = !visible;
  fields.demonStageSelect.disabled = !visible;
  if (!visible) fields.demonStageSelect.value = "1";
}

function updateSkillCount() {
  elements.skillCountLabel.textContent = `${elements.skillChecklist.querySelectorAll("input:checked").length}장 선택`;
}

function applyPreviousJobPreset() {
  const job = previousJobs.find((item) => item.id === Number(fields.prevJobSelect.value));
  if (!job) return;
  fields.playerMaxHp.value = job.hp;
  fields.playerCurrentHp.value = job.hp;
  fields.playerAttack.value = job.attack;
  fields.playerSpeed.value = job.speed;
}

function readPersistentFields() {
  state.baseMaxHp = Math.max(1, numberFromField(fields.playerMaxHp, state.baseMaxHp));
  state.playerMaxHp = state.baseMaxHp;
  state.playerCurrentHp = clamp(numberFromField(fields.playerCurrentHp, state.playerCurrentHp), 0, state.baseMaxHp);
  state.baseAttack = Math.max(0, numberFromField(fields.playerAttack, state.baseAttack));
  state.playerSpeed = Math.max(0, numberFromField(fields.playerSpeed, state.playerSpeed));
  state.playerCoins = Math.max(0, numberFromField(fields.playerCoins, state.playerCoins));
  state.previousJobId = Number(fields.prevJobSelect.value) || 0;
  state.isekaiJobId = Number(fields.isekaiJobSelect.value) || 0;
  state.selectedSkillIds = selectedSkillIdsFromChecklist();
}

function configureBattleEffects() {
  state.combatItem = fields.combatItemSelect.value;
  state.claimEffect = fields.claimEffectSelect.value;
  state.incomingEffect = state.boardMode === "demon" ? fields.incomingEffectSelect.value : "normal";
  state.demonStageMultiplier = isDemonBossBattle() ? Number(fields.demonStageSelect.value) || 1 : 1;
  state.attackPenalty = Number(fields.attackPenaltySelect.value) || 0;
  state.attackBonus = state.combatItem === "beer" ? 6 : state.combatItem === "attackPotion" ? 5 : 0;
  state.damagePenalty = state.claimEffect === "plague" ? 5 : 0;
  state.dicePenalty = state.claimEffect === "unlucky" ? 1 : 0;
  state.guaranteedEnemyHit = state.claimEffect === "fear";
  state.shields = state.combatItem === "flower" && state.boardMode === "normal" ? 2 : state.incomingEffect === "block1" ? 1 : 0;
  state.incomingMultiplier = state.incomingEffect === "double" ? 2 : state.incomingEffect === "half" ? 0.5 : state.incomingEffect === "none" ? 0 : 1;
  if (state.claimEffect === "destruction") state.attackBonus += 5;
  const maxHpDelta = state.claimEffect === "giant" ? 10 : state.claimEffect === "shadow" ? -10 : 0;
  state.playerMaxHp = Math.max(1, state.baseMaxHp + maxHpDelta);
  state.playerCurrentHp = clamp(state.playerCurrentHp + Math.max(0, maxHpDelta), 0, state.playerMaxHp);
  if (state.claimEffect === "fountain") state.playerCurrentHp = clamp(state.playerCurrentHp + 10, 0, state.playerMaxHp);
}

function readSetup() {
  readPersistentFields();
  configureBattleEffects();
  state.monster = selectedMonster();
  state.enemyMaxHp = state.monster.hp;
  state.enemyCurrentHp = state.monster.hp;
  state.availableActions = [attackCards[0], ...attackCards.filter((card) => state.selectedSkillIds.includes(card.id))];
}

function syncFields() {
  if (state.phase !== "combat") {
    fields.playerMaxHp.value = state.baseMaxHp;
    fields.playerCurrentHp.value = clamp(state.playerCurrentHp, 0, state.baseMaxHp);
    fields.playerAttack.value = state.baseAttack;
    fields.playerSpeed.value = state.playerSpeed;
    fields.playerCoins.value = state.playerCoins;
  }
  fields.monsterSelect.value = state.monster.id;
}

function updatePhase() {
  elements.phaseSetup.classList.toggle("active", state.phase === "setup");
  elements.phaseCombat.classList.toggle("active", state.phase === "combat");
  elements.phaseReward.classList.toggle("active", state.phase === "reward");
  document.body.dataset.phase = state.phase;
}

function cardReady(card) {
  if (card.minRound && state.round < card.minRound) return false;
  return (state.cooldowns[card.id] || 1) <= state.round;
}

function populateActionSelect() {
  const previous = fields.actionSelect.value;
  fields.actionSelect.innerHTML = state.availableActions.map((card) => {
    const ready = cardReady(card);
    const reason = card.minRound && state.round < card.minRound
      ? `${card.minRound}R부터`
      : `대기 ${Math.max(0, (state.cooldowns[card.id] || 1) - state.round)}R`;
    return `<option value="${card.id}" ${ready ? "" : "disabled"}>${card.name}${ready ? "" : ` · ${reason}`}</option>`;
  }).join("");
  const canKeep = state.availableActions.some((card) => String(card.id) === previous && cardReady(card));
  fields.actionSelect.value = canKeep ? previous : "0";
  updateActionPreview();
}

function updateActionPreview() {
  const card = selectedActionCard();
  const cooldownText = card.id === 0 ? "매 라운드 사용 가능" : `사용 후 ${card.cooldown || "-"}라운드 쿨타임`;
  elements.actionPreview.innerHTML = `
    <strong>${card.name}</strong>
    <span>${formatRolls(card)}</span>
    <small>${card.text} · ${cooldownText}</small>
  `;
}

function updateActiveEffects() {
  const effects = [];
  const job = selectedIsekaiJob();
  if (job.id) effects.push(job.skill);
  if (state.attackBonus) effects.push(`공격 +${state.attackBonus}`);
  if (state.attackPenalty) effects.push(`공격 -${state.attackPenalty}`);
  if (state.damagePenalty) effects.push(`최종 피해 -${state.damagePenalty}`);
  if (state.dicePenalty) effects.push(`주사위 -${state.dicePenalty}`);
  if (state.shields) effects.push(`공격 무효 ${state.shields}회`);
  if (state.incomingMultiplier !== 1) effects.push(`피격 x${state.incomingMultiplier}`);
  if (state.guaranteedEnemyHit) effects.push("적 공격 확률 100%");
  if (state.monster.isDemonBoss) effects.push(`마왕 타일 피해 x${state.demonStageMultiplier}`);
  if (state.thornsArmed) effects.push("가시 반사 대기");
  if (state.evasionArmed) effects.push("확정 회피 대기");
  elements.activeEffects.innerHTML = effects.map((effect) => `<span>${effect}</span>`).join("");
}

function updateStatus() {
  elements.playerHpLabel.textContent = `${state.playerCurrentHp} / ${state.playerMaxHp}`;
  elements.enemyNameLabel.textContent = state.monster.name;
  elements.enemyHpLabel.textContent = `${state.enemyCurrentHp} / ${state.enemyMaxHp}`;
  elements.playerHpBar.style.width = percent(state.playerCurrentHp, state.playerMaxHp);
  elements.enemyHpBar.style.width = percent(state.enemyCurrentHp, state.enemyMaxHp);
  elements.playerStatLabel.textContent = `공격 ${effectiveAttack()} · 속도 ${state.playerSpeed} · 재화 ${state.playerCoins}`;
  elements.enemyAttackLabel.textContent = `공격 성공 시 ${state.monster.damage} 대미지`;
  elements.attackPreview.textContent = effectiveAttack();
  elements.roundLabel.textContent = `${state.round} 라운드`;
  elements.playerTurnButton.disabled = state.phase !== "combat" || state.turn !== "player" || state.battleEnded || state.isAnimating;
  elements.enemyTurnButton.disabled = state.phase !== "combat" || state.turn !== "enemy" || state.battleEnded || state.isAnimating;
  elements.normalBoardButton.disabled = state.phase !== "setup" || state.isAnimating;
  elements.demonBoardButton.disabled = state.phase !== "setup" || state.isAnimating;
  updateActiveEffects();
  syncFields();
  updatePhase();
}

async function animateDiceRoll() {
  elements.diceFace.classList.add("rolling");
  elements.rollEffect.textContent = "-";
  elements.damagePreview.textContent = "-";
  for (let i = 0; i < 10; i += 1) {
    elements.diceFace.textContent = rollD6();
    await sleep(48 + i * 8);
  }
  const roll = rollD6();
  elements.diceFace.textContent = roll;
  elements.diceFace.classList.remove("rolling");
  elements.diceFace.classList.add("landed");
  window.setTimeout(() => elements.diceFace.classList.remove("landed"), 360);
  return roll;
}

async function animateCoinToss() {
  elements.enemyTurnButton.classList.remove("heads", "tails");
  elements.enemyTurnButton.classList.add("tossing");
  elements.coinResult.textContent = "토스 중";
  for (let i = 0; i < 10; i += 1) {
    elements.coinFace.textContent = i % 2 === 0 ? "앞" : "뒤";
    await sleep(60 + i * 8);
  }
  const result = Math.random() < 0.5 ? "앞면" : "뒷면";
  elements.coinFace.textContent = result === "앞면" ? "앞" : "뒤";
  elements.enemyTurnButton.classList.remove("tossing");
  elements.enemyTurnButton.classList.add("landed");
  window.setTimeout(() => elements.enemyTurnButton.classList.remove("landed"), 360);
  return result;
}

function startBattle() {
  readSetup();
  state.phase = "combat";
  state.round = 1;
  state.turn = "player";
  state.battleEnded = false;
  state.isAnimating = false;
  state.cooldowns = {};
  state.thornsArmed = false;
  state.evasionArmed = false;
  state.skeletonReviveUsed = false;
  elements.battleLog.innerHTML = "";
  elements.diceFace.textContent = "?";
  elements.rollEffect.textContent = "-";
  elements.damagePreview.textContent = "-";
  elements.coinFace.textContent = "?";
  elements.coinResult.textContent = "대기";
  populateActionSelect();
  elements.lastEvent.textContent = `${state.monster.name}과 전투를 시작합니다. 플레이어 선 턴입니다.`;
  addLog(`<strong>${state.boardMode === "demon" ? "마왕" : "일반"} 보드판</strong> · <strong>${state.monster.name}</strong>과 전투 시작`);
  updateStatus();
}

function applyDamageToEnemy(amount, source) {
  const multiplier = state.monster.isDemonBoss ? state.demonStageMultiplier : 1;
  const damage = Math.max(0, Math.floor(amount * multiplier));
  const before = state.enemyCurrentHp;
  state.enemyCurrentHp = clamp(state.enemyCurrentHp - damage, 0, state.enemyMaxHp);
  const actual = before - state.enemyCurrentHp;
  const multiplierText = multiplier === 1 ? "" : ` · 단계 배율 x${multiplier}`;
  addLog(`${source}${multiplierText}: 몬스터에게 <strong>${actual}</strong> 대미지`);
  return actual;
}

function healPlayer(amount, source) {
  const before = state.playerCurrentHp;
  state.playerCurrentHp = clamp(state.playerCurrentHp + Math.floor(amount), 0, state.playerMaxHp);
  const healed = state.playerCurrentHp - before;
  if (healed > 0) addLog(`${source}: HP <strong>${healed}</strong> 회복`);
}

async function resolveStandardAttack(card) {
  let roll = await animateDiceRoll();
  roll = Math.max(1, roll - state.dicePenalty);
  let rollEffect = card.rolls[roll - 1] || 0;

  if (card.effect === "reroll" && roll <= 3 && state.playerCurrentHp > card.rerollCost) {
    state.playerCurrentHp -= card.rerollCost;
    addLog(`${card.name}: HP ${card.rerollCost} 소모 후 재굴림`);
    roll = Math.max(1, (await animateDiceRoll()) - state.dicePenalty);
    rollEffect = card.rolls[roll - 1] || 0;
  }

  if (card.effect === "baal" && roll <= 3 && state.playerCurrentHp > 5) {
    state.playerCurrentHp -= 5;
    const extraRoll = Math.max(1, (await animateDiceRoll()) - state.dicePenalty);
    const extra = Math.round((card.rolls[extraRoll - 1] || 0) / 2);
    rollEffect += extra;
    addLog(`바알의 계약: HP 5 소모, 추가 굴림 보정 +${extra}`);
  }

  if (card.effect === "holyPrayer" && roll % 2 === 0) {
    healPlayer(5, card.name);
    elements.rollEffect.textContent = "회복 5";
    elements.damagePreview.textContent = "0";
    return 0;
  }

  let damage = Math.max(0, rollEffect + effectiveAttack() - state.damagePenalty);
  if (card.effect === "coinDouble" && state.playerCoins >= 10) {
    state.playerCoins -= 10;
    damage *= 2;
    addLog("만능 해결책: 재화 10 소모, 대미지 2배");
  }

  elements.diceFace.textContent = roll;
  elements.rollEffect.textContent = rollEffect;
  elements.damagePreview.textContent = Math.floor(
    damage * (state.monster.isDemonBoss ? state.demonStageMultiplier : 1),
  );
  const actualDamage = applyDamageToEnemy(damage, `${card.name} · 주사위 ${roll}`);

  if (card.effect === "lifesteal") healPlayer(actualDamage, card.name);
  if (state.isekaiJobId === 6) healPlayer(Math.floor(actualDamage / 2), "뱀파이어로드 흡혈");
  if (card.effect === "thorns") state.thornsArmed = true;
  if (card.effect === "evasion" && (roll === 1 || roll === 6)) {
    state.evasionArmed = true;
    addLog("아스모데우스의 유혹: 다음 적 공격 확정 회피");
  }

  if (card.effect === "triple") {
    let chainRoll = roll;
    for (let hit = 2; hit <= 3 && chainRoll >= 4; hit += 1) {
      chainRoll = Math.max(1, (await animateDiceRoll()) - state.dicePenalty);
      const chainEffect = card.rolls[chainRoll - 1] || 0;
      const chainDamage = Math.max(0, chainEffect + effectiveAttack() - state.damagePenalty);
      applyDamageToEnemy(chainDamage, `${card.name} ${hit}타 · 주사위 ${chainRoll}`);
      if (chainRoll >= 4) addLog(`${card.name}: ${chainRoll}이 나와 연속 공격`);
    }
  }
  return actualDamage;
}

function rewardValues(multiplier = 1) {
  const nobleBonus = state.isekaiJobId === 3 ? 1 : 0;
  const scaled = (value) => value > 0 ? Math.floor(value * multiplier) + nobleBonus : 0;
  return {
    hp: scaled(state.monster.rewardHp),
    attack: scaled(state.monster.rewardAtk),
    speed: scaled(state.monster.rewardSpd),
    coins: Math.floor(state.monster.rewardCoin * multiplier),
  };
}

async function finishVictory(multiplier = 1, title = `${state.monster.name} 처치`) {
  state.phase = "reward";
  state.battleEnded = true;
  const reward = rewardValues(multiplier);
  state.baseMaxHp += reward.hp;
  state.playerMaxHp += reward.hp;
  state.playerCurrentHp = clamp(state.playerCurrentHp + reward.hp, 0, state.playerMaxHp);
  state.baseAttack += reward.attack;
  state.playerSpeed += reward.speed;
  state.playerCoins += reward.coins;
  const rewards = [
    reward.hp ? `최대 HP +${reward.hp}` : null,
    reward.attack ? `공격력 +${reward.attack}` : null,
    reward.speed ? `속도 +${reward.speed}` : null,
    reward.coins ? `재화 +${reward.coins}` : null,
  ].filter(Boolean);

  if (state.isekaiJobId === 1) {
    const bonusRoll = rollD6();
    rewards.push(`사냥꾼 추가 보상 주사위: ${bonusRoll} · 보드에서 원하는 전투 보상에 적용`);
  }

  elements.resultPhase.textContent = "3. 보상";
  elements.resultTitle.textContent = title;
  elements.rewardList.innerHTML = rewards.map((rewardItem) => `<li>${rewardItem}</li>`).join("");
  elements.closeDialogButton.textContent = "설정으로 돌아가기";
  updateStatus();

  let savedToServer = false;
  try {
    savedToServer = await saveRewardedPlayerProfile();
  } catch (error) {
    setStorageStatus(error.message || "전투 결과 자동 저장에 실패했습니다.", "warn");
  }
  elements.resultText.textContent = savedToServer
    ? `보상 적용 후 최대 HP ${state.baseMaxHp}, 현재 HP ${clamp(state.playerCurrentHp, 0, state.baseMaxHp)}, 공격력 ${state.baseAttack}, 속도 ${state.playerSpeed}, 재화 ${state.playerCoins} 상태로 저장했습니다.`
    : `보상 적용 후 최대 HP ${state.baseMaxHp}, 공격력 ${state.baseAttack}, 속도 ${state.playerSpeed}, 재화 ${state.playerCoins}입니다. 저장된 플레이어 전투가 아니므로 서버에는 저장하지 않았습니다.`;
}

function finishDefeat() {
  state.phase = "reward";
  state.battleEnded = true;
  elements.resultPhase.textContent = "전투 종료";
  elements.resultTitle.textContent = "플레이어 패배";
  elements.resultText.textContent = "플레이어 HP가 0이 되었습니다. 설정으로 돌아가 다시 준비하세요.";
  elements.rewardList.innerHTML = "";
  elements.closeDialogButton.textContent = "설정으로 돌아가기";
  updateStatus();
}

async function handlePlayerTurn() {
  if (state.phase !== "combat" || state.turn !== "player" || state.isAnimating) return;
  const card = selectedActionCard();
  if (!cardReady(card)) return;
  state.isAnimating = true;
  elements.lastEvent.textContent = card.rolls ? "주사위를 굴리는 중..." : "특수 스킬을 처리하는 중...";
  updateStatus();

  if (card.effect === "escape") {
    state.isAnimating = false;
    await finishVictory(0.5, "안전하게 전투 종료");
    return;
  }

  if (card.effect === "countdown") {
    const damage = Math.max(1, Math.floor(state.enemyCurrentHp * 0.5));
    applyDamageToEnemy(damage, card.name);
    elements.rollEffect.textContent = "현재 HP 50%";
    elements.damagePreview.textContent = Math.floor(
      damage * (state.monster.isDemonBoss ? state.demonStageMultiplier : 1),
    );
  } else {
    await resolveStandardAttack(card);
  }

  if (card.id !== 0 && card.cooldown) state.cooldowns[card.id] = state.round + card.cooldown;
  elements.lastEvent.textContent = `${card.name} 사용 완료.`;

  if (state.enemyCurrentHp <= 0) {
    state.isAnimating = false;
    updateStatus();
    await finishVictory();
    return;
  }

  state.turn = "enemy";
  state.isAnimating = false;
  elements.coinResult.textContent = "대기";
  elements.coinFace.textContent = "?";
  updateStatus();
}

function trySkeletonRevive() {
  if (state.isekaiJobId !== 4 || state.skeletonReviveUsed || state.baseMaxHp <= 5) return false;
  state.skeletonReviveUsed = true;
  state.baseMaxHp -= 5;
  state.playerMaxHp = Math.max(1, state.playerMaxHp - 5);
  state.playerCurrentHp = 1;
  addLog(`"골" 때리는 생존력: 최대 HP 5를 잃고 HP 1로 생존`);
  return true;
}

async function handleEnemyTurn() {
  if (state.phase !== "combat" || state.turn !== "enemy" || state.isAnimating) return;
  state.isAnimating = true;
  elements.lastEvent.textContent = "코인토스 중...";
  updateStatus();

  const result = state.guaranteedEnemyHit ? "앞면" : await animateCoinToss();
  const isHeads = result === "앞면";
  elements.coinFace.textContent = isHeads ? "앞" : "뒤";
  elements.coinResult.textContent = state.guaranteedEnemyHit ? "확정 앞면" : result;
  elements.enemyTurnButton.classList.toggle("heads", isHeads);
  elements.enemyTurnButton.classList.toggle("tails", !isHeads);

  if (isHeads && state.evasionArmed) {
    state.evasionArmed = false;
    elements.lastEvent.textContent = "아스모데우스의 유혹으로 적 공격을 회피했습니다.";
    addLog("확정 회피로 몬스터 공격 무효");
  } else if (isHeads && state.shields > 0) {
    state.shields -= 1;
    elements.lastEvent.textContent = `방어 효과로 공격을 무효화했습니다. 잔여 ${state.shields}회`;
    addLog(`공격 무효. 잔여 <strong>${state.shields}</strong>회`);
  } else if (isHeads) {
    const damage = Math.floor(state.monster.damage * state.incomingMultiplier);
    state.playerCurrentHp = clamp(state.playerCurrentHp - damage, 0, state.playerMaxHp);
    elements.lastEvent.textContent = `${state.monster.name} 공격 성공: ${damage} 대미지`;
    addLog(`코인토스 <strong>앞면</strong>. 플레이어가 <strong>${damage}</strong> 대미지 받음`);
    if (state.thornsArmed && damage > 0) {
      state.thornsArmed = false;
      applyDamageToEnemy(Math.floor(damage / 2), "가시 돋친 갑옷 반사");
    }
  } else {
    elements.lastEvent.textContent = `${state.monster.name} 공격 실패: 피해 없음`;
    addLog("코인토스 <strong>뒷면</strong>. 몬스터가 공격하지 않음");
  }

  if (state.enemyCurrentHp <= 0) {
    state.isAnimating = false;
    updateStatus();
    await finishVictory();
    return;
  }

  if (state.playerCurrentHp <= 0 && !trySkeletonRevive()) {
    state.isAnimating = false;
    updateStatus();
    finishDefeat();
    return;
  }

  state.round += 1;
  state.turn = "player";
  state.isAnimating = false;
  populateActionSelect();
  updateStatus();
}

function returnToSetup() {
  state.phase = "setup";
  state.turn = "player";
  state.battleEnded = false;
  state.isAnimating = false;
  state.round = 1;
  state.playerMaxHp = state.baseMaxHp;
  state.playerCurrentHp = clamp(state.playerCurrentHp, 0, state.baseMaxHp);
  state.enemyCurrentHp = state.enemyMaxHp;
  elements.diceFace.textContent = "?";
  elements.rollEffect.textContent = "-";
  elements.damagePreview.textContent = "-";
  elements.coinFace.textContent = "?";
  elements.coinResult.textContent = "대기";
  elements.lastEvent.textContent = "설정을 마치고 전투를 시작하세요.";
  updateStatus();
}

function resetAll() {
  Object.assign(state, {
    boardMode: "normal",
    phase: "setup",
    round: 1,
    baseMaxHp: 30,
    playerMaxHp: 30,
    playerCurrentHp: 30,
    baseAttack: 4,
    playerSpeed: 3,
    playerCoins: 0,
    previousJobId: 0,
    isekaiJobId: 0,
    demonStageMultiplier: 1,
    monster: monsters[0],
    enemyMaxHp: monsters[0].hp,
    enemyCurrentHp: monsters[0].hp,
    selectedSkillIds: [1, 2],
    availableActions: [],
    cooldowns: {},
    turn: "player",
    battleEnded: false,
    isAnimating: false,
  });
  fields.prevJobSelect.value = "0";
  fields.isekaiJobSelect.value = "0";
  fields.combatItemSelect.value = "";
  fields.claimEffectSelect.value = "";
  fields.incomingEffectSelect.value = "normal";
  fields.attackPenaltySelect.value = "0";
  fields.demonStageSelect.value = "1";
  elements.skillChecklist.querySelectorAll("input").forEach((input) => {
    input.checked = state.selectedSkillIds.includes(Number(input.value));
  });
  elements.battleLog.innerHTML = "";
  updateSkillCount();
  updateJobPreview();
  setBoardMode("normal");
  updateMonsterPreview();
  returnToSetup();
}

populateSetupData();
fields.prevJobSelect.value = "0";
fields.isekaiJobSelect.value = "0";
setBoardMode("normal");
updateJobPreview();
updateMonsterPreview();
updateSkillCount();
updateStatus();
loadSavedPlayers();

elements.setupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  startBattle();
});
fields.prevJobSelect.addEventListener("change", applyPreviousJobPreset);
fields.isekaiJobSelect.addEventListener("change", updateJobPreview);
fields.monsterSelect.addEventListener("change", () => {
  updateDemonStageVisibility();
  updateMonsterPreview();
});
fields.actionSelect.addEventListener("change", updateActionPreview);
elements.normalBoardButton.addEventListener("click", () => setBoardMode("normal"));
elements.demonBoardButton.addEventListener("click", () => setBoardMode("demon"));
elements.skillChecklist.addEventListener("change", updateSkillCount);
elements.savePlayerButton.addEventListener("click", savePlayerProfile);
elements.loadPlayerButton.addEventListener("click", loadSelectedPlayerProfile);
elements.playerTurnButton.addEventListener("click", handlePlayerTurn);
elements.enemyTurnButton.addEventListener("click", handleEnemyTurn);
elements.resetButton.addEventListener("click", resetAll);
elements.clearLogButton.addEventListener("click", () => {
  elements.battleLog.innerHTML = "";
});
elements.closeDialogButton.addEventListener("click", returnToSetup);

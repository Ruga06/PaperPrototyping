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
];

const attackCards = [
  {
    id: "basic",
    name: "기본 공격",
    tier: "-",
    rolls: [1, 2, 3, 4, 5, 6],
    text: "기본 공격.",
    concept: "주사위 값 그대로 피해를 더합니다.",
  },
  {
    id: 1,
    name: "예리한 일격",
    tier: "초기",
    cooldown: 3,
    rolls: [4, 5, 6, 7, 8, 9],
    text: "안정적인 대미지 딜링.",
  },
  {
    id: 2,
    name: "묵직한 일격",
    tier: "초기",
    cooldown: 3,
    rolls: [2, 4, 6, 7, 9, 11],
    text: "하이 리스크 하이 리턴 공격.",
  },
  {
    id: 3,
    name: "인생 한 방",
    tier: "초기",
    cooldown: 3,
    rolls: [1, 1, 1, 12, 12, 12],
    text: "모 아니면 도.",
  },
  {
    id: 4,
    name: "안정적인 공격",
    tier: "초기",
    cooldown: 2,
    rolls: [5, 5, 5, 5, 5, 5],
    text: "굴림 차이가 없는 안정형 공격.",
  },
  {
    id: 5,
    name: "맹금의 예리함",
    tier: "기본",
    cooldown: 3,
    rolls: [5, 7, 9, 9, 11, 13],
    text: "기본 보드 등장 스킬.",
  },
  {
    id: 6,
    name: "짐승의 혈기",
    tier: "기본",
    cooldown: 3,
    rolls: [3, 5, 7, 11, 13, 15],
    text: "후반 굴림이 강한 공격.",
  },
  {
    id: 7,
    name: "승부사의 한 수",
    tier: "기본",
    cooldown: 3,
    rolls: [2, 2, 2, 16, 16, 16],
    text: "성공과 실패가 크게 갈리는 공격.",
  },
  {
    id: 8,
    name: "풍운아의 만용",
    tier: "기본",
    cooldown: 3,
    rolls: [1, 1, 1, 1, 25, 25],
    text: "극단적인 한 방 공격.",
  },
  {
    id: 9,
    name: "균형 잡힌 공격",
    tier: "기본",
    cooldown: 2,
    rolls: [7, 7, 7, 7, 7, 7],
    text: "항상 같은 피해를 주는 공격.",
  },
  {
    id: 10,
    name: "흡혈",
    tier: "기본",
    cooldown: 3,
    rolls: [3, 3, 4, 4, 5, 5],
    text: "이 스킬로 입힌 대미지만큼 체력을 회복합니다.",
    lifesteal: true,
  },
];

const state = {
  phase: "setup",
  round: 1,
  playerMaxHp: 30,
  playerCurrentHp: 30,
  playerAttack: 4,
  monster: monsters[0],
  enemyMaxHp: monsters[0].hp,
  enemyCurrentHp: monsters[0].hp,
  selectedSkillIds: [1, 2],
  availableActions: [],
  turn: "player",
  lastRoll: null,
  isAnimating: false,
  battleEnded: false,
};

const $ = (selector) => document.querySelector(selector);

const fields = {
  playerName: $("#playerName"),
  playerSelect: $("#playerSelect"),
  playerMaxHp: $("#playerMaxHp"),
  playerCurrentHp: $("#playerCurrentHp"),
  playerAttack: $("#playerAttack"),
  monsterSelect: $("#monsterSelect"),
  actionSelect: $("#actionSelect"),
};

const elements = {
  setupForm: $("#setupForm"),
  resetButton: $("#resetButton"),
  loadPlayerButton: $("#loadPlayerButton"),
  savePlayerButton: $("#savePlayerButton"),
  storageStatus: $("#storageStatus"),
  clearLogButton: $("#clearLogButton"),
  skillChecklist: $("#skillChecklist"),
  skillCountLabel: $("#skillCountLabel"),
  monsterPreview: $("#monsterPreview"),
  actionPreview: $("#actionPreview"),
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

function setStorageStatus(message, type = "") {
  elements.storageStatus.textContent = message;
  elements.storageStatus.classList.toggle("ok", type === "ok");
  elements.storageStatus.classList.toggle("warn", type === "warn");
}

function selectedSkillIdsFromChecklist() {
  return [...elements.skillChecklist.querySelectorAll("input:checked")].map((input) => Number(input.value));
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
  fields.playerAttack.value = player.attack || 0;
  state.playerMaxHp = Math.max(1, Number(fields.playerMaxHp.value) || 30);
  state.playerCurrentHp = clamp(Number(fields.playerCurrentHp.value) || state.playerMaxHp, 0, state.playerMaxHp);
  state.playerAttack = Math.max(0, Number(fields.playerAttack.value) || 0);
  state.selectedSkillIds = Array.isArray(player.skillIds) ? player.skillIds.map(Number) : [];

  elements.skillChecklist.querySelectorAll("input").forEach((input) => {
    input.checked = state.selectedSkillIds.includes(Number(input.value));
  });

  updateSkillCount();
  updateStatus();
}

async function savePlayerProfile() {
  const name = fields.playerName.value.trim();
  if (!name) {
    setStorageStatus("저장할 플레이어 이름을 입력하세요.", "warn");
    fields.playerName.focus();
    return;
  }

  const selectedId = fields.playerSelect.value;
  const payload = {
    id: selectedId || undefined,
    name,
    maxHp: Math.max(1, numberFromField(fields.playerMaxHp, state.playerMaxHp)),
    currentHp: Math.max(0, numberFromField(fields.playerCurrentHp, state.playerCurrentHp)),
    attack: Math.max(0, numberFromField(fields.playerAttack, state.playerAttack)),
    skillIds: selectedSkillIdsFromChecklist(),
  };

  try {
    const saved = await apiRequest("/api/players", {
      method: "POST",
      body: JSON.stringify(payload),
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
  if (!selectedId || !existingPlayer) {
    return false;
  }

  const saved = await apiRequest("/api/players", {
    method: "POST",
    body: JSON.stringify({
      id: selectedId,
      name: existingPlayer.name,
      maxHp: state.playerMaxHp,
      currentHp: state.playerCurrentHp,
      attack: state.playerAttack,
      skillIds: state.selectedSkillIds,
    }),
  });

  savedPlayers = savedPlayers.map((player) => (player.id === saved.id ? saved : player));
  fields.playerName.value = saved.name;
  fields.playerSelect.value = saved.id;
  setStorageStatus(`${saved.name}의 전투 보상과 능력치를 자동 저장했습니다.`, "ok");
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

function rollD6() {
  return Math.floor(Math.random() * 6) + 1;
}

function tossCoin() {
  return Math.random() < 0.5 ? "앞면" : "뒷면";
}

function sleep(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function animateDiceRoll() {
  elements.diceFace.classList.add("rolling");
  elements.rollEffect.textContent = "-";
  elements.damagePreview.textContent = "-";

  for (let i = 0; i < 12; i += 1) {
    elements.diceFace.textContent = rollD6();
    await sleep(55 + i * 8);
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
    await sleep(65 + i * 10);
  }

  const result = tossCoin();
  elements.coinFace.textContent = result === "앞면" ? "앞" : "뒤";
  elements.enemyTurnButton.classList.remove("tossing");
  elements.enemyTurnButton.classList.add("landed");
  window.setTimeout(() => elements.enemyTurnButton.classList.remove("landed"), 360);
  return result;
}

function percent(current, max) {
  return `${clamp((current / max) * 100, 0, 100)}%`;
}

function selectedMonster() {
  return monsters.find((monster) => String(monster.id) === fields.monsterSelect.value) || monsters[0];
}

function selectedActionCard() {
  return state.availableActions.find((card) => String(card.id) === fields.actionSelect.value) || attackCards[0];
}

function formatRolls(card) {
  return card.rolls.map((value, index) => `${index + 1}:${value}`).join("  ");
}

function rewardItems(monster) {
  return [
    monster.rewardHp > 0 ? `체력 능력치 +${monster.rewardHp}` : null,
    monster.rewardAtk > 0 ? `공격력 능력치 +${monster.rewardAtk}` : null,
    monster.rewardSpd > 0 ? `속도 능력치 +${monster.rewardSpd}` : null,
    monster.rewardCoin > 0 ? `재화 ${monster.rewardCoin}` : null,
  ].filter(Boolean);
}

function addLog(message) {
  const item = document.createElement("li");
  item.innerHTML = `<strong>${state.round}R</strong> ${message}`;
  elements.battleLog.prepend(item);
}

function populateMonsterSelect() {
  fields.monsterSelect.innerHTML = monsters
    .map((monster) => `<option value="${monster.id}">${monster.name} · HP ${monster.hp} · 공격 ${monster.damage}</option>`)
    .join("");
}

function populateSkillChecklist() {
  const skills = attackCards.filter((card) => card.id !== "basic");
  elements.skillChecklist.innerHTML = skills
    .map(
      (card) => `
        <label class="skill-option">
          <input type="checkbox" value="${card.id}" ${state.selectedSkillIds.includes(card.id) ? "checked" : ""} />
          <span>
            <strong>${card.name}</strong>
            <small>${card.tier} · ${formatRolls(card)}</small>
          </span>
        </label>
      `,
    )
    .join("");
}

function readSetup() {
  state.playerMaxHp = Math.max(1, numberFromField(fields.playerMaxHp, state.playerMaxHp));
  state.playerCurrentHp = clamp(numberFromField(fields.playerCurrentHp, state.playerCurrentHp), 0, state.playerMaxHp);
  state.playerAttack = Math.max(0, numberFromField(fields.playerAttack, state.playerAttack));
  state.monster = selectedMonster();
  state.enemyMaxHp = state.monster.hp;
  state.enemyCurrentHp = state.monster.hp;
  state.selectedSkillIds = selectedSkillIdsFromChecklist();
  state.availableActions = [
    attackCards[0],
    ...attackCards.filter((card) => state.selectedSkillIds.includes(card.id)),
  ];
}

function syncFields() {
  fields.playerMaxHp.value = state.playerMaxHp;
  fields.playerCurrentHp.value = state.playerCurrentHp;
  fields.playerAttack.value = state.playerAttack;
  fields.monsterSelect.value = state.monster.id;
}

function updatePhase() {
  elements.phaseSetup.classList.toggle("active", state.phase === "setup");
  elements.phaseCombat.classList.toggle("active", state.phase === "combat");
  elements.phaseReward.classList.toggle("active", state.phase === "reward");
  document.body.dataset.phase = state.phase;
}

function updateMonsterPreview() {
  const monster = selectedMonster();
  const rewards = rewardItems(monster).join(", ") || "보상 없음";
  elements.monsterPreview.innerHTML = `
    <strong>${monster.name}</strong>
    <span>HP ${monster.hp} · 공격 성공 시 ${monster.damage} 대미지 · 등장 맵 ${monster.map}</span>
    <small>처치 보상: ${rewards}</small>
  `;
}

function updateSkillCount() {
  const count = elements.skillChecklist.querySelectorAll("input:checked").length;
  elements.skillCountLabel.textContent = `${count}장 선택`;
}

function populateActionSelect() {
  fields.actionSelect.innerHTML = state.availableActions
    .map((card) => `<option value="${card.id}">${card.name}</option>`)
    .join("");
  updateActionPreview();
}

function updateActionPreview() {
  const card = selectedActionCard();
  elements.actionPreview.innerHTML = `
    <strong>${card.name}</strong>
    <span>${formatRolls(card)}</span>
    <small>${card.text || "효과 없음"}</small>
  `;
}

function updateStatus() {
  elements.playerHpLabel.textContent = `${state.playerCurrentHp} / ${state.playerMaxHp}`;
  elements.enemyNameLabel.textContent = state.monster.name;
  elements.enemyHpLabel.textContent = `${state.enemyCurrentHp} / ${state.enemyMaxHp}`;
  elements.playerHpBar.style.width = percent(state.playerCurrentHp, state.playerMaxHp);
  elements.enemyHpBar.style.width = percent(state.enemyCurrentHp, state.enemyMaxHp);
  elements.playerStatLabel.textContent = `공격력 ${state.playerAttack}`;
  elements.enemyAttackLabel.textContent = `공격 성공 시 ${state.monster.damage} 대미지`;
  elements.attackPreview.textContent = state.playerAttack;
  elements.roundLabel.textContent = `${state.round} 라운드`;
  elements.playerTurnButton.disabled = state.phase !== "combat" || state.turn !== "player" || state.battleEnded || state.isAnimating;
  elements.enemyTurnButton.disabled = state.phase !== "combat" || state.turn !== "enemy" || state.battleEnded || state.isAnimating;
  syncFields();
  updatePhase();
}

function startBattle() {
  readSetup();
  state.phase = "combat";
  state.round = 1;
  state.turn = "player";
  state.battleEnded = false;
  state.isAnimating = false;
  state.lastRoll = null;
  state.enemyCurrentHp = state.enemyMaxHp;
  elements.battleLog.innerHTML = "";
  elements.diceFace.textContent = "?";
  elements.rollEffect.textContent = "-";
  elements.damagePreview.textContent = "-";
  elements.coinFace.textContent = "?";
  elements.coinResult.textContent = "대기";
  elements.enemyTurnButton.classList.remove("heads", "tails");
  elements.diceFace.classList.remove("rolling", "landed");
  elements.enemyTurnButton.classList.remove("tossing", "landed");
  populateActionSelect();
  elements.lastEvent.textContent = `${state.monster.name}과 전투를 시작합니다. 플레이어 선 턴입니다.`;
  addLog(`<strong>${state.monster.name}</strong>과 전투 시작`);
  updateStatus();
}

async function endBattleWithReward() {
  state.phase = "reward";
  state.battleEnded = true;
  state.playerMaxHp += state.monster.rewardHp;
  state.playerCurrentHp = clamp(
    state.playerCurrentHp + state.monster.rewardHp,
    0,
    state.playerMaxHp,
  );
  state.playerAttack += state.monster.rewardAtk;
  const rewards = rewardItems(state.monster);
  let savedToServer = false;

  elements.resultPhase.textContent = "3. 보상";
  elements.resultTitle.textContent = `${state.monster.name} 처치`;
  elements.rewardList.innerHTML = rewards.map((reward) => `<li>${reward}</li>`).join("");
  elements.closeDialogButton.textContent = "설정으로 돌아가기";
  updateStatus();

  try {
    savedToServer = await saveRewardedPlayerProfile();
  } catch (error) {
    setStorageStatus(error.message || "전투 결과 자동 저장에 실패했습니다.", "warn");
  }

  elements.resultText.textContent = savedToServer
    ? `보상을 적용했습니다. 최대 HP ${state.playerMaxHp}, 현재 HP ${state.playerCurrentHp}, 공격력 ${state.playerAttack} 상태로 자동 저장했습니다.`
    : `보상을 적용했습니다. 현재 능력치는 최대 HP ${state.playerMaxHp}, 현재 HP ${state.playerCurrentHp}, 공격력 ${state.playerAttack}입니다. 저장된 플레이어를 불러온 전투가 아니므로 서버에는 저장하지 않았습니다.`;
}

function endBattleWithDefeat() {
  state.phase = "reward";
  state.battleEnded = true;
  elements.resultPhase.textContent = "전투 종료";
  elements.resultTitle.textContent = "플레이어 패배";
  elements.resultText.textContent = "플레이어 HP가 0이 되었습니다. 설정으로 돌아가 다시 전투를 준비하세요.";
  elements.rewardList.innerHTML = "";
  elements.closeDialogButton.textContent = "설정으로 돌아가기";
  updateStatus();
}

function returnToSetup() {
  state.phase = "setup";
  state.turn = "player";
  state.battleEnded = false;
  state.isAnimating = false;
  state.round = 1;
  state.enemyCurrentHp = state.enemyMaxHp;
  elements.diceFace.textContent = "?";
  elements.rollEffect.textContent = "-";
  elements.damagePreview.textContent = "-";
  elements.coinFace.textContent = "?";
  elements.coinResult.textContent = "대기";
  elements.enemyTurnButton.classList.remove("heads", "tails");
  elements.diceFace.classList.remove("rolling", "landed");
  elements.enemyTurnButton.classList.remove("tossing", "landed");
  elements.lastEvent.textContent = "설정을 마치고 전투를 시작하세요.";
  updateStatus();
}

function resetAll() {
  state.phase = "setup";
  state.round = 1;
  state.playerMaxHp = 30;
  state.playerCurrentHp = 30;
  state.playerAttack = 4;
  state.monster = monsters[0];
  state.enemyMaxHp = monsters[0].hp;
  state.enemyCurrentHp = monsters[0].hp;
  state.selectedSkillIds = [1, 2];
  state.availableActions = [];
  state.turn = "player";
  state.battleEnded = false;
  state.isAnimating = false;
  populateSkillChecklist();
  fields.monsterSelect.value = state.monster.id;
  elements.battleLog.innerHTML = "";
  updateSkillCount();
  updateMonsterPreview();
  returnToSetup();
}

async function handlePlayerTurn() {
  if (state.phase !== "combat" || state.turn !== "player" || state.isAnimating) return;

  const card = selectedActionCard();
  state.isAnimating = true;
  elements.lastEvent.textContent = "주사위를 굴리는 중...";
  updateStatus();

  const roll = await animateDiceRoll();
  const rollEffect = card.rolls[roll - 1];
  const damage = rollEffect + state.playerAttack;
  const beforeHp = state.enemyCurrentHp;
  state.enemyCurrentHp = clamp(state.enemyCurrentHp - damage, 0, state.enemyMaxHp);
  const actualDamage = beforeHp - state.enemyCurrentHp;

  state.lastRoll = roll;
  elements.diceFace.textContent = roll;
  elements.rollEffect.textContent = rollEffect;
  elements.damagePreview.textContent = damage;
  elements.lastEvent.textContent = `${card.name}: ${rollEffect} + 공격력 ${state.playerAttack} = ${damage} 대미지`;
  addLog(`${card.name} 사용. 주사위 <strong>${roll}</strong>, 몬스터에게 <strong>${damage}</strong> 대미지`);

  if (card.lifesteal && actualDamage > 0) {
    state.playerCurrentHp = clamp(state.playerCurrentHp + actualDamage, 0, state.playerMaxHp);
    addLog(`흡혈 효과로 HP <strong>${actualDamage}</strong> 회복`);
  }

  if (state.enemyCurrentHp <= 0) {
    state.isAnimating = false;
    updateStatus();
    await endBattleWithReward();
    return;
  }

  state.turn = "enemy";
  state.isAnimating = false;
  elements.coinResult.textContent = "대기";
  elements.coinFace.textContent = "?";
  elements.enemyTurnButton.classList.remove("heads", "tails");
  updateStatus();
}

async function handleEnemyTurn() {
  if (state.phase !== "combat" || state.turn !== "enemy" || state.isAnimating) return;

  state.isAnimating = true;
  elements.lastEvent.textContent = "코인토스 중...";
  updateStatus();

  const result = await animateCoinToss();
  const isHeads = result === "앞면";

  elements.coinFace.textContent = isHeads ? "앞" : "뒤";
  elements.coinResult.textContent = result;
  elements.enemyTurnButton.classList.toggle("heads", isHeads);
  elements.enemyTurnButton.classList.toggle("tails", !isHeads);

  if (isHeads) {
    state.playerCurrentHp = clamp(state.playerCurrentHp - state.monster.damage, 0, state.playerMaxHp);
    elements.lastEvent.textContent = `${state.monster.name} 공격 성공: 플레이어에게 ${state.monster.damage} 대미지`;
    addLog(`코인토스 <strong>앞면</strong>. 플레이어가 <strong>${state.monster.damage}</strong> 대미지 받음`);
  } else {
    elements.lastEvent.textContent = `${state.monster.name} 공격 실패: 피해 없음`;
    addLog("코인토스 <strong>뒷면</strong>. 몬스터가 공격하지 않음");
  }

  if (state.playerCurrentHp <= 0) {
    state.isAnimating = false;
    updateStatus();
    endBattleWithDefeat();
    return;
  }

  state.round += 1;
  state.turn = "player";
  state.isAnimating = false;
  updateStatus();
}

populateMonsterSelect();
populateSkillChecklist();
fields.monsterSelect.value = state.monster.id;
updateMonsterPreview();
updateSkillCount();
updateStatus();
loadSavedPlayers();

elements.setupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  startBattle();
});

fields.monsterSelect.addEventListener("change", updateMonsterPreview);
fields.actionSelect.addEventListener("change", updateActionPreview);

elements.skillChecklist.addEventListener("change", updateSkillCount);
elements.savePlayerButton.addEventListener("click", savePlayerProfile);
elements.loadPlayerButton.addEventListener("click", loadSelectedPlayerProfile);
elements.playerTurnButton.addEventListener("click", handlePlayerTurn);
elements.enemyTurnButton.addEventListener("click", handleEnemyTurn);

elements.resetButton.addEventListener("click", resetAll);
elements.clearLogButton.addEventListener("click", () => {
  elements.battleLog.innerHTML = "";
});

elements.closeDialogButton.addEventListener("click", () => {
  returnToSetup();
});

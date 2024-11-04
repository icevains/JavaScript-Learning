'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores; //记录两个玩家分数的初始数组
let currentScore; //记录当前分数
let activePlayer; //追踪标识当前是哪个玩家
let playing; //标识游戏状态

//初始化
const init = function () {
  scores = [0, 0]; //记录两个玩家分数的初始数组
  currentScore = 0; //记录当前分数
  activePlayer = 0; //追踪标识当前是哪个玩家
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

// switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.生成一个随机的Dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.展示Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.判断是否为1
    if (dice === 1) {
      //是就Switch player,背景，分数
      switchPlayer();
    } else {
      //4.将Dice的分数添加到Current Score中
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1.添加Current Score到(Scores数组)
    scores[activePlayer] += currentScore;

    //展示TotalScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2.Score >= 50，User Win！
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');

      //添加winner样式，移除player--active样式
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3.Switch player
      switchPlayer();
    }
  }
});

//重置，调用初始化init()
btnNew.addEventListener('click', init);

'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenModal.forEach((element) => {
  element.addEventListener('click', openModal);
});

// 将closeModal作为回调函数
//点击按钮取消Modal
btnCloseModal.addEventListener('click', closeModal);

//点击外围覆盖区取消Modal
overlay.addEventListener('click', closeModal);

// 按下ESC键取消Modal
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

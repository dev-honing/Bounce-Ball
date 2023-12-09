// DOM 제어를 위한 변수 선언
var root = document.getElementById('root');
var ball = document.querySelector('.ball');

window.addEventListener('keydown', (event) => {
  if (event.code === 'AltLeft'){
    jumpBall();
  }
})
function jumpBall() {
  console.log('테스트');
}
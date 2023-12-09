// DOM 제어를 위한 변수 선언
var root = document.getElementById('root');
var ball = document.querySelector('.ball');
var ballHeight = ball.offsetHeight;

window.addEventListener('keydown', (event) => {
  if (event.code === 'AltLeft'){
    event.preventDefault(); // 이벤트의 기본 동작을 취소 -> 포커스 이동 방지
    jumpBall();
  }
})
function jumpBall() {
  ball.style.height = ball.offsetHeight + 1 + 'px';
}
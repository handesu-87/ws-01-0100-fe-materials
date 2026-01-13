//********************************
// タイピングアニメーションのコード
//********************************

const typingText = document.querySelector(".hero__title");
const text = typingText.textContent;
let index = 1;

setTimeout(typeText, 200);

// 一文字ずつ表示する関数
function typeText() {
  typingText.textContent = text.slice(0, index);
  if (index < text.length) {
    index++;
    const randomInterval = Math.floor(Math.random() * 100) + 50;
    setTimeout(typeText, randomInterval);
  } else {
    return;
  }
}
console.log(text);

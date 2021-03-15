const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
const answer = [
	'スーパーファミコン',
	'プレイステーション2',
	'ニンテンドースイッチ',
	'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  while(buttonIndex < $button.length){
	$button[buttonIndex].textContent = answer[buttonIndex];
	buttonIndex++;
  }
}
setupQuiz();


const clickHandler = (e) => {
	if(correct === e.target.textContent){
		window.alert('正解！')
	   }else{
	　　window.alert('残念！')
	   }
};


//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
	$button[handlerIndex].addEventListener('click',(e) => {
		clickHandler(e);
	});
	handlerIndex++;
}



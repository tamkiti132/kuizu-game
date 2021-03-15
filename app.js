const quiz = [
	{
		question:'ゲーム史上、最も売れたゲーム機は次のうちどれ？',
		answer:['スーパーファミコン','プレイステーション2','ニンテンドースイッチ','ニンテンドーDS'],
		correct:'ニンテンドーDS'
	},{
		question:'今日の運勢',
		answer:['1','2','3','4'],
		correct:'4'
	},{
		question:'このゲームの開発者が好きな食べ物は？',
		answer:['肉','野菜','魚','乳製品'],
		correct:'肉'
	},{
		question:'あいうえお・かきくけこ・さしすせ〇',
		answer:['ひ','げ','そ','り'],
		correct:'そ'
	},{
		question:'おつかれさまでした！',
		answer:['おつかれ！','はい、次この資料。','まだ仕事終わってないよ？','おつカレー！',],
		correct:'おつかれ！'
	}
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent =quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < $button.length){
	$button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
	buttonIndex++;
  }
}
setupQuiz();


const clickHandler = (e) => {
	if(quiz[quizIndex].correct === e.target.textContent){
		window.alert('正解！')
		score++;
	   }else{
	　　window.alert('不正解！！！！！！')
	   }
	   quizIndex++;

	   if(quizIndex < quizLength){
		setupQuiz();
	   }else{
	    window.alert('終了！！あなたの正解数は' + score + '/' + quizLength + 'です！')
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



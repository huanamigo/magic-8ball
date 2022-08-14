const ball = document.querySelector('img');
const input = document.querySelector('input');
const answerP = document.querySelector('.answer');
const errorP = document.querySelector('.error');

const answersArr = [
  'Yes!',
  'Definitely yes!',
  'Not',
  'Definitely not!',
  'Hard to say..',
  "You're kidding?",
  "You don't want to know the answer ...",
  'Forget!',
  'Almost certainly yes',
  'You should know it yourself!',
  'Everything says so do the other way around!',
];

const shakeBall = () => {
  ball.classList.add('shake-animaton');
  setTimeout(checkInput, 1000);
};

ball.addEventListener('click', () => {
  if (input.value == '') {
    errorP.innerText = 'You have to ask a question!';
    answerP.innerText = '';
  } else {
    if (input.value.charAt(input.value.length - 1) == '?') {
      let number = Math.floor(Math.random() * answersArr.length);
      errorP.innerText = '';
      answerP.innerText = answersArr[number];
      shakeBall();
    } else {
      errorP.innerText = 'The question must end with a question mark!';
      answerP.innerText = '';
    }
  }
});

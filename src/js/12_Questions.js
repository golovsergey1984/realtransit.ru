/* let questionsUserName = document.querySelector('.questions-input-name');
const questionsNameLine = document.querySelector('.questions-name-line');

let questionsUserMail = document.querySelector('.questions-input-mail');
const questionsMailLine = document.querySelector('.questions-mail-line');

let questionsUserPhone = document.querySelector('.questions-input-phone');
const questionsPhoneLine = document.querySelector('.questions-phone-line');

let questionsUserTxt = document.querySelector('.questions-input-question');
const questionsTxtLine = document.querySelector('.questions-question-line'); */

const nodeQuestionsUserName = document.querySelectorAll(
  '.questions-input-name',
);
const questionsUserName = Array.from(nodeQuestionsUserName);
const questionsNameLine = document.querySelector('.questions-name-line');

const nodeQuestionsUserMail = document.querySelectorAll(
  '.questions-input-mail',
);
const questionsUserMail = Array.from(nodeQuestionsUserMail);
const questionsMailLine = document.querySelector('.questions-mail-line');

const nodeQuestionsUserPhone = document.querySelectorAll(
  '.questions-input-phone',
);
const questionsUserPhone = Array.from(nodeQuestionsUserPhone);
const questionsPhoneLine = document.querySelector('.questions-phone-line');

const nodeQuestionsUserTxt = document.querySelectorAll(
  '.questions-input-question',
);
const questionsUserTxt = Array.from(nodeQuestionsUserTxt);
const questionsTxtLine = document.querySelector('.questions-question-line');

const reQuestionsPhone = /^[+\d\(\)\s\/\\-]{4,40}\d$/;
const reQuestionsName = /^[a-zа-яё\s]+$/i;
const reQuestionsMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
let questionsCount = 0;
function questionsSendForm(event) {
  const questionsCurrentLang = event.children[0].children[0].children[0];
  if (questionsCurrentLang.classList.contains('hide')) {
    questionsCount = 1;
  } else {
    questionsCount = 0;
  }

  const validQuestionsName = reQuestionsName.test(
    questionsUserName[questionsCount].value,
  );
  if (validQuestionsName) {
    console.log(questionsUserName[questionsCount].value),
      (questionsNameLine.style = 'background-color: white');
  } else {
    questionsNameLine.style = 'background-color: red';
  }

  const validQuestionsMail = reQuestionsMail.test(
    questionsUserMail[questionsCount].value,
  );
  if (validQuestionsMail) {
    console.log(questionsUserMail[questionsCount].value),
      (questionsMailLine.style = 'background-color: white');
  } else {
    questionsMailLine.style = 'background-color: red';
  }

  const validQuestionsPhone = reQuestionsPhone.test(
    questionsUserPhone[questionsCount].value,
  );
  if (validQuestionsPhone) {
    console.log(questionsUserPhone[questionsCount].value),
      (questionsPhoneLine.style = 'background-color: white');
  } else {
    questionsPhoneLine.style = 'background-color: red';
  }

  if (questionsUserTxt[questionsCount].value != '') {
    console.log(questionsUserTxt[questionsCount].value),
      (questionsTxtLine.style = 'background-color: white');
  } else {
    questionsTxtLine.style = 'background-color: red';
  }
  console.log(validQuestionsName);
  console.log(validQuestionsMail);
  console.log(validQuestionsPhone);
  console.log(questionsUserTxt[questionsCount].value);
  if (
    validQuestionsName == true &&
    validQuestionsMail == true &&
    validQuestionsPhone == true &&
    questionsUserTxt[questionsCount].value != ''
  ) {
    alert(
      '1. Здравствуйте' +
        questionsUserName[questionsCount].value +
        '\n\r' +
        '2. Ваш mail: ' +
        questionsUserMail[questionsCount].value +
        '\n\r' +
        '3. Ваш номер телефона: ' +
        questionsUserPhone[questionsCount].value +
        '\n\r' +
        '4. Ваш вопрос: ' +
        questionsUserTxt[questionsCount].value,
    );
    questionsUserName[questionsCount].value = '';
    questionsUserMail[questionsCount].value = '';
    questionsUserPhone[questionsCount].value = '';
    questionsUserTxt[questionsCount].value = '';

    console.log('Всё ок');
  }
}

/*   console.log(questionsUserName.value);
  console.log(questionsUserMail.value);
  console.log(questionsUserPhone.value);
  console.log(questionsUserTxt.value); */

/* alert('Форма отправлена'); */

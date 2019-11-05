import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({ breaks: true });

export default class Trivia {
  constructor(config) {
    if (!config.el) {
      throw new Error('An element must be set. Use a css selector or an HTML element that already exist on the DOM.');
    }
    if (typeof config.el === 'string') {
      this.el = document.querySelector(config.el);
    }
    if (config.el instanceof Element) {
      this.el = config.el;
    }
    if (typeof config.questions === 'string') {
      this.questions = JSON.parse(config.questions);
    } else {
      this.questions = config.questions;
    }
    this.mode = config.mode;
    this.score = 0;
    this.step = 0;
    this.slots = {};
    this.answer = [];
    this.selected = null;
    this.showFeedback = false;
    this.isCorrectAnswer = null;
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
  }

  init() {
    this.createSlots();
    this.play();
  }

  createSlots() {
    this.slots.progress = document.createElement('div');
    this.slots.questions = document.createElement('div');
    this.slots.score = document.createElement('div');
    this.slots.button = document.createElement('button');

    this.slots.progress.classList.add('trivia-progress');
    this.slots.questions.classList.add('trivia-questions');
    this.slots.score.classList.add('trivia-score');
    this.slots.button.classList.add('trivia-next');

    this.el.appendChild(this.slots.progress);
    this.el.appendChild(this.slots.questions);
    this.el.appendChild(this.slots.button);
    this.registerNextButton();
  }

  registerNextButton() {
    this.slots.button.textContent = 'Continuar';
    this.slots.button.addEventListener('click', this.handleNextButton);
  }

  updateProgress() {
    // this.slots.button.textContent = (this.step + 1) === this.questions.length
    //   ? 'Finalizar'
    //   : 'Continuar';
    this.slots.progress.textContent = `${this.step + 1} de ${this.questions.length}`;
  }

  isOver() {
    return this.step === this.questions.length;
  }

  play() {
    const content = !this.showFeedback ? this.renderQuestion() : this.renderFeedback();
    if (this.slots.questions.hasChildNodes()) {
      this.slots.questions.replaceChild(content, this.slots.questions.childNodes[0]);
    } else {
      this.slots.questions.appendChild(content);
    }
    if (!this.showFeedback) {
      this.slots.button.setAttribute('disabled', '');
      this.updateProgress();
      this.enableGame();
    }
  }

  enableGame() {
    const answers = this.el.querySelector('.trivia-answers');
    answers.addEventListener('change', this.handleAnswerChange);
  }

  handleAnswerChange(event) {
    const answer = parseInt(event.target.value, 10);
    if (this.selected) {
      this.selected.classList.remove('is-selected');
    }
    this.selected = event.target.parentNode;
    this.selected.classList.add('is-selected');
    if (this.answer.includes(answer)) {
      this.answer.splice(this.answer.indexOf(answer), 1);
    } else {
      this.answer.push(answer);
    }
    this.slots.button.removeAttribute('disabled');
  }

  handleNextButton() {
    if (!this.showFeedback) {
      const question = this.questions[this.step];
      const guessed = this.answer.filter((answer) => question.answer.includes(answer));
      const score = guessed.length / question.answer.length;
      this.isCorrectAnswer = score > 0;
      this.step = this.step + 1;
      this.score += score;
      this.el.querySelector('.trivia-answers').removeEventListener('change', this.handleAnswerChange);
      this.answer = [];
    }
    this.showFeedback = !this.showFeedback;
    if (!this.showFeedback && this.isOver()) {
      this.endGame();
      return;
    }
    this.play();
  }

  endGame() {
    const TriviaEvent = new CustomEvent('ended');
    this.el.dispatchEvent(TriviaEvent);
  }

  renderQuestion() {
    const question = this.questions[this.step];

    const triviaQuestion = document.createElement('div');
    const triviaQuestionText = document.createElement('p');
    const triviaAnswers = document.createElement('div');

    triviaQuestion.classList.add('trivia-question');
    triviaQuestionText.classList.add('trivia-question-text');
    triviaAnswers.classList.add('trivia-answers');
    triviaQuestionText.textContent = question.text;

    question.choices.forEach((choice, index) => {
      const triviaAnswer = document.createElement('label');
      const triviaAnswerInput = document.createElement('input');
      const triviaAnswerSpan = document.createElement('span');
      triviaAnswer.classList.add('trivia-answer');
      triviaAnswerSpan.textContent = choice;
      triviaAnswerInput.setAttribute('type', question.mode === 'singular' ? 'radio' : 'checkbox');
      triviaAnswerInput.setAttribute('name', 'question');
      triviaAnswerInput.setAttribute('value', index);
      triviaAnswer.appendChild(triviaAnswerInput);
      triviaAnswer.appendChild(triviaAnswerSpan);
      triviaAnswers.appendChild(triviaAnswer);
    });

    triviaQuestion.appendChild(triviaQuestionText);
    triviaQuestion.appendChild(triviaAnswers);

    return triviaQuestion;
  }

  renderFeedback() {
    const question = this.questions[this.step - 1];
    const feedbackText = this.isCorrectAnswer ? question.whenCorrect : question.whenCorrect;

    const feedback = document.createElement('div');

    feedback.classList.add('feedback');

    feedback.innerHTML = md.render(feedbackText);

    return feedback;
  }
}

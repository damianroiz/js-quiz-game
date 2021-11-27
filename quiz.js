// These are going to be the questions to add

let questions = [
  // Question 1
  {
    numb: 1,
    question:
      "TD is prohibited to open accounts/products for the following customer types",
    answer: "All of the above",
    options: [
      "Virtual/Digital Currency Exchanges",
      "Vapour Lounges",
      "Shell Banks",
      "All of the above"
    ]
  },

  // Question 2
  {
    numb: 2,
    question: "What is covered by CDIC?",
    answer: "TFSA",
    options: ["Mutual Funds", "TFSA", "Bonds", "Stocks"]
  },

  // Question 3
  {
    numb: 3,
    question: "Which of the following is not a section of the CEFST",
    answer: "Section 14: Service Limits",
    options: [
      "Section 7: Your Liability",
      "Section 13: Disputes",
      "Section 31: Complaint",
      "Section 14: Service Limits"
    ]
  },

  // Question 4
  {
    numb: 4,
    question:
      "Refusal to $100 does not apply in which of the following conditions...",
    answer: "The cheque is endorsed",
    options: [
      "The cheque is double endorsed",
      "The cheque is endorsed",
      "The cheque is issued in USD",
      "The cheque is 60 days old"
    ]
  },

  // Question 5
  {
    numb: 5,
    question:
      "What verbal disclosures must be provided to the client when opening up a registered product?",
    answer: "All charges applicable to the registered plan",
    options: [
      "Any fee changes will be subject to 90 days notice in writing",
      "PAD payment setup",
      "All charges applicable to the registered plan",
      "Contact details of our Customer Problem Resolution Centre"
    ]
  },

  // Question 6
  {
    numb: 6,
    question: "A Personal Customer who questions our Hold Policy must be given",
    answer: "Form 513796, Form 520866, and Form 513836",
    options: [
      "Form 513796, Form 520866, and Form 513836",
      "Form 513836 - TDCT Hold Funds Policy",
      "Form 522013 - Financial Services Terms (FST)",
      "Non of the above"
    ]
  },

  // Question 7
  {
    numb: 7,
    question:
      "We must not require a customer to accept one product or service as a condition of obtaining another because",
    answer: "This is illegal and coercive tied selling",
    options: [
      "This is against Express Consent Policy",
      "This is legal but against FCAC best practices",
      "This is illegal and coercive tied selling",
      "This is coercive tied selling and against TD policy"
    ]
  },

  // Question 8
  {
    numb: 8,
    question:
      "What sections should you review with customers when issuing a Business TD Access Card?",
    answer: "Section 3, 6, 7, 8, and 12",
    options: [
      "Section 3, 5, 6, 8, and 12",
      "Section 3, 6, 7, 8, and 12",
      "Section 3, 5, 7, 8, and 12",
      "non of the above"
    ]
  },

  // Question 9
  {
    numb: 9,
    question:
      "What should be disclosed When issuing a new Access Card to non-business customers?",
    answer: "ATM, POS, CNP, and doposit holds",
    options: [
      "Sections 6; 7; 8; 10; and 13 of CERT",
      "ATM, POS, CNP, and doposit holds",
      "EasyLine Customer Confirmation",
      "Electronic Financial Limits" // change this
    ]
  },

  // Question 10
  {
    numb: 10,
    question:
      "Which information from the information Box you MUST NOT explain to the customer?",
    answer: "Credit card extension costs",
    options: [
      "Minumum payment requirements",
      "All interest rates",
      "Grace period",
      "Credit card extension costs"
    ]
  }
];

//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// when the start button is clicked
start_btn.onclick = () => {
  info_box.classList.add("activeInfo");
};

// when exitQuiz button is clicked
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
};

// when continueQuiz button is clicked
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  showQuestions(0);
  queCounter(1);
  startTimer(15);
  startTimerLine(0);
};

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

//when restartQuiz button is clicked
restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz"); // show the quiz box
  result_box.classList.remove("activeResult"); // hide the result box
  timeValue = 1;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuestions(que_count);
  queCounter(que_numb);
  clearInterval(counter);
  clearInterval(counterLine);
  startTimer(timeValue);
  startTimerLine(widthValue);
  timeText.textContent = "Time Left";
  next_btn.classList.remove("show");
};

//when quitQuiz button is clicked
quit_quiz.onclick = () => {
  window.location.reload();
};

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// when next que bottom is clicked
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show");
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    showResult();
  }
};

// gettins questions and options from arrays
function showQuestions(index) {
  const que_text = document.querySelector(".que_text");
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag = `<div class="option"><span>${questions[index].options[0]}</span></div><div class="option"><span>${questions[index].options[1]}</span></div><div class="option"><span>${questions[index].options[2]}</span></div><div class="option"><span>${questions[index].options[3]}</span></div>`;
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag

  const option = option_list.querySelectorAll(".option");

  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

//creating new div tags which for icons

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//when user click on an option

function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  const allOptions = option_list.children.length;

  if (userAns == correctAns) {
    userScore += 1;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tickIconTag);
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossIconTag);
    console.log("Wrong Answer");

    for (i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correctAns) {
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Auto selected correct answer.");
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }
  next_btn.classList.add("show");
}

function showResult() {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 3) {
    let scoreTag = `<span>and congrats! , You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 1) {
    let scoreTag = `<span>and nice , You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
    scoreText.innerHTML = scoreTag;
  } else {
    let scoreTag = `<span>and sorry , You got only <p>${userScore}</p> out of <p>${questions.length}</p></span>`;
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (time < 0) {
      clearInterval(counter);
      timeText.textContent = "Time Off";
      const allOptions = option_list.children.length;
      let correctAns = questions[que_count].answer;
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correctAns) {
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
      }
      next_btn.classList.add("show");
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1;
    time_line.style.width = time + "px";
    if (time > 549) {
      clearInterval(counterLine);
    }
  }
}

function queCounter(index) {
  // this creates a new span tag and passes the question number and total question
  let totalQueCountag = `<span><p>${index}</p> of <p>${questions.length}</p> Questions </span>`;
}

const questions = [
  {
    que: "which of the following is a mark up language?",
    a: "HTML",
    b: "css",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "what year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "what does css stands for?",
    a: "Hyper text markup language",
    b: "Casecading style sheets",
    c: "Jason object notation",
    d: "Casecading single sheets",
    correct: "b",
  },
];

let index = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".option");

const loadQuestion = () => {
  const data = questions[index];
  //console.log(data);
  quesBox.innerHTML = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerHTML = data.a;
  optionInputs[1].nextElementSibling.innerHTML = data.b;
  optionInputs[2].nextElementSibling.innerHTML = data.c;
  optionInputs[3].nextElementSibling.innerHTML = data.d;
};

// botton function
const submitQuiz = () => {
  const ans = getAnswer();
};

const getAnswer = () => {
  optionInputs.forEach((input) => {
    if (input.checked) {
      //console.log("yes");
      return input.value;
    }
  });
};

// initial call
loadQuestion();

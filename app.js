

var home = document.getElementById('home');
var tour = document.getElementById('tour');
var knowledge = document.getElementById('knowledge');
    var kn0 = document.getElementById('kn0');
    var kn1 = document.getElementById('kn1');
    var kn2 = document.getElementById('kn2');
    var kn3 = document.getElementById('kn3');
    var kn4 = document.getElementById('kn4');
    var kn5 = document.getElementById('kn5');
    var kn6 = document.getElementById('kn6');
/*Footer*/
var form = document.getElementById('form');


/* Home to knowledge section and knowledge to knowledge sections*/
var homeToKnowledge = document.getElementById('homeToKnowledge');
homeToKnowledge.onclick = function f0() {
    home.style.display = 'none';
    knowledge.style.display = 'block';
    kn0.style.display = "block";
};

var k0k1 = document.getElementById('k0k1');
k0k1.onclick = function f1 () {
    kn0.style.display = 'none';
    kn1.style.display = 'block';
};

var k1k2 = document.getElementById('k1k2');
k1k2.onclick = function f2 () {
    kn1.style.display = 'none';
    kn2.style.display = 'block';
};

var k2k3 = document.getElementById('k2k3');
k2k3.onclick = function f3 () {
    kn2.style.display = 'none';
    kn3.style.display = 'block';
};

var k3k4 = document.getElementById('k3k4');
k3k4.onclick = function f4 () {
    kn3.style.display = 'none';
    kn4.style.display = 'block';
};

var k4k5 = document.getElementById('k4k5');
k4k5.onclick = function f5 () {
    kn4.style.display = 'none';
    kn5.style.display = 'block';
};

var k5k6 = document.getElementById('k5k6');
k5k6.onclick = function f6 () {
    kn5.style.display = 'none';
    kn6.style.display = 'block';
};

/* knowledge to facts section*/
var k6f0 = document.getElementById('k6f0');
var fa0 = document.getElementById('fa0')
k6f0.onclick = function f7 () {
    kn6.style.display = 'none';
    fa0.style.display = 'block';
};

var f0f1 = document.getElementById('f0f1');
var fa1 = document.getElementById('fa1');
f0f1.onclick = function f8 () {
    fa0.style.display = 'none';
    fa1.style.display = 'block';
};

var f1f2 = document.getElementById('f1f2');
var fa2 = document.getElementById('fa2');
f1f2.onclick = function f9 () {
    fa1.style.display = 'none';
    fa2.style.display = 'block';
}

var f2f3 = document.getElementById('f2f3');
var fa3 = document.getElementById('fa3');
f2f3.onclick = function f10 () {
    fa2.style.display = 'none';
    fa3.style.display = 'block';
};

var f3f4 = document.getElementById('f3f4');
var fa4 = document.getElementById('fa4');
f3f4.onclick = function f11 () {
    fa3.style.display = 'none';
    fa4.style.display = 'block';
};

var f4f5 = document.getElementById('f4f5');
var fa5 = document.getElementById('fa5');
f4f5.onclick = function f12 () {
    fa4.style.display = 'none';
    fa5.style.display = 'block'
};

/*knowledge to quiz*/
var quizContainer = document.getElementById('quiz-container')
var f5q0 = document.getElementById('f5q0');
var quizZ = document.getElementById("quiz")
f5q0.onclick = function f13 () {
    fa5.style.display = 'none';
    quizContainer.style.display = 'block';
    quizZ.style.display = 'block';
};

(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [{
        question: "How many characters should your password atleast contain?",
        answers: {
          a: "atleast 8 characters",
          b: "8 to 10 characters",
          c: "10 to 12 characters",
          d: "16 or more characters"
        },
        correctAnswer: "d"
      },
      {
        question: "What should a strong password contain?",
        answers: {
          a: "Special characters",
          b: "letters and numbers",
          c: "a mixture of lower- and uppercase characters",
          d: "all of the above"
        },
        correctAnswer: "d"
      },
      {
        question: "How can you easily secure your password?",
        answers: {
          a: "make it a nonsense phrase",
          b: "use your own name",
          c: "use your credit card information",
          d: "none of the above"
        },
        correctAnswer: "a"
      },
      {
      question: "How often should you change your password?",
        answers: {
          a: "never",
          b: "every 4th year",
          c: "every half a year",
          d: "every one month"
        },
        correctAnswer: "c"
      },
      {
      question: "Are you now ready to build your own safe password?",
        answers: {
          a: "yes",
          b: "no",
        },
        correctAnswer: "a"
      }];
  

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();

//Quiz to PW Checker
var checker = document.getElementById('checker');
var submitPls = document.getElementById('submit')
submitPls.onclick = function quizToChecker (){
        setTimeout(function () {quizContainer.style.display = 'none';}, 400)
        setTimeout(function () {quizZ.style.display = 'none';}, 400)
        setTimeout(function () {checker.style.display = 'block';}, 400)
        setTimeout(function () {checker.style.animation = 'fadeout 2s'}, 400)
};

//PW Checker
  // timeout before a callback is called

  let timeout;

  // traversing the DOM and getting the input and span using their IDs

  let password = document.getElementById('PassEntry')
  let strengthBadge = document.getElementById('StrengthDisp')

  // The strong and weak password Regex pattern checker

  let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
  let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
  
  function StrengthChecker(PasswordParameter){
      // We then change the badge's color and text based on the password strength

      if(strongPassword.test(PasswordParameter)) {
          strengthBadge.style.backgroundColor = "green"
          strengthBadge.textContent = 'Strong'
      } else if(mediumPassword.test(PasswordParameter)){
          strengthBadge.style.backgroundColor = 'blue'
          strengthBadge.textContent = 'Medium'
      } else{
          strengthBadge.style.backgroundColor = 'red'
          strengthBadge.textContent = 'Weak'
      }
  }

  // Adding an input event listener when a user types to the  password input 

  password.addEventListener("input", () => {

      //The badge is hidden by default, so we show it

      strengthBadge.style.display= 'block'
      clearTimeout(timeout);

      //We then call the StrengChecker function as a callback then pass the typed password to it

      timeout = setTimeout(() => StrengthChecker(password.value), 500);

      //Incase a user clears the text, the badge is hidden again

      if(password.value.length !== 0){
          strengthBadge.style.display != 'block'
      } else{
          strengthBadge.style.display = 'none'
      }
  });
var questions = [
    {
        question: "JS stands for?",
        options: ['JavaScript', 'Java Object Notation', 'Java Super', 'Just Script'],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ['string', 'boolean', 'integer', 'object'],
        correctAnswer: 2
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript (introduced in ES6)?",
        options: ['var', 'let', 'constant', 'dim'],
        correctAnswer: 1
    },
    {
        question: "What is the correct syntax to output 'Hello, World!' in the console?",
        options: ['console.print("Hello, World!");', 'print("Hello, World!");', 'console.log("Hello, World!");', 'log.console("Hello, World!")'],
        correctAnswer: 2
    }
  ];

  var currentQuestionIndex = 0;
  var score = 0;

  function startQuiz() {
      currentQuestionIndex = 0; 
      score = 0;
      questionOptionDisplay(); 
  }

  function questionOptionDisplay() {
       var butt = document.getElementById('button').style.display='none'
      var button = document.getElementById('butt').style.display='block'
      var questionDisplay = document.getElementById('question-display');
      var blockk = document.getElementById('blockk').style.display='block'
      var options = document.getElementsByName('option');
      var labels = document.querySelectorAll('label span');

      var currentQuestion = questions[currentQuestionIndex];

      questionDisplay.innerHTML = currentQuestion.question;

      for (var i = 0; i < currentQuestion.options.length; i++) {
          options[i].checked = false;
          labels[i].innerHTML = currentQuestion.options[i];
      }
  }

  function checkedAnswer() {
       var button = document.getElementById('butt').style.display='block'
      var scor = document.getElementById('nm')
      var options = document.getElementsByName('option');
      var selectedOption = -1;

      for (var i = 0; i < options.length; i++) {
          if (options[i].checked) {
              selectedOption = i;
              break;
          }
      }

      if (selectedOption === -1) {
          alert("Please select an answer!");
          return;
      }

      if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
          score++;
      }

      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          questionOptionDisplay(); 
      } else {
          // alert(`Quiz complete! Your score is ${score}/${questions.length}`);
          // document.body.style.backgroundImage = "url('https://i.makeagif.com/media/3-17-2016/9Cal5O.gif')"
          document.body.style.backgroundImage = "url('https://www.icegif.com/wp-content/uploads/2022/11/icegif-257.gif')";
scor.innerHTML = `Quiz complete! Your score is ${score}/${questions.length}`
scor.style.color='green'

      }
  }

  function bh(){
      var bhh= document.getElementById('button')
     var yuu = document.getElementById('yu')
     yu.style.display='none'
  }
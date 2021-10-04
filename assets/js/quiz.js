//MathJax.tex2chtml('\\sqrt{x^2+1}', {em: 12, ex: 6, display: true})
var myQuestions = [
	{
		question: "As curvas de contorno da função: \\( f(x, y)=\sqrt{6 y^{2}-15 x^{2}+23} \\)",
		answers: {
			a: 'São parábolas e elipses',
			b: 'hipérboles e retas',
			c: 'São parábolas e retas',
			d: 'São hipérboles e circunferências',
			e: 'Nenhuma das quatro opções'
		},
		correctAnswer: 'b'
	},
	{
		question: "Seja *(f(x, y) = \frac{y}{x^{2}+y^{2}})*. O conjunto de nível *( {f(x, y)=5} )* é....?",
		answers:{
			a: 'Um círculo com centro *((0,1/10))* e raio 1/(20)²',
			b: 'Uma hipérbola com foco (0,1/10)',
			c: 'Uma elipse com eccentricidade 5',
			d: 'Um círculo com centro (0,1/10) e raio 1/10 menos o ponto (0,0)',
			e: 'Nenhuma das quatro opções' + '<img src="./images/math.png" width="auto" height="16px">'
		},
		correctAnswer: 'd'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// precisaremos de um lugar para armazenar a saída e as opções de resposta
		var output = [];
		var answers; // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/

		// para cada questão
		for(var i=0; i<questions.length; i++){
			
			// mas, primeiro resetamos a lista de questões
			answers = [];

			// e aqui faremos para cada resposta na questão.
			for(letter in questions[i].answers){

				// Aqui será escrito para html para usar o Radio.
				answers.push(
					'<label id="quiz">'
						+ '<input class="quizInput" type="radio" name="question'+i+'" value="'+letter+'">'
					//	+ letter + ') ' vou deixar a letra comentada, porque achei melhor assim
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
			
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		var questionContainers = quizContainer.querySelectorAll('.question');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			// agora ele vai virar a letra que esta marcada.
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
				
				answerContainers[i].style.color = 'lightgreen';

				questionContainers[i].style.color = 'lightgreen';
			}
			
			else{
				
				answerContainers[i].style.color = 'red';
				questionContainers[i].style.color = 'red';
			}
		}

			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}

	// show questions right away
	showQuestions(questions, quizContainer);

	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
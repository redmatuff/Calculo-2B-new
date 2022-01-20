//MathJax.tex2chtml('\\sqrt{x^2+1}', {em: 12, ex: 6, display: true})
var myQuestions = [
	{
		question: "1. Através do conceito de traços sobre a superfície, responda: qual a superfície que descreve " + "<img src='./../../../images/atividades/quiz-quadricas/q1.jpg' width='auto' height='20px'>" + "?",
		answers: {
			a: 'Elipsoide',
			b: 'Paraboloide Eliptico com eixo no eixo X',
			c: 'Paraboloide Hiperbolico com eixo no eixo X',
			d: 'Hiperboloide de uma folha'
		},
		correctAnswer: 'b'
	},
	{
		question: "2. Através do conceito de traços sobre a superfície, qual a superfície que descreve " + "<img src='./../../../images/atividades/quiz-quadricas/q2.jpg' width='auto' height='30px'>" + "?",
		answers:{
			a: 'Cone Elíptico',
			b: 'Hiperboloide de uma folha',
			c: 'Hiperboloide de duas folhas',
			d: 'Paraboloide Hiperbólico'
		},
		correctAnswer: 'c'
	},
	{
		question: "3. Através do conceito de traços sobre a superfície,, qual a superfície que descreve " + "<img src='./../../../images/atividades/quiz-quadricas/q3.jpg' width='auto' height='30px'>" + "?",
		answers:{
			a: "Paraboloide Hiperbólico",
			b: "Elipsoide",
			c: "Paraboloide Elíptico",
			d: "Hiperboloide de uma folha"
		},
		correctAnswer: 'a'
	},
	{
		question: "4. Reescreva a equação: <img src='./../../../images/atividades/quiz-quadricas/q4.jpg' width='auto' height='20px'>" + "na forma padrão e classifique a superfície gerada.",
		answers:{
			a: "Elipsoide",
			b: "Cone Elíptico com eixo no eixo z",
			c: "Hiperboloide de duas folhas",
			d: "Cone Elíptico com eixo no eixo y"
		},
		correctAnswer: 'd'
	},
	{
		question: "5. As curvas de nível da função: <img src='./../../images/atividades/quiz-quadricas/monitoria-q6-1.png' width='auto' height='20px'>",
		answers:{
			a: "São parábolas",
			b: "São planos",
			c: "São parábolas e retas",
			d: "São hipérboles",
			e: 'Nenhuma das quatro opções'
		},
		correctAnswer: 'a'
	},
	{
		question: "6. As curvas de nível da função: *(f(x,y)=6y^2+15x^2+23)*",
		answers:{
			a: "São parábolas",
			b: "São planos",
			c: "São elipses",
			d: "São hipérboles",
			e: 'Nenhuma das quatro opções'
		},
		correctAnswer: 'c'
	},
	{
		question: "7. Seja *(f(x, y)=x^{3}+x y^{2}-2 x^{2}-2 y^{2}-1 x+2)*. Então o conjunto de nível *(\{f(x, y)=0\})* é...?",
		answers:{
			a: "nenhuma das quatro opções",
			b: "a união de um híperbola com foco (0,0) com a linha reta horizontal através (2,2)",
			c: "a união de um círculo com centro (0,0) e raio 1, com a linha reta vertical atravez (2,0)",
			d: "a união de um círculo com centro (0,0) e raio 1 com linha reta horizontal atravez (0,2)",
			e: "a união de um hipérbola com foco (0,0) com linha reta vertical através (2,2)"
		},
		correctAnswer: 'c'
	},
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

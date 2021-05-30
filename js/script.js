'use strict';

const inputRub = document.querySelector('#rub'),
	  inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => { //событие ображатывается каждый раз при вводе
	const request = new XMLHttpRequest();

	request.open('GET', 'js/current.json');
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); 
	request.send(); 

	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4 && request.status === 200) {
			console.log(request.response); 
			const data = JSON.parse(request.response); //обращается к обьекту ДЖСОН и ппарсит его, получаем обічній js обьект
			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); //обращаемся к свойству каррент и юсд обьекта и округляем до двух знаков
		} else {
			inputUsd.value = 'Что-то пошло не так'; // появляется при ошибке сервера
		}
	});
});

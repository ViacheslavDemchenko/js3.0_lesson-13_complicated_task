$(document).ready(function() {
//Задаем три элемента для обработчика события
	$('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
//Выводим на экран подложку		
		$('.overlay').animate({
			opacity: 1,
			fadeToggle: 'toggle'
		}, 1000, function() {

		});
//Выводим на экран форму
		$('.modal').animate({
			height: 'toggle',
		    width: '40%'
		}, 1000, function() {
		});
	});
//Скрываем подложку и форму по нажатию на Х
	$('.close').click(function() {
		$('.overlay').animate({
			opacity: 1,
			fadeToggle: 'toggle'
		}, 1000, function() {
		});

		$('.modal').animate({
			height: 'toggle',
		    width: '40%'
		}, 1000, function() {
		});
	});
//Отправка данных формы на сервер через AJAX
	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: 'POST',//Тип действия
			url: '../php/server.php',//Путь к файлу php
			data: $(this).serialize()//Возвращаем строку с именами и значениями выбранных элементов формы
		}).done(function() {//Далее идут действия после успешной отправки формы
//Скрываем подложку
			$('.overlay').animate({
				opacity: '1',
				height: 'toggle',
				width: 'toggle'
		}, 1000, function() {
		});
//Скрываем форму
			$('.modal').animate({
				height: 'toggle',
			    width: '40%'
		}, 1000, function() {
		});
//Выводим блок с сообщением после успешной отправки формы
			$('.thanks').delay(1200).fadeToggle(1000);
			$('form').trigger('reset');//Очищаем поля формы
		});
		return false;
	});
//Скрываем блок с сообщением после успешной отправки формы по нажатию на кнопку	
	$('.back').click(function() {
		$('.thanks').fadeToggle(1000);
	});
});
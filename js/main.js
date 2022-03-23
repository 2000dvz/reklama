// JavaScript Document


$(function(){
	
	
	$('.slider__inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false,//чтоб небыл зациклин слайде
		
	});
	
	
	
	$('input, select').styler();
	
	
	
	$('.news__slider-inner').slick({
	nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	infinite: false,//чтоб небыл зациклин слайде
	});
	
	
	
	//@media
	
	$('.header__btn-menu').on('click', function(){
		$('.menu ul').slideToggle();
	});
	
	
	
	
	
});
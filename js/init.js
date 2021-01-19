$(document).ready(function(){
	 
		// Меню адаптив ----------------
		$( ".menu-triger" ).click(function(){
			$( ".main-menu" ).slideToggle(200); 
		});
		// Каталог адаптив ----------------
		$( ".main-menu .close" ).click(function(){
			$( ".main-menu" ).slideToggle(200); 
		});	
		
		$('.tabsauth').tabs();
		$("#phone").mask("+7 (999) 999 - 9999");
		
		// Главный банер ----------------
		$('.slider').carousel({			
			indicators: true,
			//dist:0,
			numVisible: 1,
			fullWidth: true,
			shift:0,
			padding:50
			
		});
		 $('.moveNextCarousel').click(function(e){
			  e.preventDefault();
			  e.stopPropagation();
			  $('.slider').carousel('next');
		   });
		   $('.movePrevCarousel').click(function(e){
			  e.preventDefault();
			  e.stopPropagation();
			  $('.slider').carousel('prev');
		   });
		   
		// Стилизация форм ----------------
		$('select').formSelect();
		$('.dropdown-trigger').dropdown();
		// Модальные окна ----------------
		$('.modal').modal();
		$('.pre-tabs').tabs();
		
		// С этим товаром покупают ----------------
		var carouselsee = $(".seelater");
		carouselsee.owlCarousel({
			itemsDesktop:     4,
			itemsDesktop:      [1900, 4],
			itemsDesktopSmall: [1000, 3],
			itemsTablet:        false,
			itemsMobile:       [375, 2]
		});
		$('.seelater-prev').click(function () {
			carouselsee.trigger('owl.prev');
			return false;
		});
		$('.seelater-next').click(function () {
			carouselsee.trigger('owl.next');
			return false;
		});
		// Аккордион в карточке----------------
		$('.expand').collapsible({
			accordion: false
		});
		// Карусель товаров ----------------
		
		var carousel = $(".scase1");
		carousel.owlCarousel({
			itemsDesktop:     6,
			itemsDesktop:      [1920, 6],
			itemsDesktopSmall: [1400, 5],
			itemsMobile:       [420, 1],

		});
		$('.scase1-prev').click(function () {
			carousel.trigger('owl.prev');
			return false;
		});
		$('.scase1-next').click(function () {
			carousel.trigger('owl.next');
			return false;
		});
		
		var carousel2 = $(".snew");
		carousel2.owlCarousel({
			itemsDesktop:     6,
			itemsDesktop:      [1920, 6],
			itemsDesktopSmall: [1400, 5],
			itemsMobile:       [420, 1]
		});
		$('.snew-prev').click(function () {
			carousel2.trigger('owl.prev');
			return false;
		});
		
		$('.snew-next').click(function () {
			carousel2.trigger('owl.next');
			return false;
		});
		
		//------------------------------------------
		var carousel3 = $(".scase3");
		carousel3.owlCarousel({
			itemsDesktop:     6,
			itemsDesktop:      [1920, 6],
			itemsDesktopSmall: [1400, 5],
			itemsMobile:       [420, 1]
		});
		$('.scase3-prev').click(function () {
			carousel3.trigger('owl.prev');
			return false;
		});
		$('.scase3-next').click(function () {
			carousel3.trigger('owl.next');
			return false;
		});
		//------------------------------------------
		var carousel3 = $(".kategory");
		carousel3.owlCarousel({
			itemsDesktop:     8,
			itemsDesktop:      [1920, 8],
			itemsDesktopSmall: [1400, 9],
			itemsMobile:       [420, 2]
		});
		$('.scase3-prev').click(function () {
			carousel3.trigger('owl.prev');
			return false;
		});
		$('.scase3-next').click(function () {
			carousel3.trigger('owl.next');
			return false;
		});
		//------------------------------------------
		var carousel3 = $(".eshop");
		carousel3.owlCarousel({
			itemsDesktop:     5,
			itemsDesktop:      [1920, 5],
			itemsDesktopSmall: [1400, 5],
			itemsMobile:       [420, 1]
		});
		$('.scase3-prev').click(function () {
			carousel3.trigger('owl.prev');
			return false;
		});
		$('.scase3-next').click(function () {
			carousel3.trigger('owl.next');
			return false;
		});
		//------------------------------------------
		var carousel3 = $(".brands");
		carousel3.owlCarousel({
			itemsDesktop:     8,
			itemsDesktop:      [1920, 8],
			itemsDesktopSmall: [1400, 5],
			itemsMobile:       [420, 1]
		});

	});
function testJump(x){
    var ml = ~~x.getAttribute('maxlength');
    if(ml && x.value.length >= ml){
        do{
            x = x.nextSibling;
        }
        while(x && !(/text/.test(x.type)));
        if(x && /text/.test(x.type)){
            x.focus();
        }
    }
}	
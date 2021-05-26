// 'use strict';
(function(a){'use string';a.pseudoElements={length:0};var b=function(c){if('object'==typeof c.argument||c.argument!==void 0&&c.property!==void 0){for(var d of c.elements.get()){d.pseudoElements||(d.pseudoElements={styleSheet:null,before:{index:null,properties:null},after:{index:null,properties:null},id:null});var e=function(){if(null!==d.pseudoElements.id)return+d.getAttribute('data-pe--id')!==d.pseudoElements.id&&d.setAttribute('data-pe--id',d.pseudoElements.id),'[data-pe--id="'+d.pseudoElements.id+'"]::'+c.pseudoElement;var k=a.pseudoElements.length;return a.pseudoElements.length++,d.pseudoElements.id=k,d.setAttribute('data-pe--id',k),'[data-pe--id="'+k+'"]::'+c.pseudoElement}();if(!d.pseudoElements.styleSheet)if(document.styleSheets[0])d.pseudoElements.styleSheet=document.styleSheets[0];else{var f=document.createElement('style');document.head.appendChild(f),d.pseudoElements.styleSheet=f.sheet}if(d.pseudoElements[c.pseudoElement].properties&&d.pseudoElements[c.pseudoElement].index&&d.pseudoElements.styleSheet.deleteRule(d.pseudoElements[c.pseudoElement].index),'object'==typeof c.argument){if(c.argument=a.extend({},c.argument),!d.pseudoElements[c.pseudoElement].properties&&!d.pseudoElements[c.pseudoElement].index){var g=d.pseudoElements.styleSheet.rules.length||d.pseudoElements.styleSheet.cssRules.length||d.pseudoElements.styleSheet.length;d.pseudoElements[c.pseudoElement].index=g,d.pseudoElements[c.pseudoElement].properties=c.argument}var h='';for(var i in c.argument)d.pseudoElements[c.pseudoElement].properties[i]='function'==typeof c.argument[i]?c.argument[i]():c.argument[i];for(var i in d.pseudoElements[c.pseudoElement].properties)h+=i+': '+d.pseudoElements[c.pseudoElement].properties[i]+' !important; ';d.pseudoElements.styleSheet.addRule(e,h,d.pseudoElements[c.pseudoElement].index)}else if(void 0!==c.argument&&void 0!==c.property){if(!d.pseudoElements[c.pseudoElement].properties&&!d.pseudoElements[c.pseudoElement].index){var g=d.pseudoElements.styleSheet.rules.length||d.pseudoElements.styleSheet.cssRules.length||d.pseudoElements.styleSheet.length;d.pseudoElements[c.pseudoElement].index=g,d.pseudoElements[c.pseudoElement].properties={}}d.pseudoElements[c.pseudoElement].properties[c.argument]='function'==typeof c.property?c.property():c.property;var h='';for(var i in d.pseudoElements[c.pseudoElement].properties)h+=i+': '+d.pseudoElements[c.pseudoElement].properties[i]+' !important; ';d.pseudoElements.styleSheet.addRule(e,h,d.pseudoElements[c.pseudoElement].index)}}return a(c.elements)}if(void 0!==c.argument&&void 0===c.property){var d=a(c.elements).get(0),j=window.getComputedStyle(d,'::'+c.pseudoElement).getPropertyValue(c.argument);return d.pseudoElements?a(c.elements).get(0).pseudoElements[c.pseudoElement].properties[c.argument]||j:j||null}return console.error('Invalid values!'),!1};a.fn.cssBefore=function(c,d){return b({elements:this,pseudoElement:'before',argument:c,property:d})},a.fn.cssAfter=function(c,d){return b({elements:this,pseudoElement:'after',argument:c,property:d})}})(jQuery);

function number_format(number, decimals, dec_point, separator ) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof separator === 'undefined') ? ',' : separator ,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Р¤РёРєСЃРёРј Р±Р°Рі РІ IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
}

$(function(){
  baguetteBox.run('.baguetteBox');
});

$(function(){ 
  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);
    return false;
  });
});

$(function(){
  $('[name=phone]').mask("+7 (999) 999-9999");
})

$(function(){ 
  $('select.select').selectbox();
});

$(function(){
  var fontSize = localStorage.getItem('fontSize');
  if (fontSize) $('body').css('font-size', fontSize + 'px');

  $('.header_font__btn-minus').on('click', function(){
    var fontSize = $('body').css('font-size').split('px')[0];
    fontSize = Number(fontSize) - 1;
    $('body').css('font-size', fontSize + 'px');
    localStorage.setItem('fontSize', fontSize);
  });

  $('.header_font__btn-plus').on('click', function(){
    var fontSize = $('body').css('font-size').split('px')[0];
    fontSize = Number(fontSize) + 1;
    $('body').css('font-size', fontSize + 'px');
    localStorage.setItem('fontSize', fontSize);
  });


  if (matchMedia) {
    const mq = window.matchMedia("(min-width: 768px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }
  
  // media query change
  function WidthChange(mq) {
    if (mq.matches) {
      $('body').css('font-size', 20 + 'px');
    } else {
      $('body').css('font-size', 16 + 'px');
    }
  }

  $('.main_menu__toggle').on('click', function(){
    $('.main_menu__overlay').toggleClass('active');
    $('.main_menu').toggleClass('active');
  })
  $('.main_menu__overlay').on('click', function(){
    $('.main_menu__overlay').removeClass('active');
    $('.main_menu').removeClass('active');
  })
});

$(function(){
  $('.header_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    dots: true,
  });

  $('.last_news .news_carousel .row').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    dots: false,
    prevArrow: '<button class="news_carousel__btn news_carousel__btn-left"></button>',
    nextArrow: '<button class="news_carousel__btn news_carousel__btn-right"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true
        }
      }
    ]
  });

  $('.last_news .reviews_carousel .row').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    dots: false,
    prevArrow: '<button class="news_carousel__btn news_carousel__btn-left"></button>',
    nextArrow: '<button class="news_carousel__btn news_carousel__btn-right"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.partners .news_carousel .row').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    dots: false,
    prevArrow: '<button class="news_carousel__btn news_carousel__btn-left"></button>',
    nextArrow: '<button class="news_carousel__btn news_carousel__btn-right"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true
        }
      }
    ]
  });

  $('.top_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    dots: true,
  });
});

/* table overflow for mobile */
$(function(){ 
  $('.txt table').each(function(){
      $(this).wrap('<div class="table_scroll"></div>')
      $(this).before('<div class="hand show"><i class="icon-up-hand"></i></div>');
  });

  function scrollTable() {
    $('.table_scroll').each(function() {
      if($(this).get(0).scrollWidth > ($(this).get(0).clientWidth)+1){
        $(this).addClass('scrollable');
        if (($(this).outerWidth() + $(this).scrollLeft()) < $(this).get(0).scrollWidth) {
          $(this).addClass('scrollRight');
        }else{
          $(this).removeClass('scrollRight');
        }
        
        if ($(this).scrollLeft() != 0) {
          $(this).addClass('scrollLeft');
        }else{
          $(this).removeClass('scrollLeft');
        }       
      } else {
        $(this).removeClass('scrollable')
          .removeClass('scrollLeft')
          .removeClass('scrollRight'); 
      }
    });
  }
  scrollTable();
  $('.table_scroll').scroll(function () { scrollTable(); });
  $(window).bind('orientationchange resize', function(event){scrollTable(); });
});


$(function(){
  $('input[type=file]').each(function() {
    var $input = $(this),
        $label = $input.next('.js-labelFile'),
        labelVal = $label.html();

    $input.hide();
    $input.on('change', function(element) {
      var fileName = '';
      if (element.target.value) fileName = element.target.value.split('\\').pop();
      fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
    });
  });
});


$(function(){
  $('.main_menu__link-about').on('click', function(e) {
    e.preventDefault();
    $('.about_modal').fadeIn();
  })
});

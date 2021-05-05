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

$(function() { 
  $('select.select').selectbox();
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
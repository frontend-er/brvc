
$(document).ready(function(){
   //This is id of HTML element (English) with attribute lng-tag
   $("#enTranslator").click(function(){
     translate('en', 'lng-tag');
   });
   //This is id of HTML element (mdmer) with attribute lng-tag
   $("#mdTranslator").click(function(){
     translate('md', 'lng-tag');
   });
   $("#ruTranslator").click(function(){
    translate('ru', 'lng-tag');
  });
   $("#enTranslatorMobile").click(function(){
      translate('en', 'lng-tag');
    });
    $("#mdTranslatorMobile").click(function(){
      translate('md', 'lng-tag');
    });
    $("#ruTranslatorMobile").click(function(){
      translate('ru', 'lng-tag');
    });
});

function translate(lng, tagAttr){
   var translate = new Translate();
   translate.init(tagAttr, lng);
   translate.process();
   if(lng == 'en'){
     $("#enTranslator").css('color', '#FFFFFF');
     $("#mdTranslator").css('color', '#424242');
     $("#ruTranslator").css('color', '#424242');
   } 
   if(lng == 'md'){
     $("#mdTranslator").css('color', '#FFFFFF');
     $("#enTranslator").css('color', '#424242');
     $("#ruTranslator").css('color', '#424242');
   }
   if(lng == 'ru'){
    $("#ruTranslator").css('color', '#FFFFFF');
    $("#enTranslator").css('color', '#424242');
    $("#mdTranslator").css('color', '#424242');
  }
   if(lng == 'en'){
      $("#enTranslatorMobile").css('color', '#FFFFFF');
      $("#mdTranslatorMobile").css('color', '#424242');
      $("#ruTranslatorMobile").css('color', '#424242');
    } 
    if(lng == 'md'){
      $("#mdTranslatorMobile").css('color', '#FFFFFF');
      $("#enTranslatorMobile").css('color', '#424242');
      $("#ruTranslatorMobile").css('color', '#424242');
    }
    if(lng == 'ru'){
      $("#ruTranslatorMobile").css('color', '#FFFFFF');
      $("#mdTranslatorMobile").css('color', '#424242');
      $("#enTranslatorMobile").css('color', '#424242');
    }
}




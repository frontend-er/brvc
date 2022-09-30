
$(document).ready(function(){
   //This is id of HTML element (English) with attribute lng-tag
   $("#enTranslator").click(function(){
     translate('en', 'lng-tag');
   });
   //This is id of HTML element (mdmer) with attribute lng-tag
   $("#mdTranslator").click(function(){
     translate('md', 'lng-tag');
   });
   $("#enTranslatorMobile").click(function(){
      translate('en', 'lng-tag');
    });
    $("#mdTranslatorMobile").click(function(){
      translate('md', 'lng-tag');
    });
});

function translate(lng, tagAttr){
   var translate = new Translate();
   translate.init(tagAttr, lng);
   translate.process();
   if(lng == 'en'){
     $("#enTranslator").css('color', '#FFFFFF');
     $("#mdTranslator").css('color', '#424242');
   } 
   if(lng == 'md'){
     $("#mdTranslator").css('color', '#FFFFFF');
     $("#enTranslator").css('color', '#424242');
   }
   if(lng == 'en'){
      $("#enTranslatorMobile").css('color', '#FFFFFF');
      $("#mdTranslatorMobile").css('color', '#424242');
    } 
    if(lng == 'md'){
      $("#mdTranslatorMobile").css('color', '#FFFFFF');
      $("#enTranslatorMobile").css('color', '#424242');
    }
}




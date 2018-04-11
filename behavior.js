document.addEventListener("DOMContentLoaded", function(event) {
   
//Arabic
    var thumbnailElementArabic = document.getElementById("arabic");
    thumbnailElementArabic.addEventListener("click", function(e){
	if (thumbnailElementArabic.className == ""){
	    thumbnailElementArabic.className = "small";
	}

	else {
	    thumbnailElementArabic.className = "";
	}
    })
    
    thumbnailElementArabic.addEventListener("mouseover", function(e){
	if (thumbnailElementArabic.className == ""){
	thumbnailElementArabic.src = "http://www.lonelyplanet.com/maps/middle-east/map_of_middle-east.jpg";
	}
    })

    thumbnailElementArabic.addEventListener("mouseout", function(e){
	thumbnailElementArabic.src = "http://www.myeasyarabic.com/images/alphabet-summary.gif"
    })

//Greek
    var thumbnailElementGreek = document.getElementById("greek");
    thumbnailElementGreek.addEventListener("click", function(e){
	if (thumbnailElementGreek.className == ""){
	    thumbnailElementGreek.className = "small";
	}

	else{
	    thumbnailElementGreek.className = "";
	}
    })

    thumbnailElementGreek.addEventListener("mouseover", function(e){
	if (thumbnailElementGreek.className == ""){
	thumbnailElementGreek.src = "http://www.lonelyplanet.com/maps/europe/greece/map_of_greece.jpg";
	}
    })

    thumbnailElementGreek.addEventListener("mouseout", function(e){
	thumbnailElementGreek.src = "https://d1e4pidl3fu268.cloudfront.net/a9ef9567-89db-4faf-af82-2044ae922688/GreekAlphabet.crop_689x516_0%2C8.preview.png"
    })

//Thai
    var thumbnailElementThai = document.getElementById("thai");
    thumbnailElementThai.addEventListener("click", function(e){
	if (thumbnailElementThai.className == ""){
	    thumbnailElementThai.className = "small";
	}

	else{
	    thumbnailElementThai.className = "";
	}
    })

    thumbnailElementThai.addEventListener("mouseover", function(e){
	if (thumbnailElementThai.className == ""){
	thumbnailElementThai.src = "http://www.lonelyplanet.com/maps/asia/thailand/map_of_thailand.jpg";
	}
    })

    thumbnailElementThai.addEventListener("mouseout", function(e){
	thumbnailElementThai.src = "https://i.pinimg.com/736x/3d/2c/14/3d2c146bf92be54a1ad5e94945cc5869--thai-alphabet-learn-thai.jpg"
    })

//Hindi
    var thumbnailElementHindi = document.getElementById("hindi");
    thumbnailElementHindi.addEventListener("click", function(e){
	if (thumbnailElementHindi.className == ""){
	    thumbnailElementHindi.className = "small";
	}

	else{
	    thumbnailElementHindi.className = "";
	}
    })

    thumbnailElementHindi.addEventListener("mouseover", function(e){
	if (thumbnailElementHindi.className == ""){
	thumbnailElementHindi.src = "http://www.lonelyplanet.com/maps/asia/india/map_of_india.jpg";
	}
    })

    thumbnailElementHindi.addEventListener("mouseout", function(e){
	thumbnailElementHindi.src = "https://targetstudy.com/files/img/24/2/I_7364.jpg"
    })

//Bengali
    var thumbnailElementBengali = document.getElementById("bengali");
    thumbnailElementBengali.addEventListener("click", function(e){
	if (thumbnailElementBengali.className == ""){
	    thumbnailElementBengali.className = "small";
	}
	else{
	    thumbnailElementBengali.className = "";
	}
    })

    thumbnailElementBengali.addEventListener("mouseover", function(e){
	if (thumbnailElementBengali.className == ""){
	thumbnailElementBengali.src = "http://www.lonelyplanet.com/maps/asia/bangladesh/map_of_bangladesh.jpg";
	}
    })

    thumbnailElementBengali.addEventListener("mouseout", function(e){
	thumbnailElementBengali.src = "https://i.pinimg.com/originals/30/2b/7b/302b7be22f6e159566ee696965880d1f.jpg"
    })

//Korean
    var thumbnailElementKorean = document.getElementById("korean");
    thumbnailElementKorean.addEventListener("click", function(e){
	if (thumbnailElementKorean.className == ""){
	    thumbnailElementKorean.className = "small";
	}
	else{
	    thumbnailElementKorean.className = "";
	}
    })

    thumbnailElementKorean.addEventListener("mouseover", function(e){
	if (thumbnailElementKorean.className == ""){
	thumbnailElementKorean.src = "http://www.lonelyplanet.com/maps/asia/south-korea/map_of_south-korea.jpg";
	}
    })

    thumbnailElementKorean.addEventListener("mouseout", function(e){
	thumbnailElementKorean.src = "https://i.pinimg.com/736x/9b/a8/79/9ba87966adf302fb9413c2a86c927f9d--korean-alphabet-korean-language.jpg"
    })

//Japanese
    var thumbnailElementJapanese = document.getElementById("japanese");
    thumbnailElementJapanese.addEventListener("click", function(e){
	if (thumbnailElementJapanese.className == ""){
	    thumbnailElementJapanese.className = "small";
	}
	else{
	    thumbnailElementJapanese.className = "";
	}
    })

    thumbnailElementJapanese.addEventListener("mouseover", function(e){
	if (thumbnailElementJapanese.className == ""){
	thumbnailElementJapanese.src = "http://www.lonelyplanet.com/maps/asia/japan/map_of_japan.jpg";
	}
    })

    thumbnailElementJapanese.addEventListener("mouseout", function(e){
	thumbnailElementJapanese.src = "http://www.bnb32.com/images/hiragana.gif"
    })

//Hebrew
    var thumbnailElementHebrew = document.getElementById("hebrew");
    thumbnailElementHebrew.addEventListener("click", function(e){
	if (thumbnailElementHebrew.className == ""){
	    thumbnailElementHebrew.className = "small";
	}
	else{
	    thumbnailElementHebrew.className = "";
	}
    })

    thumbnailElementHebrew.addEventListener("mouseover", function(e){
	if (thumbnailElementHebrew.className == ""){
	thumbnailElementHebrew.src = "http://www.lonelyplanet.com/maps/middle-east/israel/map_of_israel.jpg";
	}
    })

    thumbnailElementHebrew.addEventListener("mouseout", function(e){
	thumbnailElementHebrew.src = "https://i.pinimg.com/originals/26/de/27/26de27437f33e2e0f9952ed005e96cac.jpg"
    })

//Georgian
    var thumbnailElementGeorgian = document.getElementById("georgian");
    thumbnailElementGeorgian.addEventListener("click", function(e){
	if (thumbnailElementGeorgian.className == ""){
	    thumbnailElementGeorgian.className = "small";
	}
	else{
	    thumbnailElementGeorgian.className = "";
	}
    })

    thumbnailElementGeorgian.addEventListener("mouseover", function(e){
	if (thumbnailElementGeorgian.className == ""){
	thumbnailElementGeorgian.src = "http://www.lonelyplanet.com/maps/europe/georgia/map_of_georgia.jpg";
	}
    })

    thumbnailElementGeorgian.addEventListener("mouseout", function(e){
	thumbnailElementGeorgian.src = "https://i.pinimg.com/564x/fa/51/23/fa512367b892758e86112f28afd20a46--georgian-alphabet-poster-fonts.jpg"
    })

//Telugu
    var thumbnailElementTelugu = document.getElementById("telugu");
    thumbnailElementTelugu.addEventListener("click", function(e){
	if (thumbnailElementTelugu.className == ""){
	    thumbnailElementTelugu.className = "small";
	}
	else{
	    thumbnailElementTelugu.className = "";
	}
    })

    thumbnailElementTelugu.addEventListener("mouseover", function(e){
	if (thumbnailElementTelugu.className == ""){
	thumbnailElementTelugu.src = "http://www.lonelyplanet.com/maps/asia/india/map_of_india.jpg";
	}
    })

    thumbnailElementTelugu.addEventListener("mouseout", function(e){
	thumbnailElementTelugu.src = "http://ccreweb.org/software/kforth/telugu-alphabet.png"
    })

//Sinhalese
    var thumbnailElementSinhalese = document.getElementById("sinhalese");
    thumbnailElementSinhalese.addEventListener("click", function(e){
	if (thumbnailElementSinhalese.className == ""){
	    thumbnailElementSinhalese.className = "small";
	}
	else{
	    thumbnailElementSinhalese.className = "";
	}
    })

    thumbnailElementSinhalese.addEventListener("mouseover", function(e){
	if (thumbnailElementSinhalese.className == ""){
	thumbnailElementSinhalese.src = "http://www.lonelyplanet.com/maps/asia/sri-lanka/map_of_sri-lanka.jpg";
	}
    })

    thumbnailElementSinhalese.addEventListener("mouseout", function(e){
	thumbnailElementSinhalese.src = "https://www.omniglot.com/images/writing/sinhala_cons.gif"
    })

//Serbo-Croatian
    var thumbnailElementSerbCrot = document.getElementById("serbcrot");
    thumbnailElementSerbCrot.addEventListener("click", function(e){
	if (thumbnailElementSerbCrot.className == ""){
	    thumbnailElementSerbCrot.className = "small";
	}
	else{
	    thumbnailElementSerbCrot.className = "";
	}
    })

    thumbnailElementSerbCrot.addEventListener("mouseover", function(e){
	if (thumbnailElementSerbCrot.className == ""){
	thumbnailElementSerbCrot.src = "http://www.lonelyplanet.com/maps/europe/serbia/map_of_serbia.jpg";
	}
    })

    thumbnailElementSerbCrot.addEventListener("mouseout", function(e){
	thumbnailElementSerbCrot.src = "http://www.languagesgulper.com/eng/Serbocroat_files/droppedImage_2.jpg"
    })

    var evolutionGif = document.getElementById("evolution_gif")
    evolutionGif.addEventListener("mouseover", function(e){
	evolutionGif.src = "https://i.imgur.com/FyVXx.gif"
    })
})

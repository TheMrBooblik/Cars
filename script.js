function changeMini() {
    document.getElementById("menu1").style.display = "block";
    document.getElementById("menu2").style.display = "none";
    document.getElementById("menu3").style.display = "none";
    document.getElementById("svg1").style.display = "block";
    document.getElementById("svg2").style.display = "none";
    document.getElementById("svg3").style.display = "none";
    document.getElementById("car-image").style.backgroundImage = "url('images/ситроен/стандарт++.jpg')";
}

function changeMiddle() {
    document.getElementById("menu1").style.display = "none";
    document.getElementById("menu2").style.display = "block";
    document.getElementById("menu3").style.display = "none";
    document.getElementById("svg1").style.display = "none";
    document.getElementById("svg2").style.display = "block";
    document.getElementById("svg3").style.display = "none";
    document.getElementById("car-image").style.backgroundImage = "url('images/мазда/стандарт++.jpg')";
}

function changePremium() {
    document.getElementById("menu1").style.display = "none";
    document.getElementById("menu2").style.display = "none";
    document.getElementById("menu3").style.display = "block";
    document.getElementById("svg1").style.display = "none";
    document.getElementById("svg2").style.display = "none";
    document.getElementById("svg3").style.display = "block";
    document.getElementById("car-image").style.backgroundImage = "url('images/мерседес/стандарт++.jpg')";
}

function minimalMini() {
    document.getElementById("car-image").style.backgroundImage = "url('images/ситроен/минимальный.jpg')";
    document.getElementById('1-1').className = 'show';
    document.getElementById("1-2").className = 'hide';
    document.getElementById("1-3").className = 'hide';
    document.getElementById("1-4").className = 'hide';
    document.getElementById("1-5").className = 'hide';
    document.getElementById("1-6").className = 'hide';
    document.getElementById("navlist").className = 'show-parts';
    document.getElementById("bonnet").className = 'internal-thresholds';
    document.getElementById("text-icon1").innerHTML = "пороги внутренние";
    document.getElementById("wings").className = 'butt-end-door';
    document.getElementById("text-icon2").innerHTML = "торцы дверей";
}

function minimalMiddle() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мазда/минимальный.jpg')";
    document.getElementById("2-1").className = 'show';
    document.getElementById("2-2").className = 'hide';
    document.getElementById("2-3").className = 'hide';
    document.getElementById("2-4").className = 'hide';
    document.getElementById("2-5").className = 'hide';
    document.getElementById("2-6").className = 'hide';
    document.getElementById("navlist").className = 'show-parts';
    document.getElementById("bonnet").className = 'internal-thresholds';
    document.getElementById("text-icon1").innerHTML = "пороги внутренние";
    document.getElementById("wings").className = 'butt-end-door';
    document.getElementById("text-icon2").innerHTML = "торцы дверей";
}

function minimalPremium() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мерседес/минимальный.jpg')";
    document.getElementById("3-1").className = 'show';
    document.getElementById("3-2").className = 'hide';
    document.getElementById("3-3").className = 'hide';
    document.getElementById("3-4").className = 'hide';
    document.getElementById("3-5").className = 'hide';
    document.getElementById("3-6").className = 'hide';
    document.getElementById("navlist").className = 'show-parts';
    document.getElementById("bonnet").className = 'internal-thresholds';
    document.getElementById("text-icon1").innerHTML = "пороги внутренние";
    document.getElementById("wings").className = 'butt-end-door';
    document.getElementById("text-icon2").innerHTML = "торцы дверей";
}

function standartMini() {
    document.getElementById("car-image").style.backgroundImage = "url('images/ситроен/стандарт.jpg')";
    document.getElementById("1-1").className = 'hide';
    document.getElementById('1-2').className = 'show';
    document.getElementById("1-3").className = 'hide';
    document.getElementById("1-4").className = 'hide';
    document.getElementById("1-5").className = 'hide';
    document.getElementById("1-6").className = 'hide';
    document.getElementById("navlist").className = 'show-parts';
    document.getElementById("bonnet").className = 'bonnet-part';
    document.getElementById("text-icon1").innerHTML = "часть капота";
    document.getElementById("wings").className = 'wings-part';
    document.getElementById("text-icon2").innerHTML = "часть крыльев";
}

function standartMiddle() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мазда/стандарт.jpg')";
    document.getElementById("2-1").className = 'hide';
    document.getElementById("2-2").className = 'show';
    document.getElementById("2-3").className = 'hide';
    document.getElementById("2-4").className = 'hide';
    document.getElementById("2-5").className = 'hide';
    document.getElementById("2-6").className = 'hide';
    document.getElementById("navlist").className = 'show-parts';
    document.getElementById("bonnet").className = 'bonnet-part';
    document.getElementById("text-icon1").innerHTML = "часть капота";
    document.getElementById("wings").className = 'wings-part';
    document.getElementById("text-icon2").innerHTML = "часть крыльев";
}

function standartPremium() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мерседес/стандарт.jpg')";
    document.getElementById("3-1").className = 'hide';
    document.getElementById("3-2").className = 'show';
    document.getElementById("3-3").className = 'hide';
    document.getElementById("3-4").className = 'hide';
    document.getElementById("3-5").className = 'hide';
    document.getElementById("3-6").className = 'hide';
    document.getElementById("navlist").className = 'show-parts';
    document.getElementById("bonnet").className = 'bonnet-part';
    document.getElementById("text-icon1").innerHTML = "часть капота";
    document.getElementById("wings").className = 'wings-part';
    document.getElementById("text-icon2").innerHTML = "часть крыльев";
}

function standartPlusMini() {
    document.getElementById("car-image").style.backgroundImage = "url('images/ситроен/стандарт+.jpg')";
    document.getElementById("1-1").className = 'hide';
    document.getElementById("1-2").className = 'hide';
    document.getElementById("1-3").className = 'show';
    document.getElementById("1-4").className = 'hide';
    document.getElementById("1-5").className = 'hide';
    document.getElementById("1-6").className = 'hide';
    document.getElementById("navlist").className = 'show-parts';
    document.getElementById("bonnet").className = 'bonnet-full';
    document.getElementById("text-icon1").innerHTML = "капот полностью";
    document.getElementById("wings").className = 'wings-part';
    document.getElementById("text-icon2").innerHTML = "часть крыльев";
}

function standartPlusMiddle() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мазда/стандарт+.jpg')";
    document.getElementById("2-1").className = 'hide';
    document.getElementById("2-2").className = 'hide';
    document.getElementById("2-3").className = 'show';
    document.getElementById("2-4").className = 'hide';
    document.getElementById("2-5").className = 'hide';
    document.getElementById("2-6").className = 'hide';
    document.getElementById("navlist").className = 'show-parts';
    document.getElementById("bonnet").className = 'bonnet-full';
    document.getElementById("text-icon1").innerHTML = "капот полностью";
    document.getElementById("wings").className = 'wings-part';
    document.getElementById("text-icon2").innerHTML = "часть крыльев";
}

function standartPlusPremium() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мерседес/стандарт+.jpg')";
    document.getElementById("3-1").className = 'hide';
    document.getElementById("3-2").className = 'hide';
    document.getElementById("3-3").className = 'show';
    document.getElementById("3-4").className = 'hide';
    document.getElementById("3-5").className = 'hide';
    document.getElementById("3-6").className = 'hide';
    document.getElementById("navlist").className = 'show-parts';
    document.getElementById("bonnet").className = 'bonnet-full';
    document.getElementById("text-icon1").innerHTML = "капот полностью";
    document.getElementById("wings").className = 'wings-part';
    document.getElementById("text-icon2").innerHTML = "часть крыльев";
}

function standart2PlusMini() {
    document.getElementById("car-image").style.backgroundImage = "url('images/ситроен/стандарт++.jpg')";
    document.getElementById("1-1").className = 'hide';
    document.getElementById("1-2").className = 'hide';
    document.getElementById("1-3").className = 'hide';
    document.getElementById('1-4').className = 'show';
    document.getElementById("1-5").className = 'hide';
    document.getElementById("1-6").className = 'hide';
    document.getElementById("navlist").className = 'show-parts';
    document.getElementById("bonnet").className = 'bonnet-full';
    document.getElementById("text-icon1").innerHTML = "капот полностью";
    document.getElementById("wings").className = 'wings-full';
    document.getElementById("text-icon2").innerHTML = "крылья полностью";
}

function standart2PlusMiddle() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мазда/стандарт++.jpg')";
    document.getElementById("2-1").className = 'hide';
    document.getElementById("2-2").className = 'hide';
    document.getElementById("2-3").className = 'hide';
    document.getElementById('2-4').className = 'show';
    document.getElementById("2-5").className = 'hide';
    document.getElementById("2-6").className = 'hide';
    document.getElementById("navlist").className = 'show-parts';
    document.getElementById("bonnet").className = 'bonnet-full';
    document.getElementById("text-icon1").innerHTML = "капот полностью";
    document.getElementById("wings").className = 'wings-full';
    document.getElementById("text-icon2").innerHTML = "крылья полностью";
}

function standart2PlusPremium() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мерседес/стандарт++.jpg')";
    document.getElementById("3-1").className = 'hide';
    document.getElementById("3-2").className = 'hide';
    document.getElementById("3-3").className = 'hide';
    document.getElementById('3-4').className = 'show';
    document.getElementById("3-5").className = 'hide';
    document.getElementById("3-6").className = 'hide';
    document.getElementById("navlist").className = 'show-parts';
    document.getElementById("bonnet").className = 'bonnet-full';
    document.getElementById("text-icon1").innerHTML = "капот полностью";
    document.getElementById("wings").className = 'wings-full';
    document.getElementById("text-icon2").innerHTML = "крылья полностью";
}

function standart3PlusMini() {
    document.getElementById("car-image").style.backgroundImage = "url('images/ситроен/стандарт+++.jpg')";
    document.getElementById("1-1").className = 'hide';
    document.getElementById("1-2").className = 'hide';
    document.getElementById("1-3").className = 'hide';
    document.getElementById("1-4").className = 'hide';
    document.getElementById('1-5').className = 'show';
    document.getElementById("1-6").className = 'hide';
    document.getElementById("navlist").className = 'show-parts';
    document.getElementById("bonnet").className = 'bonnet-full';
    document.getElementById("text-icon1").innerHTML = "капот полностью";
    document.getElementById("wings").className = 'wings-full';
    document.getElementById("text-icon2").innerHTML = "крылья полностью";
}

function standart3PlusMiddle() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мазда/стандарт+++.jpg')";
    document.getElementById("2-1").className = 'hide';
    document.getElementById("2-2").className = 'hide';
    document.getElementById("2-3").className = 'hide';
    document.getElementById("2-4").className = 'hide';
    document.getElementById("2-5").className = 'show';
    document.getElementById("2-6").className = 'hide';
    document.getElementById("navlist").className = 'show-parts';
    document.getElementById("bonnet").className = 'bonnet-full';
    document.getElementById("text-icon1").innerHTML = "капот полностью";
    document.getElementById("wings").className = 'wings-full';
    document.getElementById("text-icon2").innerHTML = "крылья полностью";
}

function standart3PlusPremium() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мерседес/стандарт+++.jpg')";
    document.getElementById("3-1").className = 'hide';
    document.getElementById("3-2").className = 'hide';
    document.getElementById("3-3").className = 'hide';
    document.getElementById("3-4").className = 'hide';
    document.getElementById("3-5").className = 'show';
    document.getElementById("3-6").className = 'hide';
    document.getElementById("navlist").className = 'show-parts';
    document.getElementById("bonnet").className = 'bonnet-full';
    document.getElementById("text-icon1").innerHTML = "капот полностью";
    document.getElementById("wings").className = 'wings-full';
    document.getElementById("text-icon2").innerHTML = "крылья полностью";
}

function fullMini() {
    document.getElementById("car-image").style.backgroundImage = "url('images/ситроен/целиком.jpg')";
    document.getElementById("1-1").className = 'hide';
    document.getElementById("1-2").className = 'hide';
    document.getElementById("1-3").className = 'hide';
    document.getElementById("1-4").className = 'hide';
    document.getElementById("1-5").className = 'hide';
    document.getElementById("1-6").className = 'show';
    document.getElementById("navlist").className = 'hide-parts';
}

function fullMiddle() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мазда/целиком.jpg')";
    document.getElementById('2-1').className = 'hide';
    document.getElementById("2-2").className = 'hide';
    document.getElementById("2-3").className = 'hide';
    document.getElementById("2-4").className = 'hide';
    document.getElementById("2-5").className = 'hide';
    document.getElementById("2-6").className = 'show';
    document.getElementById("navlist").className = 'hide-parts';
}

function fullPremium() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мерседес/целиком.jpg')";
    document.getElementById("3-1").className = 'hide';
    document.getElementById("3-2").className = 'hide';
    document.getElementById("3-3").className = 'hide';
    document.getElementById("3-4").className = 'hide';
    document.getElementById("3-5").className = 'hide';
    document.getElementById("3-6").className = 'show';
    document.getElementById("navlist").className = 'hide-parts';
}

function partialPlansMini(){
    document.getElementById("navlist").className = 'hide-parts';
}

function partialPlansMiddle(){
    document.getElementById("navlist").className = 'hide-parts';
}

function partialPlansPremium(){
    document.getElementById("navlist").className = 'hide-parts';
}




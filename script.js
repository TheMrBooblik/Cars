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
}

function minimalMiddle() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мазда/минимальный.jpg')";
    document.getElementById("2-1").className = 'show';
    document.getElementById("2-2").className = 'hide';
    document.getElementById("2-3").className = 'hide';
    document.getElementById("2-4").className = 'hide';
    document.getElementById("2-5").className = 'hide';
    document.getElementById("2-6").className = 'hide';
}

function minimalPremium() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мерседес/минимальный.jpg')";
    document.getElementById("3-1").className = 'show';
    document.getElementById("3-2").className = 'hide';
    document.getElementById("3-3").className = 'hide';
    document.getElementById("3-4").className = 'hide';
    document.getElementById("3-5").className = 'hide';
    document.getElementById("3-6").className = 'hide';
}

function standartMini() {
    document.getElementById("car-image").style.backgroundImage = "url('images/ситроен/стандарт.jpg')";
    document.getElementById("1-1").className = 'hide';
    document.getElementById('1-2').className = 'show';
    document.getElementById("1-3").className = 'hide';
    document.getElementById("1-4").className = 'hide';
    document.getElementById("1-5").className = 'hide';
    document.getElementById("1-6").className = 'hide';
}

function standartMiddle() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мазда/стандарт.jpg')";
    document.getElementById("2-1").className = 'hide';
    document.getElementById("2-2").className = 'show';
    document.getElementById("2-3").className = 'hide';
    document.getElementById("2-4").className = 'hide';
    document.getElementById("2-5").className = 'hide';
    document.getElementById("2-6").className = 'hide';
}

function standartPremium() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мерседес/стандарт.jpg')";
    document.getElementById("3-1").className = 'hide';
    document.getElementById("3-2").className = 'show';
    document.getElementById("3-3").className = 'hide';
    document.getElementById("3-4").className = 'hide';
    document.getElementById("3-5").className = 'hide';
    document.getElementById("3-6").className = 'hide';
}

function standartPlusMini() {
    document.getElementById("car-image").style.backgroundImage = "url('images/ситроен/стандарт+.jpg')";
    document.getElementById("1-1").className = 'hide';
    document.getElementById("1-2").className = 'hide';
    document.getElementById("1-3").className = 'show';
    document.getElementById("1-4").className = 'hide';
    document.getElementById("1-5").className = 'hide';
    document.getElementById("1-6").className = 'hide';
}

function standartPlusMiddle() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мазда/стандарт+.jpg')";
    document.getElementById("2-1").className = 'hide';
    document.getElementById("2-2").className = 'hide';
    document.getElementById("2-3").className = 'show';
    document.getElementById("2-4").className = 'hide';
    document.getElementById("2-5").className = 'hide';
    document.getElementById("2-6").className = 'hide';
}

function standartPlusPremium() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мерседес/стандарт+.jpg')";
    document.getElementById("3-1").className = 'hide';
    document.getElementById("3-2").className = 'hide';
    document.getElementById("3-3").className = 'show';
    document.getElementById("3-4").className = 'hide';
    document.getElementById("3-5").className = 'hide';
    document.getElementById("3-6").className = 'hide';
}

function standart2PlusMini() {
    document.getElementById("car-image").style.backgroundImage = "url('images/ситроен/стандарт++.jpg')";
    document.getElementById("1-1").className = 'hide';
    document.getElementById("1-2").className = 'hide';
    document.getElementById("1-3").className = 'hide';
    document.getElementById('1-4').className = 'show';
    document.getElementById("1-5").className = 'hide';
    document.getElementById("1-6").className = 'hide';
}

function standart2PlusMiddle() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мазда/стандарт++.jpg')";
    document.getElementById("2-1").className = 'hide';
    document.getElementById("2-2").className = 'hide';
    document.getElementById("2-3").className = 'hide';
    document.getElementById('2-4').className = 'show';
    document.getElementById("2-5").className = 'hide';
    document.getElementById("2-6").className = 'hide';
}

function standart2PlusPremium() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мерседес/стандарт++.jpg')";
    document.getElementById("3-1").className = 'hide';
    document.getElementById("3-2").className = 'hide';
    document.getElementById("3-3").className = 'hide';
    document.getElementById('3-4').className = 'show';
    document.getElementById("3-5").className = 'hide';
    document.getElementById("3-6").className = 'hide';
}

function standart3PlusMini() {
    document.getElementById("car-image").style.backgroundImage = "url('images/ситроен/стандарт+++.jpg')";
    document.getElementById("1-1").className = 'hide';
    document.getElementById("1-2").className = 'hide';
    document.getElementById("1-3").className = 'hide';
    document.getElementById("1-4").className = 'hide';
    document.getElementById('1-5').className = 'show';
    document.getElementById("1-6").className = 'hide';
}

function standart3PlusMiddle() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мазда/стандарт+++.jpg')";
    document.getElementById("2-1").className = 'hide';
    document.getElementById("2-2").className = 'hide';
    document.getElementById("2-3").className = 'hide';
    document.getElementById("2-4").className = 'hide';
    document.getElementById("2-5").className = 'show';
    document.getElementById("2-6").className = 'hide';
}

function standart3PlusPremium() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мерседес/стандарт+++.jpg')";
    document.getElementById("3-1").className = 'hide';
    document.getElementById("3-2").className = 'hide';
    document.getElementById("3-3").className = 'hide';
    document.getElementById("3-4").className = 'hide';
    document.getElementById("3-5").className = 'show';
    document.getElementById("3-6").className = 'hide';
}

function fullMini() {
    document.getElementById("car-image").style.backgroundImage = "url('images/ситроен/целиком.jpg')";
    document.getElementById("1-1").className = 'hide';
    document.getElementById("1-2").className = 'hide';
    document.getElementById("1-3").className = 'hide';
    document.getElementById("1-4").className = 'hide';
    document.getElementById("1-5").className = 'hide';
    document.getElementById("1-6").className = 'show';
}

function fullMiddle() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мазда/целиком.jpg')";
    document.getElementById('2-1').className = 'hide';
    document.getElementById("2-2").className = 'hide';
    document.getElementById("2-3").className = 'hide';
    document.getElementById("2-4").className = 'hide';
    document.getElementById("2-5").className = 'hide';
    document.getElementById("2-6").className = 'show';
}

function fullPremium() {
    document.getElementById("car-image").style.backgroundImage = "url('images/мерседес/целиком.jpg')";
    document.getElementById("3-1").className = 'hide';
    document.getElementById("3-2").className = 'hide';
    document.getElementById("3-3").className = 'hide';
    document.getElementById("3-4").className = 'hide';
    document.getElementById("3-5").className = 'hide';
    document.getElementById("3-6").className = 'show';
}





const ptaki = ["Koliber o nazwie pszczelarz jest najmniejszym ptakiem na świecie.",
             "Sokół wędrowny może osiągnąć prędkość ponad 300 km/h podczas nurkowania.",
             "Kiwi jest ptakiem, który nie posiada skrzydeł.",
             "Sowy mają niezwykłe zdolności słuchowe dzięki umiejscowieniu uszu na różnych wysokościach.",
             "Gołębie pocztowe potrafią odnaleźć swoje gniazdo z odległości nawet 1300 kilometrów."];

const drzewa = ["Hyperion to najwyższe drzewo na świecie, mierzące 115,85 metra.",
              "Drzewa są naturalnymi oczyszczaczami powietrza, absorbując dwutlenek węgla.",
              "Drzewa sekwojowe są najgrubszymi drzewami na świecie.",
              "Drzewa mogą komunikować się za pomocą substancji chemicznych i sieci grzybów w ziemi.",
              "Drzewo baobab przechowuje wodę w swoim pniu, umożliwiając przetrwanie w suchych regionach."];

const kwiaty = ["Orkidea Wanilia jest hodowana w celu produkcji naturalnej wanilii.",
              "Nocna perfumka emituje intensywny i przyjemny zapach o zmierzchu.",
              "Kwiat rafflesii to największy kwiat na świecie.",
              "Kwiat lotosu ma symboliczne znaczenie w wielu kulturach. U buddystów oznacza on oczysczenie.",
              "Kaktus epifityczny kwitnie tylko na jedną noc w roku."];

const planety = ["Jowisz jest największą planetą w Układzie Słonecznym.",
               "Wenus jest najgorętszą planetą w Układzie Słonecznym.",
               "Mars posiada najwyższą górę w Układzie Słonecznym - Olimp.",
               "Saturn jest znany ze swojego systemu pierścieni.",
               "Na Neptunie występują bardzo silne wiatry."];

const konie = ["Koń może spać zarówno stojąc, jak i leżąc.",
             "Konie posiadają duże, wydajne serca.",
             "Koń może zobaczyć w prawie 360-stopniowym polu widzenia.",
             "Każdy koń ma unikalne odciski kopyt.",
             "Koń jest jednym z najstarszych zwierząt udomowionych przez człowieka."];
var watchedVideos = 0;
var selectedQuestions = new Array();
function menuToggle(){
  const menu = document.querySelector('.menu');
  menu.classList.toggle('open');
};
function toggleDiv(index) {
  const icon = document.querySelectorAll(".lesson-nav");
  const div = document.querySelectorAll(".lesson-video");
  div[index].classList.toggle("lesson-video-hidden");
  icon[index].classList.toggle("rotated");
  for (var i = 0; i < div.length; i++) {
    if (div[i] !== div[index]) {
      div[i].classList.remove("lesson-video-hidden");
      icon[i].classList.remove("rotated");
    }
  }
};
function menuClicked(index) {
  if(index != null){
    toggleDiv(index);
  }
  menuToggle();
}
function watched(index) {
  const tableData = document.querySelectorAll(".table-data");
  const videoButton = document.querySelectorAll(".video-button");
  const videoTitle = document.querySelectorAll(".video-title");
  videoTitle[index].style.color = "gray";
  videoButton[index].style.backgroundColor = "gray";
  videoButton[index].style.cursor = "not-allowed";
  videoButton[index].textContent = "Obejrzane";
  videoButton[index].disabled = true;
  tableData[index].textContent = "✓";
  tableData[index].style.color = "green";
  watchedVideos += 1;
  toggleDiv(index);
};
function switchCuriosity() {
  const curiosityImg = document.getElementById("curiosity-img");
  const curiosity = document.querySelector(".curiosity-text");
  const randomIndex = Math.floor(Math.random() * 5);
  const randomCategory = Math.floor(Math.random() * 5);
  const category = [ptaki[randomIndex], drzewa[randomIndex], kwiaty[randomIndex], planety[randomIndex], konie[randomIndex]];
  curiosity.textContent = "Ciekawostka: " + category[randomCategory];
  switch (randomCategory) {
    case 0:
      curiosityImg.src="./icons/bird.png";
      break;
    case 1:
      curiosityImg.src="./icons/tree.png";
      break;
    case 2:
      curiosityImg.src="./icons/flower.png";
      break;
    case 3:
      curiosityImg.src="./icons/earth.png";
      break;
    case 4:
      curiosityImg.src="./icons/horse.png";
      break;
    default:
      console.log("Default");
      break;
  }
};
function loadDoc(url) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("page").innerHTML = this.responseText;
    randomizeQuestion();
  };
  xhttp.open("GET", url);
  xhttp.send();
};
function startQuiz() {
  if(watchedVideos == 3){
    loadDoc("pages/quiz.html");
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    alert("Nie jesteś jeszcze gotów! Obejrzyj wszystkie materiały wideo na stronie aby uzyskać dostęp!");
  }
};
function backToMain() {
  loadDoc("index.php");
};
function inputToggle(index) {
  const inputs = document.querySelectorAll("input[type='radio']");
  inputs[index].checked = true;
};
function randomizeQuestion() {
  const questionTitle = document.querySelectorAll("h2");
  const inputs = document.querySelectorAll("p");
  var j = 0;
  for(var i=0; i<5; i++){
    const randomQuestion = Math.floor(Math.random() * 10);
    if(!selectedQuestions.includes(randomQuestion)){
      const name = "question" + randomQuestion;
      const questionName = name + ".question";
      const answersName = [
        name + ".A",
        name + ".B",
        name + ".C",
        name + ".D"
      ];
      for(var temp=0; temp<4; temp++){
        inputs[j+temp].textContent = eval(answersName[temp]);
      }
      j += 4;
      questionTitle[i].textContent = i+1 + ". " + eval(questionName);
      selectedQuestions.push(randomQuestion);
    } else{
      i -= 1;
    }
  };
};
function checkAnswers() {
  var score = 0;
  const total = 5;
  var correctUserAnswers = new Array();
  for(var i = 1; i <= total; i++){
    if(document.querySelector('input[name=q' + i + ']:checked')){
      var userAnswer = document.querySelector('input[name=q' + i + ']:checked').value;
      var currentQuestion = eval("correctAnswers.question" + selectedQuestions[i-1]);
      if (userAnswer == currentQuestion) {
        correctUserAnswers.push("✓");
        score++;
      } else{
        correctUserAnswers.push("✖");
      };
    }else {
      correctUserAnswers.push("✖");
    };
  };  
  const singleResult = document.querySelectorAll(".result-single");
  for(var i = 0; i < 5; i++){
    singleResult[i].textContent = i+1+ ". " + correctUserAnswers[i];
    if(correctUserAnswers[i] == "✓"){
      singleResult[i].style.color = "green";
    } else{
      singleResult[i].style.color = "red";
    };
  };
  const result = document.getElementById('result');
  const overlay = document.getElementById('overlay');
  const scoreText = document.getElementById('score');
  const form = document.querySelector('.form');
  const info = document.querySelector('.result-info');
  if(score === 5){
    form.style.display = "block";
    info.textContent = "*Zakwalifikowałeś się do otrzymania certyfikatu Wypełnij formularz i czekaj na wiadomość e-mail"
    info.style.color = "green";
  } else {
    info.textContent = "*Nie zakwalifokałeś się do otrzymania certyfikatu. Wymagane jest 5 punktów.";
    info.style.color = "red";
  }
  scoreText.innerHTML = 'Twój wynik: ' + score + ' / ' + total;
  result.style.display = "block";
  overlay.style.display = "block";
}
function hideOverlay(){
  const result = document.getElementById('result');
  const overlay = document.getElementById('overlay');
  result.style.display = "none";
  overlay.style.display = "none";
};
const question0 = {
  question: "Jakie są główne źródła emisji gazów cieplarnianych?",
  A: "Energia wiatru",
  B: "Przemysł lotniczy",
  C: "Transport drogowy",
  D: "Energia słoneczna",
};
const question1 = {
  question: "Co oznacza skrót 'CO2'?",
  A: "Węglowodór",
  B: "Dwutlenek węgla",
  C: "Węglan",
  D: "Tlenek węgla",
};
const question2 = {
  question: "Jakie jest najważniejsze źródło wody pitnej dla większości społeczeństwa?",
  A: "Woda destylowana",
  B: "Woda butelkowana",
  C: "Woda z kranu",
  D: "Woda mineralna",
};
const question3 = {
  question: "Które z poniższych działań może pomóc w redukcji emisji CO2?",
  A: "Utrzymywanie otwartych okien przez cały dzień",
  B: "Korzystanie z energooszczędnych żarówek",
  C: "Wyrzucanie śmieci na drogę",
  D: "Palenie odpadów w ogrodzie",
};
const question4 = {
  question: "Co to jest recykling?",
  A: "Proces produkcji nowych materiałów z odpadów",
  B: "Spalanie odpadów w celu wytworzenia energii",
  C: "Zabawa z recznikami na basenie",
  D: "Proces niszczenia produktów",
};
const question5 = {
  question: "Który z poniższych materiałów jest biodegradowalny?",
  A: "Plastik",
  B: "Szkło",
  C: "Papier",
  D: "Aluminium",
};
const question6 = {
  question: "Jakie są korzyści wynikające z sadzenia drzew?",
  A: "Produkcja energii elektrycznej",
  B: "Utrzymanie równowagi klimatycznej",
  C: "Zwiększenie zanieczyszczenia powietrza",
  D: "Wywołanie zmian klimatycznych",
};
const question7 = {
  question: "Co to jest efekt cieplarniany?",
  A: "Proces fotosyntezy w roślinach",
  B: "Zjawisko spowodowane zdolnością atmosfery do przepuszczania dużej części promieniowania słonecznego",
  C: "Obniżenie temperatury powietrza w okolicach roślinności",
  D: "Proces chłodzenia Ziemi przez ocean",
};
const question8 = {
  question: "Co to jest zrównoważony rozwój?",
  A: "Wzrost gospodarczy bez uwzględnienia ochrony środowiska",
  B: "Zaspokajanie potrzeb obecnego pokolenia bez szkody dla przyszłych pokoleń",
  C: "Zachowanie status quo w dziedzinie rozwoju technologicznego",
  D: "Wykorzystywanie zasobów naturalnych w sposób niekontrolowany",
};
const question9 = {
  question: "Jakie są główne źródła zanieczyszczenia powietrza?",
  A: "Kondensatory",
  B: "Wulkany",
  C: "Transport samochodowy",
  D: "Słońce",
};
const correctAnswers = {
  question0: "c",
  question1: "b",
  question2: "d",
  question3: "b",
  question4: "a",
  question5: "c",
  question6: "b",
  question7: "b",
  question8: "b",
  question9: "c",
};
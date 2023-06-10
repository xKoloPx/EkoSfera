<?php
  require_once "includes/head.php";
?>
<div id="page">
<div class="content">
  <div class="menu">
    <img class="menu-toggle" onclick="menuToggle()" src="icons/menu-icon.png"/>
    <img class="logo" src="img/logo.png"/>
    <div class="menu-title">EkoSfera</div>
    <ul class="menu-items">
      <li><a href="#title" onclick="menuClicked()">Start</a></li>
      <li><a href="#lesson" onclick="menuClicked(0)">Wideo #1</a></li>
      <li><a href="#lesson" onclick="menuClicked(1)">Wideo #2</a></li>
      <li><a href="#lesson" onclick="menuClicked(2)">Wideo #3</a></li>
      <img src="icons/hills.png"/>
    </ul>
  </div>
  <section id="title">
    <div class="title">
      <img class="title-logo" src="img/logo.png" alt="logo"/>
      <div class="title-line"></div>
      <h1>EkoSfera</h1>
      <a href="#lesson" class="start-button" onclick="toggleDiv(0)">Rozpocznij teraz »</a>
    </div>
  </section>
  <div class="steps-title">Jak to działa?</div>
  <section id="steps">
    <div class="step">
      <img src="icons/tv.gif"/>
      <div class="step-underline"></div>
      <h1>1. Zapoznaj się z materiałami wideo.</h1>
    </div>
    <img src="icons/arrow-right.png"/>
    <div class="step">
      <img src="icons/quiz.gif"/>
      <div class="step-underline"></div>
      <h1>2. Wykonaj nasz prosty quiz.</h1>
    </div>
    <img src="icons/arrow-right.png"/>
    <div class="step">
      <img src="icons/certificate.gif"/>
      <div class="step-underline"></div>
      <h1>3. Ciesz się z certyfikatu obrońcy natury!</h1>
    </div>
  </section>
  <section id="lesson">
    <div class="steps-title" style="margin-bottom: 50px;">Materiały wideo</div>
  <!--LEKCJA I-->
    <div class="lesson-title">
      <h1 class="video-title">Wideo #1 | Różnorodność biologiczna</h1>
      <img class="lesson-nav" src="icons/arrow-down.png" onclick="toggleDiv(0)"/>
    </div>
    <div class="lesson-video">
      <iframe width="100%" height="600px" 
      src="https://www.youtube.com/embed/0ualvuVuHGc?rel=0&controls=0&modestbranding=1&showinfo=0" 
      frameborder="0" allowfullscreen></iframe>
      <button class="video-button" onclick="watched(0)">Oznacz jako obejrzane</button>
    </div>
    <!--LEKCJA II-->
    <div class="lesson-title" style="border-top-left-radius: 0px; border-top-right-radius: 0px;">
      <h1 class="video-title">Wideo #2 | Formy ochrony przyrody</h1>
      <img class="lesson-nav" src="icons/arrow-down.png" onclick="toggleDiv(1)"/>
    </div>
    <div class="lesson-video">
      <iframe width="100%" height="600px" 
      src="https://www.youtube.com/embed/jSqRUTVjCmw?rel=0&controls=0&modestbranding=1&showinfo=0" 
      frameborder="0"></iframe>
      <button class="video-button" onclick="watched(1)">Oznacz jako obejrzane</button>
    </div>
    <!--LEKCJA III-->
    <div class="lesson-title" style="border-top-left-radius: 0px; border-top-right-radius: 0px;">
      <h1 class="video-title">Wideo #3 | Zasada zrównoważonego rozwoju</h1>
      <img class="lesson-nav" src="icons/arrow-down.png" onclick="toggleDiv(2)"/>
    </div>
    <div class="lesson-video">
      <iframe width="100%" height="600px" 
      src="https://www.youtube.com/embed/QRJLLNWvqBc?rel=0&controls=0&modestbranding=1&showinfo=0" 
      frameborder="0"></iframe>
      <button class="video-button" onclick="watched(2)">Oznacz jako obejrzane</button>
    </div>
    <div class="steps-title" style="margin-top: 50px;">Przystąp do quizu</div>
    <div class="table">
      <table>
        <tr>
          <th colspan="4" style="border-bottom: 2px solid #072c3f;">Twój postęp</th>
        </tr>
        <tr>
          <th style="border-bottom: 2px solid #072c3f; border-right: 2px solid #072c3f;">Materiał wideo</th>
          <td style="border-bottom: 2px solid #072c3f; border-right: 2px solid #072c3f;"><a href="#lesson" onclick="toggleDiv(0)">#1</a></td>
          <td style="border-bottom: 2px solid #072c3f; border-right: 2px solid #072c3f;"><a href="#lesson" onclick="toggleDiv(1)">#2</a></td>
          <td style="border-bottom: 2px solid #072c3f;"><a href="#lesson" onclick="toggleDiv(2)">#3</a></td>
        </tr>
        <tr>
          <th style="border-right: 2px solid #072c3f;">Obejrzany?</th>
          <td class="table-data" style="border-right: 2px solid #072c3f;">❌</td>
          <td class="table-data" style="border-right: 2px solid #072c3f;">❌</td>
          <td class="table-data">❌</td>
        </tr>
      </table>
      <div class="quiz-enter">
        <img src="icons/list.png"/>
        <button class="start-button" style="margin-left: -15px; margin-top: 10px;" onclick="startQuiz()">Gotowy!</button>
        <h3 class="quiz-note">*Do przystąpienia wymagane jest obejrzenie każdego materiału wideo.</h3>
      </div>
    </div>


    <div class="steps-title" style="margin-top: 50px;">Żądny więcej wiedzy?</div>
    <div class="curiosity">
      <img id="curiosity-img" src="icons/bird.png"/>
      <div class="title-line"></div>
      <h2 class="curiosity-text">Ciekawostka: Koliber o nazwie pszczelarz jest najmniejszym ptakiem na świecie.</h2>
      <button class="video-button" onclick="switchCuriosity()">Losuj inną</button>
    </div>
    <div class="footer">
      <div class="footer-left">
        <h3>EkoSfera 2023 | Stworzona z ♥ do ❀</h3>
      </div>
      <div class="footer-right">
        <a href="#title"><img src="icons/arrow-down.png"/></a>
      </div>
    </div>
  </section>
</div>
</div>
<script src="js/script.js"></script>
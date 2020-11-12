




document.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let device;
    device          = {
      'phone':        false,
      'tablet':       false,
      'desktop':      false
    };

    // IE safe
    document.createElement('main');










    // ---------- DETECTION device
    (function() {

      Device();
      window.onresize = Device;

      function Device() {
        if (window.innerWidth < 768) {
          device.phone      = true;
          device.tablet     = false;
          device.desktop    = false;
          console.log('----- device.phone');
        } else if ((window.innerWidth >= 768) && (window.innerWidth < 1024)) {
          device.phone      = false;
          device.tablet     = true;
          device.desktop    = false;
          console.log('----- device.tablet');
        } else if (window.innerWidth >= 1024) {
          device.phone      = false;
          device.tablet     = false;
          device.desktop    = true;
          console.log('----- device.desktop');
        } else {
          console.error('function Device() non détecté');
        }
      }// function Device() {

    }());
    // ---------- /DETECTION device










    function FadeIn(p_elt, p_display = 'block') {

      // ----- Init
      let cible, fadeIncr;
      cible = document.getElementById(p_elt);
      cible.style.opacity = 0;
      cible.style.display = p_display;
      fadeIncr = 0.1;

      // ----- Traitement
      (function Fade() {
        let opacite;
        opacite = parseFloat(cible.style.opacity);
        if (!((opacite += fadeIncr) > 1)) {
          cible.style.opacity = opacite;
          requestAnimationFrame(Fade);
        }
      })();

    }// function FadeIn(p_elt, display){



    function FadeOut(p_elt){

      // ----- Init
      let cible, fadeIncr;
      cible = document.getElementById(p_elt);
      fadeIncr = 0.1;
      cible.style.opacity = 1;

      // ----- Traitement
      (function Fade() {
        if ((cible.style.opacity -= fadeIncr) < 0) {
          cible.style.display = 'none';
        } else {
          requestAnimationFrame(Fade);
        }
      })();

    }// function FadeOut(p_elt){

});

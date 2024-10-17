 (function() {
     var defaultMatch = "For you";
     
     function fixYou() {
         let firstSelected = document.querySelectorAll('[href="/home"][aria-selected="true"]')[0];
         let text = firstSelected.textContent;
         
         if(text == defaultMatch){
             document.querySelectorAll('[href="/home"][aria-selected="false"]')[0].click();
         }
     }

     const observer = new MutationObserver((mutations) => { fixYou() });
     observer.observe(document.body, { childList: true, subtree: true });
     window.addEventListener('load', () => { fixYou(); });
 })();

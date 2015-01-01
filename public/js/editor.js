document.addEventListener("DOMContentLoaded", function(event) {
  var editor = new wysihtml5.Editor(document.querySelector('.editor'), {
    toolbar: document.querySelector('.toolbar'),
    parserRules:  wysihtml5ParserRules // defined in file parser rules javascript
  });
});


const styleElem = document.createElement('style');
const styleRules = `.dynamically-managed {
  background-color: black; /* matrix/1337 mode */
  color: #00FF00;
}`
styleElem.innerText = styleRules;
document.body.appendChild(styleElem);
document.querySelector('p').classList.add('dynamically-managed');
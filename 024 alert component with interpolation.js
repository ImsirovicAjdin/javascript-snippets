/*
024 ALERT component with interpolated vars
*/
var alertClass = prompt('Type alert class');

var div = document.createElement('div');
div.setAttribute('class', 'container-fluid');
div.innerHTML = `
    <div class="alert ${alertClass}" role="alert">
  A simple primary alert—check it out!
</div>
`;
document.body.appendChild(div);
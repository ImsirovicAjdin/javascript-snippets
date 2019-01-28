/*
021 Add the ALERT Bootstrap component via JS
*/

var div = document.createElement('div');
div.setAttribute('class', 'container-fluid');
div.innerHTML = `
    <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
`;
document.body.appendChild(div);
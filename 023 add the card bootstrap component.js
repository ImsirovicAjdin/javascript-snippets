/*
023 Add the CARD Bootstrap component via JS
*/

var div = document.createElement('div');
div.setAttribute('class', 'container-fluid');
div.innerHTML = `
    <div class="card">
      <div class="card-header">
        Personal Info
      </div>
      <div class="card-body">
        <h5 class="card-title">Name: Ajdin Imsirovic</h5>
        <p class="card-text">
            Email: name.lastname@email.com <br>
            Website: example.com <br>
        </p>
      </div>
    </div>
`;
document.body.appendChild(div);
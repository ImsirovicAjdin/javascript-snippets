/*
025 all Bootstrap 4 components
*/

var addNewComponent = 
    prompt("Type component name \n" +
        "alert-primary \n" +
        "card-primary \n" +
        "navbar \n" +
        `carousel slides only
         carousel with controls
         carousel with indicators
         carousel with captions`
    );

// Actual components added as innerHTML

// ALERT COMPONENT
function addAlert(alertClass){
    var addedAlert = document.createElement('div');
    addedAlert.setAttribute('class', 'container-fluid');
    addedAlert.innerHTML = `
        <div class="alert ${alertClass}" role="alert">
          A simple ${alertClass} - check it out!
        </div>
    `;
    document.body.appendChild(addedAlert);
}

// BADGE
function addBadge(badgeClass){
    var addedBadge = document.createElement('div');
    addedBadge.setAttribute('class', 'container-fluid');
    addedBadge.innerHTML = `
        <span class="badge ${badgeClass}">${badgeClass}</span>
    `;
    document.body.appendChild(addedBadge);
}

// BREADCRUMBS
function addBreadcrumbs(first, second, third){
    var addedBreadcrumbs = document.createElement('div');
    addedBreadcrumbs.setAttribute('class', 'container-fluid');
    addedBreadcrumbs.innerHTML = `
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">${first}</a></li>
            <li class="breadcrumb-item"><a href="#">${second}</a></li>
            <li class="breadcrumb-item active" aria-current="page">${third}</li>
          </ol>
        </nav>
    `;
    document.body.appendChild(addedBreadcrumbs);
}

// BUTTON
function addButton(buttonClass){
    var addedButton = document.createElement('div');
    addedButton.setAttribute('class', 'container-fluid');
    addedButton.innerHTML = `
        <button type="button" class="btn ${buttonClass}">
            ${buttonClass}
        </button>
    `;
    document.body.appendChild(addedButton);
}

// BUTTON GROUP
function addButtonGroup(buttonClass){
    var firstBtnTxt = prompt('Type txt for the first btn');
    var secondBtnTxt = prompt('Type txt for the second btn');
    var thirdBtnTxt = prompt('Type txt for the third btn');
    var horizontalOrVertical = prompt('Horizontal or vertical button group? type btn-group or btn-group-vertical');

    var addedButtonGroup = document.createElement('div');
    addedButtonGroup.setAttribute('class', 'container-fluid');
    addedButtonGroup.innerHTML = `
        <div class="${horizontalOrVertical}" role="group" aria-label="Basic example">
          <button type="button" class="btn ${buttonClass}">${firstBtnTxt}</button>
          <button type="button" class="btn ${buttonClass}">${secondBtnTxt}</button>
          <button type="button" class="btn ${buttonClass}">${thirdBtnTxt}</button>
        </div>
    `;
    document.body.appendChild(addedButtonGroup);
}
    // BUTTON TOOLBAR (part of BUTTON GROUP)
function addButtonToolbar(buttonClass){
    var b = prompt('Type txt for the 1st btn');
    var u = prompt('Type txt for the 2nd btn');
    var tt = prompt('Type txt for the 3rd btn');
    var o = prompt('Type txt for the 4th btn');
    var n = prompt('Type txt for the 5th btn');
    var s = prompt('Type txt for the 6th btn');
    var _7 = prompt('Type txt for the 7th btn');
    var _8 = prompt('Type txt for the 8th btn');

    var addedButtonToolbar = document.createElement('div');
    addedButtonToolbar.setAttribute('class', 'container-fluid');
    addedButtonToolbar.innerHTML = `
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn ${buttonClass}">${b}</button>
            <button type="button" class="btn ${buttonClass}">${u}</button>
            <button type="button" class="btn ${buttonClass}">${tt}</button>
            <button type="button" class="btn ${buttonClass}">${o}</button>
          </div>
          <div class="btn-group mr-2" role="group" aria-label="Second group">
            <button type="button" class="btn ${buttonClass}">${n}</button>
            <button type="button" class="btn ${buttonClass}">${s}</button>
            <button type="button" class="btn ${buttonClass}">${_7}</button>
          </div>
          <div class="btn-group" role="group" aria-label="Third group">
            <button type="button" class="btn ${buttonClass}">${_8}</button>
          </div>
        </div>
    `;
    document.body.appendChild(addedButtonToolbar);
}

// CARD
function addCard1(){
    var c = prompt('Type the width of the card in rems, e.g. 18rem');
    var u = prompt('Paste in the card image URL');
    var s = prompt('Type the card title');
    var t = prompt('Type the card text');
    var o = prompt('Type the class for the CTA button, e.g. btn-danger');
    var m = prompt('Type the text inside the CTA button');

    var addedCard1 = document.createElement('div');
    addedCard1.setAttribute('class', 'container-fluid');
    addedCard1.innerHTML = `
        <div class="card" style="width: ${c};">
          <img src="${u}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${s}</h5>
            <p class="card-text">${t}</p>
            <a href="#" class="btn ${o}">${m}</a>
          </div>
        </div>
    `;
    document.body.appendChild(addedCard1);
}

// CAROUSEL
function addCarousel1(){
    var s = confirm('Use default image for first slide?');
    if (s !== true){
        s = prompt('Paste in the first image URL');
    } else {
        s = 'https://images.pexels.com/photos/1701893/pexels-photo-1701893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }

    var l = confirm('Use default image for second slide?');
    if (l !== true) {
        var l = prompt('Paste in the second image URL');
    } else {
        l = 'https://images.pexels.com/photos/1701893/pexels-photo-1701893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }

    var i = confirm('Use default image for first slide?');
    if (i !== true){
        i = prompt('Paste in the first image URL');
    } else {
        i = 'https://images.pexels.com/photos/1701893/pexels-photo-1701893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }

    var d;
    var e;

    var addedCarousel1 = document.createElement('div');
    addedCarousel1.setAttribute('class', 'container-fluid');
    addedCarousel1.innerHTML = `
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="${s}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="${l}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="${i}" class="d-block w-100" alt="...">
            </div>
          </div>
        </div>
    `;
    document.body.appendChild(addedCarousel1);
}

function addCarousel2(){
    var s = confirm('Use default image for first slide?');
    if (s !== true){
        s = prompt('Paste in the first image URL');
    } else {
        s = 'https://images.pexels.com/photos/1701893/pexels-photo-1701893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }

    var l = confirm('Use default image for second slide?');
    if (l !== true) {
        var l = prompt('Paste in the second image URL');
    } else {
        l = 'https://images.pexels.com/photos/1701893/pexels-photo-1701893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }

    var i = confirm('Use default image for first slide?');
    if (i !== true){
        i = prompt('Paste in the first image URL');
    } else {
        i = 'https://images.pexels.com/photos/1701893/pexels-photo-1701893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
    
    var d;
    var e;

    var addCarousel2 = document.createElement('div');
    addCarousel2.setAttribute('class', 'container-fluid');
    addCarousel2.innerHTML = `
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="${s}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="${l}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="${i}" class="d-block w-100" alt="...">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
    `;
    document.body.appendChild(addCarousel2);
}

function addCarousel3(){
    var s = confirm('Use default image for first slide?');
    if (s !== true){
        s = prompt('Paste in the first image URL');
    } else {
        s = 'https://images.pexels.com/photos/1701893/pexels-photo-1701893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }

    var l = confirm('Use default image for second slide?');
    if (l !== true) {
        var l = prompt('Paste in the second image URL');
    } else {
        l = 'https://images.pexels.com/photos/1701893/pexels-photo-1701893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }

    var i = confirm('Use default image for first slide?');
    if (i !== true){
        i = prompt('Paste in the first image URL');
    } else {
        i = 'https://images.pexels.com/photos/1701893/pexels-photo-1701893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
    
    var d;
    var e;

    var addCarousel3 = document.createElement('div');
    addCarousel3.setAttribute('class', 'container-fluid');
    addCarousel3.innerHTML = `
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="${s}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="${l}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="${i}" class="d-block w-100" alt="...">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
    `;
    document.body.appendChild(addCarousel3);
}

function addCarousel4(){
    var s = confirm('Use default image for first slide?');
    if (s !== true){
        s = prompt('Paste in the first image URL');
    } else {
        s = 'https://images.pexels.com/photos/1701893/pexels-photo-1701893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }

    var l = confirm('Use default image for second slide?');
    if (l !== true) {
        var l = prompt('Paste in the second image URL');
    } else {
        l = 'https://images.pexels.com/photos/1701893/pexels-photo-1701893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }

    var i = confirm('Use default image for first slide?');
    if (i !== true){
        i = prompt('Paste in the first image URL');
    } else {
        i = 'https://images.pexels.com/photos/1701893/pexels-photo-1701893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
    
    var s1 = prompt('Add the first image caption heading');
    var s2 = prompt('Add the first image caption paragraph');
    var l1 = prompt('Add the second image caption heading')
    var l2 = prompt('Add the second image caption paragraph');
    var i1 = prompt('Add the third image caption heading')
    var i2 = prompt('Add the third image caption paragraph');

    var addCarousel4 = document.createElement('div');
    addCarousel4.setAttribute('class', 'container-fluid');
    addCarousel4.innerHTML = `
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="${s}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${s1}</h5>
                    <p>${s2}</p>
                </div>              
            </div>
            <div class="carousel-item">
              <img src="${l}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${l1}</h5>
                    <p>${l2}</p>
                </div>
            </div>
            <div class="carousel-item">
              <img src="${i}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${i1}</h5>
                    <p>${i2}</p>
                </div>              
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
    `;
    document.body.appendChild(addCarousel4);
}

// COLLAPSE
function addCollapse(){
    var button1Color = prompt('Choose btn 1 color, e.g. btn-primary');
    var button1Text = prompt('Type btn 1 text');
    var button2Color = prompt('Choose btn 2 color, e.g. btn-secondary');
    var button2Text = prompt('Type btn 2 text');
    var cardColor = prompt('Choose collapsed card color, e.g. card-primary');
    var cardText = prompt('Choose collapsed card text');

    var addedCollapse = document.createElement('div');
    addedCollapse.setAttribute('class', 'container-fluid');
    addedCollapse.innerHTML = `
        <p>
          <a class="btn ${button1Color}" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            ${button1Text}
          </a>
          <button class="btn ${button2Color}" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            ${button2Text}
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card ${cardColor}">
            ${cardText}            
          </div>
        </div>
    `;
    document.body.appendChild(addedCollapse);
}

// DROPDOWNS

function addDropdown(){
    var dropup = confirm('Is this a dropup? (Click NO for dropdown)');
        var dropright = confirm('Is this a dropright? (Click NO for dropdown)');
            var dropleft = confirm('Is this a dropleft? (Click NO for dropdown)');
    var btnColor = prompt('Choose btn color, e.g. btn-primary');
    var btnText = prompt('Choose btn text');
    var dropdownItem1 = prompt('dropdown item 1 text');
    var dropdownItem2 = prompt('dropdown item 2 text');
    var dropdownItem3 = prompt('dropdown item 3 text');
    var dropdownItem4 = prompt('dropdown item 4 text');

    var addedDropdown = document.createElement('div');
    addedDropdown.setAttribute('class', 'container-fluid');
    addedDropdown.innerHTML = `
        <div class="btn-group" + dropup ? "dropup" : "" + dropright ? "dropright" : "" + dropleft ? "dropleft" : "">
          <button type="button" class="btn ${btnColor} dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ${btnText}
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">${dropdownItem1}</a>
            <a class="dropdown-item" href="#">${dropdownItem2}</a>
            <a class="dropdown-item" href="#">${dropdownItem3}</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">${dropdownItem4}</a>
          </div>
        </div>
    `;
    document.body.appendChild(addedDropdown);
}
    // dropdown with a form
    function addDropdownWithForm(){    
        var dropup = confirm('Is this a dropup? (Click NO for dropdown)');
            var dropright = confirm('Is this a dropright? (Click NO for dropdown)');
                var dropleft = confirm('Is this a dropleft? (Click NO for dropdown)');
        var btnColor = prompt('Choose btn color, e.g. btn-primary');
        var btnText = prompt('Choose btn text');

        var addedDropdown = document.createElement('div');
        addedDropdown.setAttribute('class', 'container-fluid');
        addedDropdown.innerHTML = `
            <div class="btn-group" + dropup ? "dropup" : "" + dropright ? "dropright" : "" + dropleft ? "dropleft" : "">
              <button type="button" class="btn ${btnColor} dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ${btnText}
              </button>
              <div class="dropdown-menu">
                  <form class="px-4 py-3">
                    <div class="form-group">
                      <label for="exampleDropdownFormEmail1">Email address</label>
                      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
                    </div>
                    <div class="form-group">
                      <label for="exampleDropdownFormPassword1">Password</label>
                      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
                    </div>
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="dropdownCheck">
                      <label class="form-check-label" for="dropdownCheck">
                        Remember me
                      </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                  </form>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">New around here? Sign up</a>
                  <a class="dropdown-item" href="#">Forgot password?</a>
            </div>
        `;
        document.body.appendChild(addedDropdown);
    }

// FORMS
function addForm(){
    var addedForm = document.createElement('div');
    addedForm.setAttribute('class', 'container-fluid');
    var chooseForm = prompt(`Choose form: 
        email (1), select (2), multiple select (3), textarea (4), 
        file input (5), range (6), stacked checkboxes (7),
        stacked radios (8), inline checkboxes (9), inline radios (10),
        checkboxes and radios without labels (11), form group (12), 
        form grid (13), form row (14), complex layouts with the grid system (15),
        horizontal form (16), label and column sizing (17),
        auto-sizing (18), remixed with size-specific column classes (19),
        custom form controls (20), inline forms (21),
        custom form controls and selects inline (22),
        password with help text (23), inline password with help text (24),
        disabled form (25), custom validation (26),
        browser defaults (27), supported elements (28),
        tooltips (29), custom checkboxes (30),
        custom radios (31), disabled custom checkboxes and radios (32),
        select menu (33), multiple select menu (34),
        size attribute on select menu (35),
        custom range (36), custom file browser (37)`);
    switch(chooseForm) {
        case '1': //email
            addedForm.innerHTML = `
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                  </div>
                </form>
                `;
            alert('email form added');
            break;
        case '2': //'select'
            addedForm.innerHTML = `
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </form>
            `;
            alert('select form added');
            break;
        case '3': //'multiple select'
            addedForm.innerHTML = `
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlSelect2">Example multiple select</label>
                    <select multiple class="form-control" id="exampleFormControlSelect2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </form>
            `;
            alert('multiple select form added');
            break;
        case '4': //'textarea'
            addedForm.innerHTML = `
                <form>  
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                </form>
            `;
            alert('textarea form added');
            break;
        case '5': //'textarea'
            addedForm.innerHTML = `
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlFile1">Example file input</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1">
                  </div>
                </form>
            `;
            alert('file input added');
            break;
        case '6': //'range'
            addedForm.innerHTML = `
                <form>
                  <div class="form-group">
                    <label for="formControlRange">Example Range input</label>
                    <input type="range" class="form-control-range" id="formControlRange">
                  </div>
                </form>
            `;
            alert('range added');
            break;
        case '7': //'stacked checkboxes'
            addedForm.innerHTML = `
                <form>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                      <label class="form-check-label" for="defaultCheck1">
                        Default checkbox
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
                      <label class="form-check-label" for="defaultCheck2">
                        Disabled checkbox
                      </label>
                    </div>
                </form>
            `;
            alert('stacked checkboxes added');
            break;
        case '8': //'stacked radios'
            addedForm.innerHTML = `
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                  <label class="form-check-label" for="exampleRadios1">
                    Default radio
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                  <label class="form-check-label" for="exampleRadios2">
                    Second default radio
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
                  <label class="form-check-label" for="exampleRadios3">
                    Disabled radio
                  </label>
                </div>
            `;
            alert('stacked radios added');
            break;
        case '9': //'inline checkboxes'
            addedForm.innerHTML = `
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                  <label class="form-check-label" for="inlineCheckbox1">1</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                  <label class="form-check-label" for="inlineCheckbox2">2</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
                  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
                </div>            
            `;
            alert('inline checkboxes added');
            break;
        case '10': //'inline radios'
            addedForm.innerHTML = `
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                  <label class="form-check-label" for="inlineRadio1">1</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                  <label class="form-check-label" for="inlineRadio2">2</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
                  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
                </div>
            `;
            alert('inline radios added');
            break;
        case '11': //'checkboxes and radios without labels'
            addedForm.innerHTML = `
                <div class="form-check">
                  <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                </div>
                <div class="form-check">
                  <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="...">
                </div>
            `;
            alert('checkboxes and radios without labels added added');
            break;
        case '12': //'form group'
            addedForm.innerHTML = `
                <form>
                  <div class="form-group">
                    <label for="formGroupExampleInput">Example label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Another label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
                  </div>
                </form>
            `;
            alert('form group added');
            break;
        case '13': //'form grid'
            addedForm.innerHTML = `
                <form>
                  <div class="row">
                    <div class="col">
                      <input type="text" class="form-control" placeholder="First name">
                    </div>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Last name">
                    </div>
                  </div>
                </form>
            `;
            alert('form grid added');
            break;
        case '14': //'form row'
            addedForm.innerHTML = `
                <form>
                  <div class="form-row">
                    <div class="col">
                      <input type="text" class="form-control" placeholder="First name">
                    </div>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Last name">
                    </div>
                  </div>
                </form>
            `;
            alert('form row added');
            break;
        case '15': //'complex layouts with the grid system'
            addedForm.innerHTML = `
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Email</label>
                      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Password</label>
                      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                  </div>
                  <div class="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputCity">City</label>
                      <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputState">State</label>
                      <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="form-group col-md-2">
                      <label for="inputZip">Zip</label>
                      <input type="text" class="form-control" id="inputZip">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck">
                      <label class="form-check-label" for="gridCheck">
                        Check me out
                      </label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
            `;
            alert('complex layouts with grid added');
            break;
        case '16': //'horizontal form'
            addedForm.innerHTML = `
                <form>
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                    </div>
                  </div>
                  <fieldset class="form-group">
                    <div class="row">
                      <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                      <div class="col-sm-10">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                          <label class="form-check-label" for="gridRadios1">
                            First radio
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                          <label class="form-check-label" for="gridRadios2">
                            Second radio
                          </label>
                        </div>
                        <div class="form-check disabled">
                          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
                          <label class="form-check-label" for="gridRadios3">
                            Third disabled radio
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <div class="form-group row">
                    <div class="col-sm-2">Checkbox</div>
                    <div class="col-sm-10">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1">
                        <label class="form-check-label" for="gridCheck1">
                          Example checkbox
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-10">
                      <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                  </div>
                </form>
            `;
            alert('horizontal form added');
            break;
        case '17': //'label and column sizing'
            addedForm.innerHTML = `
                <form>
                  <div class="form-group row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
                    </div>
                  </div>
                </form>

                <form>
                  <div class="form-row">
                    <div class="col-7">
                      <input type="text" class="form-control" placeholder="City">
                    </div>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="State">
                    </div>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Zip">
                    </div>
                  </div>
                </form>
            `;
            alert('column sizing added');
            break;
        case '18': //'auto-sizing'
            addedForm.innerHTML = `
                <form>
                  <div class="form-row align-items-center">
                    <div class="col-auto">
                      <label class="sr-only" for="inlineFormInput">Name</label>
                      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe">
                    </div>
                    <div class="col-auto">
                      <label class="sr-only" for="inlineFormInputGroup">Username</label>
                      <div class="input-group mb-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">@</div>
                        </div>
                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
                      </div>
                    </div>
                    <div class="col-auto">
                      <div class="form-check mb-2">
                        <input class="form-check-input" type="checkbox" id="autoSizingCheck">
                        <label class="form-check-label" for="autoSizingCheck">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div class="col-auto">
                      <button type="submit" class="btn btn-primary mb-2">Submit</button>
                    </div>
                  </div>
                </form>
            `;
            alert('auto-sizing added');
            break;
        case '19': //'remixed with size-specific column classes'
            addedForm.innerHTML = `
                <form>
                  <div class="form-row align-items-center">
                    <div class="col-sm-3 my-1">
                      <label class="sr-only" for="inlineFormInputName">Name</label>
                      <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe">
                    </div>
                    <div class="col-sm-3 my-1">
                      <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">@</div>
                        </div>
                        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
                      </div>
                    </div>
                    <div class="col-auto my-1">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
                        <label class="form-check-label" for="autoSizingCheck2">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div class="col-auto my-1">
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
            `;
            alert('remixed with size-specific column classes added');
            break;
        case '20': //'inline forms'
            addedForm.innerHTML = `
                <form class="form-inline">
                  <label class="sr-only" for="inlineFormInputName2">Name</label>
                  <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">

                  <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                  <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">@</div>
                    </div>
                    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
                  </div>

                  <div class="form-check mb-2 mr-sm-2">
                    <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                    <label class="form-check-label" for="inlineFormCheck">
                      Remember me
                    </label>
                  </div>

                  <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </form>
            `;
            alert('inline forms added');
            break;
        case '21': //'custom form controls and selects inline'
            addedForm.innerHTML = `
                <form class="form-inline">
                  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
                  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                  <div class="custom-control custom-checkbox my-1 mr-sm-2">
                    <input type="checkbox" class="custom-control-input" id="customControlInline">
                    <label class="custom-control-label" for="customControlInline">Remember my preference</label>
                  </div>

                  <button type="submit" class="btn btn-primary my-1">Submit</button>
                </form>
            `;
            alert('custom form controls and selects inline added');
            break;
        case '22': //'password with help text'
            addedForm.innerHTML = `
                <label for="inputPassword5">Password</label>
                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
                <small id="passwordHelpBlock" class="form-text text-muted">
                  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </small>
            `;
            alert('password with help text added');
            break;
        case '23': //'inline password with help text'
            addedForm.innerHTML = `
                <form class="form-inline">
                  <div class="form-group">
                    <label for="inputPassword6">Password</label>
                    <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline">
                    <small id="passwordHelpInline" class="text-muted">
                      Must be 8-20 characters long.
                    </small>
                  </div>
                </form>
            `;
            alert('inline password with help text added');
            break;
        case '24': //'disabled form'
            addedForm.innerHTML = `
                <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
            `;
            alert('disabled form added');
            break;
        case '25': //'custom validation'
            addedForm.innerHTML = `
                <form class="needs-validation" novalidate>
                  <div class="form-row">
                    <div class="col-md-4 mb-3">
                      <label for="validationCustom01">First name</label>
                      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="validationCustom02">Last name</label>
                      <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="validationCustomUsername">Username</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="inputGroupPrepend">@</span>
                        </div>
                        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>
                        <div class="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6 mb-3">
                      <label for="validationCustom03">City</label>
                      <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
                      <div class="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationCustom04">State</label>
                      <input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
                      <div class="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationCustom05">Zip</label>
                      <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required>
                      <div class="invalid-feedback">
                        Please provide a valid zip.
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                      <label class="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                      </label>
                      <div class="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-primary" type="submit">Submit form</button>
                </form>

                <script>
                // Example starter JavaScript for disabling form submissions if there are invalid fields
                (function() {
                  'use strict';
                  window.addEventListener('load', function() {
                    // Fetch all the forms we want to apply custom Bootstrap validation styles to
                    var forms = document.getElementsByClassName('needs-validation');
                    // Loop over them and prevent submission
                    var validation = Array.prototype.filter.call(forms, function(form) {
                      form.addEventListener('submit', function(event) {
                        if (form.checkValidity() === false) {
                          event.preventDefault();
                          event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                      }, false);
                    });
                  }, false);
                })();
                </script>
            `;
            alert('custom validation added');
            break;
        case '26': //'browser defaults'
            addedForm.innerHTML = `
                <form>
                  <div class="form-row">
                    <div class="col-md-4 mb-3">
                      <label for="validationDefault01">First name</label>
                      <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="validationDefault02">Last name</label>
                      <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="validationDefaultUsername">Username</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="inputGroupPrepend2">@</span>
                        </div>
                        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6 mb-3">
                      <label for="validationDefault03">City</label>
                      <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationDefault04">State</label>
                      <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationDefault05">Zip</label>
                      <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                      <label class="form-check-label" for="invalidCheck2">
                        Agree to terms and conditions
                      </label>
                    </div>
                  </div>
                  <button class="btn btn-primary" type="submit">Submit form</button>
                </form>
            `;
            alert('browser defaults added');
            break;
        case '27': //'supported elements'
            addedForm.innerHTML = `
                <form class="was-validated">
                  <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="customControlValidation1" required>
                    <label class="custom-control-label" for="customControlValidation1">Check this custom checkbox</label>
                    <div class="invalid-feedback">Example invalid feedback text</div>
                  </div>

                  <div class="custom-control custom-radio">
                    <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required>
                    <label class="custom-control-label" for="customControlValidation2">Toggle this custom radio</label>
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required>
                    <label class="custom-control-label" for="customControlValidation3">Or toggle this other custom radio</label>
                    <div class="invalid-feedback">More example invalid feedback text</div>
                  </div>

                  <div class="form-group">
                    <select class="custom-select" required>
                      <option value="">Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div class="invalid-feedback">Example invalid custom select feedback</div>
                  </div>

                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                    <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                    <div class="invalid-feedback">Example invalid custom file feedback</div>
                  </div>
                </form>
            `;
            alert('supported elements added');
            break;
        case '28': //'tooltips'
            addedForm.innerHTML = `
                <form class="needs-validation" novalidate>
                  <div class="form-row">
                    <div class="col-md-4 mb-3">
                      <label for="validationTooltip01">First name</label>
                      <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
                      <div class="valid-tooltip">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="validationTooltip02">Last name</label>
                      <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required>
                      <div class="valid-tooltip">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="validationTooltipUsername">Username</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                        </div>
                        <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required>
                        <div class="invalid-tooltip">
                          Please choose a unique and valid username.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6 mb-3">
                      <label for="validationTooltip03">City</label>
                      <input type="text" class="form-control" id="validationTooltip03" placeholder="City" required>
                      <div class="invalid-tooltip">
                        Please provide a valid city.
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip04">State</label>
                      <input type="text" class="form-control" id="validationTooltip04" placeholder="State" required>
                      <div class="invalid-tooltip">
                        Please provide a valid state.
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="validationTooltip05">Zip</label>
                      <input type="text" class="form-control" id="validationTooltip05" placeholder="Zip" required>
                      <div class="invalid-tooltip">
                        Please provide a valid zip.
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-primary" type="submit">Submit form</button>
                </form>
            `;
            alert('tooltips added');
            break;
        case '29': //'custom checkboxes'
            addedForm.innerHTML = `
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                  <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
                </div>
            `;
            alert('custom checkboxes added');
            break;
        case '30': //'custom radios'
            addedForm.innerHTML = `
                <div class="custom-control custom-radio">
                  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                  <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
                </div>
                <div class="custom-control custom-radio">
                  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                  <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
                </div>
            `;
            alert('custom radios added');
            break;
        case '31': //'inline custom radios'
            addedForm.innerHTML = `
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
                  <label class="custom-control-label" for="customRadioInline1">Toggle this custom radio</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
                  <label class="custom-control-label" for="customRadioInline2">Or toggle this other custom radio</label>
                </div>
            `;
            alert('inline custom radios added');
            break;
        case '32': //'disabled custom checkboxes and radios'
            addedForm.innerHTML = `
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheckDisabled" disabled>
                  <label class="custom-control-label" for="customCheckDisabled">Check this custom checkbox</label>
                </div>

                <div class="custom-control custom-radio">
                  <input type="radio" id="radio3" name="radioDisabled" id="customRadioDisabled" class="custom-control-input" disabled>
                  <label class="custom-control-label" for="customRadioDisabled">Toggle this custom radio</label>
                </div>
            `;
            alert('disabled custom checkboxes and radios added');
            break;
        case '33': //'select menu'
            addedForm.innerHTML = `
                <select class="custom-select">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
            `;
            alert('select menu added');
            break;
        case '34': //'multiple select menu'
            addedForm.innerHTML = `
                <select class="custom-select" multiple>
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
            `;
            alert('multiple select menu added');
            break;
        case '35': //'select menu with size attribute'
            addedForm.innerHTML = `
                <select class="custom-select" size="3">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
            `;
            alert('select menu with size attribute added');
            break;
        case '36': //'custom range'
            addedForm.innerHTML = `
                <label for="customRange1">Example range</label>
                <input type="range" class="custom-range" id="customRange1">
            `;
            alert('custom range added');
            break;
        case '37': //'custom file browser'
            addedForm.innerHTML = `
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="customFile">
                  <label class="custom-file-label" for="customFile">Choose file</label>
                </div>
            `;
            alert('custom file browser added');
            break;                        
        default:
            addedForm.innerHTML = `

            `;
            alert('default');
    }
    document.body.appendChild(addedForm);
}

// INPUT GROUP
function addInputGroup(buttonClass){
    var addedInputGroup = document.createElement('div');
    addedInputGroup.setAttribute('class', 'container-fluid');
    var chooseInputGroup = prompt(`Choose form: 
        basic example (1), checkboxes and radios (2), multiple inputs (3), 
        multiple addons (4), button addons (5), buttons with dropdowns (6), 
        segmented buttons (7), custom select (8), custom file input (9)`);

    switch(chooseInputGroup) {
        case '1': //basic example
            addedInputGroup.innerHTML = `
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                  </div>
                  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>

                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">@example.com</span>
                  </div>
                </div>

                <label for="basic-url">Your vanity URL</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                  </div>
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                  <div class="input-group-append">
                    <span class="input-group-text">.00</span>
                  </div>
                </div>

                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">With textarea</span>
                  </div>
                  <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>`;
                alert('basic example added');
                break;
        case '2': //checkboxes and radios
            addedInputGroup.innerHTML = `
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input">
                    </div>
                  </div>
                  <input type="text" class="form-control" aria-label="Text input with checkbox">
                </div>

                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input type="radio" aria-label="Radio button for following text input">
                    </div>
                  </div>
                  <input type="text" class="form-control" aria-label="Text input with radio button">
                </div>`;
                alert('checkboxes and radios added');
                break;
        case '3': //multiple inputs
            addedInputGroup.innerHTML = `
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">First and last name</span>
                  </div>
                  <input type="text" aria-label="First name" class="form-control">
                  <input type="text" aria-label="Last name" class="form-control">
                </div>`;
                alert('multiple inputs added');
                break;
        case '4': //multiple addons
            addedInputGroup.innerHTML = `
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
                </div>

                <div class="input-group">
                  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
                  <div class="input-group-append">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                  </div>
                </div>`;
                alert('multiple addons added');
                break;
        case '5': //button addons
            addedInputGroup.innerHTML = `
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
                  </div>
                  <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                </div>

                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                  </div>
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend" id="button-addon3">
                    <button class="btn btn-outline-secondary" type="button">Button</button>
                    <button class="btn btn-outline-secondary" type="button">Button</button>
                  </div>
                  <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons" aria-describedby="button-addon3">
                </div>

                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4">
                  <div class="input-group-append" id="button-addon4">
                    <button class="btn btn-outline-secondary" type="button">Button</button>
                    <button class="btn btn-outline-secondary" type="button">Button</button>
                  </div>
                </div>`;
                alert('button addons added');
                break;
        case '6': //buttons with dropdowns
            addedInputGroup.innerHTML = `
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                      <div role="separator" class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                  <input type="text" class="form-control" aria-label="Text input with dropdown button">
                </div>

                <div class="input-group">
                  <input type="text" class="form-control" aria-label="Text input with dropdown button">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                      <div role="separator" class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                </div>`;
                alert('buttons with dropdowns added');
                break;
        case '7': //segmented buttons
            addedInputGroup.innerHTML = `
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <button type="button" class="btn btn-outline-secondary">Action</button>
                    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                      <div role="separator" class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
                </div>

                <div class="input-group">
                  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
                  <div class="input-group-append">
                    <button type="button" class="btn btn-outline-secondary">Action</button>
                    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                      <div role="separator" class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                </div>`;
                alert('segmented buttons added');
                break;
        case '8': //custom select
            addedInputGroup.innerHTML = `
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input">
                    </div>
                  </div>
                  <input type="text" class="form-control" aria-label="Text input with checkbox">
                </div>

                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input type="radio" aria-label="Radio button for following text input">
                    </div>
                  </div>
                  <input type="text" class="form-control" aria-label="Text input with radio button">
                </div>`;
                alert('custom select added');
                break;
        case '9': //custom file input
            addedInputGroup.innerHTML = `
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input type="checkbox" aria-label="Checkbox for following text input">
                    </div>
                  </div>
                  <input type="text" class="form-control" aria-label="Text input with checkbox">
                </div>

                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <input type="radio" aria-label="Radio button for following text input">
                    </div>
                  </div>
                  <input type="text" class="form-control" aria-label="Text input with radio button">
                </div>`;
                alert('custom file input added');
                break;
        default:
            addedInputGroup.innerHTML = `

            `;
            alert('default');
    }                       
    document.body.appendChild(addedInputGroup);
}

// JUMBOTRON
function addJumbotron(){
    var addedJumbotron = document.createElement('div');
    addedJumbotron.setAttribute('class', 'container-fluid');
    var chooseJumbotron = prompt(`Choose form: 
        jumbotron container (1), jumbotron fluid container (2)`);

    switch(chooseJumbotron) {
        case '1': //basic example
            addedJumbotron.innerHTML = `
                <div class="jumbotron">
                  <h1 class="display-4">Hello, world!</h1>
                  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr class="my-4">
                  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>`;
                alert('custom file input added');
                break;
        case '2': //basic example
            addedJumbotron.innerHTML = `
                <div class="jumbotron jumbotron-fluid">
                  <div class="container">
                    <h1 class="display-4">Fluid jumbotron</h1>
                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                  </div>
                </div>`;
                alert('custom file input added');
                break;
        default:
            addedJumbotron.innerHTML = `

            `;
            alert('default');
    }
    document.body.appendChild(addedJumbotron);
}

// LIST GROUP
function addListGroup(){
    var addedListGroup = document.createElement('div');
    addedListGroup.setAttribute('class', 'container-fluid');
    var chooseListGroup = prompt(`Choose form: 
        basic example (1), active items (2), disabled items (3),
        links and buttons (4), flush (5), contextual classes (6),
        contextual classes with hover effect (7), with badges (8),
        custom content (9), javascript behavior (10), 
        using data attributes (11)
        `);

    switch(chooseListGroup) {
        case '1': //basic example
            addedListGroup.innerHTML = `
                <ul class="list-group">
                  <li class="list-group-item">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Morbi leo risus</li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            `;
            alert('basic example added');
            break;
        case '2': //active items
            addedListGroup.innerHTML = `
                <ul class="list-group">
                  <li class="list-group-item active">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Morbi leo risus</li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            `;
            alert('active items added');
            break;
        case '3': //disabled items
            addedListGroup.innerHTML = `
                <ul class="list-group">
                  <li class="list-group-item disabled">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Morbi leo risus</li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            `;
            alert('disabled items added');
            break;
        case '4': //links and buttons
            addedListGroup.innerHTML = `
                <div class="list-group">
                  <a href="#" class="list-group-item list-group-item-action active">
                    Cras justo odio
                  </a>
                  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
                  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                  <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
                </div>
            `;
            alert('links and buttons added');
            break;
        case '5': //flush
            addedListGroup.innerHTML = `
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Morbi leo risus</li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            `;
            alert('flush added');
            break;
        case '6': //contextual classes
            addedListGroup.innerHTML = `
                <ul class="list-group">
                  <li class="list-group-item">Dapibus ac facilisis in</li>


                  <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
                  <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
                  <li class="list-group-item list-group-item-success">A simple success list group item</li>
                  <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
                  <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
                  <li class="list-group-item list-group-item-info">A simple info list group item</li>
                  <li class="list-group-item list-group-item-light">A simple light list group item</li>
                  <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
                </ul>
            `;
            alert('contextual classes added');
            break;
        case '7': //contextual classes with hover effect
            addedListGroup.innerHTML = `
                <div class="list-group">
                  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>


                  <a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
                  <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
                  <a href="#" class="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
                  <a href="#" class="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
                  <a href="#" class="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
                  <a href="#" class="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
                  <a href="#" class="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
                  <a href="#" class="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
                </div>
            `;
            alert('contextual classes with hover effect added');
            break;
        case '8': //with badges
            addedListGroup.innerHTML = `
                <ul class="list-group">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span class="badge badge-primary badge-pill">14</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span class="badge badge-primary badge-pill">2</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span class="badge badge-primary badge-pill">1</span>
                  </li>
                </ul>
            `;
            alert('with badges added');
            break;
        case '9': //custom content
            addedListGroup.innerHTML = `
                <div class="list-group">
                  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">List group item heading</h5>
                      <small>3 days ago</small>
                    </div>
                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small>Donec id elit non mi porta.</small>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">List group item heading</h5>
                      <small class="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small class="text-muted">Donec id elit non mi porta.</small>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">List group item heading</h5>
                      <small class="text-muted">3 days ago</small>
                    </div>
                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    <small class="text-muted">Donec id elit non mi porta.</small>
                  </a>
                </div>
            `;
            alert('custom content added');
            break;
        case '10': //javascript behavior
            addedListGroup.innerHTML = `
                <div class="row">
                  <div class="col-4">
                    <div class="list-group" id="list-tab" role="tablist">
                      <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
                      <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
                      <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
                      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                    </div>
                  </div>
                  <div class="col-8">
                    <div class="tab-content" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
                      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                    </div>
                  </div>
                </div>
            `;
            alert('javascript behavior added');
            break;
        case '11': //using data attributes
            addedListGroup.innerHTML = `
                <!-- List group -->
                <div class="list-group" id="myList" role="tablist">
                  <a class="list-group-item list-group-item-action active" data-toggle="list" href="#home" role="tab">Home</a>
                  <a class="list-group-item list-group-item-action" data-toggle="list" href="#profile" role="tab">Profile</a>
                  <a class="list-group-item list-group-item-action" data-toggle="list" href="#messages" role="tab">Messages</a>
                  <a class="list-group-item list-group-item-action" data-toggle="list" href="#settings" role="tab">Settings</a>
                </div>

                <!-- Tab panes -->
                <div class="tab-content">
                  <div class="tab-pane active" id="home" role="tabpanel">...</div>
                  <div class="tab-pane" id="profile" role="tabpanel">...</div>
                  <div class="tab-pane" id="messages" role="tabpanel">...</div>
                  <div class="tab-pane" id="settings" role="tabpanel">...</div>
                </div>
            `;
            alert('using data attributes added');
            break;
        default:
            addedListGroup.innerHTML = `

            `;
            alert('default');
    }
    document.body.appendChild(addedListGroup);
}


// LIST GROUP
function addModal(){
    var addedModal = document.createElement('div');
    addedModal.setAttribute('class', 'container-fluid');
    var chooseModal = prompt(`Choose form: 
        live demo (1), scrolling long content (2), vertically centered (3),
        modal with tooltips and popovers (4), grids in modal (5),
        large modal (6), small modal (7)
        `);

    switch(chooseModal) {
        case '1': //live demo
            addedModal.innerHTML = `
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Launch demo modal
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>               
            `;
            alert('live demo added');
            break;
        case '2': //scrolling long content
            addedModal.innerHTML = `
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                  Launch demo modal
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        When modals become too long for the user’s viewport or device, 
                        they scroll independent of the page itself. Try the demo below to see what we mean.
                        <br><br><br>
                        When modals become too long for the user’s viewport or device, 
                        they scroll independent of the page itself. Try the demo below to see what we mean.
                        <br><br><br>
                        When modals become too long for the user’s viewport or device, 
                        they scroll independent of the page itself. Try the demo below to see what we mean.
                        <br><br><br>
                        When modals become too long for the user’s viewport or device, 
                        they scroll independent of the page itself. Try the demo below to see what we mean.
                        <br><br><br>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>                
            `;
            alert('scrolling long content added');
            break;
        case '3': //vertically centered
            addedModal.innerHTML = `
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                  Launch demo modal
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        Add .modal-dialog-centered to .modal-dialog to vertically center the modal.
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>                
            `;
            alert('vertically centered added');
            break;
        case '4': //modal with tooltips and popovers
            addedModal.innerHTML = `
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Launch demo modal
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                        <div class="modal-body">
                          <h5>Popover in a modal</h5>
                          <p>This <a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
                          <hr>
                          <h5>Tooltips in a modal</h5>
                          <p><a href="#" class="tooltip-test" title="Tooltip">This link</a> and <a href="#" class="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
                        </div> 
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>              
            `;
            alert('modal with tooltips and popovers added');
            break;
        case '5': //grids in modal
            addedModal.innerHTML = `
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal5">
                  Launch demo modal
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                <div class="modal-body">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-md-4">.col-md-4</div>
                      <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
                    </div>
                    <div class="row">
                      <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
                      <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
                    </div>
                    <div class="row">
                      <div class="col-sm-9">
                        Level 1: .col-sm-9
                        <div class="row">
                          <div class="col-8 col-sm-6">
                            Level 2: .col-8 .col-sm-6
                          </div>
                          <div class="col-4 col-sm-6">
                            Level 2: .col-4 .col-sm-6
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>                          
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>               
            `;
            alert('grids in modal added');
            break;
        case '6': //large modal
            addedModal.innerHTML = `
                <!-- Large modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      ...
                    </div>
                  </div>
                </div>                
            `;
            alert('large modal added');
            break;
        case '7': //small modal
            addedModal.innerHTML = `
                <!-- Small modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>

                <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      ...
                    </div>
                  </div>
                </div>                
            `;
            alert('small modal added');
            break;
        default:
            addedModal.innerHTML = `

            `;
            alert('default');
    }
    document.body.appendChild(addedModal);
}

function addNavs(){
    var addedNavs = document.createElement('div');
    addedNavs.setAttribute('class', 'container-fluid');
    var chooseNavs = prompt(`Choose form: 
        base nav with li and a tags (1), base nav with a tag (2),
        horizontal alignmnet (3), right aligned (4), vertical (5),
        vertical without ul (6), tabs (7), pills (8), fill and justify (9),
        fill and justify with nav tag (10), unequal width elements (11),
        using nav-item on a tags (12), working with flex utilities (13),
        using dropdowns (14), pills with dropdowns (15), javascript behavior (16),
        javascript behavior 2 (17), tabs plugin with pills (18), tabs with vertical pills (19)       
        `);

    switch(chooseNavs) {
        case '1': //base nav with li and a tags
            addedNavs.innerHTML = `
                <ul class="nav">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>                            
            `;
            alert('base nav with li and a tags added');
            break;
        case '2': //base nav with <a> tag
            addedNavs.innerHTML = `
                <nav class="nav">
                  <a class="nav-link active" href="#">Active</a>
                  <a class="nav-link" href="#">Link</a>
                  <a class="nav-link" href="#">Link</a>
                  <a class="nav-link disabled" href="#">Disabled</a>
                </nav>              
            `;
            alert('base nav with <a> tag added');
            break;
        case '3': //horizontal alignmnet
            addedNavs.innerHTML = `
                <ul class="nav justify-content-center">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>           
            `;
            alert('horizontal alignmnet added');
            break;
        case '4': //right aligned
            addedNavs.innerHTML = `
                <ul class="nav justify-content-end">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>            
            `;
            alert('right aligned added');
            break;
        case '5': //vertical
            addedNavs.innerHTML = `
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>            
            `;
            alert('vertical added');
            break;
        case '6': //vertical without ul
            addedNavs.innerHTML = `
                <nav class="nav flex-column">
                  <a class="nav-link active" href="#">Active</a>
                  <a class="nav-link" href="#">Link</a>
                  <a class="nav-link" href="#">Link</a>
                  <a class="nav-link disabled" href="#">Disabled</a>
                </nav>             
            `;
            alert('vertical without ul added');
            break;
        case '7': //tabs
            addedNavs.innerHTML = `
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>             
            `;
            alert('tabs added');
            break;
        case '8': //pills
            addedNavs.innerHTML = `
                <ul class="nav nav-pills">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>             
            `;
            alert('pills added');
            break;
        case '9': //fill and justify
            addedNavs.innerHTML = `
                <ul class="nav nav-pills nav-fill">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Longer nav link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>             
            `;
            alert('fill and justify added');
            break;
        case '10': //fill and justify with nav tag
            addedNavs.innerHTML = `
                <nav class="nav nav-pills nav-fill">
                  <a class="nav-item nav-link active" href="#">Active</a>
                  <a class="nav-item nav-link" href="#">Link</a>
                  <a class="nav-item nav-link" href="#">Link</a>
                  <a class="nav-item nav-link disabled" href="#">Disabled</a>
                </nav>             
            `;
            alert('fill and justify with nav tag added');
            break;
        case '11': //unequal width elements
            addedNavs.innerHTML = `
                <nav class="nav nav-pills nav-justified">
                  <a class="nav-link active" href="#">Active</a>
                  <a class="nav-link" href="#">Longer nav link</a>
                  <a class="nav-link" href="#">Link</a>
                  <a class="nav-link disabled" href="#">Disabled</a>
                </nav>             
            `;
            alert('unequal width elements added');
            break;
        case '12': //using nav-item on a tags
            addedNavs.innerHTML = `
                <nav class="nav nav-pills nav-justified">
                  <a class="nav-item nav-link active" href="#">Active</a>
                  <a class="nav-item nav-link" href="#">Link</a>
                  <a class="nav-item nav-link" href="#">Link</a>
                  <a class="nav-item nav-link disabled" href="#">Disabled</a>
                </nav>             
            `;
            alert('using nav-item on a tags added');
            break;
        case '13': //working with flex utilities
            addedNavs.innerHTML = `
                <nav class="nav nav-pills flex-column flex-sm-row">
                  <a class="flex-sm-fill text-sm-center nav-link active" href="#">Active</a>
                  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
                  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
                  <a class="flex-sm-fill text-sm-center nav-link disabled" href="#">Disabled</a>
                </nav>             
            `;
            alert('working with flex utilities added');
            break;
        case '14': //using dropdowns
            addedNavs.innerHTML = `
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>             
            `;
            alert('using dropdowns added');
            break;
        case '15': //pills with dropdowns
            addedNavs.innerHTML = `
             
            `;
            alert('pills with dropdowns added');
            break;
        case '16': //javascript behavior
            addedNavs.innerHTML = `
             
            `;
            alert('javascript behavior added');
            break;
        case '17': //javascript behavior 2
            addedNavs.innerHTML = `
             
            `;
            alert('javascript behavior 2 added');
            break;
        case '18': //tabs plugin with pills
            addedNavs.innerHTML = `
             
            `;
            alert('tabs plugin with pills added');
            break;
        case '19': //tabs with vertical pills
            addedNavs.innerHTML = `
             
            `;
            alert('tabs with vertical pills added');
            break;                  
        default:
            addedNavs.innerHTML = `

            `;
            alert('default');
    }
    document.body.appendChild(addedNavs);
}

function addNavbar(){
    var addedNavbar = document.createElement('div');
    addedNavbar.setAttribute('class', 'container-fluid');
    var chooseNavbar = prompt(`Choose form: 
        base nav with li and a tags (1), base nav with a tag (2),
        horizontal alignmnet (3), right aligned (4), vertical (5),
        vertical without ul (6), tabs (7), pills (8), fill and justify (9),
        fill and justify with nav tag (10), unequal width elements (11),
        using nav-item on a tags (12), working with flex utilities (13),
        using dropdowns (14), pills with dropdowns (15), javascript behavior (16),
        javascript behavior 2 (17), tabs plugin with pills (18), tabs with vertical pills (19)       
        `);

    switch(chooseNavbar) {
        case '1': //base nav with li and a tags
            addedNavbar.innerHTML = `
                <ul class="nav">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>                            
            `;
            alert('base nav with li and a tags added');
            break;
        case '2': //base nav with a tag
            addedNavbar.innerHTML = `
              
            `;
            alert('base nav with a tag added');
            break;
        case '3': //horizontal alignmnet
            addedNavbar.innerHTML = `
           
            `;
            alert('horizontal alignmnet added');
            break;
        case '4': //right aligned
            addedNavbar.innerHTML = `
            
            `;
            alert('right alignedadded');
            break;
        case '5': //vertical
            addedNavbar.innerHTML = `
            
            `;
            alert('vertical added');
            break;
        case '6': //vertical without ul
            addedNavbar.innerHTML = `
             
            `;
            alert('vertical without ul added');
            break;
        case '7': //tabs
            addedNavbar.innerHTML = `
             
            `;
            alert('tabs added');
            break;
        case '8': //pills
            addedNavbar.innerHTML = `
             
            `;
            alert('pills added');
            break;
        case '9': //fill and justify
            addedNavbar.innerHTML = `
             
            `;
            alert('fill and justify added');
            break;
        case '10': //fill and justify with nav tag
            addedNavbar.innerHTML = `
             
            `;
            alert('fill and justify with nav tag added');
            break;
        case '11': //unequal width elements
            addedNavbar.innerHTML = `
             
            `;
            alert('unequal width elements added');
            break;
        case '12': //using nav-item on a tags
            addedNavbar.innerHTML = `
             
            `;
            alert('using nav-item on a tags added');
            break;
        case '13': //working with flex utilities
            addedNavbar.innerHTML = `
             
            `;
            alert('working with flex utilities added');
            break;
        case '14': //using dropdowns
            addedNavbar.innerHTML = `
             
            `;
            alert('using dropdowns added');
            break;
        case '15': //pills with dropdowns
            addedNavbar.innerHTML = `
             
            `;
            alert('pills with dropdowns added');
            break;
        case '16': //javascript behavior
            addedNavbar.innerHTML = `
             
            `;
            alert('javascript behavior added');
            break;
        case '17': //javascript behavior 2
            addedNavbar.innerHTML = `
             
            `;
            alert('javascript behavior 2 added');
            break;
        case '18': //tabs plugin with pills
            addedNavbar.innerHTML = `
             
            `;
            alert('tabs plugin with pills added');
            break;
        case '19': //tabs with vertical pills
            addedNavbar.innerHTML = `
             
            `;
            alert('tabs with vertical pills added');
            break;                  
        default:
            addedNavbar.innerHTML = `

            `;
            alert('default');
    }
    document.body.appendChild(addedNavbar);
}

// alerts
if(addNewComponent === 'alert-primary'){
    addAlert("alert-primary");
} else if(addNewComponent === 'alert-secondary'){
    addAlert("alert-secondary"); 
} else if(addNewComponent === 'alert-success'){
    addAlert("alert-success");  
} else if(addNewComponent === 'alert-info'){
    addAlert("alert-info");     
} else if(addNewComponent === 'alert-warning'){
    addAlert("alert-warning");     
} else if(addNewComponent === 'alert-danger'){
    addAlert("alert-danger");     
} 
// badges
else if(addNewComponent === 'badge-primary'){
    addBadge("badge-primary");
} else if(addNewComponent === 'badge-secondary'){
    addBadge("badge-secondary");
} else if(addNewComponent === 'badge-success'){
    addBadge("badge-success");
} else if(addNewComponent === 'badge-danger'){
    addBadge("badge-danger");
} else if(addNewComponent === 'badge-warning'){
    addBadge("badge-warning");
} else if(addNewComponent === 'badge-info'){
    addBadge("badge-info");
} else if(addNewComponent === 'badge-light'){
    addBadge("badge-light");
} else if(addNewComponent === 'badge-dark'){
    addBadge("badge-dark");
} 
// breadcrumbs
else if(addNewComponent === 'breadcrumbs'){
    var first = prompt('Type first link');
    var second = prompt('Type second link');
    var third = prompt('Type third link');
    addBreadcrumbs(first, second, third);
} 
// buttons
else if(addNewComponent === 'btn-primary'){
    addButton("btn-primary");
} else if(addNewComponent === 'btn-secondary'){
    addButton("btn-secondary");
} else if(addNewComponent === 'btn-success'){
    addButton("btn-success");
} else if(addNewComponent === 'btn-danger'){
    addButton("btn-danger");
} else if(addNewComponent === 'btn-warning'){
    addButton("btn-warning");
} else if(addNewComponent === 'btn-info'){
    addButton("btn-info");
} else if(addNewComponent === 'btn-light'){
    addButton("badge-light");
} else if(addNewComponent === 'btn-dark'){
    addButton("btn-dark");
}  else if(addNewComponent === 'btn-outline-primary'){
    addButton("btn-outline-primary");
}  else if(addNewComponent === 'btn-outline-secondary'){
    addButton("btn-outline-secondary");
}  else if(addNewComponent === 'btn-outline-success'){
    addButton("btn-outline-success");
}  else if(addNewComponent === 'btn-outline-danger'){
    addButton("btn-outline-danger");
}  else if(addNewComponent === 'btn-outline-warning'){
    addButton("btn-outline-warning");
}  else if(addNewComponent === 'btn-outline-info'){
    addButton("btn-outline-info");
}  else if(addNewComponent === 'btn-outline-light'){
    addButton("btn-outline-light");
}  else if(addNewComponent === 'btn-outline-dark'){
    addButton("btn-outline-dark");
} 
// button group
else if(addNewComponent === 'btn-group btn-primary'){
    addButtonGroup("btn-primary");
} else if(addNewComponent === 'btn-group btn-secondary'){
    addButtonGroup("btn-secondary");
} else if(addNewComponent === 'btn-group btn-success'){
    addButtonGroup("btn-success");
} else if(addNewComponent === 'btn-group btn-danger'){
    addButtonGroup("btn-danger");
} else if(addNewComponent === 'btn-group btn-warning'){
    addButtonGroup("btn-warning");
} else if(addNewComponent === 'btn-group btn-info'){
    addButtonGroup("btn-info");
} else if(addNewComponent === 'btn-group btn-light'){
    addButtonGroup("badge-light");
} else if(addNewComponent === 'btn-group btn-dark'){
    addButtonGroup("btn-dark");
}  else if(addNewComponent === 'btn-group btn-outline-primary'){
    addButtonGroup("btn-outline-primary");
}  else if(addNewComponent === 'btn-group btn-outline-secondary'){
    addButtonGroup("btn-outline-secondary");
}  else if(addNewComponent === 'btn-group btn-outline-success'){
    addButtonGroup("btn-outline-success");
}  else if(addNewComponent === 'btn-group btn-outline-danger'){
    addButtonGroup("btn-outline-danger");
}  else if(addNewComponent === 'btn-group btn-outline-warning'){
    addButtonGroup("btn-outline-warning");
}  else if(addNewComponent === 'btn-group btn-outline-info'){
    addButtonGroup("btn-outline-info");
}  else if(addNewComponent === 'btn-group btn-outline-light'){
    addButtonGroup("btn-outline-light");
}  else if(addNewComponent === 'btn-group btn-outline-dark'){
    addButtonGroup("btn-outline-dark");
}   // button toolbar
    else if(addNewComponent === 'btn-toolbar btn-primary'){
        addButtonToolbar("btn-primary");
    } else if(addNewComponent === 'btn-toolbar btn-secondary'){
        addButtonToolbar("btn-secondary");
    } else if(addNewComponent === 'btn-toolbar btn-success'){
        addButtonToolbar("btn-success");
    } else if(addNewComponent === 'btn-toolbar btn-danger'){
        addButtonToolbar("btn-danger");
    } else if(addNewComponent === 'btn-toolbar btn-warning'){
        addButtonToolbar("btn-warning");
    } else if(addNewComponent === 'btn-toolbar btn-info'){
        addButtonToolbar("btn-info");
    } else if(addNewComponent === 'btn-toolbar btn-light'){
        addButtonToolbar("badge-light");
    } else if(addNewComponent === 'btn-toolbar btn-dark'){
        addButtonToolbar("btn-dark");
    }  else if(addNewComponent === 'btn-toolbar btn-outline-primary'){
        addButtonToolbar("btn-outline-primary");
    }  else if(addNewComponent === 'btn-toolbar btn-outline-secondary'){
        addButtonToolbar("btn-outline-secondary");
    }  else if(addNewComponent === 'btn-toolbar btn-outline-success'){
        addButtonToolbar("btn-outline-success");
    }  else if(addNewComponent === 'btn-toolbar btn-outline-danger'){
        addButtonToolbar("btn-outline-danger");
    }  else if(addNewComponent === 'btn-toolbar btn-outline-warning'){
        addButtonToolbar("btn-outline-warning");
    }  else if(addNewComponent === 'btn-toolbar btn-outline-info'){
        addButtonToolbar("btn-outline-info");
    }  else if(addNewComponent === 'btn-toolbar btn-outline-light'){
        addButtonToolbar("btn-outline-light");
    }  else if(addNewComponent === 'btn-toolbar btn-outline-dark'){
        addButtonToolbar("btn-outline-dark");
    } 
// card
else if(addNewComponent === 'card'){
    addCard1();
}
// carousel
else if(addNewComponent === 'carousel slides only'){
    addCarousel1();
} else if(addNewComponent === 'carousel with controls'){
    addCarousel2();
} else if(addNewComponent === 'carousel with indicators'){
    addCarousel3();
} else if(addNewComponent === 'carousel with captions'){
    addCarousel4();
}
// collapse 
else if(addNewComponent === 'collapse') {
    addCollapse();
}
// dropdown 
else if(addNewComponent === 'dropdown') {
    addDropdown();
}
else if(addNewComponent === 'dropdown with login') {
    addDropdownWithForm();
}
// FORMS
else if(addNewComponent === 'form') {
    addForm();
}
// INPUT GROUP
else if(addNewComponent === 'input group') {
    addInputGroup();
}
// JUMBOTRON
else if(addNewComponent === 'jumbotron') {
    addJumbotron();
}
// LIST GROUP
else if(addNewComponent === 'list group') {
    addListGroup();
}
// MODAL
else if(addNewComponent === 'modal') {
    addModal();
}
// NAVS
else if(addNewComponent === 'navs') {
    addNavs();
}

else {
    alert('Unknown component specified')
}
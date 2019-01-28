/*

019: EXERCISE: COPYING SEARCH RESULTS
-------------------------------------

/* VERSION 1
var r = document.getElementsByClassName('LC20lb');
for(i=0;i<r.length;i++){
  console.log(r[i].innerHTML);
}

/* VERSION 2
var r = document.getElementsByClassName('LC20lb');
for(i=0;i<r.length;i++){
  document.body.appendChild(r[i]);
}

/* VERSION 3
document.body.appendChild(document.createElement('li'))
document.body.appendChild(document.createElement('h1'))
var h1Tag = document.createElement('h1');
document.body.appendChild(h1Tag);
h1Tag.innerHTML = "Whatever";

/* VERSION 4
var r = document.getElementsByClassName('LC20lb');
for(i=0;i<r.length;i++){
  var listMembers = document.body.appendChild(r[i])
  document.body.innerHTML += listMembers.innerHTML + "<br>"
}

/* VERSION 5 
var r = document.getElementsByClassName('LC20lb');
for(i=0;i<r.length;i++){
  document.body.appendChild(r[i]);
  document.body.appendChild(document.createElement("br"))
}

/* VERSION 6
var r = document.getElementsByClassName('LC20lb');
var arr = [].slice.call(r);
document.body.innerHTML = "";
for(i=0;i<arr.length;i++){
  document.body.appendChild(arr[i]);
  document.body.appendChild(document.createElement("br"))
}

/* version 7
var userInput = prompt('What CSS class are you targeting? (e.g. LC20lb or iUh30 or st )');
var r = document.getElementsByClassName(userInput);
var arr = [].slice.call(r);
document.body.innerHTML = "";
for(i=0;i<arr.length;i++){
  document.body.appendChild(arr[i]);
  document.body.appendChild(document.createElement("br"));
  document.body.appendChild(document.createElement("br"))
}

*/

/* version 8 */
function titlesAndLinks(){
    this.titles = function titles(){
        var r = document.getElementsByClassName('LC20lb');
        var arr = [].slice.call(r);
        document.body.innerHTML = "";
        for(i=0;i<arr.length;i++){
            document.body.appendChild(arr[i]);
            document.body.appendChild(document.createElement("br"))
        }   
    }
    this.links = function links() {
        var r = document.getElementsByClassName('iUh30');
        var arr = [].slice.call(r);
        document.body.innerHTML = "";
        for(i=0;i<arr.length;i++){
            document.body.appendChild(arr[i]);
            document.body.appendChild(document.createElement("br"))
        }   
    }
}
// (new titlesAndLinks()).titles()
// (new titlesAndLinks()).links()




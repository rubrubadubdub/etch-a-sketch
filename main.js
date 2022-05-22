const container = document.getElementById('container');

var r = document.querySelector(':root');

let $size = 4;

document.container.onload = addElements($size);

function addElements($s) {
    r.style.setProperty('--sq-size', $s);

    for (let i = 0; i < ($s * $s); i++) {

        prevDiv = Number(i) - 1;
        // create a new div element
        const newDiv = document.createElement('div');

        // add attributes
        newDiv.setAttribute('id', `div"${i}"`);
        newDiv.setAttribute('class','cell');

        // add base content and eventlisteners
        const newContent = document.createTextNode("");

        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        newDiv.addEventListener('mouseenter',colorSquare);

        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById(`div"${prevDiv}"`);

        if (i == 0) {
            container.appendChild(newDiv);
        } else {
            container.insertBefore(newDiv, currentDiv);
        }
    }
}

function colorSquare(e){
    this.classList.add('etched');
}

function submitNewGrid(){
   let newValue = document.getElementById('num').value;
   while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  if(isNaN(newValue)){newValue = 4;}
  if(newValue > 100){newValue = 100;}
  if(newValue < 0){newValue = 0};
  console.log(newValue);
  addElements(newValue);
}

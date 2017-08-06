var body = document.body,
    ul = document.createElement('ul');

var getLi = setInterval(createLi, 1000);

var liNumber = 0
function createLi(){
  liNumber++;
  var li = document.createElement('li');
  if (liNumber < 5){
    ul.appendChild(li);
  } else {
    clearInterval(getLi);
  }
}

body.append(ul);

console.log(body);

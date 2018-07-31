var form = document.querySelector('.form')
var button = document.querySelector('.button')
var container = document.querySelector('.idea-container')

button.addEventListener('click', createCard);
container.addEventListener('click', remove)

function createCard(event) {
  event.preventDefault();
  var cardTitle = document.createElement('h2');
  var titleNode = document.createTextNode(title.value)
  var cardBody = document.createElement('p');
  var bodyNode = document.createTextNode(body.value);
  var card = document.createElement('section');
  var button = document.createElement('button');
  var buttonText = document.createTextNode('delete');

  button.classList.add('delete');
  button.appendChild(buttonText);

  cardTitle.appendChild(titleNode);
  cardTitle.setAttribute('contenteditable', true);
  cardBody.appendChild(bodyNode);
  cardBody.setAttribute('contenteditable' , true);
  card.appendChild(cardTitle)
  card.appendChild(cardBody);
  card.prepend(button)
  container.appendChild(card);

  console.log(title.value, body.value)
}

function remove(event) {
  if (event.target.className === 'delete') {
    event.target.closest('section').remove()
  }
}
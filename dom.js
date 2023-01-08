const mainContainer = document.getElementsByClassName('main-container')[0];

const button = document.createElement('button');
button.innerHTML = 'Click';
mainContainer.appendChild(button);

const toClick = () => {
  const textContainer = document.createElement('div');
  mainContainer.appendChild(textContainer);
  document.body.style.backgroundColor = "pink";
  const text = document.createElement('h1');
  text.innerHTML = 'Javascript test';
  textContainer.append(text);
};


button.onclick = toClick;

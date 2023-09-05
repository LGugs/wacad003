const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
    var storyText = 'Estava na temperatura de 94 fahrenheit na Grécia, onde ocorria o Rally de Acrópolis. Então :insertx: com o seu :inserty:, que pesava 1763 libras, :insertz:. Bob, perto da pista viu tudo e ainda conseguiu um prêmio: :insertx: lhe deu um boné autógrafado.';
    var insertX = ['Walter Röhrl', 'Michèle Mouton', 'Henri Toivonen'];
    var insertY = ['Audi Quattro S1 E2', 'Lancia Delta S4', 'Peugeot 205 T16'];
    var insertZ = ['venceu a etapa', 'furou o pneu e abandonou a prova', 'capotou, mas conseguiu finalizar a etapa'];

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(1763*0.071429)} pedras`;
    const temperature =  `${Math.round((94-32)*5/9)} graus celsius`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('1763 libras', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
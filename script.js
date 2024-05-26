let names = ["Erica Mustermann", "John Doe"];
let numbers = ["02161123456", "02161456789"];
load();

function addContact() {
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  names.push(name.value);
  numbers.push(phone.value);

  render();
  save();
}

function deleteContact(i) {
  names.splice(i, 1);
  numbers.splice(i, 1);

  render();
  save();
}

function save() {
  let namesAsText = JSON.stringify(names);
  let numbersAsText = JSON.stringify(numbers);
  localStorage.setItem("names", namesAsText);
  localStorage.setItem("numbers", numbersAsText);
}

function load() {
  let namesAsText = localStorage.getItem("names");
  let numbersAsText = localStorage.getItem("numbers");
  if (namesAsText && numbersAsText) {
    names = JSON.parse(namesAsText);
    numbers = JSON.parse(numbersAsText);
  }
}

function render() {
  let content = document.getElementById("content");
  content.innerHTML = "";
  content.innerHTML += `<h1>My Contacts</h1>`;
  content.innerHTML += `
    <div>
        <input placeholder="Name" id="name">
        <input placeholder="Telefon" id="phone">
        <button onclick="addContact()">Hinzufügen</button>
    </div>
    `;

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const number = numbers[i];
    content.innerHTML += `
            <div class="card">
                <b>Name: </b> ${name} <br>
                <b>Telefonnummer: </b> ${number} <br>
                <button onclick="deleteContact(${i})">Löschen</button>
            </div>
        `;
  }
}

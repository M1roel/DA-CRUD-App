let names = ['Erica Mustermann', 'John Doe'];
let numbers = ['02161123456', '02161456789'];


function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `<h1>My Contacts</h1>`;

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const number = numbers[i];
        content.innerHTML += `
            <div class="card">
                <b>Name: </b> ${name} <br>
                <b>Telefonnummer: </b> ${number} <br>
            </div>
        `;       
    }
}
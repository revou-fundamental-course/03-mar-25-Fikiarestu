// Ini file javascript

console.log('Javascript is working');

function validateform() {
    // Get value from input
    const nameInput = document.getElementById('name-input');
    console.log(nameInput.value);

    const phoneInput = document.getElementById('phone-input');
    console.log(phoneInput.value);

    let birthdayInput = document.getElementById('date-input');
    console.log(birthdayInput.value);

    let inboxInput = document.getElementById('inbox-input');
    console.log(inboxInput.value);


    // Check is input is empty
    if (nameInput.value == '') {
        alert('Name must be filled out !!!');
    }
    

}
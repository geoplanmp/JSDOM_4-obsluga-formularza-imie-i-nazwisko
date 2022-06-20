console.log("Warsztat – Obsługa formularza 'Imie i nazwisko'");

let form = document.getElementById('form');
const submit = (event) => {
    event.preventDefault();
    let fname = document.querySelector('[name="fname"]');
    let lname = document.querySelector('[name="lname"]');
    console.log(`Imię: ${fname.value}  Nazwisko: ${lname.value}`);
}

form.addEventListener('click', submit);
console.log("Warsztat – Obsługa formularza 'Imie i nazwisko'");

let form = document.getElementById('form');
const submit = (event) => {
    event.preventDefault();
    let fname = document.querySelector('[name="fname"]');
    let lname = document.querySelector('[name="lname"]');
    console.log(fname);
    console.log(lname);

}

form.addEventListener('click', submit)
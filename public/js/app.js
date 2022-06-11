

const weatherForm = document.querySelector('form');

const search = document.querySelector('input');

const messageOne = document.querySelector('#mesg1');
const messageTwo = document.querySelector('#mesg2');



//messageOne.textContent = 'From JavaScript';

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    fetch('http://localhost:3000/weather?address=' + encodeURIComponent(location)).then((response) =>{
    response.json().then((data) => {
        if(data.error){
           return messageOne.textContent = data.error;
        }

        messageOne.textContent = data.forecast;
        messageTwo.textContent = data.location;
    })
})
})
const btn = document.querySelector('#datamonbtn');
const date = JSON.parse(localStorage.getItem('date')) || [];

btn.addEventListener('click', e => {
    const val = document.querySelector('#datamon').value;
    
    const dateObj = {
        date : val
    };

    date.push(dateObj);
    localStorage.setItem('date', JSON.stringify(date));

});






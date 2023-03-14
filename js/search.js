const ulStud = document.querySelectorAll('#ul-st');
const ulStud2 = document.querySelector('#ul-st2');
const ulStud3 = document.querySelector('#ul-st3');
const student = JSON.parse(localStorage.getItem('student')) || [];

function displayItems(student, ulStud2){
    ulStud2.innerHTML = student.map((cla, index) => {
        return `<a class="ali" href="student_page.html" id="item${index}" data-index="${index}">
        <li data-index="li${index}" class="${cla.classS}"> ${index + 1}. ${cla.names} ${cla.Sname} ${cla.Lname} ${cla.dat} ${cla.classS}</li>
        </a>`;
    }).join('');
}
displayItems(student, ulStud2);

// *** search
const select = document.querySelector('.form__select');
const classObj = JSON.parse(localStorage.getItem('class'));
const selll = document.querySelector('#inp-sele');
const btn = document.querySelector('.button__text');
const li = document.querySelectorAll('li');

function displayClass(obj, sel){
    obj.forEach((item, i) => {
        sel.innerHTML += `
        <select class="form__input form__select" placeholder="Класс">
        <option value="${obj[i].number} ${obj[i].letter}" id="opClass">${obj[i].number} ${obj[i].letter}</option>                       
        </select>
        `;
    });
}
displayClass(classObj, select);

selll.addEventListener('change', function(){
    
    const selll = document.querySelector('#inp-sele');
   
    li.forEach((item, i) => {
       
        if(li[i].className == selll.value) {
            li[i].style.display = 'block';
        } else {
            li[i].style.display = 'none';
        } 
        
    });

});

btn.addEventListener('click', e => {
    li.forEach((item, i) => {
       
        if( li[i].style.display = 'none') {
            li[i].style.display = 'block';
        } 
        
    });
});






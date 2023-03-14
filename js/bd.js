const addItemForm = document.querySelector('.form__addstudent');
const itemsList = document.querySelector('.item-list');
const select = document.querySelector('.form__select');
const opt = document.querySelectorAll('.opClass');
const classObj = JSON.parse(localStorage.getItem('class'));
const items = JSON.parse(localStorage.getItem('class')) || [];

// *** создание класса

function addItem(e){
    e.preventDefault();

    const l = document.querySelector('#letter').value;
    const clas = document.querySelector('#number').value;

        const item = {
            number: clas,
            letter: l
        };

        items.push(item);
        localStorage.setItem('class', JSON.stringify(items));

        displayItems(items, itemsList);

}

function displayItems(classes, classesList){
    classesList.innerHTML = classes.map((cla, index) => {
        return `<a href="#" id="item${index}" data-index="${index}">
        <li>${cla.number}${cla.letter}</li>
        </a>`;
    }).join('');
}
addItemForm.addEventListener('submit', addItem);

// *** добавление ученика

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

const qwe = document.querySelector('#qwe');
const selectT = document.querySelector('#opClass').value;
// ***
const selll = document.querySelector('#inp-sele');
const selectF = function(){
    selll.addEventListener('change', function(){
        const selll = document.querySelector('#inp-sele');
        console.log(selll.value);
    });
    return selll.value;
};
// ***
const student = JSON.parse(localStorage.getItem('student')) || [];

qwe.addEventListener('click', e => {
    e.preventDefault();
    
    const names = document.querySelector('#inp-name').value;
    const Sname = document.querySelector('#inp-Sname').value;
    const Lname = document.querySelector('#inp-Lname').value;
    const dat = document.querySelector('#inp-data').value;
    
    const objDB = {
    
        names: names,
        Sname: Sname,
        Lname: Lname,
        dat: dat,
        classS : selectF(),
        dateTest: [],
        resultTest: []
        
    };


    student.push(objDB);
    localStorage.setItem('student', JSON.stringify(student));
    this.reset();
});


const divdate = document.querySelector('.dateinner');
const date = JSON.parse(localStorage.getItem('date')) || [];
const student = JSON.parse(localStorage.getItem('student')) || [];
const resB1 = JSON.parse(localStorage.getItem('resB1')) || [];
const resB2 = JSON.parse(localStorage.getItem('resB2')) || [];
const resB3 = JSON.parse(localStorage.getItem('resB3')) || [];
const resB4 = JSON.parse(localStorage.getItem('resB4')) || [];
const resB5 = JSON.parse(localStorage.getItem('resB5')) || [];
const resB6 = JSON.parse(localStorage.getItem('resB6')) || [];
const resB7 = JSON.parse(localStorage.getItem('resB7')) || [];
const resB8 = JSON.parse(localStorage.getItem('resB8')) || [];
// ***
const resN1 = JSON.parse(localStorage.getItem('resN1')) || [];
const resN2 = JSON.parse(localStorage.getItem('resN2')) || [];
const resN3 = JSON.parse(localStorage.getItem('resN3')) || [];
const resN4 = JSON.parse(localStorage.getItem('resN4')) || [];
const resN5 = JSON.parse(localStorage.getItem('resN5')) || [];
const resN6 = JSON.parse(localStorage.getItem('resN6')) || [];
const resN7 = JSON.parse(localStorage.getItem('resN7')) || [];
const resN8 = JSON.parse(localStorage.getItem('resN8')) || [];
const resN9 = JSON.parse(localStorage.getItem('resN9')) || [];
const resN10 = JSON.parse(localStorage.getItem('resN10')) || [];
const resN11 = JSON.parse(localStorage.getItem('resN11')) || [];
const resN12 = JSON.parse(localStorage.getItem('resN12')) || [];
const resN13 = JSON.parse(localStorage.getItem('resN13')) || [];
const resN14 = JSON.parse(localStorage.getItem('resN14')) || [];
const resN15 = JSON.parse(localStorage.getItem('resN15')) || [];
const resN16 = JSON.parse(localStorage.getItem('resN16')) || [];
// ***
const resE1 = JSON.parse(localStorage.getItem('resE1')) || [];
const resE2 = JSON.parse(localStorage.getItem('resE2')) || [];
const resE3 = JSON.parse(localStorage.getItem('resE3')) || [];
const resE4 = JSON.parse(localStorage.getItem('resE4')) || [];
const resE5 = JSON.parse(localStorage.getItem('resE5')) || [];
const resE6 = JSON.parse(localStorage.getItem('resE6')) || [];
const resE7 = JSON.parse(localStorage.getItem('resE7')) || [];
const resE8 = JSON.parse(localStorage.getItem('resE8')) || [];
const resE9 = JSON.parse(localStorage.getItem('resE9')) || [];
const resE10 = JSON.parse(localStorage.getItem('resE10')) || [];
const resE11 = JSON.parse(localStorage.getItem('resE11')) || [];
const resE12 = JSON.parse(localStorage.getItem('resE12')) || [];
const resE13 = JSON.parse(localStorage.getItem('resE13')) || [];
const resE14 = JSON.parse(localStorage.getItem('resE14')) || [];

date.forEach((item, i) => {
    
    divdate.innerHTML += `
    
    <ul class="ulliststudent">
        <li> ${date[i].date}
            <li> ${student[i].names} ${student[i].Sname}
                 ${student[i].Lname} ${student[i].dat} ${student[i].classS} </br>
                 <p style="color:blue; font-size:30px">Результат Беседа: ${+resB1 + +resB2 + +resB3 + +resB4
                    + +resB5 + +resB6 + +resB7 + +resB8}</p> <ol>
                 <p style="font-size:25px; font-weight:bold;">Личностные базовые учебные действия:${+resB1 + +resB2 + +resB3 + +resB4
                    + +resB5 + +resB6} <p>
                    <li>${resB1}</li>
                    <li>${resB2}</li>
                    <li>${resB3}</li>
                    <li>${resB4}</li>
                    <li>${resB5}</li>
                    <li>${resB6}</li>
                    <li><p style="font-size:25px; font-weight:bold;">Коммуникативные базовые учебные действия: ${resB7}</p></li>
                    <li><p style="font-size:25px; font-weight:bold;">Познавательные базовые учебные действия: ${resB8}</p></li>
                 </ol>
                 <p style="color:blue; font-size:30px">Результат Наблюдение: ${+resN1 + +resN2 + +resN3 + +resN4 + +resN5 + +resN6 + +resN7 + 
                    +resN8 + +resN9 + +resN10 + +resN11 + +resN12 + +resN13 + +resN14 + +resN15 + +resN16}</p> <ol>
                 <p style="font-size:25px; font-weight:bold;">Личностные базовые учебные действия:${+resN1 + +resN2 + +resN3 + +resN4 + +resN5 + +resN6 + +resN7} <p>
                    <li>${resN1}</li>
                    <li>${resN2}</li>
                    <li>${resN3}</li>
                    <li>${resN4}</li>
                    <li>${resN5}</li>
                    <li>${resN6}</li>
                    <li>${resN7}</li>
                <p style="font-size:25px; font-weight:bold;">Коммуникативные базовые учебные действия: ${+resN8 + +resN9 + +resN10 + +resN11 + +resN12 + +resN13}</p>
                    <li>${resN8}</li>
                    <li>${resN9}</li>
                    <li>${resN10}</li>
                    <li>${resN11}</li>
                    <li>${resN12}</li>
                    <li>${resN13}</li>
                <p style="font-size:25px; font-weight:bold;">Регулятивные базовые учебные действия: ${+resN14 + +resN15}</p>
                    <li>${resN14}</li>
                    <li>${resN15}</li>
                <p style="font-size:25px; font-weight:bold;">Познавательные базовые учебные действия: ${+resN16}</p>
                    <li>${resN16}</li>
                 </ol>
                 <p style="color:blue; font-size:30px">Результат Эксперимент: ${+resE1 + +resE2 + +resE3 + +resE4 + +resE5 + +resE6 + +resE7 + 
                    +resE8 + +resE9 + +resE10 + +resE11 + +resE12 + +resE13 + +resE14}</p> <ol>
                 <p style="font-size:25px; font-weight:bold;">Личностные базовые учебные действия:${+resE1 + +resE2} <p>
                    <li>${resE1}</li>
                    <li>${resE2}</li>
                    <p style="font-size:25px; font-weight:bold;">Коммуникативные базовые учебные действия: ${+resE8}</p>
                    <li>${resE3}</li>
                    <p style="font-size:25px; font-weight:bold;">Регулятивные базовые учебные действия: ${+resE4 + +resE5 + +resE6}</p>
                    <li>${resE4}</li>
                    <li>${resE5}</li>
                    <li>${resE6}</li>
                    <p style="font-size:25px; font-weight:bold;">Познавательные базовые учебные действия: ${+resE7 + 
                        +resE8 + +resE9 + +resE10 + +resE11 + +resE12 + +resE13 + +resE14}</p>
                    <li>${resE7}</li>
                    <li>${resE8}</li>
                    <li>${resE9}</li>
                    <li>${resE10}</li>
                    <li>${resE11}</li>
                    <li>${resE12}</li>
                    <li>${resE13}</li>
                    <li>${resE14}</li>
                    
                 </ol>  
                 </li>
        </li>
    </ul>
      
        `;
});

const ulC  = document.querySelectorAll('#ul');

const buttons = document.querySelectorAll('.list__elem-text');
const element = document.querySelectorAll('.list__ul');

buttons.forEach(btn => {
    
    btn.addEventListener('click', () => {
        
        element.forEach(op => {
            op.classList.toggle('ul--show');
        });
    });
});

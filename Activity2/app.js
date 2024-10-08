const number = document.getElementById('number'); 
const names = document.getElementById('names');  
const addBtn = document.getElementById('addBtn'); 

const ul = document.getElementById('conn'); 
addBtn.addEventListener('click', () => {
    const newNumber = number.value;
    const newNames = names.value;

    const p = document.createElement('p'); 
    const h6 = document.createElement('h6'); 
    p.innerHTML = newNames;
    h6.innerHTML = newNumber;

    p.classList.add('cname');
    h6.classList.add('cnumber');


    
    const li = document.createElement('li');
    li.append(p);
    li.append(h6);

    ul.append(li);
    
    console.log(li);
})

console.log(number, names, addBtn);



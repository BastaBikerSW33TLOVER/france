const number = document.getElementById('number'); 
const names = document.getElementById('names');  
const addBtn = document.getElementById('addBtn'); 
const searchInput = document.getElementById('search'); 

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

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('deleteBtn');

    deleteBtn.addEventListener('click', () => {
        ul.removeChild(li);
    });

    li.append(deleteBtn);
    ul.append(li);
    
    // Clear the input fields
    number.value = '';
    names.value = '';
});

// Search function
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const items = ul.getElementsByTagName('li');

    for (const item of items) {
        const name = item.getElementsByClassName('cname')[0].innerText.toLowerCase();
        const number = item.getElementsByClassName('cnumber')[0].innerText.toLowerCase();

        // Check if the name or number includes the search term
        if (name.includes(searchTerm) || number.includes(searchTerm)) {
            item.style.display = ''; // Show item
        } else {
            item.style.display = 'none'; // Hide item
        }
    }
});

console.log(number, names, addBtn, searchInput);

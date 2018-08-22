//EXAMINE THE DOCUMENT OBJECT//

//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head); 
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// SELECTORS

let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Good bye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px #000';

// get elements by class name
let items = document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent = 'Hello 2';
//items[1].style.backgroundColor = '#333';
items[1].style.color = '#fff';

// to select all items with class name
for(let i = 0; i < items.length; i++){
	items[i].style.backgroundColor = '#f3f3f3';
}
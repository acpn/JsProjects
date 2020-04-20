let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector( 'li.collection.item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

/* Types of elements
   1 - Element
   2 - Attribute (deprecated)
   3 - Text node
   8 - Comment
   9 - Document itself
   10 - Doctype
*/

// Get children element nodes (get elements)
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// Children of children
val = list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.lastChild;
val = list.lastElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = list.parentNode;
val = list.parentElement;
val = list.parentElement.parentElement;

// Get next sibling
val = list.nextSibling;
val = list.nextSibling.nextSibling;

console.log(val);
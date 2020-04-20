// document.querySelector('.clear-tasks').addEventListener('click', function(){
//     console.log('Hello World');
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    let val;

    val = e;
    
    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    
    // Event type
    val = e.type;
    
    // Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}
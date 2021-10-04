const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click' , () => {
    container.classList.add('show-nav');
});

close.addEventListener('click' , () => {
    container.classList.remove('show-nav');
});






/*================================================================================================================================================================================================================= */
/*Expanding card - js*/

//select all panels by using 
/*querySelectorAll() method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.*/
let headerText = "Hi";


var nothing= 0; // for merge confilct ++++

const panels = document.querySelectorAll('.panel');

// use arrow function
panels.forEach(panel=> {
    panel.addEventListener('click' , () => {
        removeActiveClasses();
        panel.classList.add('active'); //when click on it will be active , so expanding them but its's not retracting the other one ,,,for that we add"FUCNTION" to remove the other active
    })
})

function removeActiveClasses(){
    panels.forEach ( (panel) => { // u could not add () around panel , if only wrote one parameter without index and complete arr 
        panel.classList.remove('active');
    })
}
       


/*addEventListener() method allows you to set up functions to be called when a specified event happens, such as when a user clicks a button. */

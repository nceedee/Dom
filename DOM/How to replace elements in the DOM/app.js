//REPLACE ELEMENTS

//CREATE ELEMENT;

const newHeading = document.createElement( 'h2' );

//ADD 
newHeading.id = 'task-title';
newHeading.appendChild( document.createTextNode( 'Task list' ) );

//GET THE OLD HEADING
const oldHeading = document.getElementById( 'task-title' );

//PARENT
const cardAction = document.querySelector( '.card-action' );


//REPLACE
cardAction.replaceChild( newHeading, oldHeading );




//REMOVE ELEMENT;
const lis = document.querySelectorAll( 'li' );
const list = document.querySelector( 'ul' );


//REMOVE LIST ITEM
lis[ 0 ].remove();

//REMOVE CHILD ELEMENT
list.removeChild( lis[ 3 ] );




//CLASSES

const firstLi = document.querySelector( 'li:first-child' );



const link = firstLi.children[ 0 ];

let val;

val = link.className;
val = link.classList.add( 'test' );
val = link

// console.log( val );


const i = document.querySelector( 'i' );
const adding = i.classList.add('dave')

// console.log( i );


//ATTRIBUTES

val = link.getAttribute( 'href' );
val = link.setAttribute( 'href', 'index.html' );
val = link.setAttribute( 'title', 'google' );

val = link.hasAttribute( 'title' );

console.log( val = link );
//CREATE ELEMENT

// const li = document.createElement( 'li' );


// //ADD CLASS
// li.className = 'col-item';

// //ADD ID
// li.id = 'col-item';

// //ADD ATTRIBUTE
// li.setAttribute( 'title', 'new item' );

// //CREATE TEXT NODES AND APPEND

// li.appendChild( document.createTextNode( 'Number Six' ) );

// //APPEND TD AS CHILD TO TR;
// document.querySelector( 'ul' ).appendChild( li );

// const link = document.createElement( 'a' );
// link.className = 'cancel';
// link.innerHTML = '<a href="#" class="cancel">x</a>';

// li.appendChild(link)
 
// console.log(link);




let li = document.createElement( 'li' );
li.className = 'col-item';
li.appendChild( document.createTextNode( 'Number Six' ) );

document.querySelector( 'ul' ).appendChild( li );

let links = document.createElement( 'a' );
links.className = 'cancel';
links.innerHTML = '<a href="#" class="cancel">x</a>';
li.appendChild( links );

let liTWo = document.createElement( 'li' );
liTWo.className = 'col-item';
liTWo.appendChild( document.createTextNode( 'Number Seven' ) );
document.querySelector( 'ul' ).appendChild( liTWo );

// let linkTwo = document.createElement( 'a' );
// linkTwo.className = 'cancel';
// linkTwo.innerHTML = '<a href="#" class="cancel">x</a>';
// liTWo.appendChild( linkTwo );
// console.log(linkTwo)
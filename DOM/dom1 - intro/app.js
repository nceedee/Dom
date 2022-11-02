let val;

val = document;
val = document.all;
val = document.all[ 6 ];
val = document.all.length;
val = document.head;
val = document.body;
val = document.forms;
val = document.forms[ 1 ];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[ 0 ].action;

val = document.links;
val = document.links[ 0 ].style.textDecoration = 'none';
val = document.links[ 0 ].className;
val = document.links[0].classList[1];
val = document.images;
val = document.images[ 0 ].style.display = 'block';

val = document.scripts[ 0 ].getAttribute( 'src' );




//LOOPING THROUGH THINGS DEFINED IN THE HTML (DOCUMENT)


let form = document.forms;

let formsArr = Array.from( form );

formsArr.forEach( function (value)
{
    console.log(formsArr)
} );



console.log(val)
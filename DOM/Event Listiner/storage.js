//SET LOCAL STORAGE ITEM;
// localStorage.setItem( 'name', 'Nnaji' );
// localStorage.setItem( 'age', 18 );

//SET SESSION STORAGE ITEM;
// sessionStorage.setItem( 'name', 'David' );

// //REMOVE FROM STORAGE
// localStorage.removeItem('name')
// localStorage.removeItem("age");

//GET FROM STORAGE;
const name = localStorage.getItem("name");
const age = localStorage.getItem( "age" );


// //CLEAR LOCAL STORAGE
// localStorage.clear()
// console.log(name , age)

const form = document.querySelector( 'form' ).addEventListener( 'submit', function ( e )
{
    const task = document.getElementById( "input-task" ).value;

    let tasks;

    if ( localStorage.getItem( 'tasks' ) === null )
    {
        tasks = [];
    } else
    {
        tasks = JSON.parse( localStorage.getItem( 'tasks' ) );
    };

    tasks.push( task );

    localStorage.setItem( 'tasks', JSON.stringify( tasks ) );
    
    alert( 'Task saved' );




    e.preventDefault();
} );

const tasks = JSON.parse(localStorage.getItem( 'tasks' ));

tasks.forEach( function ( task )
{
    console.log(task)
})
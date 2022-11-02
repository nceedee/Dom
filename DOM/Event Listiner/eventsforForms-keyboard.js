// const form = document.querySelector( 'form' );

// const taskInput = document.getElementById( 'task' );
// const heading = document.querySelector( 'h5' );
// const select = document.querySelector( 'select' );

//CLEAR INPUT;
// taskInput.value = ''
// form.addEventListener( 'submit', runEvent );


//KEYDOWN
// taskInput.addEventListener( "keydown", runEvent );

//KEYUP
// taskInput.addEventListener("keyup", runEvent);

//KEYPRESS
// taskInput.addEventListener("keypress", runEvent);

//FOCUS
// taskInput.addEventListener("focus", runEvent);

//BLUR
// taskInput.addEventListener("blur", runEvent);


//CUT
// taskInput.addEventListener("cut", runEvent);

//COPY
// taskInput.addEventListener("copy", runEvent);

//PASTE
// taskInput.addEventListener("paste", runEvent);

//INPUT
// taskInput.addEventListener("input", runEvent);

//CHANGE
// select.addEventListener( 'change', runEvent );






function runEvent( e )
{
    console.log( `EVENT TYPE: ${ e.type }` );
    // console.log(e.target.value)

    heading.innerText = e.target.value;
    

    //GET INPUT VALUE;

    // console.log(taskInput.value)
    // e.preventDefault();
}


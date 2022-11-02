//EVENT BUBBLING

// document.querySelector( ".heading" ).addEventListener( 'click', function ()
// {
//     console.log('heading')
// })


// document.querySelector(".whole-content").addEventListener("click", function () {
//   console.log("whole-content");
// });

// document.querySelector(".sub-content").addEventListener("click", function () {
//   console.log("Sub-content");
// } );

// document.querySelector(".main-content").addEventListener("click", function () {
//   console.log("Main-content");
// });




//EVENT DELEGATION

// const deleteItem = document.querySelector( '.cancel' );

// deleteItem.addEventListener( 'click', delItem );


// document.body.addEventListener( 'click', delItem );
// function delItem(e)
// {

//     if ( e.target.parentElement.classList.contains('cancel'))
//     {
//         console.log( 'delete item' );
//         e.target.parentElement.parentElement.remove()
//     }

   
//     console.log(e.target.parentElement.classList.contains("cancel"));

// }
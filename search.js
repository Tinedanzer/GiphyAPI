const topics= ["Cheer Carebear","Grumpy Carebear","Share Bear","Funshine Bear","Tenderheart Bear"];
let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ru1FqB2awevSCsIvdrTZ3Q2K4kJdihkX&q=" + "carebears" + "&limit=10&offset=0&lang=en";
for (let i = 0; i < topics.length; i++) 
{
 let topics1= topics[i];
//  const newarray = topics.map(function(item, index){
  // ****fixed topics by adding an [i]****************
//  let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ru1FqB2awevSCsIvdrTZ3Q2K4kJdihkX&q=" + "carebears" + "&limit=10&offset=0&lang=en";
    $.ajax({
       url: queryURL,
        method: "GET"
       }).then(function(response) 
  {
         console.log(response);

         $(".Aroo").append(`<button value=button>${topics[i]}</button>`);
         $("button").attr('id', i => `button${i}`)
  });
};
// *************************************************************************************************************
// ************TAKE THIS BUTTON CLICK OUT OF THe FOR LOOP, MAKE ANOTHER FOR LOOP WITHIN THE BUTTON**************
// *************************************************************************************************************
$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) 
    {
      $("button").on("click", function () {
        for (let i = 0; i < 5; i++) {
          let chilly= response.data[i].images.fixed_width_still.url;
           $("#friends").prepend(`
           <div>${response.data[i].title}</div>
          <div><img src="${chilly}"></div>
           <div>${response.data[i].rating}</div>
           `); 
        }
       });
     });
//          const newbutton= $("<button>");
//          newbutton.attr('id', `button${index}`);
//          newbutton.text(item);
//         const traits= $('<img/>');
//         traits.attr('src', response.data[index].images.fixed_width_still.url);
//         traits.attr('data-still', response.data[index].images.fixed_width_still.url);
//         traits.attr('data-animate', response.data[index].images.fixed_width.url);
        
//         const names =`<div>${response.data[index].title}</div>`;
//         console.log(names);
//         const ratings= `<div>${response.data[index].rating}</div>`;
//          newbutton.click(function(){
//           $("#friends").prepend(traits, names, ratings); 
         
//          });
  //  $(".Aroo").append(newbutton);
    //    $("#button1").on("click", function () 
    //   {                 
    //      $("#friends").prepend(`
    //      <div>${response.data[1].title}</div>
    //      <div><img src="${response.data[1].images.fixed_width_still.url}"></div>
    //      <div>${response.data[1].rating}</div>
    //      `);  
    //    });
    //    $("#button2").on("click", function () 
    //   {                 
    //      $("#friends").prepend(`
    //      <div>${response.data[2].title}</div>
    //      <div><img src="${response.data[2].images.fixed_width_still.url}"></div>
    //      <div>${response.data[2].rating}</div>
    //      `);  
    //    });
    //    $("#button3").on("click", function () 
    //   {                 
    //      $("#friends").prepend(`
    //      <div>${response.data[3].title}</div>
    //      <div><img src="${response.data[3].images.fixed_width_still.url}"></div>
    //      <div>${response.data[3].rating}</div>
    //      `);  
    //    });
    //    $("#button4").on("click", function () 
    //   {                 
    //      $("#friends").prepend(`
    //      <div>${response.data[4].title}</div>
    //      <div><img src="${response.data[4].images.fixed_width_still.url}"></div>
    //      <div>${response.data[4].rating}</div>
    //      `);  
    //    });
// });
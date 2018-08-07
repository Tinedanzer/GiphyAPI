$(document).ready(function(){
var topics= ["Cheer Bear","Grumpy Bear","Share Bear","Funshine Bear","Tenderheart Bear"];

for (let i = 0; i < topics.length; i++) 
{
 var topics1= topics[i];
//  var newarray = topics.map(function(item, index){
 var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ru1FqB2awevSCsIvdrTZ3Q2K4kJdihkX&q=" + topics + "&limit=10&offset=0&lang=en";
    $.ajax({
       url: queryURL,
        method: "GET"
       }).then(function(response) 
  {
         console.log(response);
//          var newbutton= $("<button>");
//          newbutton.attr('id', `button${index}`);
//          newbutton.text(item);
//         var traits= $('<img/>');
//         traits.attr('src', response.data[index].images.fixed_width_still.url);
//         traits.attr('data-still', response.data[index].images.fixed_width_still.url);
//         traits.attr('data-animate', response.data[index].images.fixed_width.url);
        
//         var names =`<div>${response.data[index].title}</div>`;
//         console.log(names);
//         var ratings= `<div>${response.data[index].rating}</div>`;
//          newbutton.click(function(){
//           $("#friends").prepend(traits, names, ratings); 
         
//          });
        //  $(".Aroo").append(newbutton);
         $(".Aroo").append(`
         <button value=button>${topics[i]}
         </button>`);
         $("button").attr('id', x => `button${x}`)

        var chilly= response.data[i].images.fixed_width_still.url;
        
        $("button").on("click", function () 
      {
         $("#friends").prepend(`
         <div>${response.data[i].title}</div>
         <div><img src="${chilly}"></div>
         <div>${response.data[i].rating}</div>
         `);  
       });
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
  });


// });
};
})

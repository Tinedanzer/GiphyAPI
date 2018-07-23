$(document).ready(function()
{
var topics= ["Cheer Bear","Grumpy Bear","Share Bear","Funshine Bear","Tenderheart Bear"];

for (let i = 0; i < topics.length; i++) 
{
 var topics1= topics[i];
 var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ru1FqB2awevSCsIvdrTZ3Q2K4kJdihkX&q=" + topics1 + "&limit=10&offset=0&lang=en";
    $.ajax({
       url: queryURL,
        method: "GET"
       }).then(function(response) 
  {
         console.log(response);
        //  id=button${topics[i]}
         //  var newbutton= document.getElementsByClassName('Aroo')+i;
         $(".Aroo").append(`
         <button value=button>${topics[i]}
         </button>`);
         $("button").attr('id', x => `button${x}`);

        var chilly= response.data[i].images.fixed_width_still.url;
        
        $("#button0").on("click", function () 
      {
         $("#friends").prepend(`
         <div>${response.data[0].title}</div>
         <div><img src="${chilly}"></div>
         <div>${response.data[0].rating}</div>
         `);  
       });
       $("#button1").on("click", function () 
      {                 
         $("#friends").prepend(`
         <div>${response.data[1].title}</div>
         <div><img src="${response.data[1].images.fixed_width_still.url}"></div>
         <div>${response.data[1].rating}</div>
         `);  
       });
       $("#button2").on("click", function () 
      {                 
         $("#friends").prepend(`
         <div>${response.data[2].title}</div>
         <div><img src="${response.data[2].images.fixed_width_still.url}"></div>
         <div>${response.data[2].rating}</div>
         `);  
       });
       $("#button3").on("click", function () 
      {                 
         $("#friends").prepend(`
         <div>${response.data[3].title}</div>
         <div><img src="${response.data[3].images.fixed_width_still.url}"></div>
         <div>${response.data[3].rating}</div>
         `);  
       });
       $("#button4").on("click", function () 
      {                 
         $("#friends").prepend(`
         <div>${response.data[4].title}</div>
         <div><img src="${response.data[4].images.fixed_width_still.url}"></div>
         <div>${response.data[4].rating}</div>
         `);  
       });
  });

};
})      
var topics= ["Cheer Bear","Grumpy Bear","Share Bear","Funshine Bear","Tenderheart Bear"];

for (let i = 0; i < topics.length; i++) 
{
 var topic1= topics[i];
 
 var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ru1FqB2awevSCsIvdrTZ3Q2K4kJdihkX&q=" + topics[i] + "&limit=10&offset=0&lang=en";
    $.ajax({
       url: queryURL,
        method: "GET"
       }).then(function(response) {
         console.log(response);
        //  var newbutton= document.getElementsByClassName('Aroo')+i;
         $(".Aroo").append(`
         <button id=button${topics[i]} value=button>${topics[i]}
         </button>`);
        //  $(".Aroo").attr(id, buttoni);
        $("button").on("click", function () 
      {
                 
         $("#friends").prepend(`
         <div>${response.data[i].title}</div>
         <div><img src="${response.data[i].images.fixed_width_still.url}"></div>
         <div>${response.data[i].rating}</div>
         `);
       });
      });
};


   
        
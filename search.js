var topics= ["Cheer Bear","Grumpy Bear","Share Bear","Funshine Bear","Share Bear"];
for (let i = 0; i < topics.length; i++) 
{
 var topic1= topics[i];
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ru1FqB2awevSCsIvdrTZ3Q2K4kJdihkX&q=" + topic1 + "&limit=10&offset=0&rating=G&lang=en";
    $.ajax({
       url: queryURL,
        method: "GET"
       }).then(function(response) {
         console.log(response);
         $(".Aroo").append(`
         <button id=newbutton[i] value=button>${topics[i]}</button>`);

         $("#friends").prepend(`<div>${response.Title}</div><div>${response.images_still}</div>
         <div>${response.rating}</div>`);
       });
};

       
   
        
var topics= ["Cheer Bear","Grumpy Bear","Share Bear","Funshine Bear","Tenderheart Bear"];
var counter=0;
for (let i = 0; i < topics.length; i++) 
{
 var topic1= topics[i];
 var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=ru1FqB2awevSCsIvdrTZ3Q2K4kJdihkX&q=" + topics[i] + "&limit=10&offset=0&lang=en";
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
         
        //  $(".Aroo").each(function(){
        //    $(this).attr("id", "button" + i);
        //    console.log(this);
        //    counter++;
        //    console.log(counter);  
        //  })
        //  $(".Aroo").attr(id, buttoni);
        $("#button0").on("click", function () 
      {
                 
         $("#friends").prepend(`
         <div>${response.data[0].title}</div>
         <div><img src="${response.data[0].images.fixed_width_still.url}"></div>
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
  });
};


   
        
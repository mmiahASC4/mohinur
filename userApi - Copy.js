const userURL = "https://randomuser.me/api/"


function setup (){
    $.getJSON(userURL, 
    // print user's name
    function (data)  {
      console.log(data.results[0].name.first)
        

       // $('body').append ('<h1>Users name is.</h1>')


    }
    )
} 




    
    $(document).ready(setup)






      
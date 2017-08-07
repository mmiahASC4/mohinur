const userURL = "https://randomuser.me/api/"
function setup (){
    $.getJSON(userURL,
    // print user's name
    function (data)  {
        // console.log(data.results[0].name.first)
        // console.log(data.results[0].name.last)
        //  console.log(data.results[0].gender)
        //  console.log(data.results[0].picture.large) 

      
        $('body').append (`<h1>Users name is ${data.results[0].name.first}.</h1>`)
        $('body').append (`<h2>Users last name is ${data.results[0].name.last}.</h2>`)
        $('body').append (`<h3>Users gender is ${data.results[0].gender}.</h3>`)
        $('body').append(`<img src = ${data.results[0].picture.large}>`)
        $('body').append(`<h4>My country is ${data.results[0].nat}</h4>`)

       $.ajax({
           url:`https://restcountries.eu/rest/v2/alpha?codes=${data.results[0].nat}`
       }).done(function(data){
           handleData(data);
       
         }
    ) // end of inner function(data)
} // end of first function(data)
    )}

$(document).ready(setup)

var handleData = function(data){
    $("body").append(data[0].name)
    $('body').append(`<img src = ${data[0].flag}>`)
    console.log(data[0]);
}

    




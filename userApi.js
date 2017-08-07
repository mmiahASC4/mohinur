const userURL = "https://randomuser.me/api/"


function setup (){
    $.getJSON(userURL, 
    // print user's name
    function (data)  {
      console.log(data.results[0].name.first)
      console.log(data.results[0].name.last)
      console.log(data.results[0].gender)
      console.log(data.results[0].picture)
      
  $('body').append (`<h1>Users name is ${data.results[0].name.first}.</h1>`)
  $('body').append (`<h2>Users last name is ${data.results[0].name.last}.</h2>`)
  $('body').append (`<h3>Users gender is ${data.results[0].gender}.</h3>`)
  $('body').append (`<h4>Users photo ID is ${data.results[0].picture}.</h4>`)

}
    )
} 




    
    $(document).ready(setup)






      
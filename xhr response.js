/*

1.Solving problems using array functions on the rest countries' data 

a)Get all the countries from Asia continent /region using Filter function:


 const XMLHttpRequest = require('xhr2');                //install xhr2

 var request = new XMLHttpRequest();                     //create xhr object

 request.open("GET","https://restcountries.com/v2/all");//open request with URL

 request.send();                                        //send request

 request.onload=function(){                             //onload callback function when status=200
     var result=JSON.parse(request.response);           //parse the response
      result.filter((countries) => {                    //filter the countries from Asia continent.
            return countries.region ==="Asia";
      })
      console.log(result);
 }
  


 b)Get all the countries with a population of less than 2 lakhs using Filter function

 const XMLHttpRequest = require('xhr2')                      //install xhr2
 var request1 = new XMLHttpRequest();                        //create xhr object


 request1.open("GET","https://restcountries.com/v2/all");    //request open

 request1.send();                                            //send request

 request1.onload=function(){                                 //onload callback function when status=200

    var result1=JSON.parse(request1.response);              //parse the response
   const open = result1.filter((element)=>{
        return element.population<200000;                  //population of less than 2 lakhs using Filter function
    })
 console.log(open);}



 c)Print the following details name, capital, flag using forEach function
 const XMLHttpRequest=require('xhr2')                        //install xhr2

 var requestt = new XMLHttpRequest();                        //create xhr object

 request2.open("GET","https://restcountries.com/v2/all");    //request open

 request2.send();                                             //send request

 request2.onload=function(){                                  //onload callback function when status=200
     var result2=JSON.parse(request2.response);               //parse result
    resultt.forEach(element => {                              //using forEach function
     console.log(element.name);
         console.log(element.capital);
         console.log(element.flag); 

   });
 }


d)Print the total population of countries using reduce function


  const XMLHttpRequest=require('xhr2')                                   //install xhr2

   var reques = new XMLHttpRequest();                                    //create XMLHttpRequest

   request3.open("GET","https://restcountries.com/v2/all");              //request open

    request3.send();                                                     //send request
  
request3.onload=function(){                                              //onload callback function when status=200

    var result=JSON.parse(request3.response);                            //parse the response
     var total = result.reduce((acc,curr) =>{                            //use the rduce function
         return acc+curr.population;
   } ,0);

     console.log(total);
 
 }


e)Print the country which uses US Dollars as currency
const XMLHttpRequest = require('xhr2');                             //install xhr2

var req = new XMLHttpRequest();                                     //create xhr object

req.open("GET","https://restcountries.com/v2/all");                 //request open

req.send();                                                         // send request

req.onload=function(){                                              //onload callback function when status=200
                                           
   var res=JSON.parse(req.response);                                //parse the response
                                                      
   var currency = res.filter((element) => {                         //using filter function country which uses US Dollar 
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }

    */
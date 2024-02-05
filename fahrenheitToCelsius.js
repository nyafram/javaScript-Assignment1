// function to convert Temperature from Fahrenheit to Celsius const fahrenheit = 68;

function fahrenheitToCelsius(fahrenheit) 
      {
        celsius = ((fahrenheit-32) * 5/9);
        return celsius.toFixed(2) +' '+'Degree Celsius' 
       }
  console.log(fahrenheitToCelsius(68));
  console.log(fahrenheitToCelsius(78));
 console.log(fahrenheitToCelsius(88));
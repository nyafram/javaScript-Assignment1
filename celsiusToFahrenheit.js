// function to convert Temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) 
      {
        fahrenheit = ((celsius * 9/5) + 32).toFixed(2);
        return fahrenheit+' '+'Degree Fahrenheit' 
      }
  console.log(celsiusToFahrenheit(20));
  console.log(celsiusToFahrenheit(25.675555));
  console.log(celsiusToFahrenheit(31.8889));


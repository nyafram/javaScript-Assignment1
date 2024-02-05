
// A script to return true or false

function trueOrFalse(m, n) {
    let result = m+n;
    if (result > 100) {
        return 'true';
    } else {
      return 'False';
    }
    return result;
  }
  
  console.log(trueOrFalse(22,60));
  console.log(trueOrFalse(40,60));
  console.log(trueOrFalse(2,60));
  console.log(trueOrFalse(50,60));
  
// Number to digit tiers
function createArrayOfTiers(num){

}
//  String to integer conversion

function myParseInt(str) {
    let szam = parseInt(str, 10)
    console.log(szam)
  }

// Disemvowel Trolls
function disemvowel(str) {
    return str.replace(/[aeioAEIOU]/gi, '');
  }

// Factorial
function factorial(n){
    if (n < 0){
        return " A faktoriális nem definiálható"
    }
    let eredmeny  = 1 ; 
    for ( let i = 1 ; i <=n; i++){
        eredmeny *= i; 
    }
    return eredmeny;
  }
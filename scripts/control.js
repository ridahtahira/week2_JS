var x=Number(prompt("enter a number in the range of 10-100"));
try{
switch(true)
{
    case (x>10 && x<100):
        printFib(x);
        break;
    default:
        throw "not in range"
        break;
}
}
catch(err)
{
    alert(err);
}
function printFib(n)
{
    var i;
    var fib = []; // Initialize array!
    
    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= n; i++) {
      
      fib[i] = fib[i - 2] + fib[i - 1];
      console.log(fib[i]);
    }
}

document.addEventListener("DOMContentLoaded",function(event)
{
    var arr=[85,79,78,88,100];
var sum=0;
var avg=0;
for(var i=0;i<arr.length;i++)
{
  sum+=arr[i];
}
avg=sum/arr.length;
alert("Total="+sum + " Average=" + avg);
});
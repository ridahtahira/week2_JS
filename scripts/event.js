var lis=document.querySelectorAll('li');
var button=document.querySelector("button");
button.addEventListener("click",function()
{
    alert("Button clicked!!");
})
alert("changing the color of list items to purple when clicked ");
for(var i=0;i<lis.length;i++)
{
    lis[i].addEventListener("click",function()
    {
        this.style.color="purple";
    });
}
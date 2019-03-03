var i=0;
var picArray = ["images/pizza01.jpg", "images/pizza02.jpg", "images/pizza03.jpg"];
var s = picArray.length - 1;
console.log("size == ", s);

function Back()
{
    if(i===s) document.getElementsByClassName("image-viewer__button")[1].classList.remove("disabled");
    if(i!==0)
    {
        document.getElementById("display").src = "images/loading.gif"; 
        //changes pic to loading before next line's pic is ready
        document.getElementById("display").src = picArray[--i];
        if(i===0) document.getElementsByClassName("image-viewer__button")[0].classList.add("disabled");
    }
}

function Next()
{
    if(i===0) document.getElementsByClassName("image-viewer__button")[0].classList.remove("disabled");
    if(i!==s)
    {
        document.getElementById("display").src = "images/loading.gif";
        document.getElementById("display").src = picArray[++i];
        if(i===s) document.getElementsByClassName("image-viewer__button")[1].classList.add("disabled");
    }
}
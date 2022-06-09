var n = document.querySelectorAll(".drum").length;

for(var i=0; i<n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , clickHandle);
}

function clickHandle(){
    alert("I got clicked");
}
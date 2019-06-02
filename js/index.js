function changeColor(data){
    var pEle = document.getElementById("p-text");
    if(data == 1){
	pEle.style.color="red";
    }else if(data == 2){
        pEle.style.color="blue";
    }else{
 	pEle.style.color="black";
    }

}

menuListArray = ["Pizza Vegetariana",
  "pizza de frango", "pizza portuguesa",
"pizza de quatro queijos", 
"pizza de calabresa", "pizza de vegeangoguesaijos" ];


function getMenu(){
    var htmldata="";
    menuListArray.sort();
    
    for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
 }

function addItem(){
var htmldata;
var imgtags='<img id="im1" src="pizzaImg.png">'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""

for(var i=0;i<menuListArray.length;i++){
htmldata=html+imgtags+menuListArray[i]+'<br>'
}

}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}
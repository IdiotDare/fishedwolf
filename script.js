//alert("Not made for mobile. Or really, any screen size besides my own.")

function clickThisPls(){
    let altText = ["yeetos"] ;//remember, arrayname.push adds to the end of array
    let paraText = document.getElementById("main");
    if(paraText != altText) {
        document.getElementById("main") = altText[0];
        paratext = altText[0]
        return document.getElementById("main")
    }
}

function boardTest(number){
    var a = document.getElementById('main')
    if(number == '1'){
       document.getElementById("boardone").classList.add("boardAniClass") 
       document.getElementById("boardone").classList.add("aftani") 
    } else if(number == '2'){
        document.getElementById("boardtwo").classList.add("boardAniClass") 
        document.getElementById("boardtwo").classList.add("aftani") 
    } else if(number == '3'){
        document.getElementById("boardthree").classList.add("boardAniClass") ;
        document.getElementById("boardthree").classList.add("aftani") ;
    } else if(number == '4' && a == "Yolo"){
        document.getElementById("main") = "you are dumb";
        }
    let y = "kill the clam put her on a stake and "
    return y
}

function foodOrder(item){
 const node = document.createTextNode(item)
 const itemTable = document.getElementById("item");
 itemTable.appendChild(node);
}

/*
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);
*/
/* add id
g = document.createElement('div');
g.setAttribute("id", "Div1");
or
g.id = 'desiredId'
*/
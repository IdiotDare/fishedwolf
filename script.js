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
    if(number == '1'){
       document.getElementById("#boardone").classList.add("boardAniClass") 
    } else if(number == '2'){
        document.getElementById("#boardtwo").classList.add("boardAniClass") 
    } else if(number=='3'){
        document.getElementById("#boardthree").classList.add("boardAniClass") 
    }
    let y = "kill the clam put her on a stake and "
    return y
}
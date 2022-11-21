function boardTest(number){
    if(number == '1'){
       document.getElementById("#boardone").classList.add("boardAniClass") 
    } else if(number == '2'){
        document.getElementById("#boardtwo").classList.add("boardAniClass") 
    } else if(number=='3'){
        document.getElementById("#boardthree").classList.add("boardAniClass") 
    }
    
}
/*The simple-and-direct approach is to create and add a new style node to the document.

// Your CSS as text
var styles = `
    .qwebirc-qui .ircwindow div { 
        font-family: Georgia,Cambria,"Times New Roman",Times,serif;
        margin: 26px auto 0 auto;
        max-width: 650px;
    }
    .qwebirc-qui .lines {
        font-size: 18px;
        line-height: 1.58;
        letter-spacing: -.004em;
    }
    
    .qwebirc-qui .nicklist a {
        margin: 6px;
    }
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
*/
/*
document.getElementById("#myId").classList.add('myClass') 
//add a css class with yknow the shit you wanna change, remember, it reads from top to down
document.getElementById("#myId").classList.remove('myClass') 
*/
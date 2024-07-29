// text-editor
// accessing all the elements 
let optionButton=document.querySelectorAll(".option-button");
let advButtons=document.querySelectorAll(".adv-option-button");
let fontName= document.getElementById("font-name");
let fontSize=document.getElementById("font-size");
let textArea=document.getElementById("textbox");
// font names
let fontFamily=[
    "Arial",
    "sans-serif",
    "Times New Roman",
    "Verdana",
    "Georgia",
    "cursive",
    "serif"
];

//initial settings
    //adding font names 
fontFamily.map((value)=>{
  let options=document.createElement("option");
  options.value=value;
  options.innerHTML=value;
  fontName.appendChild(options);
});
//default fontName
fontName.value="Arial";

//adding font sizes
for(let i=1;i<=7;i++){
    let option = document.createElement("option");
    option.value=i;
    option.innerHTML=i;
    fontSize.appendChild(option);
};
//default size for font
fontSize.value=3;

//to modify text 
const modifyText=(command,defaultUi,value)=>{
document.execCommand(command,defaultUi,value);
};

//adding event listener for option buttons
optionButton.forEach((button)=>{
    button.addEventListener("click",()=>{
    modifyText(button.id,false,null);
    });
    });


//adding event listeners for buttons like font color.
advButtons.forEach((button)=>{
button.addEventListener("change",()=>{
modifyText(button.id,false,button.value);
});
});
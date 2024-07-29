// text-editor
// accessing all the elements 
let optionButton=document.querySelectorAll(".option-button");
let advanceButtons=document.querySelectorAll(".adv-option-button");
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
  let option=document.createElement("option");
  option.value=value;
  option.innerHTML=value;
  fontName.appendChild(option);
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
const modifyText=(command, defaultUi, value)=>{
document.execCommand(command, defaultUi, value);
}; 

//adding event listener for option buttons -working
optionButton.forEach((button)=>{
    button.addEventListener("click",()=>{
    modifyText(button.id, false, null);
    });
    });


//adding event listeners for buttons like font color-working
//font size and name- not working
advanceButtons.forEach((button)=>{
    button.addEventListener("change",()=>{
        modifyText(button.id,false,button.value);
    });
});
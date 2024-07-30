// text-editor-using javaScript

// accessing all the elements 
let optionButton=document.querySelectorAll(".option-button");
let advanceButtons=document.querySelectorAll(".adv-option-button");
let fontName= document.getElementById("fontName");
let fontSize=document.getElementById("fontSize");
let textArea=document.getElementById("textbox");

// adding a list of font names with an array
let fontList=[
    "Arial",
    "Times New Roman",
    "Verdana",
    "Georgia",
    "Courier New",
    "cursive",
    "Garamond"
];

//initial settings
//setting the initializer for changing font sizes and font names

const initializer =()=>{

 //adding font names 
fontList.map((value)=>{
  let option=document.createElement("option");
  option.value=value;
  option.innerHTML=value;
  fontName.appendChild(option);
});

//adding font sizes
//font sizes from 1 to 7 
for(let i=1;i<=7;i++){
    let option = document.createElement("option");
    option.value=i;
    option.innerHTML=i;
    fontSize.appendChild(option);
}

// setting the default size for font as 3
fontSize.value=3;

};

//to modify text 
//to make changes execCommand is used 
const modifyText=(command, defaultUi, value)=>{
    document.execCommand(command, defaultUi, value);
    }; 

//adding event listener for option buttons like undo and redo.

optionButton.forEach((button)=>{
    button.addEventListener("click",()=>{ //on clicking the buttons the text will undo itself or redo the change.
    modifyText(button.id, false, null);
    });
    });


//adding event listeners for buttons like font color,font Name and font Size

advanceButtons.forEach((button)=>{
    button.addEventListener("change",()=>{
        modifyText(button.id,false,button.value);//on selecting the required option the text will change it's color,size or font family accordingly.
                                                  
    });
});

window.onload= initializer(); //at last enabling the initializer using window.onload which will load the website accordingly.




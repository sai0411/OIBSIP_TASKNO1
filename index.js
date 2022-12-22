var allclear=document.querySelector("#allClear");
var del=document.querySelector("#clear");
var equal=document.querySelector("#equal");

var btn_0=document.querySelector("#zero");
var btn_1=document.querySelector("#one");
var btn_2=document.querySelector("#two");
var btn_3=document.querySelector("#three");
var btn_4=document.querySelector("#four");
var btn_5=document.querySelector("#five");
var btn_6=document.querySelector("#six");
var btn_7=document.querySelector("#seven");
var btn_8=document.querySelector("#eight");
var btn_9=document.querySelector("#nine");

var btn_openBracket=document.querySelector("#openBracket");
var btn_closeBracket=document.querySelector("#closeBracket");
var btn_plus=document.querySelector("#plus");
var btn_minus=document.querySelector("#minus");
var btn_div=document.querySelector("#div");
var btn_percent=document.querySelector("#point");
var btn_multi=document.querySelector("#multi");

var operation=document.querySelector("#type");
var res=document.querySelector("#result");

btn_openBracket.onclick=()=>{
  type_to("(");
}
btn_closeBracket.onclick=()=>{
  type_to(")");
}
btn_0.onclick=()=>{
  type_to(0);
}
btn_1.onclick=()=> {
  type_to(1);
}
btn_2.onclick=()=>{
  type_to(2);
}
btn_3.onclick=()=>{
 type_to(3);
}
btn_4.onclick=()=> {
 type_to(4);
}
btn_5.onclick=()=>{
  type_to(5);
}
btn_6.onclick=()=>{
  type_to(6);
}
btn_7.onclick=()=>{
  type_to(7);
}
btn_8.onclick=()=>{
  type_to(8);
}
btn_9.onclick=()=>{
  type_to(9);
}
btn_plus.onclick=()=>{
 type_to("+");
}
btn_minus.onclick=()=>{
  type_to("-");
}
btn_multi.onclick=()=>{
  type_to("X");
}
btn_div.onclick=()=>{
  type_to("/");
}
btn_percent.onclick=()=>{
 type_to(".");
}
allclear.onclick=()=>{
  clear();
}
del.onclick=()=>{
  delete_last();
}
equal.onclick=()=>{
  cal();
}

document.onkeyup= e =>{
  if(e.key=="0" || e.key =="Num0"){
    type_to(0);
  }else if(e.key=="1" || e.key =="Num1"){
    type_to(1);
  }else if(e.key=="2" || e.key =="Num2"){
    type_to(2);
  }else if(e.key=="3" || e.key =="Num3"){
    type_to(3);
  }else if(e.key=="4" || e.key =="Num4"){
    type_to(4);
  }else if(e.key=="5" || e.key =="Num5"){
    type_to(5);
  }else if(e.key=="6" || e.key =="Num6"){
    type_to(6);
  }else if(e.key=="7" || e.key =="Num7"){
    type_to(7);
  }else if(e.key=="8" || e.key =="Num8"){
    type_to(8);
  }else if(e.key=="9" || e.key =="Num9"){
    type_to(9);
  }else if(e.key=="+" || e.key =="Num+"){
    type_to("+");
  }else if(e.key=="-" || e.key =="Num-"){
    type_to("-");
  }else if(e.key=="/" || e.key =="Num/"){
    type_to("/");
  }else if(e.key=="*" || e.key =="Num*"){
    type_to("*");
  }else if(e.key=="." || e.key =="Num."){
    type_to(".");
  }else if(e.key=="(" || e.key =="Num("){
    type_to("(");
  }else if(e.key==")" || e.key =="Num)"){
    type_to(")");
  }
  else if(e.key=="Enter" || e.key =="Numenter"){
    cal();
  }
  else if(e.key=="Backspace" || e.key =="Escape"){
    delete_last();
  }
  else if(e.key=="Delete"){
    clear();
  }
}

var type_to = text =>{
  if(operation.innerText == ""){
    operation.innerText=text;
  }else if(operation.innerText.length<=20){
    operation.innerText += text;
  }else{
    alert("Digit limit reached!");
  }
}

var cal = () =>{
  var result= operation.innerText;
  if(result.indexOf("X")!=-1){
    result=result.replace("X","*");
  }
  try{
    res.innerText=eval(result);
  }
  catch{
    res.innerText="Error";
  }
}

var clear=()=>{
  operation.innerText="";
  res.innerText=0;
}

var delete_last=()=>{
  operation.innerText= operation.innerText.slice(0,-1);
}
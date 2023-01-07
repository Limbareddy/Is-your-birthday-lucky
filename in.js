const number=document.querySelector("#lucky");
const out=document.querySelector("#out")

document.querySelector(".btn").addEventListener("click", Checker)

// ()=>{
//     console.log("net oo wee we dsa")
// })
  
function Checker(){
    const date=document.querySelector("#date");
   var data=  date.value;
   var dob=(data.replaceAll('-',''));
   var sum=0;
   for(var i=0 ; i< dob.length;i++)
   {
        sum= sum+ Number(dob.charAt(i));
    // console.log(element)
    // sum=sum+element;
    
   }
   var num=number.value;
//    console.log(sum)
   if(sum%num){
    out.innerHTML=` Your Birthday is Lucky`;
   }
   else{
    out.innerHTML=` your Birthday is not lucky, so sad`;
   }
}

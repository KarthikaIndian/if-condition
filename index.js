function grater(){
    let a=document.getElementById("number1").value;
    let b=document.getElementById("number2").value;

    if(a>b){

  
    document.getElementById("result").innerHTML="A is Greater then B";
}
    else if(b>a){
        document.getElementById("result").innerHTML=" B is Greater then A ";
    }
    else if(a==b){
        document.getElementById("result").innerHTML="Equal"
    }
    
}
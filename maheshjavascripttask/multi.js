function muFunction(){
    var x=parseInt(prompt("please enter positive number:"));
    if(x%3==0 && x%7==0)
     {
         y="multiple by 3 and 7";
    }
    else  if(x%3==0){
        y="multiple by 3 only not 7";
    }
    else if( x%7==0){
        y="multiple by 7 only not 3 ";
    }
    else{
        y="not multiple by 3 and 7";
    }
    document.getElementById('mutli').innerHTML=x;
     document.getElementById('mutli1').innerHTML=y;
}
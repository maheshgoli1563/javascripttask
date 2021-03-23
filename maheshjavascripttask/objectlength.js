function muFunction(){
    var school={
        id:1,
        name:"mahesh",
        class:"VIII",
        Address:"Do.No.12-4-34,22nd lane saradacolony"
    }
    document.getElementById("mutli").innerHTML=school.name;
    document.getElementById("mutli1").innerHTML=Object.keys(school).length;
    


}
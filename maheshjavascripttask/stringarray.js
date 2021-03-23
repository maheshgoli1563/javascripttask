function muFunction(){
    var str = ["mahesh ","Goli","Zeref","Akhil","buffe"];
    document.getElementById('mutli').innerHTML=str;
    str.sort( function (a, b) {
            var nameA = a.toUpperCase();
            console.log(b);
            console.log(a);
            var nameB = b.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }

            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
  
    document.getElementById('multi1').innerHTML=str;

}
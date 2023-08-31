function getres(){
    var a = parseInt( document.getElementById("one").value);
    var b = parseInt(document.getElementById("two").value);
    var c = parseInt(document.getElementById("three").value);
    var d = parseInt( document.getElementById("four").value);
    var e = parseInt( document.getElementById("five").value);
    var f = parseInt( document.getElementById("six").value);

    if(a > 100 || b > 100 || c > 100 || d > 100 || e > 100 || f > 100 ){
        alert ( "نمبروں کا اندراج درست کر لیں۔")
    }
    else{

        var obtained = a + b + c + d + e + f;
        document.getElementById("obt").innerHTML = obtained;
        var per = obtained/600*100;
        document.getElementById("per").innerHTML = per + "%"

        if(per >= 80 && per <= 100){
            document.getElementById("grade").innerHTML = "ممتاز"
    }

    else if(per >= 70 ){
        document.getElementById("grade").innerHTML = "جید جدا"
}

      else  if(per >= 60 ){
    document.getElementById("grade").innerHTML = "جید"
}

     else  if(per >=50){
    document.getElementById("grade").innerHTML = "مقبول"
}

  else if(per <=39){
    document.getElementById("grade").innerHTML = "راسب"
}


    

}
}

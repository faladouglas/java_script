document.write("<br><br>posição no jogo:<br><br>")
var pos = 1
var res;
switch(pos){
    case 1:
       res =  "primeiro lugar "
        break;
    
    case 2:
        res =  "segundo lugar "
    
    case 3:
        res =  "terceiro lugar "
        break;    
    
    default:
        res =  "não subio ao podio "
}
    document.write(res)
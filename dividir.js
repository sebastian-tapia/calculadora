const dividir=function (a,b){
    let resultado=(b==0 || a==0)?"No se puede dividir por cero":a/b;
    return resultado;
}

module.exports=dividir;
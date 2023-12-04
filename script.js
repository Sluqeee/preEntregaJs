let Palabras = Array("Lucas","Lucia","Lorena","Leandro");
let PalabrasOC = "";
let PalabrasAD = "";
let vidas = 3;
document.getElementById("boton").addEventListener("click",comprobar);
iniciar();

function iniciar(){
    PalabrasOC=Palabras[Math.floor(Math.random()*Palabras.length)];
    for (let i=0;i<PalabrasOC.length;i++) {
        PalabrasAD+="_ ";
    }
    document.getElementById("frase").innerHTML=PalabrasAD

}

function comprobar(){
    let letra = document.getElementById("letra").value.toLowerCase();
    PalabrasOC = PalabrasOC.toLowerCase();
    let nuevo = "";
    for (let i=0;i<PalabrasOC.length;i++) {
        if(letra==PalabrasOC[i]){
            nuevo = nuevo + letra + " ";
        }else{
            nuevo = nuevo + PalabrasAD[i*2] + " ";
        }
    }
    if(nuevo==PalabrasAD){
        vidas--;
        document.getElementById("vida").innerHTML="VIDAS RESTANTES: " + vidas;
    }
    PalabrasAD = nuevo;
    document.getElementById("frase").innerHTML=PalabrasAD;

    if(vidas==0){
        alert("perdiste ");
    }
    if(PalabrasAD.search("_")==-1){
        alert("ganaste ")
    }
    document.getElementById("letra").value="";
}

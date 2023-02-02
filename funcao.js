document.onkeyup = tecla
function tecla(a) {
    let codigo = a.keyCode
    if (codigo == 32) {
        
        document.getElementById("imagemrolando").style.display = "none";
        document.getElementById("imagemCorrendo").style.display = "block";
        const element = document.querySelector('.pulando1');
        element.classList.replace('pulando1', 'pulando');
        setTimeout(function () {
            element.classList.replace('pulando', 'pulando1');
        }, 0999)
    }
}
let contador = 0
document.onkeydown = pressionada
function pressionada(e) {
    let codigo = e.keyCode
    
    if (codigo == 32){
        contador+=1
    }

 
       if ( contador > 5){
        document.getElementById("imagemCorrendo").style.display = "none";
        document.getElementById("imagemrolando").style.display = "block";
        
        contador = 0
       }
     
      }
    

    
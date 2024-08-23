var multa = 1200
var tax = parseInt(0)
var vehicle = parseInt(0)
var max = parseInt(0) 

for(var i = 1; i <= Infinity; i++){
    var msg = parseInt(prompt(`Veiculos N°${i}\n0- Sair`))
  

    if (msg >120){
        alert(`======================\nO Civil N°${i} Foi multado em R$: ${multa}\n======================`)
        var tax = i
        var max = max+multa
        var vehicle = vehicle+msg

    }else if (msg >1 && msg <120) {
     alert(`==============================================\nVoce não recebeu uma ocorrencia\n==============================================`)
    }

     if (msg == 0) {
        break;
     }else{

    }

     }
     
   document.write(`=============================== <br>`)
   document.write(`========OCORRENCIAS========== <br>`)
   document.write(`=============================== <br>`)
   document.write(`    Total de veiculos multado (${tax}) <br> `)
   document.write(`    Velociade media dos veiculos Multados (${(vehicle/i).toFixed(2)})  <br>`)
   document.write(`=============================== <br>`)
   document.write(`    Total Em Multas (${max})  <br>`)
   document.write(`    Total de ocorrencias (${tax})  <br>`)
   document.write(`=============================== <br>`)

 

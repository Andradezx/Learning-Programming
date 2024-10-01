function school(){
    var noteOne = parseFloat(document.getElementById('a').value)
    var noteTwo = parseFloat(document.getElementById('b').value)
    var noteTre = parseFloat(document.getElementById('c').value)
    var noteFor = parseFloat(document.getElementById('d').value)
    
    var calc = (noteOne+noteTwo+noteTre+noteFor) /4
    
   // document.getElementById(`result`).value = (`Sua Media ${calc}`)

    return calc
    }

    function note(){
        var calc = school()

        if (calc < 7){  
               document.getElementById('result').value = (`Voce não passou de ano sua media foi ${calc} REPROVADO`)
              }else if (calc >=7){
                 document.getElementById('result').value = (`Voce passou de de ano sua media foi ${calc} APROVADO`)
            
              }
  
    }
var note = parseFloat(0)
var notehigh = parseFloat(0)
var notemax = parseFloat(0)
var notelow = parseFloat(Infinity)



for (var progress = 0; progress <=24; progress++) {
    var note = parseFloat(prompt("Digite sua nota "))
    var notemax = notemax+note

    if (note > notehigh) {
    var  notehigh = note

    }else if (note < notelow) {
        var notelow = note
        
    }else{

    }

}
document.write(`<br> A maior nota foi: ${notehigh}`)
document.write(`<br> A menor nota foi: ${notelow}`)
document.write(`<br> A Media foi: ${notemax/(progress)}`)
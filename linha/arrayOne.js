var Language = ['Lua','Java','Java Script']

Language.push(prompt('Digite uma linguagem seu merda'))
document.write(Language.length , '<br>')
console.table(Language)

Language.splice(3, 1,'PHP','SQL','PYTHON')
console.table(Language)







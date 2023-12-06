//import data 
const fruits = require('./data.js')

//menampilkan semua data 
const index = () => {
    for (const fruit of fruits) {
        console.log(fruit)
    }
}

//menambahkan data 
const store = (name) => {
    fruits.push(name)
    

    console.log(`Menambahkan data ${name} `)
    index()
}

//mengupdate data 
const update = (position, name) => {
    fruits[position] = name

    console.log(`Mengupdate data ${position}`)
    index()
}

//menghapus data 
const destroy = (position) => {
    fruits.splice(position, 1) 

    console.log(`Menghapus data ${position}`)
    index()
}

//export method
module.exports = { index, store, update, destroy }
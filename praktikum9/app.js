///import method dalam controller
const { index, store, update, destroy } = require('./fruitController')

const main = () => {
    console.log(`Menambahkan data buah-buahan: `)
    index()

    console.log('\n')
    store('Alpukat')

    console.log('\n')
    update(1, 'Anggur')

    console.log('\n')
    destroy(3)
}

main()
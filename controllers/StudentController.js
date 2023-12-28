//membuat class studentcontroller
class StudentController{
    index(req, res) {
        res.send("Menampilkan semua students")
    }
    
    store(req, res) {
        const {nama} = req.body
        const data = {
            messege: `Menambahka data student`,
            data: []
        }
        res.json(data)
           
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        const data = {
            message : `Mengedit student id{id}, nama{nama}`, 
            data : [],
        }

        res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params; 
        
        const data = {
            messege: `Menghapus student id{id}`,
        }

        res.json(data)
}
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
const Student = require("../models/Student");

//membuat class studentcontroller
class StudentController{
    async index(req, res) {
        const student= await Student.all()

        if (Student.lenght > 0 ) {
            const data = {
                messege : "Menampilkan semua students",
                data: Students,
            }

            return res.status(200).json(data)
        }

        //else
        const data ={
            messege: "Student is empty",
        }

        return res.status(200).json(data)
}
    
    async store(req, res) {
        await Student.create(req.body, (student) => {
        const data = {
            messege: `Menambahka data student`,
            data: student, 
        }
        res.json(data)
    })
    }

    async update(req, res) {
        const { id } = req.params;
        
        //cari id student yang ingin di update 
        const student = await Student.find(id)

        if (student) {
            //melakukan update data 
            const student = await student.update(id, req.body)
            const data = {
                messege : `Mengedit data students`, 
                data : student,
            }
            res.status(200).json(data)
        }
        else {
            const data = {
                messege : `Student not found`, 
            }
        }

        res.status(404).json(data);
    }

    async destroy(req, res) {
        const { id } = req.params; 
        const student = await Student.find(id)

        if (student) {
            await Student.delete(id)
            const data = {
                messege: `Menghapus student id{id}`,
            }

            res.status(200).json(data)
        } else {
            const data = {
                messege : `Student not found`
            }

            res.status(404).json(data)
        }
        
        

        res.json(data)
}

    async show(req, res) {
        const { id } = req.params
        //cari students berdasarkan id
        const student = await Student.find(id)

        if (student) {
            const data = {
                messege : `Menampilkan  detail students`,
                data  : student,
            }

            res.status(200).json(data)
        } else {
            const data = {
                messege : `Student not found`
            }

            res.status(404).json(data)
        }
    }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
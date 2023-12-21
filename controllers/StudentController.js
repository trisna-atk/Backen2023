//membuat class studentcontroller
class StudentController{
    index(req, res) {
        res.send("Menampilkan semua students")
    }
    
    store(req, res) {
         const newStudent = req.body;
            studentsData.push(newStudent);
             res.status(201).json(newStudent);
    }

    update(req, res) {
        const { id } = req.params;
        const updatedData = req.body;
        const index = studentsData.findIndex(student => student.id === id);

        if (index !== -1) {
             studentsData[index] = { ...studentsData[index], ...updatedData }; 
             res.json(studentsData[index]);
        } else {
             res.status(404).json({ message: 'Student not found' }); 
         }
    }

    destroy(req, res) {
         const { id } = req.params; 
        const index = studentsData.findIndex(student => student.id === id); 

        if (index !== -1) {
            const deletedStudent = studentsData.splice(index, 1); 
            res.json(deletedStudent); 
         } else {
            res.status(404).json({ message: 'Student not found' }); 
    }
}
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
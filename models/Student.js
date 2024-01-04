// import database
const { resolve } = require("path");
const db = require("../config/database");

// make Student model
class Student {
    static async create() {
        const id = await new Promise((resolve, reject) => {
            // lakukan query ke db untuk ambil data
            const sql = "SELECT * FROM students";
            db.query(sql, (sql, results) => {
                resolve(results);
            });
        });
    }

   
    static async create(data, callback) {
        //query pertama : insert data 
            const sql = "INSERT INTO students SET ?";
            db.query(sql, data, (err, results) => {

                //query kedua : select data berdasarkan id
                const id = results.insertId
                const sql = "SELECT * FROM  students WHERE id = ?"
                db.query(sql, id, (err, results) => {

                    //callback  ketiga: kirim results
                    callback(results)
                })
            });
    }

    static async update(id, data) {
        await new Promise ((resolve, reject) => {
            const sql = "UPDATE students SET ? WHERE id = ?"
            db.query(sql, [data, id], (err, results) => {
                resolve(results)
            })
        })

        //mencari data yang baru diupdate
        const student = await this.find(id)
        return student
    }

    static delete(id){
        return new Promise((resolve, reject) => {
            const sql = "DELETE FROM students WHERE id = ?"
            db.query(sql, id, (err, results) => {
                resolve(results)
            })
        })
    }

    static show(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM students WHERE id = ${id} `;
            db.query(sql, (err, results) => {
                resolve(results);
            });
        });
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM students WHERE  id = ?"
           db.query(sql, id, (err, results) => {
            //destructiing array    
            const [student] = results
            resolve(student)
           }) 
        })
    }
}


// export model
module.exports = Student;
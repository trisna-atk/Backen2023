<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    //property animals
    public $animals = ["Beruang", "Bebek"];

    //method untuk menampilkan semua hewan
    public function index(){
        echo "menampilkan data animals <br>";
        
        //loop property  animal

        foreach ($this->animals as $animal) {
            echo "- $animal <br>";
        }
    }

    //method untuk menambahkan data hewan 
    public function store(Request $request){
        echo "menambahkan hewan baru <br>";

        //menambhakan data ke property animal 
        array_push($this->animals, $request->animal);

        //panggil mmethod index 
        $this->index();
    }
    
    //method untuk mengedit/update hewan 
    public function update($id, Request $request){
        echo "Mengupdate data hewan id $id <br>";

        //update data di property animals
        $this->animal[$id] = $request->animal; 

        //memenggil method index 
        $this->index();

    
        }
        
        //method untuk menghapus data hewan 
        public function destroy($id){
            echo "menghapus data hewan id $id <br>";
        
            unset($this->animals[$id]);
        
                //panggil method index
                $this->index();
            }
}

<?php

namespace aps\database;
use aps\database\take;
use aps\database\hash;
class verifier extends connexion{
    


    public function verifie_p(string $email,string $password){
        $this->connecter();
        $take = new take();
        $values_take = $take->take_element_p($email);
        foreach ($values_take as $key => $value) {
           if($value[ "email"] == $email and hash::is_hash($password,$value["pass"])){
               return $values_take;
           }
           else{
               return false;
           }
        }
    }


}
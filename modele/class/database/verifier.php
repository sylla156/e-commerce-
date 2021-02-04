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


    public static function nom($nom){
        if ($nom == ""){
            return false;
        }
        else {
             if (!preg_match("/\d|\s|\n|\t|[,?.;:\/!§<>µ*ù%\$£^¨¤=)àç_è\-\(\)\'\"&+}\]@\^\\`\|\[\{\}\#\~]/",$nom) == true){
                 return true;
             }else if (!preg_match("/\d|\s|\n|\t|[,?.;:\/!§<>µ*ù%\$£^¨¤=)àç_è\-\(\)\'\"&+}\]@\^\\`\|\[\{\}\#\~]/",$nom) == false){
                 return false;
             }
        }
    }


    

    public static function tel($tel){
        if ($tel == ""){
            return false;
        }
        else {
             if (!preg_match("/[A-z]|\s|\n|\t|[,?.;:\/!§<>µ*ù%\$£^¨¤=)àç_è\-\(\)\'\"&+}\]@\^\\`\|\[\{\}\#\~]/",$tel) == true){
                 if (strlen($tel) == 8 || strlen($tel) == 10){
                     return true;
                 }else if(strlen($tel) < 8 || strlen($tel) > 10 || strlen($tel) == 9){
                     return false;
                 }
             }else if (!preg_match("/[A-z]|\s|\n|\t|[,?.;:\/!§<>µ*ù%\$£^¨¤=)àç_è\-\(\)\'\"&+}\]@\^\\`\|\[\{\}\#\~]/",$tel) == false){
                 return false;
             }
        }
    }






    public static function email($email){
        $test = "/^([a-zA-Z0-9_\-\.]+)@(gmail|yahoo|Outlook|Posteo|AOL|GMX+)\.(com|net{2,5})$/";
        if ($email == ""){
            return false;
        }
        else {
             if (preg_match($test,$email) == true){
                $take = new take();
                if($take->take_element_p($email) == NULL){
                    return true;
                }else if ($take->take_element_p($email) !== NULL){
                    return false;
                } 

             }else if (preg_match($test,$email) == false){
                 return false;
             }
        }
    }









    public static function passwordAll($password,$password_test){
        if ($password == "" and $password_test == ""){
            return false;
        }
        else if ($password === $password_test){
             if (strlen($password)>=8 and strlen($password_test)>=8){
                 return true;
             }else if (strlen($password) < 8 and strlen($password_test) < 8){
                 return false;
             }
        }
    }

}
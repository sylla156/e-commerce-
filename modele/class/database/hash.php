<?php

namespace aps\database;

class hash{



    public static function or_hash($password){
        return password_hash($password, PASSWORD_DEFAULT);
    }



    public static function is_hash($password,$password_hash){
        return password_verify($password, $password_hash);
    }

    
}
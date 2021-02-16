<?php

namespace aps\database;


class take extends connexion{

    
    public function take_element_p(string $email):array{
        
        $this->connecter();
        $go = $this->db->prepare("SELECT * FROM `personne` WHERE `email` = ? ");
        
        $go->execute(array($email));
       
        return $go->fetchAll();
   }


   public function take_element_a(string $email):array{
        
    $this->connecter();
    $go = $this->db->prepare("SELECT * FROM `admin` WHERE `email` = ? ");
    
    $go->execute(array("ibrahim@gmail.com"));

    return $go->fetchAll();
   }
   
}



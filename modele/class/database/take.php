<?php

namespace aps\database;


class take extends connexion{

    
    public function take_element_p(string $email):array{
        
        $this->connecter();
        $go = $this->db->prepare("SELECT * FROM `personne` WHERE `email` = ? ");
        
        $go->execute(array($email));
       
        return $go->fetchAll();
   }


}
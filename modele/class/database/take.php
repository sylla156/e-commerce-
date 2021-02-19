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
    
    $go->execute(array($email));

    return $go->fetchAll();
   }

   
   public function take_element_ALL():array{
        
    $this->connecter();
    $go = $this->db->prepare("SELECT * FROM `admin`");
    
    $go->execute();

    return $go->fetchAll();
   }


   public function take_element_adminForReference(string $reference):bool{
        
    $this->connecter();
    $go = $this->db->prepare("SELECT * FROM `admin` WHERE `id` = ? ");
    
    $go->execute(array($reference));

    if ($go->fetchAll() || $go->fetchALL() != null){
        return false;
    }else if ($go->fetchALL() == null){
        return true;
    }
   }
   
}



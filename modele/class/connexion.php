<?php
namespace aps;

use PDO;
use PDOException;

class connexion{
    public $db;
    
    public function __construct()
    {
        $this->db = null;
    }

    public  function connecter(){
        try {
            $this->db = new PDO("mysql:host=127.0.0.1;dbname=e-commerce","root");
            $this->db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);


            $sql = "CREATE  TABLE IF NOT EXISTS personne(
                id int unsigned PRIMARY KEY AUTO_INCREMENT,
                nom varchar(30) NOT NULL,
                prenom varchar(30) NOT NULL,
                tel int(30) unsigned NOT NULL,
                email varchar(30) NOT NULL,
                pass varchar(100) NOT NULL,
                UNIQUE(email) )";

            $this->db->exec($sql);

        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }



    public function insere_p(string $nom,string $prenom,int $tel,string $email,string $password){
              
            $this->connecter();
            $go = $this->db->prepare("INSERT INTO `personne` (`id`, `nom`, `prenom`,`tel`, `email`, `pass`) VALUES (NULL,?,?,?,?,?)");
    
            $go->execute(array($nom,$prenom,$tel,$email,self::or_hash($password)));
            return true;
       
    }
    
    
    public function take_element_p(string $email):array{
        $this->connecter();
        $go = $this->db->prepare("SELECT * FROM `personne` WHERE `email` = ? ");
        
        $go->execute(array($email));
       
        return $go->fetchAll();
   }


    public function verifie_p(string $email,string $password){
        $this->connecter();
        $values_take = $this->take_element_p($email);
        foreach ($values_take as $key => $value) {
           if($value[ "email"] == $email and self::is_hash($password,$value["pass"])){
               return $values_take;
           }
           else{
               return false;
           }
        }
    }



    public static function or_hash($password){
        return password_hash($password, PASSWORD_DEFAULT);
    }


    public static function is_hash($password,$password_hash){
        return password_verify($password, $password_hash);
    }
}
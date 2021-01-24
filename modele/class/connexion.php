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
            $this->db = new PDO("mysql:host=localhost;dbname=commerce","root");
            $this->db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);


            $sql = "CREATE  TABLE IF NOT EXISTS personne(
                id int unsigned PRIMARY KEY AUTO_INCREMENT,
                nom varchar(30),
                prenom varchar(30),
                email varchar(30),
                pass varchar(30))";

            $this->db->exec($sql);

        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }



    public function insere_p(string $nom,string $prenom,string $email,string $password):void {
        $this->connecter();
        $go = $this->db->prepare("INSERT INTO `personne` (`id`, `nom`, `prenom`, `email`, `pass`) VALUES (NULL, ?, ?, ?, ?)");

        $go->execute(array($nom,$prenom,$email,self::or_hash($password)));

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
           if($value[ "email"] == $email and self::is_hash("777",$value["pass"])){
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
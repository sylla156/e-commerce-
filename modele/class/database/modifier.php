<?php

namespace aps\database;

use aps\database\connexion;
use aps\database\hash;
use aps\redirection;

class modifier extends connexion
{



    public function modifier_admin(string $nom, string $prenom,string $email, string $password ,$reference)
    {

        $this->connecter();
        $go = $this->db->prepare("UPDATE `admin` SET `nom`= ?,`prenom`=?,`email`=?,`pass`= ? WHERE id = ?");

        $go->execute(array($nom,$prenom,$email,$password,$reference));
        return true;
    }


}

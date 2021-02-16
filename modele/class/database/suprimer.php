<?php

namespace aps\database;

use aps\database\connexion;

class suprimer extends connexion
{



    public function suprimer_admin($reference)
    {

        $this->connecter();
        $go = $this->db->prepare("DELETE FROM `admin`  WHERE id = ?");

        $go->execute(array($reference));
        return true;
    }


}

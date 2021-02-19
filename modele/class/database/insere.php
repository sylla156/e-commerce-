<?php

namespace aps\database;

use aps\database\connexion;
use aps\database\hash;


class insere extends connexion
{



    public function insere_p(string $nom, string $prenom, int $tel, string $email, string $password)
    {

        $this->connecter();
        $go = $this->db->prepare("INSERT INTO `personne` (`id`, `nom`, `prenom`,`tel`, `email`, `pass`) VALUES (NULL,?,?,?,?,?)");

        $go->execute(array($nom, $prenom, $tel, $email, hash::or_hash($password)));
        return true;
    }


    public function insere_admin(int $reference,string $nom, string $prenom,string $email, string $password)
    {

        $this->connecter();
        $go = $this->db->prepare("INSERT INTO `admin` (`id`, `nom`, `prenom`, `email`, `pass`) VALUES (?,?,?,?,?)");

        $go->execute(array($reference,$nom, $prenom,$email,$password));
        return true;
    }

}

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


    // public function inserer_article(mixed $img, int $prix, string $commentaire)
    // {
    //     $this->connecter();
    //     $go = $this->db->prepare("INSERT INTO `article`(?,?,?,?)");
    //     $go->execute(array($img, $prix, $commentaire));
    //     return true;
    // }
}

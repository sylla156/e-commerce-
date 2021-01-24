<?php

namespace aps;

class filters{
 

    public static function filters_email(string  $value){

        return htmlentities(filter_var($value, FILTER_VALIDATE_EMAIL));
    }

    
}
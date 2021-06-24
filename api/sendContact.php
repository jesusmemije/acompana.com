<?php
require_once("contact.php");
extract($_REQUEST);

$contact = new Contact($name, $email, $phone);

if( $contact->sendContact() ){

    //Todo bien
    echo 'Datos enviados con éxito';
    
} else {
    echo $contact->error;
}

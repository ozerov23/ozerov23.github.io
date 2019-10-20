<?php


$name = $_POST['name'];
$email = $_POST['email'];
$subject =  $_POST['subject'];

$msg = $name.":::".$email;
mail('mark.ozerov@inbox.ru',$subject,$msg);

?>
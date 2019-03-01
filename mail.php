<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "szygenda.borys@gmail.com";
$subject = "Contact Form from $name";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
<?php
$errors = array(); // array to hold validation errors
$data = array(); // array to pass back data
// validate the variables ======================================================
if (empty($_POST['name']))
$errors['name'] = 'Name is required.';
if (empty($_POST['email']))
$errors['email'] = 'Email is required.';
if (empty($_POST['message']))
$errors['message'] = 'Message is required.';
// return a response ===========================================================
// response if there are errors
if ( ! empty($errors)) {
  // if there are items in our errors array, return those errors
  $data['success'] = false;
  $data['errors'] = $errors;
  $data['messageError'] = 'Please check the fields in red';
} else {
  // if there are no errors, return a message
  $data['success'] = true;
  $data['messageSuccess'] = 'Hey! Thanks for reaching out. I will get back to you soon';
  // CHANGE THE TWO LINES BELOW


  $to = "rino@rinoremodeling.com";
  $subject = "Website QUOTE request";

  $name = $_POST['name']; // required
  $from = $_POST['email']; // required
  $message = $_POST['message']; // required


  $message = "From: ".$_POST['name']."\n";
  $message .= "Email: ".$_POST['email']."\n";
  $message .= "Message: ".$_POST['message']."\n";


  $headers = "From: " . $name. "\n";
  $headers .= "To: " . $to. "\n";
  $headers .= "Reply-To: ".$from. "\n";
  $headers .= "MIME-Version: 1.0\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\n";



  @mail($to, $subject, $message);
}
// return all our data to an AJAX call
echo json_encode($data);

<?php
require_once dirname(__FILE__) . '/phpmailer.class.php';
$message = '';
foreach($_POST as $field => $value)
	$message .= "<strong>".$field.":</strong> ".$value."<br />";

$mail = new PHPMailer;

$mail->From = 'contact@bryanpedroza.com';
$mail->FromName = 'Website';
$mail->addAddress('support@bryanpedroza.com', 'Bryan');     // Add a recipient
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'New Website Lead';
$mail->Body    = $message;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>

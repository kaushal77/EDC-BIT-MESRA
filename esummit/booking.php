
<!--
<?php
    $to = 'demo@spondonit.com';
    $from = $_POST["fname"];
    $to= $_POST["lname"];
    $text= $_POST["start"];
    $text= $_POST["arrival"];
    $text= $_POST["departure"];
    $text= $_POST["room-type"];
    $text= $_POST["no-room"];
    $text= $_POST["adults"];
    $text= $_POST["child"];
    


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $fname . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $message ='<table style="width:100%">
        <tr>
            <td>'.$fname.'  '.$lname.'</td>
        </tr>
        <tr><td>Start: '.$start.'</td></tr>
        <tr><td>Arrival: '.$arrival.'</td></tr>
        <tr><td>Departure: '.$departure.'</td></tr>
        <tr><td>Room-type: '.$room-type.'</td></tr>
        <tr><td>Room-no: '.$no-room.'</td></tr>
        <tr><td>Adults: '.$adults.'</td></tr>
        <tr><td>Child: '.$child.'</td></tr>
        
    </table>';

    if (@mail($to, $email, $message, $headers))
    {
        echo 'The message has been sent.';
    }else{
        echo 'failed';
    }

?>
-->

<?php
if(isset($_POST["submit"])){
// Checking For Blank Fields..
if($_POST["vname"]==""||$_POST["vemail"]==""||$_POST["sub"]==""||$_POST["msg"]==""){
echo "Fill All Fields..";
}else{
// Check if the "Sender's Email" input field is filled out
$email=$_POST['vemail'];
// Sanitize E-mail Address
$email =filter_var($email, FILTER_SANITIZE_EMAIL);
// Validate E-mail Address
$email= filter_var($email, FILTER_VALIDATE_EMAIL);
if (!$email){
echo "Invalid Sender's Email";
}
else{
$subject = $_POST['sub'];
$message = $_POST['msg'];
$headers = 'From:'. $email2 . "\r\n"; // Sender's Email
$headers = 'Cc:'. $email2 . "\r\n"; // Carbon copy to Sender
// Message lines should not exceed 70 characters (PHP rule), so wrap it
$message = wordwrap($message, 70);
// Send Mail By PHP Mail Function
mail("edcwebsite0@gmail.com", $subject, $message, $headers);
echo "Your mail has been sent successfuly ! Thank you for contacting us";
}
}
}
?>

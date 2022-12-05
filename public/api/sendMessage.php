<?php
    header('Access-Control-Allow-Origin: https://tshiil.com');
    header('Access-Control-Allow-Methods: POST');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    require 'includes/PHPMailer.php';
    require 'includes/SMTP.php';
    require 'includes/Exception.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    
    $receiverName = $data['receiverName'];
    $receiverEmail = $data['receiverEmail'];
    $receiverTel = $data['receiverTel'];
    $message = $data['message'];
    $subject = $data['subject'];

    
    if (!empty($receiverName) && !empty($receiverEmail) && !empty($receiverTel) && !empty($message) && !empty($subject)){
        
        
        $eAccent = "é";
        
        $in_iso8859encoded = iconv("UTF-8", "ISO-8859-1", $eAccent);
        
        $eAccentEncoded= htmlentities($in_iso8859encoded, ENT_COMPAT, "ISO-8859-1");
        
        $emailBody = "<div style=\"box-sizing: border-box; width:100%; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\"> <div style=\"width:100%; max-width:500px; margin:auto; position:relative; box-shadow:0 0 10px rgba(0,0,0,.15); border-radius:5px; padding:30px; box-sizing: border-box;\"> <div style=\"max-width:175px; width:100%; margin:auto;\"> <img src=\"https://tshiil.com/static/media/tshiil_logo_1.1f7d7c4625979bcd7ce6.png\" style=\"width:100%;\" /> </div> <div style=\"width:100%; height:1.5px; border-radius:100px; background-color:#ecec13; margin:15px 0; box-sizing: border-box;\"></div> <h1 style=\"width:100%; text-align:center; color:#002080;\">$subject</h1> <table style=\"text-align: left; border-spacing: 0 10px; box-sizing: border-box;\"> <tr> <th>Nom:</th> <td style=\"padding-left:30px; box-sizing: border-box;\">$receiverName</td> </tr> <tr> <th>Email:</th> <td style=\"padding-left:30px; box-sizing: border-box;\">$receiverEmail</td> </tr> <tr> <th>T$eAccentEncoded"."l$eAccentEncoded"."phone:</th> <td style=\"padding-left:30px; box-sizing: border-box;\">+216 $receiverTel</td> </tr> </table> <h3>Message:</h3> <p>$message</p> </div>";
            
        $mail = new PHPMailer(true);
        try {
            //Server settings
            $mail->SMTPDebug = false;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'ssl0.ovh.net';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = getenv("HTTP_EMAIL");                     //SMTP username
            $mail->Password   = getenv("HTTP_PASSWORD");                               //SMTP password
            // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
            
            //Recipients
            $mail->setFrom(getenv("HTTP_EMAIL"), 'TSHIIL');
            $mail->addAddress(getenv("HTTP_COMPANY_EMAIL"));               //Name is optional
            
            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = $subject;
            $mail->Body    = $emailBody;
            $mail->AltBody = $subject;
            
            $mail->send();
            echo 'sent';
        } catch (Exception $e) {
            echo "error-- {$mail->ErrorInfo}";
        }
        
    } else echo "Bad data";
?>	
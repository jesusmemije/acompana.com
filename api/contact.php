<?php
date_default_timezone_set('America/Mexico_City');

class Contact
{
    public function __construct($name, $email, $phone)
    {
        $this->name  = $name;
        $this->email = $email;
        $this->phone = $phone;
    }

    public function sendContact()
    {
        if (!$this->Validate())
            return false;

        if (!$this->Mail())
            return false;

        return true;
    }

    public function Validate()
    {
        if ($this->name == "" || $this->phone == "" || $this->email == "") {
            $this->error = "El nombre, teléfono y correo electrónico son obligatorios";
            return false;
        }

        if (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
            $this->error = "El correo electrónico no tiene un formato de correo válido";
            return false;
        }

        return true;
    }

    public function Mail()
    {
        $mailheader = "<div style=\"font-size:15px; color:#000; font-family:arial, sans-serif; line-height:1.5; margin:0\">
        <div style=\"width:100%; background-color:#007bff; text-align:center; position:relative; z-index:1\">
        </div>

        <div style=\"background-image:url(http://acompana.com.mx/img/mail/header.jpg); background-repeat:repeat-x; background-position:center; padding:20px\">
        <div style=\"background-color:#fff; width:550px; max-width:calc(90% - 50px); margin:auto; padding:15px 25px;min-height: 446px;\">";

        $mailfooter = "<br><br></div>

        </div>
        <div style=\"background-color:#DFDFDF; padding-top:1em; padding-bottom:4em\">

        <div style=\"color:#C9C9C9; text-align:center\">
        <strong style=\"font-size:1.8em\"></strong><br><br>
        <hr style=\"border:#C9C9C9 solid 1px; width:600px; max-width:90%\">
        <small style=\"color:#000\">Copyright © 2021 - Acompaña<br>
        Derechos reservados.</small>
        <br><br>
        </div>

        </div>
        </div>";

        $email_txt = $mailheader . "
            <div style=\"text-align:center; font-weight:bold; font-size:2.5em\">Información de contacto</div>
            <br><br>
            Nombre: <strong>" . $this->name . "</strong>
            <br>
            E-mail: <strong>" . $this->email . "</strong>
            <br>
            Teléfono: <strong>" . $this->phone . "</strong>
            <br><br><br><br>
            Atentamente,<br><br>Acompaña.com.mx";

        $email_txt .= $mailfooter;

        $email_to = "informacion@acompana.com.mx";
        $email_subject = "Nuevo contacto - Acompaña (asuntos públicos)";

        $headers = "From: " . $this->email . "\r\n";
        $headers .= "Cc: memije.dev@gmail.com";

        $semi_rand = md5(time());
        $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";

        $headers .= "\nMIME-Version: 1.0\n" .
            "Content-Type: multipart/mixed;\n" .
            " boundary=\"{$mime_boundary}\"";
        $email_message = $email_txt . "\n\n" .
            "--{$mime_boundary}\n" .
            "Content-Type:text/html; charset=\"utf-8\"\n" .
            "Content-Transfer-Encoding: 7bit\n\n" .
            $email_txt . "\n\n";

        $ok = @mail($email_to, $email_subject, $email_message, $headers);

        if (!$ok) {
            $this->error = "Correo no enviado, intente nuevamente por favor";
            return false;
        }

        return true;
    }
}

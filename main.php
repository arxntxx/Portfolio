<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $errors = [];

    if (!preg_match("/^[A-Za-z\s]+$/", $name)) {
        $errors[] = "Formato de nombre incorrecto.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Email Invalido.";
    }

    if (!empty($errors)) {
        foreach ($errors as $error) {
            echo "<script>alert('$error');</script>";
        }
    } else {
        echo "<script>alert('Enviado Correctamente.');</script>";
        echo "<script>window.location.href = 'Portfolio.html';</script>";
    }
}
?>

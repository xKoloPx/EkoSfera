<?php
date_default_timezone_set('Europe/Warsaw');
if(($_SERVER['REQUEST_METHOD'] == 'POST')){
    if(isset($_POST['submit'])){
        $name = $_POST['imie'];
        $surname = $_POST['nazwisko'];
        $email = $_POST['email'];
        $subject = 'Certyfikat EkoSfera';
        $date = date("Y-m-d");
        $year = date("Y");
        $message = '
        <html>
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Puddles&display=swap" rel="stylesheet">
        <title>Certyfikat Dobrego Ekologa</title>
        <style>
            body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
            }

            .container {
            max-width: 800px;
            margin: 50px auto;
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            h1 {
            text-align: center;
            color: #006400;
            font-family: "Rubik Puddles", cursive;
            }

            p {
            text-align: center;
            font-size: 18px;
            margin-top: 30px;
            }
            .signature {
            text-align: right;
            margin-top: 50px;
            font-style: italic;
            }
        </style>
        </head>
        <body>
        <div class="container">
            <h1>EkoSfera - Certyfikat</h1>
            <p>W tym miejscu dnia <strong>'.$date.'</strong> potwierdzamy, że <strong>'.$name.' '.$surname.'</strong></p>
            <p>otrzymuje certyfikat EkoSfera za swoje zasługi w dziedzinie ochrony środowiska.</p>
            <p>Gratulujemy i dziękujemy za Twój wkład w naszą planetę!</p>
            <a href="ekosfera.ct8.pl" target="_blank"><p>Nasza strona</p></a>
            <div class="signature">
            <p>EkoSfera '.$year.'</p>
            </div>
        </div>
        </body>
        </html>
        ';

        $headers = "From: EkoSfera.ct8.pl\r\n";
        $headers = "Content-Type: text/html; charset=UTF-8";
        mail($email, $subject, $message, $headers);
        header('Location: ../index.php');
        exit();
    };
};
?>

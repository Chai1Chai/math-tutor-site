<?php
// send.php

// Получаем данные из JSON-запроса
$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $name = $data['name'];
    $phone = $data['phone'];
    $classLvl = $data['classLvl'];
    $examType = $data['examType'];

    // Ваш email, на который придут заявки
    $to = "matcha2005chai@gmail.com"; 
    $subject = "Новая заявка с сайта";
    
    $message = "Имя: $name\n";
    $message .= "Телефон: $phone\n";
    $message .= "Класс: $classLvl\n";
    $message .= "Экзамен: $examType\n";

    $headers = "From: webmaster@yoursite.com" . "\r\n";

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error"]);
    }
}
?>
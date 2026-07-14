<?php
// send.php

// Получаем данные из JSON-запроса
$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    // 1. ПРОВЕРКА ЧЕКБОКСА
    // Если поле 'consent' отсутствует или равно false — обрываем выполнение
    if (!isset($data['consent']) || $data['consent'] !== true) {
        http_response_code(400); // Ошибка "Bad Request"
        echo json_encode(["status" => "error", "message" => "Не дано согласие на обработку данных"]);
        exit; // Останавливаем выполнение скрипта
    }

    // 2. Получение данных (добавляем htmlspecialchars для безопасности)
    $name = htmlspecialchars($data['name']);
    $phone = htmlspecialchars($data['phone']);
    $classLvl = htmlspecialchars($data['classLvl']);
    $examType = htmlspecialchars($data['examType']);

    // Ваш email, на который придут заявки
    $to = "matcha2005chai@gmail.com"; 
    $subject = "Новая заявка с сайта";
    
    $message = "Имя: $name\n";
    $message .= "Телефон: $phone\n";
    $message .= "Класс: $classLvl\n";
    $message .= "Экзамен: $examType\n";
    $message .= "Согласие на обработку ПДн: ДА\n"; // Пометка для заказчика

    $headers = "From: webmaster@yoursite.com" . "\r\n";

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Ошибка при отправке письма"]);
    }
} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Нет данных"]);
}
?>
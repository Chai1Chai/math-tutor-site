<?php
header('Content-Type: application/json; charset=utf-8');

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Нет данных"]);
    exit;
}

if (!isset($data['agreed']) || $data['agreed'] !== true) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Не дано согласие"]);
    exit;
}

$name     = htmlspecialchars(trim($data['name'] ?? ''));
$phone    = htmlspecialchars(trim($data['phone'] ?? ''));
$classLvl = htmlspecialchars(trim($data['classLvl'] ?? ''));
$examType = htmlspecialchars(trim($data['examType'] ?? ''));

if ($name === '' || $phone === '') {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Заполните имя и телефон"]);
    exit;
}

$to = "matcha2005chai@gmail.com";
$subject = "=?UTF-8?B?" . base64_encode("Новая заявка с сайта") . "?=";

$message  = "Имя: $name\n";
$message .= "Телефон: $phone\n";
$message .= "Класс: $classLvl\n";
$message .= "Экзамен: $examType\n";
$message .= "Согласие на обработку ПДн: ДА\n";

$headers  = "From: noreply@ТВОЙ-ДОМЕН.ru\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["status" => "success"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Ошибка при отправке письма"]);
}
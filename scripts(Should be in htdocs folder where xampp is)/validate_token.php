<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');


require_once 'vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$secretKey = '123321';

function validateToken($token) {
    global $secretKey;
    try {
        $decoded = JWT::decode($token, new Key($secretKey, 'HS256'));
        return $decoded;
    } catch (Exception $e) {
        return false;
    }
}

$token = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
if (!$token || !validateToken($token)) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}
?>

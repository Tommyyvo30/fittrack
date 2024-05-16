<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$host = 'localhost';
$db = 'fittrack';
$user = 'root';
$pass = '';
$dsn = "mysql:host=$host;dbname=$db;charset=UTF8";

try {
    $pdo = new PDO($dsn, $user, $pass);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'] ?? '';
$password = $data['password'] ?? '';
$email = $data['email'] ?? '';

// Check if user already exists
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username OR email = :email");
$stmt->execute(['username' => $username, 'email' => $email]);
if ($stmt->fetch()) {
    http_response_code(409);
    echo json_encode(['error' => 'User already exists']);
    exit;
}

// Hash the password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Insert the new user
$stmt = $pdo->prepare("INSERT INTO users (username, password, email) VALUES (:username, :password, :email)");
if ($stmt->execute(['username' => $username, 'password' => $hashedPassword, 'email' => $email])) {
    echo json_encode(['message' => 'User registered successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to register user']);
}
?>

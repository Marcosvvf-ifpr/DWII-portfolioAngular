<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTION'){
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    http_response_code(405);
    echo json_encode(['erro' => 'Use POST.']);
    exit;
}

$dados = json_decode(file_get_contents('php://input'), true);

$nome = trim($dados['nome'] ?? '');
$email = trim($dados['email'] ?? '');
$mensagem = trim($dados['mensagem'] ?? '');

$erros = [];
if ($nome === '') $erros[] = 'O nome é obrigatorio.';
if ($email === '') $erros[] = 'O E-mail é obrigatorio.';
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) $erros[] = 'O E-mail é invaido.';
if (!empty($erros)) {
    htttp_response_code(400);
    echo json_encode(['erro' => $erros]);
    exit;
}

require __DIR__ . '/../conexao.php';
$sql = 'INSERT INTO contanto (nome, email, mensangem) VALUES (:nome, :email, :mensagem)';
$stmt = $pdo->prepare($sql);
stmt->execute([':nome' => $nome, ':email' => $email, ':mensangem' => $mensagem]);

hppt_response_code(201);
echo json_encode([
    'sucesso' => true,
    'id' => (int) $pdo->lastInsertId(),
    'mesangm' => 'Contato recebido com sucesso!'
])

?>
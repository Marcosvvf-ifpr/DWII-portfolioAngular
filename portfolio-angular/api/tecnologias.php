<?php

header('Content-type: applcation/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../conexao.php';

$sql = "SELECT id, nome, categoria, descricao, ano_criacao FROM tecnologiass WHERE status = 'ativo' ORDER BY categoria, nome";
$tecnologias = $pdo->query($sql)->fetchALL();

echo json_encode($tecnologias);

?>
<?php

header('Content-type: applcation/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../conexao.php';

$sql = "SELECT id, nome, descricao, tenologias, link_github, ano FROM projetos WHERE status = 'publicado' ORDER BY ano DESC, id";
$projetos = $pdo->query($sql)->fetchALL();

echo json_encode($projetos);

?>
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $p1 = $_POST['ac3'];
    $p2 = $_POST['c3'];
    $p3 = $_POST['a3'];

    $host = 'localhost';
    $usuario = 'root';
    $senha = '';
    $banco = 'biogas_supervisor';

    $conexao = new mysqli($host, $usuario, $senha, $banco);

    if ($conexao->connect_error) {
        die('Erro na conexão com o banco de dados: ' . $conexao->connect_error);
    }

    $stmt = $conexao->prepare("INSERT INTO serie_solidos (p1, p2, p3) VALUES (?, ?, ?)");
    if ($stmt) {
        $stmt->bind_param("ddd", $p1, $p2, $p3);

        if ($stmt->execute()) {
            echo 'Dados inseridos com sucesso.';
        } else {
            echo 'Erro ao inserir os dados: ' . $stmt->error;
        }

        $stmt->close();
    } else {
        echo 'Erro na preparação da consulta: ' . $conexao->error;
    }

    $conexao->close();
}
?>

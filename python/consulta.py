import mysql.connector
from mysql.connector import Error

def fetch_data():
    try:
        # Configurações de conexão com o banco de dados
        conexao = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            database='biogas_supervisor'
        )

        if conexao.is_connected():
            cursor = conexao.cursor()
            consulta = "SELECT * FROM serie_solidos"
            cursor.execute(consulta)
            resultados = cursor.fetchall()

            for linha in resultados:
                print(((linha[0] - linha[1]) * 1000) / linha[2])

    except Error as e:
        print(f"Erro ao conectar ou buscar dados: {e}")

    finally:
        if conexao.is_connected():
            cursor.close()
            conexao.close()

if __name__ == "__main__":
    fetch_data()

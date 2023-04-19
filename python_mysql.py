import mysql.connector

# Cria uma conexão com o banco de dados
conn = mysql.connector.connect(
    host="localhost",
    user="myuser",
    password="mypassword",
    database="mydatabase"
)

# Cria um cursor para executar as consultas
cur = conn.cursor()

# Executa uma consulta e armazena os resultados em uma variável
cur.execute("SELECT * FROM mytable")
rows = cur.fetchall()

# Imprime os resultados na tela
for row in rows:
    print(row)

# Encerra a conexão com o banco de dados
cur.close()
conn.close()
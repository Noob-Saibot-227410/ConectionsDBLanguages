import psycopg2

# Cria uma conexão com o banco de dados
conn = psycopg2.connect(
    host="localhost",
    database="mydatabase",
    user="myuser",
    password="mypassword"
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
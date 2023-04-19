import boto3

# Cria uma conexão com o serviço DynamoDB
dynamodb = boto3.resource('dynamodb', region_name='us-west-2', endpoint_url="http://localhost:8000")

# Seleciona a tabela que será consultada
table = dynamodb.Table('mytable')

# Executa uma consulta e armazena os resultados em uma variável
response = table.get_item(
    Key={
        'id': 'myid'
    }
)
item = response['Item']

# Imprime os resultados na tela
print(item)

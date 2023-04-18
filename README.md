# API - learning Node.js

First step is to init the node.js 
- npm init -y 

Express is the best to handle requisitions 
- npm install express --save 

Making scripts to help run your application
- On the packge.json make an script with the route of your file 

Routes 
- Route Params (/:parametro)
Parâmetros são obrigatórios no route params 

- Query Params (/user?chave=valor&chave=valor)
"?" separador 
"chave" variável 
"Valor" valor para atribuir a variável 
Parâmetros não são obrigatórios no Query params

- Biblioteca nodemon 
npm install nodemon --save-dev 
A palavra dev sinaliza que essa biblioteca será utilizada apenas quando entiver em desenvolvimento 

### Métodos para o Controler (padrão de um controler é ter no máx 5 métodos)
     * Index - Get para listar vários registros. 
     * Show - GEt para exibir um registro especifico 
     * create - post para criar um registro 
     * update - put para atualizar um registro 
     * delete - delete para remover um registro 

### Códigos HTTP 

1XX - Information  
2XX - Sucess 
3XX - Redirecting  
4XX - Error in the Client side 
5XX - Erro in the Server side 

## Middleware 

Função que acessa objetos de solicitações(requisições), pode enviar respostas e saber os destinos
- Run any code 
- make changes in the objects of requests and reponses 
- Finish the cicle of request-response 
- call the next middleware in the query 

## Error treatment 

- express-async-errors to treat errors 

## DataBase 

- SqLite3 Sqlite instalations (npm install sqlite3 sqlite)
- Migrations to create the SQL code in the VScode and then sendo to the dataBase 

## Criptografia de dados 

npm install bcruptjs 
importar a const { hash }
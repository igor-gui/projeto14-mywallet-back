# My Wallet - SERVER

Aplicação back-end conectada a um banco de dados que armazena informações de entrada e saída de transações financeiras e mostra, ao final, o saldo total do usuário.

## Tecnologias utilizadas:

```
MongoDB, JavaScript, Express, Nodemon, Node.js, bcrypt, joi, uuid
```

## Instalando a aplicação:
Insira os seguintes comandos no terminal:

### Sem a chave SSH
```
git clone https://github.com/igor-gui/projeto14-mywallet-back.git
cd mywallet-back
npm i
npm start
```

### Com a chave SSH
```
git clone git@github.com:igor-gui/projeto14-mywallet-back.git
cd mywallet-back
npm i
npm start
```



### Rotas:
<ol>

<li>POST '/cadastro'</li>
<li>POST '/login'</li>
<li>POST '/nova-transacao/:tipo'</li>
<li>GET '/transactions'</li>

</ol>

### Como o servidor espera o corpo da requisição de cada rota post:
1 - { name: string, email: string-email, password: string }

2 - { email: string-email, password: string }

3 - {description: string, price: number (positive), type: "entrada" ou "saida"}

4 - O servidor vai exigir um token no headers >> Authorization, que ele irá enviar ao usuário após iniciar um login
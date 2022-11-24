1. Para preparar a pasta atual para um projeto 'NodeJS' usando módulos 'ES6', comande:

    npm init -y

1.1 Edite o arquivo 'package.json' e inclua a 'key' de nome 'type', abaixo da 'key' de nome 'main':

    ...
    "main": "index.js",
    "type": "module",
    ...

        OBS: Caso queira obter maiores informações sobre módulos no 'NodeJS', visite o site abaixo:

            https://blog.logrocket.com/commonjs-vs-es-modules-node-js/

1.2 Edite o arquivo 'package.json' e inclua a 'key' de nome 'start', abaixo da 'key' de nome 'test':

    ...
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node index.js"
    },
    ...

2. Para incorporar a biblioteca 'node-fetch' ao 'NodeJS', comande:

    npm install node-fetch --save-dev

3. Para evitar que o conteúdo da pasta 'node_modules' suba junto com o projeto para o repositorio
   do 'GitHub', crie o arquivo '.gitignore' com o seguinte conteúdo:

    .gitignore

        node_modules/**

4. Iremos explorar alguns métodos do 'HTTP' que dão suporte ao 'REST'. Para conhecer um pouco
   mais sobre os método HTTP', visite o site abaixo:

    https://testfully.io/blog/http-methods/

5. Acessaremos os recursos do site 'https://jsonplaceholder.typicode.com/' para realizarmos testes
   de 'request/response' com os métodos 'HTTP' usando 'JSON'. Uma documentação clara e objetiva pode
   ser encontrada em 'https://jsonplaceholder.typicode.com/guide/'

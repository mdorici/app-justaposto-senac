## <div align="center"> :car: Guia de execução do projeto :car: </div>

<div align="center"><img src="https://github.com/mdorici/pi-iv-senac-app-justaposto/blob/main/documents/img/Logo.png" alt="drawing" height="200"/></div>

##  Instalação de ferramentas

Para acessar o projeto e executá-lo adequadamente em sua máquina é preciso instalar as ferramentas utilizadas no do desenvolvimento:

- **Passo 1:** Instale o JDK versão 17 em sua máquina

- **Passo 2:** Instale o SpringSuiteTools ou similar para rodar o backend do projeto 

- **Passo 3:** Instale o Postman para fazer os testes da API REST (endpoints) 

- **Passo 4:** Instale o gerenciador de pacotes NPM e o Yarn
 
  ~~~
          npm install --global yarn
  ~~~

- **Passo 5:** Instale o VS Code ou similar para rodar o frontend do projeto

- **Passo 6:** Instale o Git para clonar o projeto para sua máquina

***Assista a playlist para saber como:*** 
<a href="https://www.youtube.com/watch?v=YVPRhRyFrZY&list=PLNuUvBZGBA8kMTSPMmmNiRm2z0gRxXxox&index=9">
  <img src="https://github.com/mdorici/pi-iv-senac-app-justaposto/assets/100785891/5b43014c-697b-4b77-8e6f-76313520b77e" alt="Clique aqui" width="25">
</a>

##  Configurando o Git e o Github
***Aprenda a configurar o Git e o Github na sua máquina:***
<a href="https://www.youtube.com/playlist?list=PLNuUvBZGBA8nDTr8QRMgoT_l3XNt_BbWj">
  <img src="https://github.com/mdorici/pi-iv-senac-app-justaposto/assets/100785891/5b43014c-697b-4b77-8e6f-76313520b77e" alt="Clique aqui" width="25">
</a>

##  Executando o projeto na sua máquina:

- **Passo 1:** Em uma pasta de sua escolha abra o GitBash e clone o projeto do repositório Github
  
    - Para clonar o repositório será preciso ter o **Git configurado** em sua máquina e copiar a ***chave ssh*** ou o ***link https*** do repositório para utilizar com o comando ***$ git clone***.
    - Aguarde a mensagem de sucesso da clonagem.
     
~~~
git clone git@github.com:mdorici/pi-iv-senac-app-justaposto.git
~~~

- **Passo 2:** Abra a pasta do backend no SpringToolSuite (STS) e aguarde a configuração do ambiente.
    - Leva um tempo até que o projeto seja completamente carregado no STS. Após é possível realizar o start na aplicação e verificar se o projeto está sendo executado corretamente.
   
- **Passo 3:** Abra o postman e import a collection com os endpoints do projeto
    - Arraste a collection do repositório para a caixa de import.
    - Concorde com o import e pronto, você terá os endpoints para testar a API.

- **Passo 4:** Abra o frontend no **VS Code**. Acessando a pasta do frontend do repositório clonado, abra um terminal do **Gitbash** e digite o comando que abrirá o **VS Code** abrirá com o frontend do projeto:
  
~~~
    code .
~~~

- **Passo 5:** Em seguida dê o comando para executar o projeto
    
~~~    
    yarn start
~~~

- **Passo 6:** Abra um browser com a porta de execução do projeto:

~~~    
    http://localhost:5173
~~~
    

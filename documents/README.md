## <div align="center"> :oncoming_automobile: Guia de execução do projeto :oncoming_automobile: </div>

<div align="center"><img src="https://github.com/mdorici/app-justaposto-senac/blob/main/documents/img/guia.png?raw=true" alt="drawing" height="250"/></div>

##  Instalação de ferramentas

Para acessar o projeto e executá-lo adequadamente em sua máquina é preciso instalar as ferramentas utilizadas no do desenvolvimento:

- **Passo 1:** Instale o JDK versão 17 em sua máquina

- **Passo 2:** Instale o SpringSuiteTools ou similar para rodar o backend do projeto 

- **Passo 3:** Instale o Postman para fazer os testes da API REST (endpoints) 

- **Passo 4:** Instale o NodeJS e o gerenciador de pacotes Yarn
  
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

- **Passo 1:** Em uma pasta de sua escolha abra o **GitBash** e clone o projeto do repositório Github
  
    - Para clonar o repositório será preciso ter o **Git configurado** em sua máquina e copiar a ***chave ssh*** ou o ***link https*** do repositório para utilizar com o comando ***$ git clone***.
    - Aguarde a mensagem de sucesso da clonagem.
     
~~~
git clone git@github.com:mdorici/pi-iv-senac-app-justaposto.git
~~~

- **Passo 2:** Abra a pasta do backend no **SpringToolSuite (STS)** e aguarde a configuração do ambiente.
    - Leva um tempo até que o projeto seja completamente carregado no STS. Após é possível realizar o start na aplicação e verificar se o projeto está sendo executado corretamente.
   
- **Passo 3:** Abra o **Postman** e ***Import a Collection*** com os endpoints do projeto
    - Arraste a **Collection** do repositório para a caixa de import.
    - Concorde com o import e pronto, você terá os endpoints para testar a API.

- **Passo 4:** Abra o frontend no **VS Code**. Acessando a pasta do frontend do repositório clonado, abra um terminal do **Gitbash** e digite o comando que abrirá o **VS Code** abrirá com o frontend do projeto:
  
~~~
    code .
~~~

- **Passo 5:** Em seguida dê o comando para instalar as dependências do projeto e executá-lo

~~~    
    yarn
~~~
~~~    
    yarn dev
~~~

- **Passo 6:** Abra um browser com a porta de execução do projeto:

~~~    
    http://localhost:5173
~~~

***Para saber mais sobre a clonagem e execução do projeto acesse:*** 
<a href="https://www.alura.com.br/artigos/clonando-repositorio-git-github?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=111087461203&hsa_ad=681736256289&hsa_src=g&hsa_tgt=aud-539280195004:dsa-843358956400&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=EAIaIQobChMIyJW_htjWggMV-19IAB04ZAI2EAAYASAAEgLgl_D_BwE">
  <img src="https://github.com/mdorici/pi-iv-senac-app-justaposto/assets/100785891/85ab34fc-c8b9-41fe-9955-a99a2d92ce61" alt="Clique aqui" width="40">
</a>

## Configurando o ambiente do Postman

<div align="center"><img src="https://github.com/mdorici/app-justaposto-senac/blob/main/documents/img/postman-config.png?raw=true" /></div>

## Bibliotecas & dependencias

**React Router:**
~~~    
    yarn add react-router-dom@6.4.1 @types/react-router-dom@5.3.3
~~~
**Axios:**
~~~    
   yarn add axios@0.27.2
~~~
**Biblioteca QS:**
~~~    
  yarn add qs@6.11.0 @types/qs@6.9.7
~~~
**Yarn History:**
~~~    
  yarn add history@5.3.0
~~~
**Jwt-decode:**
~~~    
  yarn add jwt-decode@3.1.2 @types/jwt-decode@3.1.0
~~~
**React Select:**
~~~    
  yarn add react-select@5.6.0
~~~

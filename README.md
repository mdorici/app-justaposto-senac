
## <div align="center"> :car: Justaposto: Estética Automotiva :car: </div>

<div align="center"><img src="https://github.com/mdorici/pi-iv-senac-app-justaposto/blob/main/documents/img/Logo.png" alt="drawing" height="200"/></div>

<p align="center">
<img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>


## :computer: Descrição do projeto
Nosso produto será uma aplicação web que busca atender e facilitar o atendimento às necessidades de uma empresa que fornece serviços de estética automotiva e lavagem de veículos sob demanda aos seus clientes. Visando a otimização do tempo do empreendedor no fornecimento dos serviços prestados e na gestão de horários, clientes e fluxo de caixa da empresa e também do cliente a partir do fornecimento de funcionalidades de agendamento e confirmação dos serviços demandados. Pretende-se dessa forma que a satisfação do cliente seja ampliada e o retorno lucrativo seja favorecido.

### :one: Primeira etapa do desenvolvimento:
Na primeira etapa desse projeto focamos no desenvolvimento de um cátalogo com as categorias de serviços oferecidos e seus respectivos produtos. Dessa forma o cliente poderá acessar a página da aplicação, realizar seu login e verificar o cátalogo de produtos oferecidos.

## :hammer: Tecnologias e ferramentas

- Java JDK 17
- Spring Boot
- Banco de dados H2
- Postman
- Yarn/Npm
- Git
- SpringToolSuite4
- VS Code

 ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
 
 ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white)![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)![Apache Tomcat](https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=for-the-badge&logo=apache-tomcat&logoColor=black)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
 
## :chart_with_upwards_trend: Modelo conceitual

<div align="center"><img src="https://media.discordapp.net/attachments/941457841829601294/1176714372219940884/image.png?ex=656fdfa8&is=655d6aa8&hm=f3becc028d79408e8ce3a256c3260eaa50d9faf38635b551c281c14557480077&=&format=webp" alt="drawing" height="400"/></div>

## :memo: Endepoints
- **Category**

   - **[GET] /categories:** Busca todas as categorias cadastradas no sistema.
  
   - **[GET] /categories/{id}:** Busca uma categoria pelo id.
  
   - **[POST] /categories:** Cadastra uma nova categoria ao sistema.
  
   - **[PUT] /categories/{id}:** Atualiza as informações de uma categoria pelo id.
  
   - **[DEL] /categories/{id}:** Deleta uma categoria pelo id.

- **Product**

   - **[GET] /products:** Busca todos os produtos cadastrados no sistema.
  
   - **[GET] /products/{id}:** Busca um produto pelo id.
  
   - **[POST] /products:** Cadastra um novo produto ao sistema.
  
   - **[PUT] /products/{id}:** Atualiza as informações de um produto pelo id.
  
   - **[DEL] /products/{id}:** Deleta um produto pelo id.

- **User**

   - **[GET] /users/me:** Permite que o usuário logado veja suas informações cadastradas.

- **Auth**

   - **[POST] /oauth/token:** Permite que qualquer usuário, com senha, acesse o sistema, retornando seu token de acesso.

## :lock: Informações de acesso

**Perfil Administrador (ROLE_ADM)**
- Username: maria@gmail.com
- Password: 123456

**Perfil Cliente (ROLE_USER)**

- Username: alex@gmail.com
- Password: 123456

## :100: Entrega básica

- [x] Prova de conceito a ser desenvolvida ***1.0pts***
- [x] Preparação do ambiente de desenvolvimento ***2.0pts***
- [ ] Desenvolvimento Frontend ***2.0pts***
- [x] Desenvolvimento Backend ***2.0pts***
- [ ] Video de apresentação do projeto ***1.0pts***
- [x] Repositório Github ***2.0pts***

## :rocket: Equipe de desenvolvimento:
<table>
 <tr>
<td aling="center"><img src="https://avatars.githubusercontent.com/u/151584882?v=4" alt="drawing" height="100"/><br/>
Carla G. F. Bellini<br />
<a href="https://github.com/CarlaBellini" target="_blank"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank"</a></td>

<td aling="center"><img src="https://avatars.githubusercontent.com/u/151583448?v=4" alt="drawing" height="100"/><br/>
Karina Duarte de Oliveira<br />
<a href="https://github.com/karinaduarteo" target="_blank"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank"</a></td>

 <td aling="center"><img src="https://avatars.githubusercontent.com/u/114058692?v=4" alt="drawing" height="100"/><br/>
Lana Ariza Obuti<br />
<a href="https://github.com/ArisaObuti" target="_blank"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank"</a></td>

<td aling="center"><img src="https://avatars.githubusercontent.com/u/109982238?v=4" alt="drawing" height="100"/><br/>
Mari C. de Oliveira<br />
<a href="https://github.com/OliveiraMariC" target="_blank"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank"</a></td>
  </tr>
  <tr>
<td aling="center"><img src="https://avatars.githubusercontent.com/u/100785891?v=4" alt="drawing" height="100"/><br/>
Mariana Dorici<br />
<a href="https://github.com/mdorici" target="_blank"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank"</a></td>

<td aling="center"><img src="https://avatars.githubusercontent.com/u/104690518?v=4" alt="drawing" height="100"/><br/>
Pedro Luan Dórea Melo<br />
<a href="https://github.com/luandorea" target="_blank"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank"</a></td>
 
<td aling="center"><img src="https://avatars.githubusercontent.com/u/151583100?v=4" alt="drawing" height="100"/><br/>
Thales R. T. Fernandes<br />
<a href="https://github.com/thalesrochatf" target="_blank"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank"</a></td>
 </tr>

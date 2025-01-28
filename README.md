# **Teste GH**

Este projeto tem como objetivo realização de um teste para GH.

## **Índice**

1. [Objetivo do Projeto](#objetivo-do-projeto)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
   - [Back-End](#back-end)
   - [Front-End](#front-end)
   - [Integração](#integração)
3. [Passos para Executar o Projeto](#passos-para-executar-o-projeto)
   - [1. Garanta que o Docker esteja instalado](#1-garante-que-o-docker-está-instalado)
   - [2. Instale as dependências do projeto](#2-instale-as-dependências-do-projeto)
   - [3. Suba o container do banco de dados](#3-suba-o-container-do-banco-de-dados)
   - [4. Realize as migrações do banco de dados](#4-realize-as-migrações-do-banco-de-dados)
   - [5. Rodando o Back-End](#5-rodando-o-back-end)
   - [6. Rodando o Front-End](#6-rodando-o-front-end)
   - [7. Pronto! Tudo funcionando](#7-pronto-tudo-funcionando)
4. [Links e Referências](#links-e-referências)

---

### **Tecnologias Utilizadas**

#### **Back-End**

- **NodeJS**: Escolhido pela sua alta performance em aplicações client-server e por ser a tecnologia pedida no teste.
- **Express**: Utilizado para gerenciar as rotas e a comunicação entre o front-end e o back-end, garantindo um fluxo de dados eficiente.
- **Prisma**: Ferramenta moderna para gerenciamento do banco de dados, que facilita a interação com o PostgreSQL e aumenta a produtividade no desenvolvimento. Além disso, para pequenos projetos (pequeno porte), é mais fácil e simples de ser utilizado do que grandes ORMs como o TypeORM ou Sequelize.
- **Docker**: Utilizado para isolar e gerenciar o banco de dados PostgreSQL de forma eficiente, permitindo uma configuração mais fácil e consistente entre ambientes.

#### **Front-End**

- **ReactJS**: Utilizado para criar uma interface responsiva, dinâmica e com uma ótima experiência do usuário, além de ser a tecnologia pedida no teste.
- **Tailwind CSS**: Escolhido por sua flexibilidade e capacidade de criar designs elegantes e consistentes de forma rápida.
- **Lucide React**: Biblioteca de ícones utilizada para aprimorar a usabilidade e o visual da aplicação, proporcionando uma interface mais intuitiva e atrativa.
- **Axios**: Fornece uma API intuitiva e fácil de usar, baseada em Promises, o que facilita o tratamento assíncrono de requisições.

#### **Integração**

- **Prisma e PostgreSQL**: Esta combinação garante uma interação eficiente e simplificada com o banco de dados, além de fornecer segurança e alta performance.
- **Docker**: A utilização de Docker para o banco de dados facilita a configuração, integração e escalabilidade, permitindo que o projeto seja executado rapidamente em diferentes ambientes.
- **ReactJS com Tailwind CSS**: Essa dupla foi fundamental para construir um front-end moderno, responsivo e com design refinado. A integração com Lucide React deixou a interface mais amigável para os usuários finais.
- **Organização e Escalabilidade**: O projeto foi estruturado de forma modular, facilitando manutenções e futuras expansões.

---

## **Passos para Executar o Projeto**

### 1. **Garanta que o Docker esteja instalado**

Para rodar o banco de dados via Docker, é necessário ter o **Docker Desktop** instalado, especialmente no caso de **Windows**. Caso ainda não tenha, você pode fazer o download e a instalação do Docker através deste link:  
[Download do Docker Desktop](https://www.docker.com/products/docker-desktop)

Após a instalação, verifique se o Docker está funcionando corretamente rodando o comando:

```bash
docker --version
```

### 2. **Instale as dependências do projeto**

Com o repositório do projeto já clonado em seu computador, entre nas pastas do **front-end** e do **back-end** para instalar as dependências necessárias:

**No Front-End:**

```bash
cd front
npm install
```

**No Back-End:**

```bash
cd api-back
npm install
```

### 3. **Suba o container do banco de dados**

Dentro da pasta do **back-end**, suba o container do banco de dados PostgreSQL com o comando:

```bash
docker-compose up -d
```

Isso fará o Docker iniciar o container do banco de dados configurado no arquivo `docker-compose.yml`.

### 4. **Realize as migrações do banco de dados**

Com o container do banco de dados rodando, execute as migrações para configurar o esquema do banco de dados com o Prisma. Na pasta do **back-end**, rode o comando:

```bash
npx prisma migrate dev --name init
```

Isso criará as tabelas e a estrutura inicial no banco de dados.

### 5. **Rodando o Back-End**

Agora, com o banco de dados configurado, inicie o servidor do back-end com o comando:

```bash
npm run dev
```

O servidor estará rodando, pronto para receber as requisições.

### 6. **Rodando o Front-End**

Agora que o back-end está rodando, você pode iniciar o front-end. Na pasta do **front-end**, execute:

```bash
npm start
```

O front-end estará disponível no seu navegador, com a aplicação pronta para ser usada.

### 7. **Pronto! Tudo funcionando**

Agora, o sistema de gerenciamento de atividades e tempo está rodando! Você pode acessar a interface para registrar atividades, ver relatórios de tempo gasto e gerenciar tudo de maneira simples e prática.

---

## **Links e Referências**

- **Repositório GitHub**: [\[(https://github.com/solilorys/teste-gh)\]](https://github.com/solilorys/teste-gh)
- **Docker Desktop**: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

---

Com esses passos, seu ambiente de desenvolvimento estará pronto para usar o projeto localmente. Se tiver alguma dúvida ou encontrar problemas durante a execução, não hesite em me chamar!

---

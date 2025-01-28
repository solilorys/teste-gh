# Teste GH

## Este projeto tem como objetivo gerenciar atividades e o tempo despendido, permitindo o cadastro de atividades com seus respectivos períodos e gerando relatórios de tempo gasto por dia.

# Tecnologias Utilizadas

## Back-End

- NodeJS: Escolhido pela sua alta performance em aplicações client-server e por ser a tecnologia pedida no teste.
- Express: Utilizado para gerenciar as rotas e a comunicação entre o front-end e o back-end, garantindo um fluxo de dados eficiente.
- Prisma: Ferramenta moderna para gerenciamento do banco de dados, que facilita a interação com o PostgreSQL e aumenta a produtividade no desenvolvimento. Além disso, para pequenos projetos (pequeno porte), é mais fácil e simples de ser utilizado do que grandes ORMs como o TypeORM ou Sequelize.
- Docker: Utilizado para isolar e gerenciar o banco de dados PostgreSQL de forma eficiente, permitindo uma configuração mais fácil e consistente entre ambientes.

## Front-End

- ReactJS: Utilizado para criar uma interface responsiva, dinâmica e com uma ótima experiência do usuário, além de ser a tecnologia pedida no teste.
- Tailwind CSS: Escolhido por sua flexibilidade e capacidade de criar designs elegantes e consistentes de forma rápida.
- Lucide React: Biblioteca de ícones utilizada para aprimorar a usabilidade e o visual da aplicação, proporcionando uma interface mais intuitiva e atrativa.
- Axios: Fornece uma API intuitiva e fácil de usar, baseada em Promises, o que facilita o tratamento assíncrono de requisições.

## Integração

- Prisma e PostgreSQL: Esta combinação garante uma interação eficiente e simplificada com o banco de dados, além de fornecer segurança e alta performance.
- Docker: A utilização de Docker para o banco de dados facilita a configuração, integração e escalabilidade, permitindo que o projeto seja executado rapidamente em diferentes ambientes.
- ReactJS com Tailwind CSS: Essa dupla foi fundamental para construir um front-end moderno, responsivo e com design refinado. A integração com Lucide React deixou a interface mais amigável para os usuários finais.
- Organização e Escalabilidade: O projeto foi estruturado de forma modular, facilitando manutenções e futuras expansões.
  Passos para Executar o Projeto

1. Garanta que o Docker esteja instalado
   Para rodar o banco de dados via Docker, é necessário ter o Docker Desktop instalado, especialmente no caso de Windows. Caso ainda não tenha, você pode fazer o download e a instalação do Docker através deste link:
   Download do Docker Desktop

Com o repositório do projeto já clonado em seu computador, entre nas pastas do front-end e do back-end para instalar as dependências necessárias:

No Front-End:

bash
Copiar
Editar
cd frontend
npm install
No Back-End:

bash
Copiar
Editar
cd backend
npm install 3. Suba o container do banco de dados
Dentro da pasta do back-end, suba o container do banco de dados PostgreSQL com o comando:

bash
Copiar
Editar
docker-compose up -d
Isso fará o Docker iniciar o container do banco de dados configurado no arquivo docker-compose.yml.

4. Realize as migrações do banco de dados
   Com o container do banco de dados rodando, execute as migrações para configurar o esquema do banco de dados com o Prisma. Na pasta do back-end, rode o comando:

bash
Copiar
Editar
npx prisma migrate dev --name init
Isso criará as tabelas e a estrutura inicial no banco de dados.

5. Rodando o Back-End
   Agora, com o banco de dados configurado, inicie o servidor do back-end com o comando:

bash
Copiar
Editar
npm run dev
O servidor estará rodando, pronto para receber as requisições.

6. Rodando o Front-End
   Agora que o back-end está rodando, você pode iniciar o front-end. Na pasta do front-end, execute:

bash
Copiar
Editar
npm start
O front-end estará disponível no seu navegador, com a aplicação pronta para ser usada.

7. Pronto! Tudo funcionando
   Agora, o sistema de gerenciamento de atividades e tempo está rodando! Você pode acessar a interface para registrar atividades, ver relatórios de tempo gasto e gerenciar tudo de maneira simples e prática.

Links e Referências
Repositório GitHub: [Seu link para o GitHub]
Docker Desktop: https://www.docker.com/products/docker-desktop
Com esses passos, seu ambiente de desenvolvimento estará pronto para usar o projeto localmente. Se tiver alguma dúvida ou encontrar problemas durante a execução, não hesite em me chamar!

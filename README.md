# Blog Spring Boot

Este é um projeto de blog desenvolvido com Spring Boot, que permite a criação, edição e exclusão de postagens, além de um sistema de comentários e gerenciamento de usuários. O projeto está estruturado para facilitar a expansão e manutenção, e pode ser integrado com um front-end em Angular ou React.

## Funcionalidades

- **Gerenciamento de Postagens**: Criação, edição e exclusão de postagens com suporte a imagens e vídeos.
- **Sistema de Comentários**: Usuários podem comentar nas postagens e moderadores podem gerenciar esses comentários.
- **Gerenciamento de Usuários**: Registro, login e gerenciamento de perfis de usuários.
- **Busca e Filtragem**: Busca por palavras-chave e filtragem por categorias.

## Tecnologias Utilizadas

- **Backend**: Spring Boot
- **Banco de Dados**: H2 (para desenvolvimento) / MySQL ou PostgreSQL (para produção)
- **Segurança**: Spring Security
- **Gerenciamento de Dependências**: Maven

## Estrutura do Projeto
```bash


blog-spring-boot/
│
├── src/
│ ├── main/
│ │ ├── java/
│ │ │ └── com/
│ │ │ └── seu_pacote/
│ │ │ ├── BlogApplication.java
│ │ │ ├── controller/
│ │ │ ├── model/
│ │ │ ├── repository/
│ │ │ └── service/
│ │ └── resources/
│ └── test/
├── pom.xml
└── README.md
```

## Pré-requisitos

Antes de executar o projeto, verifique se você possui os seguintes pré-requisitos instalados:

- Java 11 ou superior
- Maven 3.6 ou superior
- IDE (como IntelliJ IDEA ou Eclipse)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu_usuario/blog-spring-boot.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd blog-spring-boot
    ```

3. Compile o projeto usando Maven:
    ```bash
    mvn clean install
    ```

4. Execute a aplicação:
    ```bash
    mvn spring-boot:run
    ```

5. Acesse a aplicação em [http://localhost:8080](http://localhost:8080).

## Uso

Após iniciar a aplicação, você pode interagir com os seguintes endpoints:

### Postagens

- `GET /api/postagens`: Listar todas as postagens.
- `POST /api/postagens`: Criar uma nova postagem.
- `GET /api/postagens/{id}`: Obter detalhes de uma postagem específica.
- `PUT /api/postagens/{id}`: Atualizar uma postagem existente.
- `DELETE /api/postagens/{id}`: Excluir uma postagem.

### Comentários

- `GET /api/comentarios`: Listar todos os comentários.
- `POST /api/comentarios`: Criar um novo comentário.
- `DELETE /api/comentarios/{id}`: Excluir um comentário.

### Usuários

- `POST /api/usuarios`: Registrar um novo usuário.
- `POST /api/login`: Fazer login.

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma nova branch:
    ```bash
    git checkout -b minha-nova-feature
    ```
3. Faça suas alterações e commit:
    ```bash
    git commit -m 'Adiciona nova feature'
    ```
4. Envie para o repositório remoto:
    ```bash
    git push origin minha-nova-feature
    ```
5. Abra uma Pull Request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Contato

Para mais informações, entre em contato:
- Nome: Seu Nome
- Email: seu.email@exemplo.com


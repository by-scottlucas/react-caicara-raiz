# React - Caiçara Raíz Blog

O Caiçara Raíz é um blog desenvolvido com o objetivo de compartilhar dicas de passeio, turismo, culinária e experiências culturais na Baixada Santista.

O projeto oferece uma interface simples e intuitiva, permitindo aos usuários explorar publicações recentes, acessar conteúdos de turismo e gastronomia, além de conhecer a história e a proposta do blog.


## Estrutura do Projeto

```bash
├── src/
│   ├── assets/        # Recursos estáticos (imagens, fontes, etc.)
│   ├── components/    # Componentes reutilizáveis (botões, cards, headers, etc.)
│   ├── models/        # Definições de tipos e interfaces TypeScript
│   ├── pages/         # Páginas principais do app (Home, Contato, Post, etc.)
│   ├── routes/        # Definição das rotas do React Router
│   ├── services/      # Serviços para consumo de APIs e lógica externa
│   └── utils/         # Funções utilitárias (helpers e formatações)
├── .env.example       # Exemplo de variáveis de ambiente necessárias
├── .gitignore         # Arquivos e pastas ignorados pelo Git
├── LICENSE            # Arquivo de licença (MIT)
├── package.json       # Configuração do projeto e dependências
├── README.md          # Documentação do projeto
├── tsconfig.json      # Configuração do TypeScript
└── vite.config.ts     # Configuração do bundler Vite
```


## Como Rodar o Projeto

### 1. Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

* [Node.js](https://nodejs.org/) (versão recomendada LTS)
* [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) (gerenciador de pacotes)

Verifique se estão instalados:

```bash
node -v
npm -v
# ou
yarn -v
```


### 2. Clonar o Repositório

```bash
git clone https://github.com/by-scottlucas/react-caicara-raiz.git
cd react-caicara-raiz
```


### 3. Instalar Dependências

Com **npm**:

```bash
npm install
```

Ou com **yarn**:

```bash
yarn install
```


### 4. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`.

Exemplo:

```env
VITE_SITE_URL=example.wordpress.com
VITE_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
VITE_DESTINATION_EMAIL=contact@example.com
```

- VITE_SITE_URL: URL do site WordPress que alimenta os posts do blog.
- VITE_RECAPTCHA_SITE_KEY: Chave pública do Google reCAPTCHA utilizada no formulário de contato.
- VITE_DESTINATION_EMAIL: E-mail que receberá as mensagens enviadas pelo formulário de contato.


### 5. Executar o Projeto em Ambiente de Desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em:
👉 `http://localhost:5173`


### 6. Build para Produção

```bash
npm run build
```


## Tecnologias Utilizadas

* [React](https://react.dev/) — Biblioteca JavaScript para construção de interfaces.
* [TypeScript](https://www.typescriptlang.org/) — Superset do JavaScript com tipagem estática.
* [Vite](https://vitejs.dev/) — Bundler rápido e moderno.
* [Tailwind CSS](https://tailwindcss.com/) — Framework de CSS utilitário.
* [React Helmet](https://www.npmjs.com/package/react-helmet) — Gerenciamento de meta tags para SEO.
* [Lucide Icons](https://lucide.dev/) — Conjunto de ícones modernos para React.
* [FormSubmit](https://formsubmit.co/) — Serviço utilizado para realizar o envio dos e-mails.
* [Google reCAPTCHA](https://developers.google.com/recaptcha) — Segurança contra bots e spam.


## Licença

Este projeto está sob a [Licença MIT](./LICENSE).


## **Autor**

Este projeto foi desenvolvido por **Lucas Santos Silva**, Desenvolvedor Full Stack, graduado pela **Escola Técnica do Estado de São Paulo (ETEC)** nos cursos de **Informática (Suporte)** e **Informática para Internet**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bylucasss/)

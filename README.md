# Pluto

## 📖 Sobre o Projeto

Pluto é um projeto Web Fullstack com foco em gestão de finanças, através de um sistema de transação, orçamento, cofre e metas.

## 👨‍💻 Tecnologias

### Core

- [![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)

### Frontend

- [![Next](https://img.shields.io/badge/-NextJS_16-000000?logo=nextdotjs&logoColor=white&style=for-the-badge)](https://nextjs.org/)
- [![TailwindCSS](https://img.shields.io/badge/-TailwindCSS_v4-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://v3.tailwindcss.com/)
- [![Zustand](https://img.shields.io/badge/-Zustand-6B3A0A?logo=zustand&logoColor=white&style=for-the-badge)](https://zustand-demo.pmnd.rs/)

### Backend

- [![Next](https://img.shields.io/badge/-NextJS_16-000000?logo=nextdotjs&logoColor=white&style=for-the-badge)](https://nextjs.org/)
- [![Prisma](https://img.shields.io/badge/-Prisma-002740?logo=prisma&logoColor=white&style=for-the-badge)](https://www.prisma.io/)
- [![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=for-the-badge)](https://www.postgresql.org/)

## 📦 Features (Funcionalidades)

- Sistema de Autenticação e Acesso
- Middleware (Proxy)
- RESTful API
- Integração com gráficos Apexchart
- Layout Responsivo

## 📂 Estrutura de Pastas

### Frontend - Estrutura

```txt
src/
├── app/                 # Pasta principal do NextJS App Router
│   ├── (pages)/         # Todas as rotas agrupadas
│   │   ├── (private)/   # Rotas privadas que exigem autenticação
│   │   └── (public)/    # Rotas públicas acessíveis sem login
│   ├── api/             # API Routes do NextJS (rotas backend dentro do frontend)
│   └── styles/          # Estilizações globais com Tailwind e CSS
├── components/          # Componentes reutilizáveis e compostos
├── data/                # Mapas, listas e dados estáticos
├── helpers/             # Funções reutilizáveis com escopo específico
├── hooks/               # Custom Hooks reutilizáveis
├── interfaces/          # Interfaces TypeScript para tipagem do frontend e backend
├── layout/              # Estruturas de layout (ex: Navbar, Footer, Modal)
├── lib/                 # Bibliotecas e utilitários externos (ex: integração com serviços)
├── logic/               # Hooks e funções específicas de páginas (não reutilizáveis)
├── mock/                # Dados falsos para testes e desenvolvimento
├── server/              # Lógica backend separada do App Router
│   ├── dto/             # Data Transfer Objects para validação e tipagem de dados
│   ├── functions/       # Funções utilitárias do backend
│   ├── repositories/    # Camada de acesso ao banco de dados
│   ├── schema/          # Schemas de validação Zod
│   ├── services/        # Lógica de negócio do backend (ex: criação de usuário)
│   └── utils/           # Funções genéricas e auxiliares do backend
├── stores/              # Estados globais com Zustand (ex: tema)
├── types/               # Tipos personalizados TypeScript
├── ui/                  # Componentes atômicos e de baixa complexidade (ex: Button, Input)
└── utils/               # Funções genéricas reutilizáveis no frontend
```

## 🦮 Instruções para rodar localmente

Primeiro faça a instalação das dependências:

```bash
npm install
```

Após a conclusão da instalação das dependências, será necessário gerar o prisma, para isso utilize o seguinte comando:

```bash
# Gere os arquivos do Prisma
npm run generate
```

Após a conclusão dessa etapa você já poderá rodar o projeto, bastando apenas inserir o seguinte código:

```bash
npm run dev
```

Isso irá iniciar o [Frontend e Backend](http://localhost:3000) na porta 3000.

Também poderá ser utilizado o comando:

```bash
npm run preview
```

Isso irá executar o projeto em modo de produção.

## 💻 Autor

Feito por Bernardo Poggioni - [LinkedIn](https://www.linkedin.com/in/bernardo-poggioni-3746a42a5/) | [Github]()

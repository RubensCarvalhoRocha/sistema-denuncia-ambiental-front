# Sistema de Denúncia Ambiental - Frontend

Este projeto é o frontend de um sistema de denúncias ambientais, desenvolvido em Angular.

## 🚀 Tecnologias Utilizadas
- Angular 15
- TypeScript
- TailwindCSS
- Angular Material

## ⚙️ Instalação e Execução

1. **Pré-requisitos:**
   - Node.js (recomendado v16 ou v18)
   - npm
   - Angular CLI (`npm install -g @angular/cli`)

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Rode o projeto:**
   ```sh
   npm start
   # ou
   ng serve
   ```
   O sistema estará disponível em `http://localhost:4200`.

## 🔑 Login Simulado
- O login foi modificado para aceitar **qualquer CPF e senha**.
- Não há mais validação real nem necessidade de backend para autenticação.
- Basta preencher os campos e clicar em "Entrar".

## 👤 Acesso Anônimo
- O sistema pode ser adaptado para permitir acesso anônimo, se necessário.

## 🔗 Repositório Remoto
- O projeto foi desvinculado de qualquer repositório remoto do GitHub.

## 📁 Estrutura Principal
- `src/app/core/auth/` - Serviços e guards de autenticação
- `src/app/modules/auth/sign-in/` - Componente de login
- `src/app/` - Módulo e componente principal

## 📄 Observações
- Caso precise de backend, configure a URL no serviço de autenticação.
- Para dúvidas ou melhorias, personalize este README conforme sua necessidade.

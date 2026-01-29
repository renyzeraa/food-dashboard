# Food Dashboard

Uma plataforma moderna de gerenciamento de restaurantes com análise de pedidos e receitas em tempo real.

## 📋 Sobre o Projeto

Food Dashboard é uma aplicação web desenvolvida para restaurantes gerenciarem suas operações diárias de forma eficiente. A plataforma oferece:

- **Dashboard Analítico**: Visualize métricas importantes como receita mensal, total de pedidos, pedidos do dia e taxa de cancelamento
- **Gerenciamento de Pedidos**: Visualize, filtre e gerencie todos os pedidos com opções para aprovar, cancelar e despachar
- **Análise de Dados**: Gráficos interativos mostrando tendências de receita e produtos populares
- **Autenticação Segura**: Sistema de login e registro com suporte a múltiplos restaurantes
- **Gerenciamento de Perfil**: Atualize informações do restaurante e do perfil do usuário

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **State Management**: TanStack Query (React Query)
- **Formulários**: React Hook Form + Zod
- **UI Components**: Radix UI
- **Gráficos**: Recharts
- **Roteamento**: React Router v7
- **HTTP Client**: Axios
- **Notificações**: Sonner
- **Testing**: Vitest + Testing Library
- **Meta Tags**: Unhead

## 📦 Funcionalidades Principais

### Dashboard

- Visualização de receita total do mês
- Total de pedidos do mês
- Pedidos do dia
- Taxa de cancelamento mensal
- Gráfico de evolução de receita
- Produtos mais populares

### Gerenciamento de Pedidos

- Listagem paginada de pedidos
- Filtros por ID, nome do cliente e status
- Visualização de detalhes do pedido
- Ações: Aprovar, Cancelar, Despachar, Entregar
- Status em tempo real

### Autenticação

- Registro de novo restaurante
- Login seguro
- Gerenciamento de sessão
- Logout

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/food-dashboard.git
cd food-dashboard
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente** (se necessário)
   Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias para a API:

```
VITE_API_URL=http://localhost:3000
```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação abrirá automaticamente no navegador em `http://localhost:5173`

### Build para Produção

Para criar uma build otimizada:

```bash
npm run build
```

Os arquivos compilados estarão no diretório `dist/`

### Preview da Build

Para visualizar a build em produção:

```bash
npm run preview
```

### Testes

Para executar os testes:

```bash
npm run test
```

## 📝 Scripts Disponíveis

| Comando           | Descrição                          |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Inicia servidor de desenvolvimento |
| `npm run build`   | Cria build para produção           |
| `npm run preview` | Visualiza build em produção        |
| `npm run test`    | Executa testes automatizados       |

## 🎨 Customização

### Tailwind CSS v4

O projeto usa Tailwind CSS v4. Para adicionar tokens customizados, modifique o `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        // seus cores customizadas
      },
      fontSize: {
        // seus tamanhos de fonte customizadas
      },
    },
  },
};
```

## 🚨 Tratamento de Erros

A aplicação possui tratamento completo de erros com:

- Página de erro global
- Página 404 customizada
- Notificações com Sonner
- Validação de formulários com Zod

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:

- Desktop
- Tablet
- Mobile

## 🌙 Tema

Suporte para tema claro e escuro com persistência de preferência no localStorage.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

### Contato

<img align="left" src="https://www.github.com/renyzeraa.png?size=150">

### [**Renan Leandro da Silva**](https://github.com/renyzeraa)

🛠 Mid `Frontend` Developer<br>
📍 Santa Catarina - Brazil

<a href="https://www.linkedin.com/in/renyzeraa" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn Badge" height="25"></a>&nbsp;<a href="mailto:renansilvaytb@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white" alt="Gmail Badge" height="25"></a>&nbsp;<a href="#"><img src="https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white" title="renan_s#7826" alt="Discord Badge" height="25"></a>&nbsp;<a href="https://www.github.com/renyzeraa" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white" alt="GitHub Badge" height="25"></a>&nbsp;

<br clear="left"/>

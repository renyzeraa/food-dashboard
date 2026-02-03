# Food Dashboard

Uma plataforma moderna de gerenciamento de restaurantes com análise de pedidos e receitas em tempo real.

<img width="1906" height="791" alt="Image" src="https://github.com/user-attachments/assets/7959f73e-6636-4fe3-a392-124f2bdf2ca7" />

<img width="1904" height="807" alt="Image" src="https://github.com/user-attachments/assets/91aabf24-dfd2-41e0-a908-a8dfd395b87c" />

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
- **Styling**: Tailwind CSS v4 com @tailwindcss/vite
- **State Management**: TanStack Query (React Query)
- **Formulários**: React Hook Form + Zod
- **UI Components**: Radix UI
- **Gráficos**: Recharts
- **Roteamento**: React Router v7
- **HTTP Client**: Axios
- **Notificações**: Sonner
- **Testing**: Vitest + Testing Library + Playwright
- **Mock API**: Mock Service Worker (MSW)
- **Meta Tags**: Unhead
- **Ícones**: Lucide React
- **Utilitários**: date-fns, clsx, class-variance-authority, tailwind-merge

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

| Comando            | Descrição                                   |
| ------------------ | ------------------------------------------- |
| `npm run dev`      | Inicia servidor de desenvolvimento          |
| `npm run dev:mock` | Inicia servidor com dados mock (porta 3838) |
| `npm run build`    | Cria build para produção                    |
| `npm run preview`  | Visualiza build em produção                 |
| `npm run test`     | Executa testes automatizados                |

## ✅ Testes

A aplicação possui uma cobertura completa de testes em diferentes níveis:

### Testes Unitários e de Componentes

Utilizamos **Vitest** com **Testing Library** para testes de componentes:

```bash
npm run test
```

Os testes unitários verificam:

- Componentes de UI (Pagination, NavLink, OrderStatus)
- Renderização correta de elementos
- Interações do usuário
- Chamadas de callbacks

Exemplo de teste:

```typescript
it('should display the right amount of pages and results', () => {
  const wrapper = render(
    <Pagination
      pageIndex={0}
      totalCount={200}
      perPage={10}
      onPageChange={onPageChangeCallback}
    />,
  )
  expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
})
```

### Testes End-to-End (E2E)

Utilizamos **Playwright** para testes de fluxo completo da aplicação:

```bash
npm run test:e2e
```

Os testes E2E cobrem:

- **Dashboard**: Exibição de métricas (receita mensal, pedidos, cancelamentos)
- **Autenticação**: Login com email válido/inválido, registro de restaurante
- **Gerenciamento de Pedidos**: Listagem, filtros, paginação e ações
- **Perfil**: Atualização de informações do restaurante

Exemplo de teste E2E:

```typescript
test("display day orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await expect(page.getByText("20", { exact: true })).toBeVisible();
  await expect(page.getByText("-5% desde o último dia")).toBeVisible();
});
```

### Mock Service Worker (MSW)

A aplicação utiliza **Mock Service Worker** para simular requisições HTTP durante testes e desenvolvimento:

#### O que é MSW?

MSW é uma biblioteca que intercepta requisições de rede (XHR e Fetch) em nível de navegador ou Node.js, permitindo você responder com dados mock sem alterar o código da aplicação.

#### Como Funciona?

1. **Service Worker**: MSW utiliza um Service Worker (`public/mockServiceWorker.js`) para interceptar requisições no navegador
2. **Handlers**: Cada endpoint possui um handler mock em `src/api/mocks/handlers.ts` que define como responder
3. **Setup**: O worker é inicializado via `src/api/mocks/setup.ts` quando em modo teste

#### Handlers Disponíveis

Todos os endpoints da API possuem mocks correspondentes:

```
✓ Autenticação: signIn, registerRestaurant
✓ Perfil: getProfile, updateProfile, getManagedRestaurant
✓ Dashboard: getDayOrdersAmount, getMonthOrdersAmount, getMonthCanceledOrdersAmount, getMonthReceipt
✓ Análise: getDailyRevenueInPeriod, getPopularProducts
✓ Pedidos: getOrders, getOrderDetails, approveOrder, cancelOrder, dispatchOrder, deliverOrder
```

#### Como Usar MSW em Testes

O setup é automático via `test/setup.ts`. Durante os testes, todas as requisições são interceptadas e respondidas com dados mock, permitindo testes isolados e rápidos sem dependência de servidor real.

#### Modo Desenvolvimento com Mock

Para desenvolver usando dados mock sem servidor real:

```bash
npm run dev:mock
```

Isso inicia o servidor com a porta 3838 e ativa MSW automaticamente.

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

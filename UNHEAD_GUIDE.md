# @unhead/react - Guia de Uso

### Em Qualquer Página:

```tsx
import { PageHead } from "@/components/PageHead";

export function MinhaPage() {
  return (
    <>
      <PageHead
        title="Título da Página"
        description="Descrição para buscadores"
        keywords="palavra1, palavra2, palavra3"
        ogTitle="Título para redes sociais"
        ogDescription="Descrição para compartilhamento"
        ogImage="https://exemplo.com/imagem.jpg"
        canonical="https://exemplo.com/minha-pagina"
      />
      {/* Conteúdo da página */}
    </>
  );
}
```

## 🎯 Exemplos

### Página com Imagem para Compartilhamento

```tsx
<PageHead
  title="Receita de Salada"
  description="Receita deliciosa de salada saudável"
  ogImage="https://exemplo.com/salada.jpg"
  twitterCard="summary_large_image"
/>
```

### Página Simples

```tsx
<PageHead title="Sobre Nós" description="Conheça mais sobre o Food Dashboard" />
```

### Página com Canonical URL

```tsx
<PageHead title="Blog" canonical="https://exemplo.com/blog" />
```

## 🔧 Personalização Futura

Para adicionar mais tags globais, edite [App.tsx](../App.tsx):

```tsx
<Head>
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  {/* Mais tags globais aqui */}
</Head>
```

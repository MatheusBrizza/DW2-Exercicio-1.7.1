Considere o array `filmes` declarado abaixo.

```jsx
const filmes = [
  {
    nome: "O Senhor do Aneis: A Sociedade do Anel",
    lancamento: 2002,
    oscar: true,
    diretores: ["Peter Jackson"],
    generos: ["Fantasia", "Aventura"]
  },
  {
    nome: "Harry Potter e a Pedra Filosofal",
    lancamento: 2001,
    oscar: true,
    diretores: ["Chris Columbus"],
    generos: ["Fantasia"]
  },
  {
    nome: "Matrix",
    oscar: true,
    lancamento: 1999,
    diretores: ["Lana Wachowski", "Lilly Wachowski"],
    generos: ["Ação", "Ficção Cientifica"]
  },
  {
    nome: "Meninas Malvadas",
    oscar: false,
    lancamento: 2004,
    diretores: ["Mark Waters"],
    generos: ["Comédia"]
  }
];
```

**Enunciado I:** Faça um Component que irá listar todos os filmes. A propriedade `nome` deve ser uma `h4` e a propriedade `diretores` deve ser uma listagem `ul` sendo cada item um `li`.

**Enunciado II:** Faça um Component que irá renderizar todos os _gêneros_ de filmes lançados depois dos anos 2000.

Enunciado III: Crie um Component que irá renderizar apenas um filme. O nome do component pode ser `FilmeCard`. Nesse Component deve ser renderizado o emoji se o filme é ganhador de oscar.

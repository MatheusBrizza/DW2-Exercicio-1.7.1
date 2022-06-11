import { filmes } from "./filme1";

// enunciado 1
export function Filme({ nome, diretores }) {
  //prop nome
  //prop diretores
  return (
    <div>
      <h4>{nome}</h4>
      <ul>
        {diretores.map((diretor) => (
          <li>{diretor}</li>
        ))}
      </ul>
    </div>
  );
}

export function Filmes({ itens }) {
  return itens.map((filme) => <Filme {...filme} />);
}

// enunciado 2
export function Filme2() {
  function filtrarFilmesAnos(ano = 2000) {
    return filmes.filter((filme) => filme.lancamento > ano);
  }
  function mapearFilmes(filmes) {
    return filmes
      .map((filme) => filme.generos)
      .flat()
      .map((genero) => (
        <div>
          <p>{genero}</p>
          <br />
        </div>
      ));
  }
  return (
    <div>
      <h1>Filmes anos 2000 em diante</h1>
      {mapearFilmes(filtrarFilmesAnos())}
    </div>
  );
}

//enunciado 3
export function Filme3() {
  function FilmeCard({ filme }) {
    const exibirConteudo = filme.oscar;
    if (exibirConteudo) {
      return (
        <div>
          <span>😃 </span>
          {filme.nome}
          <br />
        </div>
      );
    }
    return (
      <div>
        {filme.nome}
        <br />
      </div>
    );
  }
  return filmes.map((filme) => <FilmeCard filme={filme} />);
}

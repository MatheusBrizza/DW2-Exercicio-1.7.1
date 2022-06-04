function Filme({ nome, diretores }) {
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

import { filmes } from "./filme1";
import { Filmes, Filme2, Filme3 } from "./Filmes";
console.log(filmes);
export default function App() {
  return (
    <div>
      <Filmes itens={filmes} />
      <Filme2 />
      <Filme3 />
    </div>
  );
}

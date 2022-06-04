import { filmes } from "./filme1";
import { Filmes } from "./Filmes";
console.log(filmes);
export default function App() {
  return <Filmes itens={filmes} />;
}

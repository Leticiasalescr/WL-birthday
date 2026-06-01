// Livros.jsx
import CategoryPage from "../components/CategoryPage"
import { livros } from "../data/livros"

function Livros() {
  return (
    <CategoryPage
      title="Livros"
      subtitle="Alguns que quero muito ler."
      items={livros}
    />
  )
}

export default Livros
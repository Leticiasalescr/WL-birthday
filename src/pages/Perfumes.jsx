import CategoryPage from "../components/CategoryPage"
import { perfumes } from "../data/perfumes"

export function Perfumes() {
  return (
    <CategoryPage
      items={perfumes}
    />
  )
}

export default Perfumes
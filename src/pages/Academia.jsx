import CategoryPage from "../components/CategoryPage"
import { academia } from "../data/academia"

function Academia() {
  return (
    <CategoryPage
      title="Academia"
      subtitle="Para motivar minha skin gym princess."
      items={academia}
    />
  )
}

export default Academia
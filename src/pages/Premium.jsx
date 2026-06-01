// Premium.jsx
import CategoryPage from "../components/CategoryPage"
import { premium } from "../data/premium"

function Premium() {
  return (
    <CategoryPage
      title="Premium"
      subtitle="Caso você tenha ganhado na loteria nesse meio tempo."
      items={premium}
    />
  )
}

export default Premium
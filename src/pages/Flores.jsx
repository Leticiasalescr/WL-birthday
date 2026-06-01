import CategoryPage from "../components/CategoryPage"
import { flores } from "../data/flores"

function Flores() {
  return (
    <CategoryPage
      title="Flores"
      subtitle="Flores"
      items={flores}
    />
  )
}

export default Flores

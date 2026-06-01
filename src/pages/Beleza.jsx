// Beleza.jsx
import CategoryPage from "../components/CategoryPage"
import { beleza } from "../data/beleza"

function Beleza() {
  return (
    <CategoryPage
      title="Beleza"
      subtitle="Para realçar a beleza da sua princesa."
      items={beleza}
    />
  )
}

export default Beleza
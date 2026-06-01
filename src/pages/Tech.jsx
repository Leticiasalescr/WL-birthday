// Tech.jsx
import CategoryPage from "../components/CategoryPage"
import { tech } from "../data/tech"

function Tech() {
  return (
    <CategoryPage
      title="Tech"
      subtitle="Coisinhas para sua garota de programa."
      items={tech}
    />
  )
}

export default Tech
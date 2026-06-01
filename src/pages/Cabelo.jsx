import CategoryPage from "../components/CategoryPage"
import { cabelo } from "../data/cabelo"

function Cabelo() {
  return (
    <CategoryPage
      title="Cabelo"
      subtitle="Cabelinho"
      items={cabelo}
    />
  )
}

export default Cabelo

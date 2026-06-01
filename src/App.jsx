import Hero from "./components/Hero"
import CategoryCard from "./components/CategoryCard"
import { categories } from "./data/categories"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-5xl font-bold">Categorias</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              color={category.color}
              link={category.link}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
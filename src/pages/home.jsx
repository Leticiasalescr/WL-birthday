import Hero from "../components/Hero"
import CategoryCard from "../components/CategoryCard"
import { categories } from "../data/categories"

function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <Hero />

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem 6rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.8rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#e91e8c",
              marginBottom: "0.75rem",
            }}
          >
            O que eu quero
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "#1a1a1a",
              margin: 0,
            }}
          >
            Categorias
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              color={category.color}
              link={category.link}
              index={index}
            />
          ))}
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid #fce4ec",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.85rem",
            color: "#ccc",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          feita com amor, para o Ruan
        </p>
      </footer>
    </div>
  )
}

export default Home
import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"

function CategoryPage({ title, subtitle, items }) {
  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>

      <div
        style={{
          background: "linear-gradient(160deg, #fff0f5 0%, #fff 70%)",
          padding: "4rem 2rem 3.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #ffd6e7 0%, transparent 70%)",
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Link
            to="/"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#aaa",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              marginBottom: "2.5rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e91e8c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
          >
            ← Voltar para Lista de Desejos
          </Link>

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
            Wishlist da Le
          </p>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 600,
              color: "#1a1a1a",
              margin: "0 0 1rem",
              lineHeight: 1,
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                color: "#888",
                fontStyle: "italic",
                margin: 0,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem 6rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {items.map((item) => (
            <ProductCard key={item.id} {...item} />
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
          Made with ❤️ by Lele
        </p>
      </footer>
    </div>
  )
}

export default CategoryPage
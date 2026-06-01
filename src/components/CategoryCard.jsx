import { Link } from "react-router-dom"

const numbers = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]

function CategoryCard({ title, color, link, index = 0 }) {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <div
        style={{
          backgroundColor: color,
          borderRadius: "2rem",
          padding: "2.5rem",
          minHeight: "160px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)"
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(233,30,140,0.12)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)"
          e.currentTarget.style.boxShadow = "none"
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "4rem",
            fontWeight: 300,
            color: "rgba(233,30,140,0.15)",
            lineHeight: 1,
            position: "absolute",
            top: "1rem",
            right: "1.5rem",
          }}
        >
          {numbers[index]}
        </span>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.75rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#e91e8c",
            margin: "0 0 0.75rem",
            fontWeight: 500,
          }}
        >
          Categoria
        </p>

        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#1a1a1a",
            margin: 0,
            lineHeight: 1.3,
            maxWidth: "80%",
          }}
        >
          {title}
        </h3>

        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.85rem",
              color: "#e91e8c",
              letterSpacing: "0.1em",
            }}
          >
            Ver lista
          </span>
          <span style={{ color: "#e91e8c", fontSize: "1rem" }}>→</span>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
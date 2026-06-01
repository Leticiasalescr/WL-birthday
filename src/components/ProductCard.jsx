function ProductCard({ image, name, description, price, priority }) {
  const starCount = priority ? priority.length : 0

  return (
    <div
      style={{
        borderRadius: "1.75rem",
        overflow: "hidden",
        background: "#fff",
        border: "1px solid #fce4ec",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)"
        e.currentTarget.style.boxShadow = "0 24px 48px rgba(233,30,140,0.1)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      <div
        style={{
          height: "280px",
          overflow: "hidden",
          background: "#fdf2f6",
        }}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1rem",
                color: "#e91e8c",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.4,
              }}
            >
              {name}
            </span>
          </div>
        )}
      </div>

      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "0.75rem",
          }}
        >
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.4rem",
              fontWeight: 600,
              color: "#1a1a1a",
              margin: 0,
              lineHeight: 1.2,
              flex: 1,
            }}
          >
            {name}
          </h3>
        </div>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
            color: "#888",
            margin: "0 0 1.25rem",
            lineHeight: 1.6,
            fontStyle: "italic",
          }}
        >
          {description}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "#e91e8c",
            }}
          >
            {price}
          </span>

          {priority && (
            <span
              style={{
                color: "#e91e8c",
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
              }}
            >
              {priority}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
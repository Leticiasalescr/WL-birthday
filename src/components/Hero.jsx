function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #fff0f5 0%, #fff 60%)",
        padding: "7rem 2rem 5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #ffd6e7 0%, transparent 70%)",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #ffb3d1 0%, transparent 70%)",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1rem",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#e91e8c",
          marginBottom: "1.5rem",
          fontWeight: 500,
        }}
      >
        2026
      </p>

      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(4rem, 10vw, 8rem)",
          fontWeight: 700,
          lineHeight: 0.9,
          color: "#1a1a1a",
          margin: "0 0 0.5rem",
          letterSpacing: "-0.02em",
        }}
      >
        Wishlist
      </h1>

      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(4rem, 10vw, 8rem)",
          fontWeight: 300,
          fontStyle: "italic",
          lineHeight: 0.9,
          color: "#e91e8c",
          margin: "0 0 2.5rem",
          letterSpacing: "-0.02em",
        }}
      >
        da Lele
      </h1>

      <div
        style={{
          width: "60px",
          height: "1px",
          background: "#e91e8c",
          margin: "0 auto 2rem",
        }}
      />

      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.2rem",
          color: "#888",
          maxWidth: "480px",
          margin: "0 auto",
          fontStyle: "italic",
          lineHeight: 1.7,
        }}
      >
        Olá Ruan! Aqui você encontra algumas sugestões para investir na felicidade da sua namorada.
      </p>
    </section>
  )
}

export default Hero
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif"
    }}>
      
      <h1 style={{
        fontSize: "40px",
        marginBottom: "40px"
      }}>
        OBV
      </h1>

      <img
        src="/sofa.png"
        alt="OBV Sofa"
        style={{
          width: "600px",
          borderRadius: "20px"
        }}
      />

    </main>
  );
}
function BoxColor(props) {
    const { r, g, b } = props;
  
    // Formatear a estilo CSS
    const color = `rgb(${r}, ${g}, ${b})`;
  
    // Inline style
    const boxStyle = {
      backgroundColor: color,
      width: "90vw",
      height: "100px",
      color:"white",
      fontSize:"25px",
      border: "2px solid black"
    };
  
    return (
      <div style={boxStyle}>
        {color}
      </div>
    );
  }
  
  export default BoxColor
function BoxColor(props) {
    const { r, g, b } = props;
  
    // Formatear a estilo CSS
    const color = `rgb(${r}, ${g}, ${b})`;
  
    // Inline style
    const boxStyle = {
      backgroundColor: color,
      width: "90vw",
      height: "100px",
      border: "2px solid black", 
      borderRadius:"10px",
    };
  
    return (
      <div style={boxStyle}>
        {color}
      </div>
    );
  }
  
  export default BoxColor
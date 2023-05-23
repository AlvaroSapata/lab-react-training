function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  // ultimos numeros
  const lastDigits = number.slice(-4);

  // mes 0x => cond?true:false
  const formattedMonth =
    expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;

  // año
  const formattedYear = expirationYear.toString().slice(-2);

  // Style
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    width: "320px",
    height:"130px",
    borderRadius:"10px",
    border: "1px solid black", 
  };

  return (
    <div style={cardStyle}>
      <div>{type}</div>
      <div>**** **** **** {lastDigits}</div>
      <div>
        <div>
          <span>Expires:</span>
          <span>
            {formattedMonth}/{formattedYear}
          </span>
        </div>
        <div>{bank}</div>
      </div>
      <div>{owner}</div>
    </div>
  );
}

export default CreditCard;

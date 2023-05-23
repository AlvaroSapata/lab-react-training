function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="id-card">
    <img src={picture} alt="Profile" />
    <div>
      <strong>Last Name:</strong> {lastName}<br />
      <strong>First Name:</strong> {firstName}<br />
      <strong>Gender:</strong> {gender}<br />
      <strong>Height:</strong> {height}<br />
      <strong>Birth:</strong> {birth.toDateString()}
    </div>
  </div>
  )
}

export default IdCard
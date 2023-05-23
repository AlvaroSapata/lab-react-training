function Random(props) {
  const { min, max } = props;

  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return <div>Random number: {randomNum}</div>;
}

export default Random;

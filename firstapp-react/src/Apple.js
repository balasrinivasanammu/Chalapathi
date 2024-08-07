function Apple() {
  return <h2>Hi, I am a Apple!</h2>;
}
function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Apple />
    </>
  );
}

export default Garage;
export const Finder = ({ inputCountry, setInputCountry, setShowCountry }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputCountry(inputValue);
    setShowCountry(false);
  };

  return (
    <form className="countries-form">
      <label>find countries</label>
      <input value={inputCountry} onChange={handleChange}></input>
    </form>
  );
};

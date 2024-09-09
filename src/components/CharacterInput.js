export const CharacterInput = ({ value, characters, callback }) => {
  const onChange = ({ target }) => {
    const newValue = target.value
      .toUpperCase()
      .split("")
      .filter((character) => characters.includes(character))
      .join("");
    callback(newValue);
  };

  return <input type="text" value={value} onChange={onChange} />;
};

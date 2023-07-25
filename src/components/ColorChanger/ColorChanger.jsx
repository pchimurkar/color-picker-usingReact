import { useState } from "react";
import styles from "./ColorChanger.module.css";

const ColorChanger = () => {
  const [color, setColor] = useState("");
  const [boxColor, setBoxColor] = useState("#ffffff");
  const [smallBoxColors, setSmallBoxColors] = useState([
    "#ff0000",
    "#00ff00",
    "#0000ff",
  ]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const handleColorChange = (e) => {
    setColor(e.target.value);
    setErrorMsg("");
    setIsButtonDisabled(false);
    setIsInputDisabled("");
  };
  const inputKeyHandler = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
      // console.log("user clicked btn");
    }
  };

  const handleButtonClick = () => {
    if (isValidColor(color)) {
      setBoxColor(color);
      setSmallBoxColors([...smallBoxColors, color]);
      setColor("");
      setIsButtonDisabled(true);
      setErrorMsg("");
    } else {
      setErrorMsg(
        "Invalid color format. Please enter a valid color name or hexadecimal value."
      );
      setColor("");
    }
  };

  const handleSmallBoxClick = (selectedColor) => {
    setBoxColor(selectedColor);
  };

  const isValidColor = (color) => {
    const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const namedColorRegex = /^[a-zA-Z]+$/;
    return colorRegex.test(color) || namedColorRegex.test(color);
  };

  return (
    <div>
      <input
        type="text"
        value={color}
        onChange={handleColorChange}
        placeholder="Enter color"
        disabled={isInputDisabled}
        onKeyUp={inputKeyHandler}
      />
      <button onClick={handleButtonClick} disabled={isButtonDisabled}>
        Add Color
      </button>
      <div
        className={styles.bigBox}
        style={{
          backgroundColor: boxColor,
        }}
      ></div>
      <div>
        {smallBoxColors.map((color, index) => (
          <div
            key={index}
            className={styles.smallBox}
            style={{
              backgroundColor: color,
            }}
            onClick={() => handleSmallBoxClick(color)}
          ></div>
        ))}
      </div>
      <div style={{ color: "white", fontSize: "20px" }}>
        {errorMsg && <p>{errorMsg}</p>}
      </div>
    </div>
  );
};
export default ColorChanger;

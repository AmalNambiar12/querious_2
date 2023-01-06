import { useMemo } from "react";
import styles from "./Button.module.css";

const Button = ({
  buttonText,
  logoutButtonPadding,
  logoutButtonOverflow,
  logoutButtonAlignItems,
  logoutButtonJustifyContent,
  buttonTextFontSize,
  logoutButtonBorderRadius,
  logoutButtonBoxSizing,
  buttonTextDisplay,
  onClick ,
}) => {
  const logoutButtonStyle = useMemo(() => {
    return {
      padding: logoutButtonPadding,
      overflow: logoutButtonOverflow,
      alignItems: logoutButtonAlignItems,
      justifyContent: logoutButtonJustifyContent,
      borderRadius: logoutButtonBorderRadius,
      boxSizing: logoutButtonBoxSizing,
    };
  }, [
    logoutButtonPadding,
    logoutButtonOverflow,
    logoutButtonAlignItems,
    logoutButtonJustifyContent,
    logoutButtonBorderRadius,
    logoutButtonBoxSizing,
  ]);

  const buttonTextStyle = useMemo(() => {
    return {
      fontSize: buttonTextFontSize,
      display: buttonTextDisplay,
    };
  }, [buttonTextFontSize, buttonTextDisplay]);

  return (
    <button className={styles.logoutbutton} style={logoutButtonStyle} onClick={onClick}>
      <div className={styles.buttontext} style={buttonTextStyle}>
        {buttonText}
      </div>
    </button>
  );
};

export default Button;

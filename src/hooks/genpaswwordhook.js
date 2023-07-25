import { useState } from "react";

const usePasswordGen = () => {
  const [password, setpassword] = useState();
  const [error, seterror] = useState();
  const generatePassword = (checkboxdata, length) => {
    let charset = "",
      genpass = "";

    const selectedoption = checkboxdata.filter((checkbox) => checkbox.state);

    if (selectedoption.length === 0) {
      seterror("select one option");
      setpassword("");
      return;
    }
    selectedoption.forEach((option) => {
      switch (option.title) {
        case "Upper Case":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Lower Case":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Numbers":
          charset += "1234567890";
          break;
        case "Symbols":
          charset += "~!@#$%^&*_+";
          break;
        default:
          break;
      }
    });
    for (let i = 0; i < length; i++) {
      const rendomindex = Math.floor(Math.random() * charset.length);
      genpass += charset[rendomindex];
    }
    setpassword(genpass);
    seterror("");
  };
  return { password, error, generatePassword };
};
export default usePasswordGen;

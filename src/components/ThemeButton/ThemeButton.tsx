import { useTheme } from "next-themes";
import React from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const ThemeButton = () => {

    const [darkmode, setDarkmode] = React.useState(false);
    const { theme, setTheme } = useTheme()

    return (
        <div
        className="cursor-pointer text-gray-600 mr"
        onClick={() => {
          if (theme === 'dark') {
            setTheme('light')
            setDarkmode(false);
          } else {
            setTheme('dark')
            setDarkmode(true);
          }
        }}
      >
        {darkmode ? (
          <RiSunFill className="h-5 w-5" />
        ) : (
          <RiMoonFill className="h-5 w-5" />
        )}
      </div>
    );
  };
  
  export default ThemeButton;
  
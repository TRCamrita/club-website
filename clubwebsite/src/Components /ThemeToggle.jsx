import React,{useState,useEffect} from 'react'

export default function ThemeToggle() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
      );

      useEffect(() => {
        // Apply the theme class to the <html> element
        const root = window.document.documentElement;
        if (theme === "dark") {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
        // Save the theme preference in localStorage
        localStorage.setItem("theme", theme);
      }, [theme]);

      const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
      };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
    >
      Toggle {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  )
}

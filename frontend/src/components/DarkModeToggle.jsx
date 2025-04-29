import { useTheme } from "../hooks/useTheme";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white border rounded shadow-md cursor-pointer">
      {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode" }
    </button>
  );
};

export default DarkModeToggle;
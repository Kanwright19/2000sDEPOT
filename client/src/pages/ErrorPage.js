import { Link, useLocation } from "react-router-dom";
import ReactSwitch from "react-switch";
import { useTheme } from "../Components/ThemeContext";

function ErrorPage() {
	const { isDarkMode, toggleTheme } = useTheme();
	return (
		<div className={isDarkMode ? "dark-mode" : "light-mode"}>
			<section style={{ textAlign: "center" }}>
				<h1 className="h404">404</h1>
				<h2>OOPS! PAGE NOT FOUND</h2>
				<p>
					Sorry, the page you're attempting to access doesn't exist.
					If you believe there's an issue please report it, or return
					to the homepage.
				</p>
				<button>
					<Link to={"/games"}>RETURN HOME</Link>
				</button>
			</section>
			<div className="switch">
				<label> {!isDarkMode ? "Light Mode" : "Dark Mode"}</label>
				<ReactSwitch onChange={toggleTheme} checked={isDarkMode} />
			</div>
		</div>
	);
}

export default ErrorPage;

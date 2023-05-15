import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const App = () => {
	const fetchIssues = async () => {
		try {
			const res = await axios.get(
				"https://webhook-test.bhaaratii.repl.co/issues"
			);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};
    // const TOKEN = "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";


	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<button onClick={fetchIssues}>Fetch Issues</button>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;

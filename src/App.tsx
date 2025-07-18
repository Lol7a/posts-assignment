import "./App.css";
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/posts" />} />
				<Route path="/posts" element={<PostsPage message="Hello from" />} />
				<Route
					path="/post/:id"
					element={<SinglePostPage message="Hello from" />}
				/>
			</Routes>
		</Router>
	);
}

export default App;

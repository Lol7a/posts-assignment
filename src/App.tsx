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
				<Route path="/posts" element={<PostsPage />} />
				<Route path="/post/:id" element={<SinglePostPage />} />
			</Routes>
		</Router>
	);
}

export default App;

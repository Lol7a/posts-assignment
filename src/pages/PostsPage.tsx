import React, { useEffect, useState } from "react";
import { Post, User, Comment } from "../types";
import { fetchComments, fetchPosts, fetchUsers } from "../api";
import { useNavigate } from "react-router-dom";
import { withHelloLogger } from "../hoc/withHelloLogger";
import PostCard from "../components/PostCard";
import SearchBar from "../components/SearchBar";

const PostsPage = ({ message }: { message: string }) => {
	const navigate = useNavigate();
	const [posts, setPosts] = useState<Post[]>([]);
	const [comments, setComments] = useState<Comment[]>([]);
	const [users, setUsers] = useState<User[]>([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		Promise.all([fetchPosts(), fetchComments(), fetchUsers()]).then(
			([p, c, u]) => {
				setPosts(p);
				setComments(c);
				setUsers(u);
			}
		);
	}, []);

	const filteredPosts = posts.filter((post) => {
		const user = users.find((u) => u.id === post.userId);
		return user?.name.toLowerCase().includes(search.toLowerCase());
	});

	return (
		<div className="container py-5">
			<h1 className="mb-4 text-center fw-bold">All Posts</h1>
			<SearchBar onSearch={setSearch} message="Hello from" />
			<div className="row">
				{filteredPosts.map((post) => (
					<PostCard
						key={post.id}
						post={post}
						comments={comments}
						user={users.find((u) => u.id === post.userId)}
						onClick={() => navigate(`/post/${post.id}`)}
						message="Hello from"
					/>
				))}
			</div>
		</div>
	);
};

export default withHelloLogger(PostsPage, "PostsPage");

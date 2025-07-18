import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comment, Post, User } from "../types";
import { fetchPost, fetchPostComments, fetchUsers } from "../api";
import { withHelloLogger } from "../hoc/withHelloLogger";
import CommentList from "../components/CommentList";

const SinglePostPage = ({ message }: { message: string }) => {
	const { id } = useParams<{ id: string }>();
	const [post, setPost] = useState<Post | null>(null);
	const [comments, setComments] = useState<Comment[]>([]);
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		if (!id) return;
		fetchPost(Number(id)).then(setPost);
		fetchPostComments(Number(id)).then(setComments);
		fetchUsers().then((users) =>
			setUser(users.find((u) => u.id === post?.userId) || null)
		);
	}, [id, post?.userId]);

	if (!post) return <p>Loading...</p>;

	return (
		<div className="container py-5">
			<h1>{post.title}</h1>
			<h5 className="text-muted">By {user?.name}</h5>
			<p>{post?.body}</p>

			<hr />
			<CommentList comments={comments} message="Hello from" />
		</div>
	);
};

export default withHelloLogger(SinglePostPage, "SinglePostPage");

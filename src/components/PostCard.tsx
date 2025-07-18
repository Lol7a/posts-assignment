import { withHelloLogger } from "../hoc/withHelloLogger";
import { Post, User, Comment } from "../types";

type Props = {
	post: Post;
	user?: User;
	comments: Comment[];
	onClick: () => void;
	message: string;
};

const PostCard = ({ post, user, comments, onClick, message }: Props) => {
	return (
		<div className="col-md-6 col-lg-4 d-flex">
			<div className="card card-post flex-fill" onClick={onClick}>
				<div className="card-body d-flex flex-column">
					<h5 className="card-title">{post.title}</h5>
					<h6 className="card-subtitle">by {user?.name}</h6>
					<p className="card-text">{post.body.slice(0, 120)}...</p>
					<div className="text-end">
						<i className="bi bi-chat-left-text"></i>
						{comments.filter((c) => c.postId === post.id).length} comments
					</div>
				</div>
			</div>
		</div>
	);
};

export default withHelloLogger(PostCard, "PostCard");

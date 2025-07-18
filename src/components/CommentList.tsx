import { withHelloLogger } from "../hoc/withHelloLogger";
import { Comment } from "../types";

type Props = {
	comments: Comment[];
	message: string;
};

const CommentList = ({ comments, message }: Props) => {
	return (
		<div>
			<h4>Comments</h4>
			<div>
				{comments.map((comment) => (
					<div key={comment.id} className="border p-2 my-2 card comment">
						<div className="card-body d-flex flex-column">
							<strong className="card-title">{comment.name}</strong> (
							{comment.email})<p className="card-text">{comment.body}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default withHelloLogger(CommentList, "CommentList");

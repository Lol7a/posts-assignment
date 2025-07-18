import { withHelloLogger } from "../hoc/withHelloLogger";

type Props = {
	onSearch: (value: string) => void;
	message: string;
};

const SearchBar = ({ onSearch, message }: Props) => {
	return (
		<input
			type="text"
			placeholder="Search by user name"
			onChange={(e) => onSearch(e.target.value)}
			className="form-control my-5"
		/>
	);
};

export default withHelloLogger(SearchBar, "SearchBar");

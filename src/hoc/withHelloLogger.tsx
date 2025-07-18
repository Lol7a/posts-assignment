import { useEffect } from "react";

export function withHelloLogger<P>(
	Component: React.ComponentType<P>,
	componentName: string
) {
	return (props: P & { message: string }) => {
		useEffect(() => {
			console.log(`${props.message} ${componentName}`);
		}, [props.message]);
		return <Component {...props} />;
	};
}

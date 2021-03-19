import { useLayoutEffect, useRef, useState } from "react";

const useDimensions = () => {

	const ref = useRef<any>();
	const [dimensions, setDimensions] = useState<any>({});
	useLayoutEffect(() => {
		if (ref.current)
			setDimensions(ref.current.getBoudingClientReact().toJson());
	}, [ref]);


	return [ref, dimensions];
};

export default useDimensions;
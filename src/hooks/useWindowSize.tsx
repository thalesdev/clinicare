import { useEffect, useState } from "react";

interface UseWindowProps {
	innerHeight: number;
	innerWidth: number;
	outerHeight: number;
	outerWidth: number;
}

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<UseWindowProps>({
		innerHeight: 0,
		innerWidth: 0,
		outerHeight: 0,
		outerWidth: 0,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				innerHeight: window.innerHeight,
				innerWidth: window.innerWidth,
				outerHeight: window.outerHeight,
				outerWidth: window.outerWidth,
			});
		}

		window.addEventListener("resize", handleResize);

		handleResize();


		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
}

export default useWindowSize;
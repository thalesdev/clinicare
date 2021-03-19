import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { AnimationContainer, Container } from './styles';

interface CarouselItemProps {
	children: any;
	enabled?: boolean;
	background?: string;
};

const CarouselItem: React.FC<CarouselItemProps> =
	({ children, enabled, background }) => {

		const controls = useAnimation();

		useEffect(() => {
			if (enabled) {
				controls.start({
					opacity: 1,
					transform: 'translateX(0px)',
					transition: { duration: 0.8, mass: 3 }
				});
			} else {
				controls.start({
					opacity: 0,
					transform: 'translateX(100px)',
					transition: { duration: 0.5 }
				});
			}
			return () => {
				controls.stop();
			}
		}, [enabled]);

		return (
			<Container background={background}>
				<AnimationContainer animate={controls}
					initial={{ opacity: 0, transform: 'translateX(100px)' }}>
					{children}
				</AnimationContainer>
			</Container>
		);
	}

export default CarouselItem;
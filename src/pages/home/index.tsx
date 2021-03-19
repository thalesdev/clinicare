import React, { useCallback, useEffect, useState } from 'react';
import Slider from "react-slick";
import { FaAppleAlt, FaHeartbeat, FaRegHeart } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { GiTooth } from 'react-icons/gi';
import { ImLab } from 'react-icons/im';
import { useAnimation } from 'framer-motion';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Header from '../../components/header';

import { Container, ContentRTL, ContentLTR, Headline, InfoContainer, MotionLi, DoctorTypesContainer, DoctorTypes, WorkingHours } from './styles';
import CarouselItem from '../../components/carousel-item';
import Footer from '../../components/footer';


const Home: React.FC = () => {

	const [currentSlide, setCurrentSlide] = useState(0);
	const controllerAnimationInfo = useAnimation();
	const [lockAnimationInfo, setLockAnimationInfo] = useState(false);


	const slideIsActive = useCallback((n) => n === currentSlide, [currentSlide]);

	useScrollPosition(({ prevPos, currPos }) => {
		if (Math.abs(currPos.y) >= 50 && Math.abs(prevPos.y) < 50 && !lockAnimationInfo) {
			controllerAnimationInfo.start(i => {
				return {
					transform: 'translateX(0px)',
					opacity: 1,
					transition: {
						duration: 0.02 * (2 ** (i + 1)),
						mass: 3
					}
				};
			});
			setLockAnimationInfo(() => true);
		}
		// console.log('y:', currPos.y)
	});

	const handleBeforeChange = (_, next) => {
		setCurrentSlide(next);
	};

	return (
		<Container>
			<Header />
			<Slider beforeChange={handleBeforeChange}>
				<CarouselItem enabled={slideIsActive(0)} background="http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/hero-1.jpg" >
					<ContentRTL>
						<div className="w50">
							<Headline>
								THE <b>RIGHT</b> PEDIATRICIAN
							</Headline>
							<span>
								We at MediCare are always fully focused on helping your child and you to overcame any hurdle, whether it’s chicken pox or just a seasonal flue.
							</span>
							<ul>
								<li>
									<span className="icon"><FaAppleAlt size={22} /></span>
									<span>
										<h4>HEALTHY ADVICES</h4>
										<span>
											Praesent convallis tortor et enim laoreet.
										</span>
									</span>
								</li>
								<li>
									<span className="icon"><IoMdCall size={22} /></span>
									<span>
										<h4>ALWAYS AVAILABLE</h4>
										<span>
											Donec malesuada nunc non venenatis.
										</span>
									</span>
								</li>
							</ul>
						</div>
					</ContentRTL>
				</CarouselItem>
				<CarouselItem enabled={slideIsActive(1)} background="http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/shutterstock_1393269051.jpg" >
					<ContentLTR>
						<div className="w50">
							<Headline>
								YOU AND <b>YOU DOCTOR</b>
							</Headline>
							<span>
								Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et posuere laoreet. Morbi pharetra velit ut varius semper. Donec accumsan et lacus at posuere.
							</span>
							<ul>
								<li>
									<span className="icon"><FaHeartbeat size={22} /></span>
									<span>
										<h4>REGULAR CHECKUPS</h4>
										<span>
											Praesent convallis tortor et enim laoreet, consectetur.
										</span>
									</span>
								</li>
								<li>
									<span className="icon"><IoMdCall size={22} /></span>
									<span>
										<h4>ALWAYS AVAILABLE</h4>
										<span>
											Morbi sed maximus libero. Nunc lacinia fermentum leo.
										</span>
									</span>
								</li>
							</ul>
						</div>
					</ContentLTR>
				</CarouselItem>
			</Slider>
			<InfoContainer>
				<MotionLi custom={1} animate={controllerAnimationInfo}>
					<div>
						<span>Professional staff</span>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
					</div>
					<a href="#">Read More</a>
				</MotionLi>
				<MotionLi custom={2} animate={controllerAnimationInfo}>
					<div>
						<span>Professional staff</span>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
					</div>
					<a href="#">Read More</a>
				</MotionLi>
				<MotionLi custom={3} animate={controllerAnimationInfo}>
					<div>
						<span>Professional staff</span>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
					</div>
					<a href="#">Read More</a>
				</MotionLi>
				<MotionLi custom={4} animate={controllerAnimationInfo}>
					<div>
						<span>Professional staff</span>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
					</div>
					<a href="#">Read More</a>
				</MotionLi>
			</InfoContainer>
			<DoctorTypesContainer>
				<DoctorTypes>
					<li>
						<header>
							<img src="http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/devojcica-kod-zubara-320x320.jpg" alt="Garota no dentista" />
							<span>
								<GiTooth />
							</span>
						</header>
						<section>
							<span>For your child whitest teeths</span>
							<h1>DENTIST</h1>
							<p>
								Praesent convallis tortor et enim laoreet, vel consectetur purus latoque penatibus et dis parturient.
							</p>
						</section>
					</li>
					<li>
						<header>
							<img src="http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/srce-i-stetoskop-320x320.jpg" alt="Ferramenta Cardiologista" />
							<span>
								<FaRegHeart />
							</span>
						</header>
						<section>
							<span>Got a broken heart?</span>
							<h1>CARDIOLOGIST</h1>
							<p>
								Nullam eleifend lectus a tortor interdum, non sodales ante vehicula. Proin consequat, at commodo.
							</p>
						</section>
					</li>
					<li>
						<header>
							<img src="http://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/kiroprakticar-320x320.jpg" alt="Ferramenta Quiropraxia" />
							<span>
								<ImLab />
							</span>
						</header>
						<section>
							<span>Neck or back pain?</span>
							<h1>CHIROPRACTOR</h1>
							<p>
								Duis scelerisque faucibus nisi sed lacinia. Curabitur ipsum elit, cursus id dui quis, dictum laoreet neque.
							</p>
						</section>
					</li>
				</DoctorTypes>
				<WorkingHours>
					<header>
						<h2>Horario de Trabalho</h2>
						<p>Consulte os horarios de funcionamento (GMT-3).</p>
					</header>
					<li>
						<b>Domingo</b>
						<span>8:00 AM – 2:30 PM</span>
					</li>
					<li>
						<b>Segunda</b>
						<span>8:00 AM – 7:00 PM</span>
					</li>
					<li>
						<b>Terça</b>
						<span>8:00 AM – 7:00 PM</span>
					</li>
					<li>
						<b>Quarta</b>
						<span>8:00 AM – 7:00 PM</span>
					</li>
					<li>
						<b>Quinta</b>
						<span>8:00 AM – 7:00 PM</span>
					</li>
					<li>
						<b>Sexta</b>
						<span>8:00 AM – 7:00 PM</span>
					</li>
					<li>
						<b>Sabado</b>
						<span>Fechado</span>
					</li>
				</WorkingHours>
			</DoctorTypesContainer>

			<Footer />
		</Container>
	);
}

export default Home;
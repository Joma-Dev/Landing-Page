import next from '@/assets/images/news-next.svg';
import previous from '@/assets/images/news-previous.svg';
import ShortsModal from '@/components/Shared/Modals/ShortsModal';
import { useGetNewsVideosQuery } from '@/redux/api/apiSlice';
import styles from '@/styles/markets/news.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
const NewsVideo = () => {
	const sliderRef = useRef(null);
	const [sliderLoaded, setSliderLoaded] = useState(false);
	const [isMobileView, setIsMobileView] = useState(false);

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth <= 768) {
				setIsMobileView(false);
			} else {
				setIsMobileView(true);
			}
		}

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const { data, isLoading, isSuccess } = useGetNewsVideosQuery();

	useEffect(() => {
		if (sliderRef.current) {
			setSliderLoaded(true);
		}
	}, [sliderRef]);

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2.7,
					slidesToScroll: 1,
				},
			},
		],
	};

	const [shortsModalShow, setShortsModalShow] = useState(false);
	const [shortsLink, setShortsLink] = useState('');
	const handleModalClose = () => setShortsModalShow(false);

	const handleVideoClick = (data) => {
		setShortsLink(data);
		setShortsModalShow(true);
	};

	return (
		<>
			{shortsModalShow && (
				<ShortsModal
					shortsModalShow={shortsModalShow}
					shortsLink={shortsLink}
					handleModalClose={handleModalClose}
				/>
			)}

			{isMobileView ? (
				<div className="d-flex justify-content-center align-items-center mb-5 mt-4">
					<div>
						<p className={styles.NewsVideosTitle}>Top 3 News</p>
						<div className={styles.customDiv}>
							<iframe
								loading="lazy"
								className={styles.iframeStyles}
								src={`https://www.youtube.com/embed/0G1OrcxBwtk`}
							></iframe>
							<div
								className={styles.NewsVideosOverlay}
								onClick={() => handleVideoClick('0G1OrcxBwtk')}
							></div>
						</div>
					</div>
					<div>
						<p className={styles.NewsVideosTitle}>Weekly Update</p>
						<div className={styles.customDiv}>
							<iframe
								loading="lazy"
								className={styles.iframeStyles}
								src={`https://www.youtube.com/embed/0G1OrcxBwtk`}
							></iframe>
							<div
								className={styles.NewsVideosOverlay}
								onClick={() => handleVideoClick('0G1OrcxBwtk')}
							></div>
						</div>
					</div>
					<div>
						<p className={styles.NewsVideosTitle}>Top 3 Shares</p>
						<div className={styles.customDiv}>
							<iframe
								loading="lazy"
								className={styles.iframeStyles}
								src={`https://www.youtube.com/embed/0G1OrcxBwtk`}
							></iframe>
							<div
								className={styles.NewsVideosOverlay}
								onClick={() => handleVideoClick('0G1OrcxBwtk')}
							></div>
						</div>
					</div>
				</div>
			) : (
				<div className="container px-0 mt-3" style={{overflow: 'hidden'}}>
					<div className="slider-container position-relative">
						{' '}
						{/* Added "position-relative" class */}
						<Image
							src={previous}
							alt="previous"
							className="position-absolute start-0 top-50 translate-middle-y"
							onClick={() => sliderRef.current.slickPrev()}
							style={{ cursor: 'pointer', zIndex: 1 }}
						/>
						<Slider {...settings} ref={sliderRef}>
								<div>
									<p className={styles.NewsVideosTitle}>Top 3 News</p>
									<div className={styles.customDiv}>
										<iframe
											loading="lazy"
											className={styles.iframeStyles}
											src={`https://www.youtube.com/embed/4GFkMlazvtk`}
										></iframe>
										<div
											className={styles.NewsVideosOverlay}
											onClick={() => handleVideoClick('4GFkMlazvtk')}
										></div>
									</div>
								</div>
								<div>
									<p className={styles.NewsVideosTitle}>Top 3 News</p>
									<div className={styles.customDiv}>
										<iframe
											loading="lazy"
											className={styles.iframeStyles}
											src={`https://www.youtube.com/embed/4GFkMlazvtk`}
										></iframe>
										<div
											className={styles.NewsVideosOverlay}
											onClick={() => handleVideoClick('4GFkMlazvtk')}
										></div>
									</div>
								</div>
								<div>
									<p className={styles.NewsVideosTitle}>Top 3 News</p>
									<div className={styles.customDiv}>
										<iframe
											loading="lazy"
											className={styles.iframeStyles}
											src={`https://www.youtube.com/embed/4GFkMlazvtk`}
										></iframe>
										<div
											className={styles.NewsVideosOverlay}
											onClick={() => handleVideoClick('4GFkMlazvtk')}
										></div>
									</div>
								</div>
						</Slider>
						<Image
							src={next}
							alt="next"
							className="position-absolute end-0 top-50 translate-middle-y"
							onClick={() => sliderRef.current.slickNext()}
							style={{ cursor: 'pointer', zIndex: 1 }}
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default NewsVideo;

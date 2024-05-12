import searchIcon from '@/assets/images/search_icon.svg';
import next from '@/assets/images/trading-next.svg';
import previous from '@/assets/images/trading-previous.svg';
import TradingTuesdayImg from '@/assets/images/trading_tuesday.svg';
import { useGetNewsVideosQuery } from '@/redux/api/apiSlice';
import styles from '@/styles/home/home.module.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
const TradingTuesday = () => {
	const sliderRef = useRef(null);
	const [sliderLoaded, setSliderLoaded] = useState(false);
	const [isMobileView, setIsMobileView] = useState(false);
	const [input, setInput] = useState('');

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
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3.5,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2.3,
					slidesToScroll: 1,
				},
			},
		],
	};

	const handleChange = (value) => {
		setInput(value);
		/* setOpenSearchList(true);
		searchList(value); */
	};

	const [selectedValue, setSelectedValue] = useState('Newest');

	const handleSelectedValue = (event) => {
		setSelectedValue(event.target.value);
	};

	return (
		<>
			<div className="px-0 py-3">
				<div className="row align-items-center">
					<div className="col-lg-8 col-7">
						<div className="d-flex justify-content-end">
							<div className={`${styles.searchBarContainer}`}>
								<div className="mt-0 d-flex justify-content-center align-items-center">
									<div className={`${styles.searchContainer} w-100`}>
										<Image
											src={searchIcon}
											alt="Search Icon"
											className={`${styles.searchIcon}`}
										/>
										<input
											type="text"
											placeholder={`Search`}
											className={`${styles.searchInput}`}
											value={input}
											onChange={(e) => handleChange(e.target.value)}
										/>
									</div>
								</div>
								{/* {input && openSearchList && results && results.length > 0 && (
					<div className={styles.resultsList}>
						{results.map((result) => (
							<div
								style={{ cursor: 'pointer' }}
								className={styles.searchResult}
								key={result?.FIN_PROD_ID}
								onClick={() => {
									handleSelectSearchItem(result?.PROD_NAME);
								}}
							>
								{result?.PROD_NAME} - {result?.TRADE_CODE}
							</div>
						))}
					</div>
				)} */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-5">
						<div className="d-flex justify-content-end w-100">
							<div className="dropdown dropdown-custom">
								<select
									className="form-select custom-form-selector"
									aria-label="Default select example"
									onChange={handleSelectedValue}
									value={selectedValue}
									style={{ cursor: 'pointer' }}
								>
									<option
										value="Newest"
									>
										Newest
									</option>
									<option
										value="Oldest"
									>
										Oldest
									</option>
									<option
										value="MostPopular"
									>
										Most Popular
									</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container px-0 py-3 pb-lg-5">
				<div className="slider-container position-relative">
					<Image
						src={previous}
						alt="previous"
						className="position-absolute start-0 top-50 start-0 translate-middle show-logo-pc"
						onClick={() => sliderRef.current.slickPrev()}
						style={{
							cursor: 'pointer',
							zIndex: 1,
							boxShadow: '10px 10px 10px 0px rgba(44, 124, 122, 0.12)',
							borderRadius: '50%',
						}}
					/>
					<Slider {...settings} ref={sliderRef}>
                    {/* https://staging.jomma.online/newsfiles/J476.pdf */}
						<div className="" style={{ border: 'none' }}>
							<Image
								src={TradingTuesdayImg}
								alt="Jomma Trading Tuesday"
								layout="responsive"
								className="pe-2 pe-lg-4 pb-0" style={{cursor:'pointer'}}
							/>
						</div>
						<div>
							<Image
								src={TradingTuesdayImg}
								alt="Jomma Trading Tuesday"
								layout="responsive"
								className="pe-2 pe-lg-4 pb-0" style={{cursor:'pointer'}}
							/>
						</div>
						<div>
							<Image
								src={TradingTuesdayImg}
								alt="Jomma Trading Tuesday"
								layout="responsive"
								className="pe-2 pe-lg-4 pb-0" style={{cursor:'pointer'}}
							/>
						</div>
						<div>
							<Image
								src={TradingTuesdayImg}
								alt="Jomma Trading Tuesday"
								layout="responsive"
								className="pe-2 pe-lg-4 pb-0" style={{cursor:'pointer'}}
							/>
						</div>
						<div>
							<Image
								src={TradingTuesdayImg}
								alt="Jomma Trading Tuesday"
								layout="responsive"
								className="pe-2 pe-lg-4 pb-0" style={{cursor:'pointer'}}
							/>
						</div>
						<div>
							<Image
								src={TradingTuesdayImg}
								alt="Jomma Trading Tuesday"
								layout="responsive"
								className="pe-2 pe-lg-4 pb-0" style={{cursor:'pointer'}}
							/>
						</div>
						<div>
							<Image
								src={TradingTuesdayImg}
								alt="Jomma Trading Tuesday"
								layout="responsive"
								className="pe-2 pe-lg-4 pb-0" style={{cursor:'pointer'}}
							/>
						</div>
					</Slider>
					<Image
						src={next}
						alt="next"
						className="position-absolute end-0 top-50 translate-middle-y show-logo-pc"
						onClick={() => sliderRef.current.slickNext()}
						style={{
							cursor: 'pointer',
							zIndex: 1,
							marginRight: '-8px',
							boxShadow: ' -10px -10px 10px 0px rgba(44, 124, 122, 0.12)',
							borderRadius: '50%',
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default TradingTuesday;

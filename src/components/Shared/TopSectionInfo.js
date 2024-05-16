import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

const TopSectionInfo = ({ isActive = 1, value=1 }) => {
	const sliderRef = useRef(null);
	const [sliderLoaded, setSliderLoaded] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		if (sliderRef.current) {
			setSliderLoaded(true);
		}
	}, [sliderRef]);

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 6,
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
		afterChange: (current) => {
			setCurrentSlide(current);
		},
	};
	return (
		<>
			<div className="py-2">
				<div className="slider-container position-relative">
					<Slider {...settings} ref={sliderRef}>
						<div>
							<div
								className="indexs-info"
								style={{ backgroundColor: isActive ? '#D7EAD4' : '#F7CFCF' }}
							>
								<div className="d-flex justify-content-between align-items-center mb-1" style={{fontWeight:'500'}}>
                                    <p className='mb-0'>DSEX</p>
                                    <p className='mb-0 top-section-value-color' style={{ color: value ? '#389429' : '#D60D0D' }}>0.23%</p>
                                </div>
								<div className="d-flex justify-content-between align-items-center" style={{fontWeight:'400'}}>
                                    <p className='mb-0'>1234596.78</p>
                                    <p className='mb-0 top-section-value-color' style={{ color: value ? '#389429' : '#D60D0D' }}>+10.23</p>
                                </div>
							</div>
						</div>
						<div>
							<div
								className="indexs-info"
								style={{ backgroundColor: isActive ? '#D7EAD4' : '#F7CFCF' }}
							>
								<div className="d-flex justify-content-between align-items-center mb-1" style={{fontWeight:'500'}}>
                                    <p className='mb-0'>DSEX</p>
                                    <p className='mb-0 top-section-value-color' style={{ color: value ? '#389429' : '#D60D0D' }}>0.23%</p>
                                </div>
								<div className="d-flex justify-content-between align-items-center" style={{fontWeight:'400'}}>
                                    <p className='mb-0'>1234596.78</p>
                                    <p className='mb-0 top-section-value-color' style={{ color: value ? '#389429' : '#D60D0D' }}>+10.23</p>
                                </div>
							</div>
						</div>
						<div>
							<div
								className="indexs-info"
								style={{ backgroundColor: isActive ? '#D7EAD4' : '#F7CFCF' }}
							>
								<div className="d-flex justify-content-between align-items-center mb-1" style={{fontWeight:'500'}}>
                                    <p className='mb-0'>DSEX</p>
                                    <p className='mb-0 top-section-value-color' style={{ color: value ? '#389429' : '#D60D0D' }}>0.23%</p>
                                </div>
								<div className="d-flex justify-content-between align-items-center" style={{fontWeight:'400'}}>
                                    <p className='mb-0'>1234596.78</p>
                                    <p className='mb-0 top-section-value-color' style={{ color: value ? '#389429' : '#D60D0D' }}>+10.23</p>
                                </div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</>
	);
};

export default TopSectionInfo;

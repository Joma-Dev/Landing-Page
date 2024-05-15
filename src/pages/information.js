import backIcon from '@/assets/images/back-icon.svg';
import brac from '@/assets/images/help-brac.png';
import broker from '@/assets/images/help-broker.svg';
import jomma from '@/assets/images/help-jomma.svg';
import mutual from '@/assets/images/help-mutual-fund.svg';
import stock from '@/assets/images/help-stock.svg';
import game from '@/assets/images/help-trading-game.svg';
import RootLayout from '@/components/Layouts/RootLayout';
import Contact from '@/components/UI/Contact';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const data = [
	{
		id: 1,
		image: jomma,
		title_en: 'About Jomma',
		title_bn: 'জমা সম্পর্কে জেনে নিন',
		slug: 'about-jomma',
	},
	{
		id: 2,
		image: broker,
		title_en: 'Online Broker Account',
		title_bn: 'অনলাইনে ব্রোকার একাউন্ট সম্পর্কে জেনে নিন ',
		slug: 'online-broker-account',
	},
	{
		id: 3,
		image: stock,
		title_en: 'Stock Investment',
		title_bn: 'শেয়ার বাজারে বিনিয়োগ সম্পর্কে জেনে নিন ',
		slug: 'stock-investment',
	},
	{
		id: 4,
		image: mutual,
		title_en: 'Mutual Funds',
		title_bn: 'মিচ্যুয়াল ফান্ডে বিনিয়োগ সম্পর্কে জেনে নিন ',
		slug: 'mutual-funds',
	},
	{
		id: 5,
		image: brac,
		title_en: 'Brac EPL Wealth Management',
		title_bn: 'ব্র্যাক ইপিএল ওয়েলথ ম্যানেজমেন্ট সম্পর্কে জেনে নিন',
		slug: 'brac-epl-wealth-management',
	},
	{
		id: 6,
		image: game,
		title_en: 'Trading Simulation Game',
		title_bn: 'বিনিয়োগের সিমুলেশন গেইম সম্পর্কে জেনে নিন ',
		slug: 'trading-simulation-game',
	},
];
const data2 = [
	{
		id: 1,
		title_en: 'What does Jomma do?',
		title_bn: 'জমার কাজ কি ?',
	},
	{
		id: 2,
		title_en: 'What is required to open a broker account online?',
		title_bn: 'অনলাইনে ব্রোকার একাউন্ট খুলতে কি কি লাগে ? ',
	},
	{
		id: 3,
		title_en: 'What is the top 10 shares to invest?',
		title_bn: 'বিনিয়োগের জন্য সেরা ১০ টি শেয়ারের নাম কি কি ?',
	},
	{
		id: 4,
		title_en: 'What is the benefit of investing in mutual fund?',
		title_bn: 'মিচ্যুয়াল ফান্ডে বিনিয়োগের সুবিধা কি কি ?',
	},
	{
		id: 5,
		title_en: 'What is Brac EPL?',
		title_bn: 'ব্র্যাক ইপিএল ওয়েলথ ম্যানেজমেন্ট কি ?',
	},
	{
		id: 6,
		title_en: 'How can I play trading game?',
		title_bn: 'বিনিয়োগের সিমুলেশন গেইম কীভাবে খেলবো ?',
	},
];

const Information = () => {
	const [isMobileView, setIsMobileView] = useState(false);

	useEffect(() => {
		function handleResize() {
			const shouldSetMobileView = window.innerWidth <= 768;
			if (isMobileView !== shouldSetMobileView) {
				setIsMobileView(shouldSetMobileView);
			}
		}

		window.addEventListener('resize', handleResize);
		handleResize(); // Call it initially to set the state based on the current window size

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [isMobileView]); // Only re-run if isMobileView changes

	const renderTopicArea = (topics, title) => (
		<div className="question-area mt-5">
			<h1 className="text-center video-section-header mb-0">{title}</h1>
			<div className="row gy-3 gx-1 mt-0 mt-lg-3">
				{topics.map((item) => (
					<div
						className="col-lg-4 col-md-4 col-sm-6 col-6 d-flex flex-column"
						key={item.id}
					>
						<div className="help-center-topic-section">
							{item?.image ? (
								<div className="help-center-image-area">
									<Image src={item?.image} alt="" className="ms-2"></Image>
								</div>
							) : null}
							<div className="help-center-info-area">
								<p className="question-title-en mb-1">{item?.title_en}</p>
								<p
									className="question-title-bn mb-1"
									style={{ fontFamily: 'Noto Sans Bengali' }}
								>
									{item?.title_bn}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);

	return (
		<>
			<div className="container mt-4">
				<Link href={'/'} className="back-page-icon">
					<Image src={backIcon} alt="back icon" /> &nbsp;
					<p className="mb-0">Back</p>
				</Link>
			</div>
			<div className={!isMobileView ? 'container' : ''}>
				<div className="header-of-information mt-2">
					<p>Jomma Help Center</p>
					<h1 className="text-white video-section-header mb-0">
						Answers for popular investment related queries
					</h1>
				</div>
			</div>
			<div className="container">
				{renderTopicArea(data, 'Popular Topics')}
				{renderTopicArea(data2, 'Frequently Asked Questions')}
			</div>


            <Contact isMobileView={isMobileView}/>
		</>
	);
};

export default Information;
Information.getLayout = function getLayout(page) {
	return <RootLayout>{page}</RootLayout>;
};

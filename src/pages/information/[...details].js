import backIcon from '@/assets/images/back-icon.svg';
import logo from '@/assets/images/jomma_logo.svg';
import Mobilelogo from '@/assets/images/mobile_jomma_logo.svg';
import RootLayout from '@/components/Layouts/RootLayout';
import QuestionCard from '@/components/Shared/QuestionCard';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import testI from '@/assets/images/main-focus-image.png';
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

const Details = () => {
	return (
		<>
			<Head>
				<title>Details - Jomma</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>

			<div className="container mt-4">
				<Link href={'/information'} className="back-page-icon">
					<Image src={backIcon} alt="back icon" /> &nbsp;
					<p className="mb-0">Back</p>
				</Link>
				<div className="question-details-area mt-3 mt-md-5">
					<Image src={logo} alt="logo-icon-jomma" className="show-logo-pc" />
					<Image
						src={Mobilelogo}
						alt="Jomma Logo"
						width={75}
						height={14}
						style={{ marginLeft: '-6px' }}
						className="show-logo-mobile"
					/>
					<h1 className="video-section-header mt-2 mb-3 mb-md-4">
						About Jomma |{' '}
						<span style={{ fontFamily: 'Noto Sans Bengali' }}>
							জমা সম্পর্কে তথ্য
						</span>
					</h1>

					<div
						className="w-100"
						style={{ height: '1px', backgroundColor: '#A5A5A7' }}
					></div>

					<div className="details-area">
						<p>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using Content here, content
							here, making it look like readable English. Many desktop
							publishing packages and web page editors now use Lorem Ipsum as
							their default model text, and a search for lorem ipsum will
							uncover many web sites still in their infancy.
						</p>

						<p style={{ fontFamily: 'Noto Sans Bengali' }}>
							এটি একটি দীর্ঘ প্রতিষ্ঠিত সত্য যে একটি পাঠক একটি পৃষ্ঠার পাঠযোগ্য
							বিষয়বস্তু দ্বারা বিভ্রান্ত হবে যখন এটির বিন্যাসটি দেখবে। Lorem
							Ipsum ব্যবহার করার বিষয় হল যে এটিতে কন্টেন্ট এখানে, এখানে
							বিষয়বস্তু ব্যবহার করার বিপরীতে অক্ষরের কম-বেশি স্বাভাবিক বন্টন
							রয়েছে, এটিকে পঠনযোগ্য ইংরেজির মতো দেখায়। অনেক ডেস্কটপ পাবলিশিং
							প্যাকেজ এবং ওয়েব পেজ এডিটররা এখন তাদের ডিফল্ট মডেল টেক্সট হিসেবে
							Lorem Ipsum ব্যবহার করে এবং -এর জন্য একটি অনুসন্ধান অনেক ওয়েব
							সাইটকে তাদের শৈশবকালে উন্মোচিত করবে
						</p>
					</div>

					<div className="mt-3 mt-md-5">
						<QuestionCard topics={data2} title={'Frequently Asked Questions'} />
					</div>
				</div>

				

				{/* <div class="grid-container mt-5">
  <div class="grid-item item1">1</div>
  <div class="grid-item item2">
  <div className='h-50'>
  <Image
              src={testI}
              alt="Featured image"
			  layout="intrinsic"
            />
  </div>
  </div>
  <div class="grid-item item3">3</div>  
  <div class="grid-item item4">4</div>
  <div class="grid-item item5">5</div>
</div> */}
			</div>



		</>
	);
};

export default Details;

Details.getLayout = function getLayout(page) {
	return <RootLayout>{page}</RootLayout>;
};

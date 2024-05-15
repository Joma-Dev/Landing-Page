import backIcon from '@/assets/images/back-icon.svg';
import logo from '@/assets/images/jomma_logo.svg';
import Mobilelogo from '@/assets/images/mobile_jomma_logo.svg';
import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
						<h1 className="video-section-header mt-2">
							About Jomma | জমা সম্পর্কে তথ্য
						</h1>
				</div>
			</div>
		</>
	);
};

export default Details;

Details.getLayout = function getLayout(page) {
	return <RootLayout>{page}</RootLayout>;
};

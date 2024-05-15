import Image from 'next/image';
import React from 'react';

const QuestionCard = ({topics, title}) => {
    return (
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
};

export default QuestionCard;
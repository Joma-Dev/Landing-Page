import Image from "next/image";

const TopicCard = ({item}) => {
	return (
		<div className="help-center-topic-section">
			<div className="help-center-image-area">
                <Image src={item?.image} alt="" className="ms-2"></Image>
            </div>
			<div className="help-center-info-area">

            <p className="question-title-en mb-1">{item?.title_en}</p>
            <p className="question-title-bn mb-1" style={{ fontFamily: "Noto Sans Bengali" }}>{item?.title_bn}</p>

            </div>
		</div>
	);
};

export default TopicCard;

import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import close from "../../../assets/images/btn_close.svg";

const VideoShowModal = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      contentClassName="custom-modal-container"
      centered
    >
      <Modal.Header className="custom-modal-header">
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>

        <div
          type=""
          className="close"
          aria-label="Close"
          onClick={props.onHide}
        >
          <Image
            src={close}
            alt="Close"
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
          />
        </div>
      </Modal.Header>
      <Modal.Body className="custom-modal-body p-0">
        {/* <div className="modal-title-divider"></div> */}
        <div className="custom-modal-body">
          <div
            style={{
              position: "relative",
              paddingBottom: "45%",
              height: 0,
              overflow: "hidden",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              width="360"
              height="250"
              src={`${props?.data}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="custom-modal-footer"></Modal.Footer>
    </Modal>
  );
};

export default VideoShowModal;

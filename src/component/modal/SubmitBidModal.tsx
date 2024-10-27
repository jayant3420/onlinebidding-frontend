import { Modal } from "react-bootstrap";


function SubmitBidModal() {
  return (
    <Modal show={true} size="lg" className="custom-modal blur-bg" centered>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default SubmitBidModal;

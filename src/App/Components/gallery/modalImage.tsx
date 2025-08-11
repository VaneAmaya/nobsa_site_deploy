import { Button, Modal } from "react-bootstrap";
import { Gallery } from "../../mocks/gallery";

export const ModalImagen = (props: any) => {
  const miFoto = Gallery.find((objImage) => {
    return objImage.id === props.image.id;
  });
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header className="bg-dark border-secondary">
        <Button variant="dark" onClick={props.onHide}>
          <i className="fa-solid fa-x fa-bounce"></i>
        </Button>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <div className="d-flex justify-content-center">
        <img
        className="rounded-3"
            src={miFoto?.image}
            alt="no hay foto"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

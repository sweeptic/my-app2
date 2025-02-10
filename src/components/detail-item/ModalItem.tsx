import Modal from './Modal';

const ModalItem = (props: any) => {
  return (
    <Modal onClose={props.onClose}>
      <div>{props.content}</div>
    </Modal>
  );
};

export default ModalItem;

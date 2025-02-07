import Modal from './Modal';

interface IModalItem {
  onClose: () => void;
  content: JSX.Element;
}

const ModalItem = (props: IModalItem) => {
  return (
    <Modal onClose={props.onClose}>
      <div>{props.content}</div>
    </Modal>
  );
};

export default ModalItem;

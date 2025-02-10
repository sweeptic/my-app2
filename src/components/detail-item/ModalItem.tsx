import Modal from './Modal';

interface IModalItem {
  onClose: () => void;
  content: JSX.Element;
}

const ModalItem = ({ content, onClose }: IModalItem) => {
  return (
    <Modal onClose={onClose}>
      <div>{content}</div>
    </Modal>
  );
};

export default ModalItem;

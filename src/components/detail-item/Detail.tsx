import Modal from './Modal';

interface IDetail {
  onClose: () => void;
}

const Detail = (props: any) => {
  return (
    <Modal onClose={props.onClose}>
      <div>Detail</div>
    </Modal>
  );
};

export default Detail;

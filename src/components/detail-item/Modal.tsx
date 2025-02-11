import { createPortal } from 'react-dom';

// interface IBackdrop {
//   onClose: () => void;
// }

// const Backdrop = ({ onClose }: IBackdrop) => {
//   return <div className={'backdrop'} onClick={onClose} />;
// };

interface IModalOverlay {
  children?: React.ReactNode;
  onClose: () => void;
}

interface IModal {
  onClose: () => void;
  children?: React.ReactNode;
}

const ModalOverlay = (props: IModalOverlay) => {
  return (
    <div className="modal" onClick={props.onClose}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')!;

const Modal = (props: IModal) => {
  return (
    <>
      {/* {portalElement ? createPortal(<Backdrop onClose={props.onClose} />, portalElement) : null} */}
      {portalElement
        ? createPortal(<ModalOverlay onClose={props.onClose}>{props.children} </ModalOverlay>, portalElement)
        : null}
    </>
  );
};

export default Modal;

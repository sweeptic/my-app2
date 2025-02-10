import { createPortal } from 'react-dom';

interface IBackdrop {
  onClose: () => void;
}

const Backdrop = ({ onClose }: IBackdrop) => {
  return <div className={'backdrop'} onClick={onClose} />;
};

interface IModalOverlay {
  children?: React.ReactNode;
}

const ModalOverlay = (props: IModalOverlay) => {
  return (
    <div /*className={classes.modal}*/>
      <div /*className={classes.content}*/>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')!;

interface IModal {
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal = (props: IModal) => {
  return (
    <>
      {portalElement ? createPortal(<Backdrop onClose={props.onClose} />, portalElement) : null}
      {portalElement ? createPortal(<ModalOverlay>{props.children} </ModalOverlay>, portalElement) : null}
    </>
  );
};
export default Modal;

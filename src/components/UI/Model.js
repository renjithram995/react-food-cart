import { createPortal } from 'react-dom'
import classes from './Model.module.css'

const BackDrop = backDropProps => {
    return <div className={classes.backdrop} onClick={backDropProps.onClick}></div>
}
const ModalOverlay = overlayProps => {
    return <div className={classes.modal}>
        <div className={classes.content}>{overlayProps.children}</div>
    </div>
}
const Modal = (props) => {
    return <>
        {createPortal(<BackDrop onClick={props.onCancel}/>, document.getElementById('backdrop-root'))}
        {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlay-root'))}
    </>
};

export default Modal;
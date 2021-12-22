import ReactDOM from "react-dom"
const portalRoot = document.getElementById("portal-root")
import CloseIcon from '@mui/icons-material/Close';




function Modal({isOpen, close, children}){
    if(!isOpen) return null;
    
    return ReactDOM.createPortal(
        <div className="modal-background">
            <div className="modal-content">
                <CloseIcon className="close-icon" onClick={close}/>
                {children}
            </div>
        </div>,
        portalRoot
    )
}

export default Modal
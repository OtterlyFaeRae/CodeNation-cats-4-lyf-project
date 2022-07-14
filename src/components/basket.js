import {useEffect} from "react";
import "./styles/basket.style.js";


const Basket = (props) => {

    const escapeKeyClose = (x) => {
        if((x.charCode || x.keyCode) === 27) {
            props.onClose()
        }
    }

    useEffect(() => {
        document.body.addEventListener("keydown", escapeKeyClose) 
            return function cleanup() {
                document.body.removeEventListener("keydown", escapeKeyClose)
            }
        
    }, [])


return(
    <div className={`basket ${props.show ? props.show : ""}`} onClick={props.onClose}>
        <div className="modal-content" onClick={x => x.stopPropagation()}>
            <div className="modal-header">
                <h3>{props.title}</h3>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
                <button onClick={props.onClose}>Close</button>
            </div>
        </div>
    </div>
    )

}

export default Basket
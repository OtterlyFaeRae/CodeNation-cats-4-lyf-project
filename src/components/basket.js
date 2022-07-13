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
}

return(
    <div>
        <div className="modal-content">
            <div className="modal-header">
                <h3></h3>
            </div>
            <div className="modal-body"></div>
            <div className="modal-footer">
                <button onClick={props.onClick}>Close</button>
            </div>
        </div>
    </div>
)

export default Basket
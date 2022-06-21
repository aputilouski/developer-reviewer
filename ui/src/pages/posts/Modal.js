import React from 'react'
import ReactDOM  from 'react-dom'
import './Modal.css'

const Modal = ({children,isOpen}) => {
  return  ReactDOM.createPortal(<div className="overlay" onClick={()=> isOpen(false)}>
                            <div className="modal" onClick={(event) => {event.stopPropagation()}}>
                            <div style={{"display":"flex", "width":"100%", "justifyContent":"flex-end"}}>
                                <i className="fas fa-times" style={{"padding":"10px"}}  onClick={()=>isOpen(false)}></i>
                            </div>
                                {children}
                            </div>
                        </div>, document.getElementById('portal')
  )
}

export default Modal
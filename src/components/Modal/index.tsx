import { useState } from "react";

type Props = {
  onAccept: () => void;
}
export default function Modal({
  onAccept,
}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        data-testid="generic-modal-open-btn"
        onClick={() => setOpen(true)}>Open modal</button>
      <div
        data-testid="generic-modal-wrapper"
      onClick={() => setOpen(false)}
      style={{
        display: open ? "block" : "none"
      }}
        className="modal-wrapper">
        
        <div
        data-testid="generic-modal-content"
        onClick={(e) => e.stopPropagation()}
          className="modal-content">
          <div className="header">

            <h4>header</h4>
          </div>
          <div className="body">
            
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quo error ea autem quisquam dolorum animi suscipit earum asperiores necessitatibus quae, quos aspernatur assumenda modi esse similique nihil neque mollitia.</p>
        </div>
        
          <div className="actions">
            <button data-testid="generic-modal-accept-btn" className="accept-btn" onClick={onAccept}>accept</button>
            <button onClick={() => setOpen(false)}>cancel</button>
          </div>
        </div>
      </div>
    </>
  )
}
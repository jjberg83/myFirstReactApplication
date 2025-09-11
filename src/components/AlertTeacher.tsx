import React, { ReactNode } from 'react';

interface Props {
    onClose: () => void;
    children: ReactNode;
}

const AlertTeacher = ({onClose, children}: Props) => {
  return (
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
          {children}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
          </button>
      </div>
  )
}

export default AlertTeacher;
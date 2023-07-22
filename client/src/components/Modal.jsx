import React, { useEffect, useState } from "react";

const Modal = ({ message }) => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {showModal && (
        <div className="fixed inset-x-0 top-0 flex items-center justify-center h-20 bg-gray-900 text-white text-center text-lg font-bold">
          {message}
        </div>
      )}
    </>
  );
};

export default Modal;

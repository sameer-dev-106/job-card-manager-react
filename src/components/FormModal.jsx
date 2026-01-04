import React from 'react'
import Form from './Form';

const FormModal = ({ onClose, children }) => {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white w-full h-full sm:hidden p-4 relative">
            <button onClick={onClose} className="absolute top-4 right-4 text-2xl">
            ✕
            </button>

            {children}
        </div>
        </div>
    );
};



export default FormModal
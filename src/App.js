import React, { useState } from 'react';
import UserForm from 'modules/form/formFillable';
import UserList from 'modules/form/formList';
import { ToastContainer } from 'react-toastify';  
import { toast } from 'react-toastify'; 

const App = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000); // Reset the state after 3 seconds
    };

    return (
        <div className="App">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <UserForm onSubmit={handleSubmit} />
            <br />
            {isSubmitted? toast.success("Data submitted successfully") : ""}
            <UserList isSubmitted={isSubmitted} />
            </div>
    );
};

export default App;

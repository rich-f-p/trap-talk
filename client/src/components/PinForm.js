import React, { useState } from 'react';
import { showMessages } from '../utils/API';
import Auth from '../utils/auth';

const PinForm = () => {
    const [userFormData, setUserFormData] = useState({ pin: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await showMessages(userFormData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.pin(token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            pin: '',
        });
    };
    return (
        <label for="my-modal-3" class="btn btn-ghost btn-xs modal-button max-w-fit" onClick={() => handleFormSubmit()}>Sent yesterday</label>
    );
}

export default PinForm;
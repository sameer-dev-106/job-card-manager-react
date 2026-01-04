import React, { useEffect, useState } from 'react'

const Form = ({ onAddCard, editData, onUpdateCard }) => {

const submitHandler = (e) => {
    e.preventDefault();

    // 1️⃣ Validation sabse pehle
    if (!formData.userName || !formData.role) {
        alert("Please fill all required fields");
        return;
    }

    // 2️⃣ Edit vs Create
    if (editData) {
        onUpdateCard(formData);
    } else {
        onAddCard(formData);
    }

    // 3️⃣ Reset form
    setFormData({
        imageUrl: "",
        userName: "",
        role: "",
        desc: "",
        timeType: "",
    });
};



    const [formData, setFormData] = useState({
        imageUrl: "",
        userName: "",
        role: "",
        desc: "",
        timeType: "",
    });

    useEffect(() => {
        if (editData) {
            setFormData(editData);
        } else {
            setFormData({
            imageUrl: "",
            userName: "",
            role: "",
            desc: "",
            timeType: "",
            });
        }
    }, [editData]);


    return (
        <div className="
        flex 
        flex-col 
        items-center
        justify-center
        bg-white
        shadow-lg
        rounded-2xl
        md:py-7
        ">
            <h2 className='
            text-2xl
            font-semibold
            '>🪪 Job Card</h2>
            <form 
            onSubmit={submitHandler}
            className='
            w-full
            max-w-md
            px-6
            flex
            flex-col
            gap-3
            sm:max-w-lg
            '>
                <label className='
                text-base
                font-medium
                mt-2
                '>Image URL </label>
                <input type="url" placeholder="https://example.com/photo.jpg" 
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className='
                w-full
                p-2
                border-2
                rounded-lg

                ' />

                <label className='
                text-base
                font-medium
                mt-2
                '>Full Name</label>
                <input type="text" placeholder="Enter name" 
                value={formData.userName}
                onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                className='
                w-full
                p-2
                border-2
                rounded-lg

                ' />

                <label className='
                text-base
                font-medium
                mt-2
                '>Job Role</label>
                <input type="text" placeholder='Enter job role' 
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className='
                w-full
                p-2
                border-2
                rounded-lg
                ' />

                <label className='
                text-base
                font-medium
                mt-2
                '>Description</label>
                <input type='text' placeholder='Enter your description'
                value={formData.desc}
                onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                className="w-full p-2 border-2 rounded-lg"
                />

                <label className='
                text-lg
                font-medium
                mt-2'
                >Time Zone</label>
                <label className='
                text-base
                font-medium
                '>
                    <input
                    
                        type="radio"
                        name="timezone"
                        value="full-time"
                        checked={formData.timeType === 'full-time'}
                        onChange={(e) => setFormData({ ...formData, timeType: e.target.value })}
                    />
                    <span> Full Time</span>

                    
                </label>
                
                <label className='
                text-base
                font-medium
                '>
                    <input
                    
                        type="radio"
                        name="timezone"
                        value="part-time"
                        checked={formData.timeType === 'part-time'}
                        onChange={(e) => setFormData({ ...formData, timeType: e.target.value })}
                    />
                    <span> Part Time</span>
                </label>

                <button 
                disabled={!formData.userName}
                className='
                disabled:opacity-50
                disabled:cursor-not-allowed
                text-xl
                font-semibold
                bg-red-700
                text-white
                rounded-2xl
                p-2
                mt-1
                hover:bg-red-400
                active:scale-95
                '>
                    {editData ? "Update Card" : "Create Card"}
                </button>
            </form>
        </div>
    );
}

export default Form
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminHeader from '../common-pages/AdminHeader';
import Footer from '../common-pages/Footer';

function AdminInfoData() {
    //Obtain konference id
    const { kon_id } = useParams();
    const [inputText, setInputText] = useState('');
    const [title, setTitle] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = () => {
        const data = { title, inputText, kon_id };

        fetch('http://localhost:5000/info/saveData ', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    console.log('Data saved successfully');
                } else {
                    console.error('Error: Data not saved successfully');
                }
            })
            .catch((error) => {
                console.error('Error', error);
            });
    };
    return (
        <div>
            <AdminHeader />
            <div className="box">
                <div className="w3-container w3-content w3-center">
                    <label htmlFor="name">Indtast titel på information</label>
                    <br></br>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    ></input>
                    <br></br>
                    <br></br>
                    <label htmlFor="caption">
                        Indtast beskrivelse på information
                    </label>
                    <br></br>
                    <input
                        type="text"
                        id="caption"
                        name="caption"
                        value={inputText}
                        onChange={handleInputChange}
                        required
                    ></input>
                    <button className="w3-button" onClick={handleSubmit}>
                        Gem
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminInfoData;

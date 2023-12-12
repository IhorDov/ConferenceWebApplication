import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../common-pages/Footer';
import AdminHeader from '../common-pages/AdminHeader';
import DynamicTable from '../common-pages/DynamicTable';
import TeacherInfoPage from '../common-pages/TeachersInfoPage';
import Button from '../UI/Button';
import styles from './AdminDeltagere.module.css';

function AdminDeltagereData() {
    const [isLoading, setIsLoading] = useState(true);

    //adding text, when file is loading
    const [error, setError] = useState(null);

    //Value for fileupload
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        emails: [],
        names: [],
    });

    //Obtain konference id
    const { kon_id } = useParams();
    // console.log('kon_id from Admin deltager', kon_id);

    const [perData, setPerData] = useState([]);

    useEffect(() => {
        if (kon_id !== null) {
            fetch(`http://localhost:5000/par/${kon_id}`, {
                method: 'GET',
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    // console.log('Jsondata: ', [data]);
                    // console.log('pre-update perData: ', perData);
                    setPerData(data);
                    setIsLoading(false);

                    console.log('perdata: ', perData);
                })
                .catch((error) => {
                    console.log('Test Error:', error.message);
                    setError(error);
                })
                .finally(() => setIsLoading(false));
        }
    }, [kon_id]);

    //Updating the selected file
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleFileUpload = async (e) => {
        //Exit if we don't have a file to upload
        if (selectedFile == null) {
            return;
        }

        //Initiate a new filereader
        const reader = new FileReader();

        //What happens when the reader loads.
        reader.onload = async (e) => {
            //Form data carries the file through the POST request.
            const formData = new FormData();
            formData.append('uploadedFile', selectedFile);
            //formData.append('konID',kon_id);
            formData.append('konID', kon_id);

            //POST request
            try {
                console.log('Fetch started');
                const response = await fetch(
                    'http://localhost:5000/uploadExcel/post',
                    {
                        method: 'POST',
                        body: formData,
                    }
                );
                if (!response.ok) {
                    console.log('Response not ok');
                    throw new Error('Upload Failed');
                }
                console.log('Made fetch request');
                const result = await response.json();
                setPerData(result.data);
                setIsLoading(false);
                console.log(perData);
            } catch (error) {
                console.error('Error', error);
            }
        };
        console.log(selectedFile);

        //Reader loads once it is used, calling the 'onload' method.
        reader.readAsBinaryString(selectedFile);
    };

    const handleInvite = async (event) => {
        setValues((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));

        try {
            await axios.post(
                `http://localhost:5000/users/register/${kon_id}`,
                values
            );

            navigate('/admins/forsiden');
        } catch (error) {
            console.log(error);
        }
    };

    let file_was_choosen = (
        <>
            <div className="container card card-body">
                <Button onClick={handleFileUpload} title="Upload Excel fil">
                    Upload
                </Button>
            </div>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <Button
                            onClick={handleInvite}
                            title="Invitige deltage til konference"
                        >
                            Inviter Deltager
                        </Button>
                    </div>
                    <div style={{ marginTop: '20px' }} className="card-header">
                        <h2 className={styles.headerChoosenData}>
                            Choosed data from Excel table
                        </h2>
                    </div>
                </div>
                <div id="excel_data" className="mt-5"></div>
            </div>
            <div>
                {isLoading ? <div></div> : <DynamicTable data={perData} />}
            </div>
        </>
    );

    let file_was_upload = <></>;

    if (!selectedFile)
        file_was_choosen = (
            <>
                <TeacherInfoPage />
            </>
        );

    return (
        <div>
            <AdminHeader />
            <div className="container">
                <div>
                    <div className="card-header">
                        <h3>Vælg Excel Fil</h3>
                    </div>
                    <div className={styles.todoFormContainer}>
                        <form>
                            <input
                                type="file"
                                accept=".xlsx, .xls"
                                id="excel_doc"
                                onChange={handleFileChange}
                            />
                        </form>
                    </div>
                </div>
                <div id="excel_data" className="mt-5"></div>
            </div>
            {file_was_choosen}
            {file_was_upload}
            <Footer />
        </div>
    );
}

export default AdminDeltagereData;

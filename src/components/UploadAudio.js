import React, { useState, useEffect, useRef, useContext } from 'react';
import { FileContext } from '../contexts/fileContext';
import './UploadAudio.css'; // Import the CSS file

const UploadAudio = ({ history }) => {
    const inputFile = useRef(null);
    const { fileURL, setFileURL } = useContext(FileContext);
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (file) {
            setFileURL(file);
            history.push('/edit');
        }
    }, [file, setFileURL, history]);

    const handleButtonClick = () => {
        inputFile.current.click();
    };

    const handleFileUpload = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="upload-audio-container">
            <div className="upload-audio">
                <i className="material-icons audio-icon">
                    library_music
                </i>
                <h1>Audio Cutter</h1>
                <button 
                    className="upload-btn" 
                    onClick={handleButtonClick}
                >
                    Upload Audio
                </button>
                <input
                    type="file"
                    id="file"
                    ref={inputFile}
                    style={{ display: 'none' }}
                    accept="audio/*"
                    onChange={handleFileUpload}
                />
            </div>
        </div>
    );
};

export default UploadAudio;

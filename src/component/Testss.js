import CryptoJS from 'crypto-js';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const secretKey = 'mySecretKey123'; // Harap simpan kunci ini dengan aman di lingkungan produksi

function encryptFile(file) {
  const fileReader = new FileReader();

  return new Promise((resolve, reject) => {
    fileReader.onload = (event) => {
      const fileData = event.target.result;
      const encryptedData = CryptoJS.AES.encrypt(fileData, secretKey);
      resolve(encryptedData.toString());
    };

    fileReader.onerror = (error) => {
      reject(error);
    };

    fileReader.readAsDataURL(file);
  });
}

function decryptFile(encryptedData) {
  const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return decryptedData.toString(CryptoJS.enc.Utf8);
}



// ... Fungsi enkripsi dan dekripsi di atas ...

const StyledUploadButton = styled(Button)(({ theme, isSelected }) => ({
  backgroundColor: isSelected ? 'red' : 'rgba(8, 31, 114, 1)',
  border: `1px solid ${theme.palette.common.white}`,
  boxSizing: 'border-box',
  borderRadius: theme.shape.borderRadius,
  width: '211px',
  height: '57px',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const UploadInput = styled('input')({
  display: 'none',
});

function FileUploadComponent() {
  const [isSelected, setIsSelected] = useState(false);

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      try {
        const encryptedData = await encryptFile(selectedFile);
        // Kirim encryptedData ke server di sini
        setIsSelected(true);
      } catch (error) {
        console.error('Gagal mengenkripsi file:', error);
      }
    }
  };

  return (
    <div>
      <StyledUploadButton isSelected={isSelected} component="label" variant="contained">
        {isSelected ? 'File Dipilih' : 'Upload'}
        <UploadInput type="file" onChange={handleFileChange} />
      </StyledUploadButton>
    </div>
  );
}

export default FileUploadComponent;

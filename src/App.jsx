import { Image } from 'cloudinary-react';

import { useState } from 'react';

export default function App() {
  const [uploadedImg, setUploadedImg] = useState('');
  const [publicId, setPublicId] = useState('');

  const url = 'https://api.cloudinary.com/v1_1/dwwab45mm/image/upload'
  
  const uploadImg = () => {
    const formData  = new  FormData()
    formData.append('file', uploadedImg)
    formData.append('upload_preset', 'f7aubu9z')
    
    fetch(url, {
      method: "POST",
      body: formData
    })
    .then((response) => {
      return response.json()
    })
    .then((finalRes) => {
      setPublicId(finalRes.public_id)
    })
  }

  return (
    <>
    <div>
      <h1>Hello World</h1>
      <input 
        type="file"
        onChange={(e) => {
          setUploadedImg(e.target.files[0])
          console.log('files', e.target.files[0])
        }}
        />
        <button
          onClick={uploadImg}>Upload Image</button>
      <Image 
      style={{ width: 200 }}
      cloudName="dwwab45mm" 
      publicId={publicId}
      />
      
    </div>
    </>
    
  )
}

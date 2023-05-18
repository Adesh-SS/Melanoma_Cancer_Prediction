import React, { useState,useRef} from 'react';
import Modal from 'react-modal';
import './model.css';
import axios from 'axios';
import Dropzone from 'react-dropzone';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    borderRadius: '5px',
    padding: '20px',
    minWidth: '40em',
    height: '25em'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
};

const App = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [file1, setFile1] = useState('');
  const myDiv = useRef(null);

  const [statement, setStatement] = useState("");

  const statements = [
    {
      text: 'No Diabetic Retinopathy',
      description: 'No signs or symptoms of retinopathy. Yet have Regular Eye Exams can help detect diabetic retinopathy early, allowing for prompt treatment and better outcomes'
    },
    {
      text: 'Mild ',
      description: 'Condition that can occur in people with diabetes, where there are only slight changes in the blood vessels of the retina.It is important to note that even mild diabetic retinopathy should not be ignored, as it can progress to a more severe stage if left untreated.'

    },
    {
      text:'Moderate',
      description:'Moderate diabetic retinopathy is a stage of the condition where there are more noticeable changes in the blood vessels of the retina. At this stage, there may be some blockages or leaks in the blood vessels, which can lead to swelling or fluid buildup in the retina.Treatment for moderate diabetic retinopathy may involve laser therapy or injections of medication into the eye to help reduce swelling and prevent further damage.'    
    },
    {
      text: 'Non Cancerous',
      description:   'Severe diabetic retinopathy is a stage of the condition where there is significant damage to the blood vessels of the retina. At this stage, there may be widespread blockages or leaks in the blood vessels, which can lead to the growth of abnormal blood vessels that can cause further damage to the retina.Treatment for severe diabetic retinopathy may involve laser therapy, injections of medication into the eye, or even surgery to remove scar tissue or blood vessels from the retina.'
    },
    {
      text: 'Cancerous',
      description:   'Proliferative diabetic retinopathy is an advanced stage of the condition where there is significant damage to the blood vessels of the retina, leading to the growth of abnormal blood vessels. These abnormal blood vessels can be fragile and prone to leaking or bleeding, causing further damage to the retina and potentially leading to vision loss or blindness.Treatment for proliferative diabetic retinopathy may involve laser therapy, injections of medication into the eye, or surgery to remove scar tissue or abnormal blood vessels from the retina.'    
    },
  ];


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleClear = () => {
    setName('');
    setEmail('');
    setNumber('');
    setFile1(null);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleNumber = (event) => {
    setNumber(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleFileDrop = (files) => {
    setFile1(files[0]);
  }

  const handleSubmit = async (event) => {
   event.preventDefault();

   const formData = new FormData();
   formData.append('name', name);
   formData.append('number', number);
   formData.append('email', email);
   formData.append('pic', file1);

   try{
    await axios.post('http://127.0.0.1:5000/api/upload', formData, {
      headers:{
        'Content-Type': 'multipart/form-data',
      },
    }).then((response) => {
      console.log(response.data) 
      setStatement(response.data.prediction);
    });
   }catch (error){
    console.error(error);
   }
  };

const selectedStatement = statements.find((s) => s.text === statement);

const [name, setName] = useState('');


  return (
    <div>
      <button class="learn-more" onClick={openModal}>
        <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
        </span>
        <span class="button-text">Upload</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form>
       <div className='details'>
        <div className='name-mob'>
          <div className='inputGroup'>
            
            <input type="text" value={name} onChange={handleName} />
              <label for="name">Name</label>
            
          </div>
          <div className='inputGroup'>
            
            <input type="number" value={number} onChange={handleNumber} />
              <label for="mobile">Mobile</label>
            
          </div>
        </div>
        <div className='email'>
          <div className='emailGroup'>
            
            <input type="email" value={email} onChange={handleEmail} />
              <label for="email">Email</label>
            
          </div>
        </div>
        <div className='fileupload'>
        <div className='inputsection'>
              <h4>Retina Scan Image (Left or Right Eye) :</h4>
              <Dropzone onDrop={handleFileDrop}>
                {
                  ({getRootProps, getInputProps}) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()}></input>
                      {file1 ? (<img src={URL.createObjectURL(file1)} height={145} width={145} alt='Retina'/>):(<a className='upload-button'>Drag n Drop, or Click to select</a  >)}
                    </div>
                  )
                }
              </Dropzone>
            </div>
        </div>
       </div>
       <div className='buttons'>
       <button className='predict-button' onClick={handleSubmit}>Predict</button>
        <button class="tooltip" onClick={handleClear}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
            <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
          </svg>
          <span class="tooltiptext">remove</span>
        </button>
        <button onClick={closeModal} className='close'>
          <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
          <span>Close</span>
        </button>
        </div>
        </form>
        <div className='contentcontainer' ref={myDiv}>
          <div className='detailcontainer'>
            <div className='innerdetailcontainer'>
              <h4>Name :</h4>
              <p>{name}</p>
            </div>
            <div className='innerdetailcontainer'>
              <h4>Email :</h4>
              <p>{email}</p>
            </div>
            <div className='innerdetailcontainer'>
              <h4>Mobile :</h4>
              <p>{number}</p>
            </div>
            <div className='innerdetailcontainer'>
              <h4>Stage :</h4>
              <p>{statement && (
                <div>
                  <div>{selectedStatement.text}</div>
                </div>
              )}</p>
            </div>
          </div>
          <div className='imagecontiner'>
          </div>
        </div>
        <div className='discription'>
            <strong>Description : </strong>
            <p>{statement && (
                <div>
                  <div>{selectedStatement.description}</div>
                </div>
              )}</p>
        </div>      
      </Modal>
    </div>
  );
};

export default App;

import React, {useCallback, useState} from 'react';
import axios from 'axios';
import {useDropzone} from 'react-dropzone'; // npm i react-dropzone
import {ThirdwebStorage} from '@thirdweb-dev/storage'; //npm install @thirdweb-dev/storage
import {useNavigate} from 'react-router-dom';
import Modal from '../../components/Modal';
import Styled from './Mint.styled';

const Dropzone = ({onDrop, image}) => {
  const onDropCallback = useCallback(
    acceptedFiles => {
      onDrop(acceptedFiles);
    },
    [onDrop],
  );

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop: onDropCallback,
    accept: 'image/*',
  });

  return (
    <Styled.Wrapper {...getRootProps()} isDragActive={isDragActive}>
      <input {...getInputProps()} />
      {image ? (
        <Styled.ImagePreview src={URL.createObjectURL(image)} alt="Preview" />
      ) : (
        <p>Drop your image here</p>
      )}
    </Styled.Wrapper>
  );
};

const Form = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({name, description});
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Styled.Label htmlFor="name">Name</Styled.Label>
      <Styled.Input type="text" id="name" value={name} onChange={handleNameChange} required />

      <Styled.Label htmlFor="description">Description</Styled.Label>
      <Styled.Textarea
        id="description"
        value={description}
        onChange={handleDescriptionChange}
        required
      />

      <button type="submit">Mint NFT</button>
    </form>
  );
};

const MintPage = () => {
  const [imageFile, setImageFile] = useState(null);
  const storage = new ThirdwebStorage();
  const navigate = useNavigate();

  async function uploadFile(file) {
    if (Array.isArray(file)) {
      return file.map(uploadFile);
    } else {
      const uri = await storage.upload(file);
      console.log('storage resolve', storage.resolveScheme(uri));
      return storage.resolveScheme(uri);
    }
  }

  const handleDrop = useCallback(acceptedFiles => {
    setImageFile(acceptedFiles[0]);
  }, []);

  const onSubmit = async data => {
    const {name, description} = data;
    const tokenurl = await uploadFile(imageFile);

    console.log('data', data);
    try {
      const response = await axios
        .post(
          'http://localhost:5500/nft/minting',
          {name, description, tokenurl},
          {
            withCredentials: true,
          },
        )
        .then(res => {
          // setModalVisible(true);
          // setModalData();
        });
      console.log('resoponse.data', response.data);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  // 모달 창
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState('');

  return (
    <Styled.Wrapper>
      <Dropzone onDrop={handleDrop} image={imageFile} />
      <Form onSubmit={onSubmit} />
      {modalVisible && <Modal modalData={modalData} setModalVisible={setModalVisible} />}
    </Styled.Wrapper>
  );
};

export default MintPage;

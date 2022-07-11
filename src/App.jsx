import { storage } from './firebase';
import { ref, getDownloadURL, uploadBytes, listAll, updateMetadata } from 'firebase/storage';
import { useState, useRef, useEffect } from 'react';
import { v4 } from 'uuid';
import Meme from './Components/Meme/Meme';
import { Button } from './Components/Button';
import { Form } from './Components/Form';
import { Main } from './Components/Main';
import { Header } from './Components/Header';

function App() {
    const [show, setShow] = useState(false);
    const [images, setImages] = useState(null);
    const [listOfFiles, setListOfFiles] = useState([]);
    const storageRef = ref(storage, 'images/');

    const handleSubmit = e => {
        e.preventDefault();
        if (images === null) return;
        const imageRef = ref(storage, `images/${images.name}`);
        uploadBytes(imageRef, images).then(snapshot => {
            getDownloadURL(snapshot.ref).then(url => {
                setListOfFiles(prev => [...prev, url]);
            });
        });
        setShow(false);
    };

    useEffect(() => {
        listAll(storageRef).then(res => {
            res.items.forEach(item => {
                getDownloadURL(item).then(url => {
                    setListOfFiles(prev => [...prev, url]);
                });
            });
        });
    }, []);

    const handleClick = () => {
        setShow(true);
    };

    return (
        <>
            <Header>
                <h1>Bem vindo ao armazém de memes!</h1>
                <Button onClick={handleClick}>Adicionar Meme</Button>
            </Header>

            {show ? (
                <Form onSubmit={handleSubmit}>
                    <h1>Envie seu meme</h1>
                    <div onClick={() => setShow(false)} className="close">
                        X
                    </div>
                    <input
                        accept="image/*"
                        onChange={e => {
                            setImages(e.target.files[0]);
                        }}
                        type="file"
                        placeholder="Insira seu meme"
                    />
                    <Button type="submit">Enviar</Button>
                </Form>
            ) : null}

            <Main>
                {listOfFiles.map(url => {
                    return <Meme key={v4()} src={url} />;
                })}
            </Main>
        </>
    );
}

export default App;

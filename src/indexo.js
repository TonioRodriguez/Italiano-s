import React, {useState, useEffect} from 'react';
import {onSnapshot, collection, addDoc, deleteDoc, doc} from 'firebase/firestore';
import {db} from '../firebase.js';
import ResponsiveAppBar from './Nav'

const Reservacion = () => {
  const [clientes, setClientes] = useState([])
  const [form, setForm] = useState({})

   const getData = () => {
    const clientesArr = [];

    onSnapshot(collection(db, 'clientes'), (snapshot) =>{
      snapshot.docs.forEach((doc) => {
        clientesArr.push({
          ...doc.data(),
          id: doc.id
        })
        setClientes(clientesArr)
        console.log(doc.data())
      })
    })
  }

  const handleChange = (ev) => {
    setForm({
      ...form,
      [ev.name]: ev.value
    })
  }

const handleClick = async () => {
  await addDoc(collection(db, 'clientes'), form)
  setForm({})
  getData()
}

const deleteElement = async (id) => {
  await deleteDoc(doc(db, 'clientes', id))
  getData()
}
  useEffect( () =>{
    getData()
  }, [])

  return (
    
    <div className="App">
      <header className='App-header'>
        <ResponsiveAppBar />
        <h1>
          Firebase app
        </h1>
        <div>
          <input type='text' name='nombre' placeholder='Nombre' onChange= {(e) => handleChange(e.target)}/>
          <input type='text' name='mesa' placeholder='Mesa' onChange = {(e) => handleChange(e.target)}/>
          <input type='date' name='fecha' placeholder='Fecha' onChange = {(e) => handleChange(e.target)}/>
          <button onClick={() => handleClick()}>Guardar</button>
        </div>
        <div>
          {
            clientes.map(cliente => {
              return (
                <>
                  <h3>{cliente.nombre}</h3>
                  <p>{cliente.fecha} : {cliente.mesa}</p>
                  <button onClick={() => deleteElement(cliente.id)}>Eliminar</button>
                </>
              )
            })
          }
        </div>
      </header>
    </div>
  );
}

export default Reservacion
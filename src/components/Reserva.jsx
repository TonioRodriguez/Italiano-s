import React, {useState, useEffect} from 'react'
import {onSnapshot, collection, doc, deleteDoc, addDoc} from 'firebase/firestore'
import {db} from '../firebase.js'
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from './Nav';
import home1 from "../assets/images/home1.jpg";


const Reserva = () => {
    const [clientes, setClientes] = useState([])
    const [form, setForm] = useState({})
    
    const getData =() => {

        const clientesArr = [];

        onSnapshot(collection(db, 'clientes'), (snapshot) => {
            snapshot.docs.forEach((doc) => {
                clientesArr.push(
                    {...doc.data(),
                    id: doc.id}
                )
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
    <div>
        <div>
            <ResponsiveAppBar />

            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center" >
                <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                item xs={12}>
                {<img src={home1} alt="Italiano's"/>}
                </Grid>
            </Grid>
            <br />
            <br />
            <h1>Reservación</h1>
            <div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Nombre</span>
                    <input type="text" name='nombre' className="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1" onChange= {(e) => handleChange(e.target)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Mesa</span>
                    <input type="text" name='mesa' className="form-control" placeholder="Mesa" aria-label="Mesa" aria-describedby="basic-addon1"  onChange= {(e) => handleChange(e.target)}/>
                </div>
                <button className="btn btn-info" onClick={() => handleClick()}>Guardar</button>
            </div>
            <div>
            {
                    clientes.map(cliente =>{
                        return(
                            <div>
                                <h3>{cliente.nombre}</h3>
                                <p>Mesa: {cliente.mesa}</p>
                                <button className="btn btn-success" onClick={() => deleteElement(cliente.id)}>Eliminar</button>
                            </div>
                                
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Reserva
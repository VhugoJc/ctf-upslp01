import React,{useState} from 'react';
import { Button, Card, Input,notification} from 'antd';
import {Redirect} from 'react-router-dom';
import UseAuth from '../hooks/useAuth';

import {signUpApi} from '../Api/signUpApi';

import 'antd/dist/antd.css';
const SignUp = () => {
    const {setId,id} = UseAuth();
    const [matricula, setMatricula] = useState("");
    const [password, setPassword] = useState("");
    const onChangeId = (e)=>{
        if(e.length===0){
            setMatricula(e);
        }
        if(Number.isInteger(parseInt(e.slice(-1)))&&e.length<=6){
            setMatricula(e);
        }
        if(e.length===1 && parseInt(e)===0){
            setMatricula("");
        }
    }
    const onSubmit = () =>{
        if(matricula.length<6){//matricula vacía
            return notification["error"] ({
                message: "La matrícula debe ser de 6 dígitos"
            });
        }
        if(password.length<8){
            return notification["error"] ({
                message: "La Contraseña es muy corta"
            });
        }
       
        const addNewStudent = async () =>{
           const response = await signUpApi(matricula,password);
           notification["success"]({
               message: response.message
           })
           setId(matricula);
        }
        addNewStudent();
        
    }
    return (  
        <>
            {id===""
                ?(
                    <Card className="App-card_sign-up">
                        
                            <h1 className="App-header">Ingresa tus Datos</h1>
                            <Input placeholder="Matrícula" className="App-input_sign-up" onChange={e=>onChangeId(e.target.value)} value={matricula}/>
                            <Input placeholder="Contraseña" type="password" className="App-input_sign-up" onChange={e=>setPassword(e.target.value)} value={password} onSubmit={onSubmit}/>
                            <Button type="primary" onClick={onSubmit}>
                                Registrarme
                            </Button>
                    </Card>
                ) 
                :<Redirect to='/home'/>    
        }  
        </>
    );
}
 
export default SignUp;
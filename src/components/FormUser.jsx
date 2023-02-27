import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const FormUser = ({ createUserData, userSelectedData, updateUser }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    
    const getFormData = data => {
        
        console.log(data);
        if(userSelectedData){
            //actualizar
            updateUser(data)
            
        }else{              
            createUserData(data)

            resetForm()
        }
    }

    useEffect ( () => {
        if(userSelectedData !== null){
            reset(userSelectedData)
            console.log("se selecciono un usaurio")
        } else {
            resetForm()
        }
    }, [userSelectedData])

    const resetForm = () => {
        reset(
            {
                first_name: "",
                last_name: "",    
                email: "",
                password: "",
                birthday: ""                
            }
        )
    }

  

    return(
        <div>
            <form onSubmit={ handleSubmit(getFormData) }>
                <div className="input-wrapper">
                    <label htmlFor="user-name">Nombre</label>
                    <input 
                    type="text" 
                    id="user-name"
                    { ...register("first_name", {
                        required : true
                    }) }
                    />
                    {  errors.name?.type === "required" && <span role="alert">Este input es requerido</span> }
                </div>
                <div className="input-wrapper">
                    <label htmlFor="user-lastname">Apellido</label>
                    <input 
                    type="text" 
                    id="user-name"
                    { ...register("last_name", {
                        required : true
                    }) }
                    />
                    {  errors.name?.type === "required" && <span role="alert">Este input es requerido</span> }
                </div>
                <div className="input-wrapper">
                    <label htmlFor="user-email">Email</label>
                    <input 
                    type="email" 
                    id="user-email"
                    { ...register("email") }
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="user-password">Contraseña</label>
                    <input 
                    type="password" 
                    id="user-password"
                    { ...register("password") }
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="user-birthday">Fecha de Nacimiento</label>
                    <input 
                    type="date" 
                    id="user-birthday"
                    { ...register("birthday") }
                    />
                </div>                 
                
                <button type="submit">Enviar</button>
            </form>
        </div>
    )

}

export default FormUser
import React, {useState, useEffect} from 'react'
import '../assets/Login.css'
import {useNavigate} from 'react-router-dom'

export default function Login(props) {

    const [wantLogin, setWantLogin] = useState(true)
    const navigate = useNavigate()
    const [cPass, setCPass] = useState(false)
    const [username, setUsername] = useState("")


    useEffect(()=>{
        props.context.user.isLoggedIn? navigate("/home"):""
    },[props.context.user])

    function handleLogin(formData){
        const username = formData.get("username")
        const password = formData.get("password")

        props.context.users.map((element, key)=>{
            if(element.username == username && element.password == password){
                props.context.setUser((pre)=>{

                    return {
                        ...element,
                        isLoggedIn: true,
                        ID : element.ID
                        
                    }
                })
            }
        })

        if(props.context.users.some((element, key)=>{return element.username == username && element.password == password})){

        }else{
            alert("user not found")
        }
        
    }

    function handleRegister(formData){
        const username = formData.get("username")
        const password = formData.get("password")
        const confirmPassword = formData.get("confirmPassword")


        if(password == confirmPassword){
            
            const newID = Math.floor(Math.random()*1000)
            props.context.setUsers((pre)=>{
                return [...pre, {
                    ID: newID,
                    username: username,
                    password: password
                    }
                ]
            })

            props.context.setUser({
                isLoggedIn: true,
                ID: newID,
                username: username,
                password: password
            })

        }else{
            setCPass(true)
        }

        
    }

  return (
    <>
        {wantLogin && <div className="login-container form-container">
            <form action={handleLogin} className="login-form form">
                <h2>Login • TaskFlow</h2>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Username" id='username' name='username' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id='password' name='password' />
                </div>
                <button type="submit" >Login</button>
                <p onClick={()=>{
                    setWantLogin(false)
                }}>Register / singUp</p>
            </form>
        </div>}

        {!wantLogin && <div className="login-container form-container">
            <form action={handleRegister} className="login-form form">
                <h2>Register • TaskFlow</h2>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Username" value={username} 
                        onChange={(e)=>{
                            setUsername(e.target.value.replaceAll(" ","_"))
                        }}
                    id='username' name='username' />
                </div>
                {props.context.users.some((e,i)=>{
                    return e.username == username
                }) && <center style={{color: "red"}}>use Different Username</center >}
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id='password' name='password' />
                </div>
                <div>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" placeholder="confirm Password" id='confirmPassword' name='confirmPassword' />
                </div>
                {cPass && <center style={{color: "red"}}>Password does not match</center >}
                <button type="submit">Register</button>
                <p onClick={()=>{
                    setWantLogin(true)
                }}>Login / singIn</p>
            </form>
        </div>}

    </>
  )
}

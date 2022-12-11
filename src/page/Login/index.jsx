import React from 'react'
import './style.css'

const LoginPage = () => {
  return (
    <div className='login'>
        <form>
            <h1 className='login-title'>Giriş</h1>
            <input className='login-input' type="text" placeholder='istifadəçi adı'/>
            <br />
            <input className='login-input' type="text" placeholder='şifrə'/>
            <br />
            <button className='login-button'>Daxil ol</button>
        </form>
    </div>
  )
}

export default LoginPage
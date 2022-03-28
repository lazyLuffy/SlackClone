import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from './firebase';

function Login() {
    const signIn = (e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>alert(error.message))

    }
  return (
    <LoginContainer>
       <LoginInnerContainer>
            <img src="https://play-lh.googleusercontent.com/VfpdFf3jaMj51B84gO8yiOtlp9ezTU0ByQ9UK6SIEvAiv5NDOgy7DYRzgbpCnETnX6s=w412-h220-rw" alt="" />
            <h1>Welcome In Anime World</h1>
            <p>Jatin.Anime.Com</p>
       <Button type="submit" onClick={signIn}>
           Sign with Google
       </Button>
       </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
    background-color:#f8f8f8 ;
    height:100vh ;
    display:grid ;
    place-items:center ;
`
const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align:center ;
    background-color: white;
    border-radius:10px ;
    box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24) ;
    >img{
        object-fit:contain ;
        height:100px ;
        margin-bottom:40px ;
    }
    >Button{
        margin-top:50px;
        width:100%;
        text-transform: inherit !important ;
        background-color: #0a8d48 !important ;
        color:white;
    }
`
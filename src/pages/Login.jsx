import Header from "../componenets/Header"
import Login from "../componenets/Login"
import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <>
        <Link className='sky-900' to={'/'} ><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></Link>

        <Header 
        header="Game-time"
        heading="Login to your account"
        paragraph="Don't have an account yet?"
        linkName="Signup"
        linkUrl="/signup"
        />
        <Login />
      
        </>
    )
}


export default LoginPage
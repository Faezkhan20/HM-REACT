import { useContext, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authcontext';
import api from '../Helpers/AxiosConfig';
import toast from 'react-hot-toast';

const Login = () => {

    const [data, setData] = useState({ email: '', password: '' });
    const { Login } = useContext(AuthContext)
  
    const router = useNavigate();
    console.log(data, 'data')
  
    function handleChange(event) {
      setData({ ...data, [event.target.name]: event.target.value })
    }
  
    async function HandleSubmit(event) {
      event.preventDefault();
      if (data.email && data.password) {
  
        try {
          // console.log("hii")
          const response = await api.post('auth/login', { data })
          if (response.data.success) {
            localStorage.setItem('My-token', JSON.stringify(response.data.token))
            Login(response.data.user)
            console.log(response.data.token, "token")
            toast.success(response.data.message);
            setData({ email: '', password: '' })
            router("/");
          } else {
            throw new Error("Something went wrong");
          }
        } catch (error) {
          toast.error(error?.response.data.message);
          console.log(error, "error hai")
        }
  
      }
      else {
        toast.error("All fields are mandatory!")
      }
    }



    return (
        <div id='screen'>
            <div id='body' >
                <div id='semi-body' >
                    <form onSubmit={HandleSubmit}>
                    <div className='top'>
                        <h1>Sign in</h1>
                        <i class="fa-solid fa-xmark fa-2xl"></i>
                    </div>
                    <p className='top-p' >Become a member — don’t miss out on deals, offers,
                        discounts and bonus vouchers.
                    </p>
                    <div id='fieldset'>
                        <label>Email <span>*</span></label> <br />
                        <input type='text'  name='email' onChange={handleChange}/><br /><br />
                        <label>Password <span>*</span></label> <br />
                        <input type='password' placeholder='SHOW' name='password' onChange={handleChange} /><br />
                        <div id='forgotPass'>
                            <div>
                                <input className='checkbox' type='checkbox' />
                                <p>Remember me</p>
                            </div>
                            <p><u>Forgot password?</u></p>
                        </div>
                    </div>

                    <input type='submit' value="Sign-in" className='sign-in' ></input><br/>
                    <button className='sign-up' onClick={() => router("/signup")} >Become a member</button>
                    <p className='last'><u>Membership info</u></p>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Login

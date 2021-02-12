import React from "react"
import './login.css'
import {withRouter} from 'react-router-dom'
import toastr from 'toastr';
import './toastr.css'
 

class Login extends React.Component{
    constructor(props)
    {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
       // this.generateOTP = this.generateOTP.bind(this);
        this.otpGenerator = this.otpGenerator.bind(this);
        this.state={
            mobile: '',
            otp:'',
            otpRandom : ''
            }
    }
    // var otpRandom = () => { 
    //     let OTP;
    //     OTP = Math.floor(Math.random() * 10000)
        
    //     return OTP; 
    // } 
    
    otpGenerator(event)
    {
        event.preventDefault();
        let OTP = Math.floor(Math.random() * 10000);
        console.log(OTP)
        toastr.success(OTP);
        this.setState({ ...this.state, otpRandom: OTP });
    }
    handleMobile(e)
	{
		this.setState({mobile : e.target.value})
    }
    handleOtp(e)
	{
		this.setState({otp : e.target.value})
	}

    onSubmit(event)
    {
        event.preventDefault();
        if(this.state.otp != this.state.otpRandom)
        {
            toastr.error('Invalid Otp')
        }
        else
        {
            toastr.success('successfully Login')
            localStorage.setItem('rememberMe', true);
            this.props.history.push('/home');
        }
        //console.log(this.state);
    }
    render()
    {
        
        return(
            <div id="login-container">
                <div id="login-form" className="margin-auto">
                <h1>Login Form</h1>
                <form method="post">
                    <input type="number" name="mobile" placeholder="Enter Mobile Number" onChange={(e) => this.handleMobile(e) } className="user-input" defaultValue={this.state.mobile} /><br/><br/>
                    <button type="submit" className="submit-button" onClick={this.otpGenerator} >Generate Otp</button><br/><br/>
                    <input type="password" name="otp" placeholder="Enter otp" onChange={(e) => this.handleOtp(e) } className="user-input"/><br/><br/>
                    <button type="submit" onClick={this.onSubmit} className="submit-button">Login</button>
                </form>
                </div>
            </div> 
        )
    }
}

// class Login extends React.Component{
//     render()
//     {
//         return(
//             <>
//                <LoginForm />
//             </>

//         )
//     }
// }

export default withRouter(Login);
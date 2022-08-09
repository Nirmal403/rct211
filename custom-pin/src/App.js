import { useState } from 'react';
import './App.css';
import Pin from './Components/Pin';

function App() {
  const [otp, setOtp] = useState("");
  const [otpValid,setOtpValid] =useState(false);
  return (
    <div className="App">
     <Pin length={5}
     setOtp={setOtp}
     isOtpValid={otpValid}/>
     <div>
      <h3>The OTP input is: <span className="otp">{otp}</span></h3>
     </div>
    </div>
  );
}

export default App;

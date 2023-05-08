import React, { useReducer } from "react";
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/sign-up/SignUp';
import AdditionalInfo from './components/additional-info/AdditionalInfo';
import Confirmation from './components/confirmation/Confirmation';
import StatusPage from './components/status-page/StatusPage';
import signUpReducer, { initialSignUpInfo} from './reducers/signUpReducer';
import { SignUpContext, SignUpDispatch } from './context/signUpContext';
import './App.css';

export default function App() {
  const [signUpInfo, dispatch] = useReducer(signUpReducer, initialSignUpInfo);

  return (
    <SignUpContext.Provider value={signUpInfo}>
      <SignUpDispatch.Provider value={dispatch}>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="more-info" element={<AdditionalInfo />} />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="success" element={<StatusPage />} />
          <Route path="error" element={<StatusPage />} />
          <Route path="*" element={<StatusPage />} />
        </Routes>
      </SignUpDispatch.Provider>
    </SignUpContext.Provider>
  )
}

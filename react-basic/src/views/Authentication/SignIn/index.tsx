import React, {useState, Dispatch, SetStateAction} from 'react';
import './style.css';

// useState 로 상태를 선언하는 경우 : 해당 컴포넌트에서만 상태를 사용할 때
// useStore(zustand 상태관리) 로 상태를 선언하는 경우 : 여러 컴포넌트에서 상태를 사용할 때
import { SignInStore } from '../../../stores';    // zustand 상태관리

function Header() {
     return(
          <div id="header">
                    <div className="header-logo">
                         <div className="header-logo-icon"></div>
                         <div className="header-logo-text">Seowoo's Board</div>
                    </div>
                    <div className="header-search">
                         <div className="header-search-icon"></div>
                    </div>
          </div>
     );
}

function Main() {
  return (
     <div id="main">
          <MainLeftContainer />
          <MainRightContainer />
     </div>
  );
}

function MainLeftContainer() {
     return(
          <div className="main-left-container">
               <div className="main-left-icon"></div>
               <div className="main-left-text-box">
                    <div className="main-left-text">환영합니다.</div>
                    <div className="main-left-text">Seowoo's Board 입니다.</div>
               </div>
          </div>
     );
}

function MainRightContainer() {
     // const [email, setEmail] = useState<string>('');
     // const [password, setPassword] = useState<string>('');

     // 

     return(
          <div className="main-right-container">
               <div className="main-right-card">
                    <MainRightCardTop /* setEmail={setEmail} setPassword={setPassword} */ />
                    <MainRightCardBottom /* email={email} password={password} */ />
               </div>
          </div>
     );
}

// interface MainRightCardTopProps{
//      // setEmail: React.Dispatch<React.SetStateAction<string>>;
//      setEmail: Dispatch<SetStateAction<string>>;  // {Dispatch}, {SetStateAction} 을 import
//      // setPassword: React.Dispatch<React.SetStateAction<string>>;
//      setPassword: React.Dispatch<React.SetStateAction<string>>;
// }

function MainRightCardTop(/* { setEmail, setPassword }: MainRightCardTopProps */) {
     const { setEmail, setPassword } = SignInStore();

     return(
          <div className="main-right-card-top">
               <div className="sign-in-text">로그인</div>
               <div className="sign-in-input-container">
                    <InputBox label='이메일 주소' show={false} type='text' set={setEmail} />
                    <InputBox label='비밀번호' show={true} type='password' set={setPassword} />
               </div>
          </div>
     );
}

interface InputBoxProps{
     label: string;
     show: boolean;
     type: string;
     // set: Dispatch<SetStateAction<string>>;
     set: (arg: string) => void;
}

function InputBox({label, show, type, set} : InputBoxProps) {
     const placeholder = `${label}를 입력해 주세요`;

     return(
          <div className="input-box">
               <div className="input-label">{label}</div>
               <div className="input-container">
                    <input className="input" type={type} placeholder={placeholder} onChange={(event) => set(event.target.value)} />
                    {show && (<div className='show-icon'></div>)}
               </div>
          </div>
     );
}

interface MainRightCardBottomProps{
     email: string;
     password: string;
}

function MainRightCardBottom(/* {email, password}: MainRightCardBottomProps */) {
     const { email, password } = SignInStore();

     const onSignInButtonHandler = () => {
          alert(`email : ${email}, password : ${password}`);
     }

     return(
          <div className="main-right-card-bottom">
               <button className="sign-in-button" onClick={onSignInButtonHandler}>로그인</button>
               <div className="sign-up-description">신규 사용자이신가요? <a href="/sign-up" className="emphasis">회원가입</a></div>
          </div>
     );
}

export default function SignIn() {
     return (
          <div id="wrapper">
               <Header />
               <Main />
          </div>
     );
}
import { FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import style from "./styles/loginSignUp.module.css";
import Layout from "../Layout";
import { login, signUp } from "../util";
function LogInSignUp() {
  const { pathname } = useLocation();
  console.log(pathname);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(pathname === "/login");
  const navigate = useNavigate();
  function handelSubmit(e:FormEvent){
    e.preventDefault();
    if(isLogin){
      login({number,password}).then(()=>{
        navigate("/");
      }).catch(e=>{
        toast.error(e.message, {
          position: "bottom-center",
          duration: 3000,
        });
      })
    }else{
      signUp({number,password,email,name}).then(()=>{
        navigate("/login");
      }).catch(e=>{
        toast.error(e.message, {
          position: "bottom-center",
          duration: 3000,
        });
      })
    }
  }
  useEffect(() => {
    setIsLogin(pathname === "/login");
  }, [pathname]);
  return (
    <Layout>
      <div className={style.container}>
        <h1 className={style.header}>Rent . Ride . Explore</h1>
        <div className={style.btnGroup}>
          <p
            onClick={(_) => setIsLogin(true)}
            className={isLogin ? style.login__btn__active : style.login__btn}
          >
            Login
          </p>
          <p
            onClick={(_) => setIsLogin(false)}
            className={!isLogin ? style.login__btn__active : style.login__btn}
          >
            SIGN UP
          </p>
        </div>
        <form className={style.login}>
          {!isLogin && (
            <>
              <label className={style.label} htmlFor="name">
                Name as per Aadhaar/Passport
              </label>
              <input
                placeholder="Enter name"
                className={style.input}
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className={style.label} htmlFor="email">
                Email
              </label>
              <input
                placeholder="Enter email"
                className={style.input}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </>
          )}

          <label className={style.label} htmlFor="phone">
            Phone
          </label>
          <div className={style.inputGroup}>
            <p className={style.preFix}>+91</p>
            <input
              className={style.input}
              type="number"
              required
              id="phone"
              value={number}
              maxLength={10}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <label className={style.label} htmlFor="password">
            Password
          </label>
          <input
            placeholder="Enter password"
            className={style.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={style.checkbox__group}>
            <input type="checkbox" id="check" className={style.checkbox} />
            <label className={style.checkLabel} htmlFor="check">
              Get updates on Calls/Whatsapp
            </label>
          </div>

          <button onClick={handelSubmit} className={style.btn}>{!isLogin?"Sign Up":"Login with password"}</button>
        </form>
            <Toaster/>
      </div>
      
    </Layout>
  );
}

export default LogInSignUp;

import React,{useEffect} from 'react'
import { useStateProvider } from './utils/StateProvider';
import Login from './components/Login'
import { reducerCases } from './utils/Constants';
import Spotify from './components/Spotify';
export default function App() {
  const [{ token },dispatch]=useStateProvider(); 
  useEffect(()=>{
    const hash=window.location.hash;
    if(hash){
      const token=hash.substring(1).split("&")[0].split("=")[1];
      // console.log(token); 
      dispatch({type:reducerCases.SET_TOKEN,token})
    }
  },[token,dispatch])
  return (
    <div>
     {token?<Spotify/>: <Login/>}
    </div>
  )
}

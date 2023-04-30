
import React,{useState,useEffect} from "react"

export function Clock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());
  
    localStorage.setItem("time",time)

    const showtimestamp=()=>{
      console.log(time)
    }
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return <div>{time}
    <button onClick={showtimestamp}>pushtim  </button>
    </div>;
  }
  
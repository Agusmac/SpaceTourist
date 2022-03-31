import React,{useState} from 'react'
import { Link } from 'react-router-dom'




const Navbar = ({backImg}) => {

const [expanded, setExpanded] = useState(false)

const Hamburguer = "/assets/shared/icon-hamburger.svg"
const Cross = "/assets/shared/icon-close.svg"


// function unnecesaryStep(){
//   if(expanded==="start")setExpanded(true)
//   else{
//     setExpanded(!expanded)
//   }
  
// }


  return (
    <div>
      <div className='flex navigator'>
        <img src="/assets/shared/logo.svg" alt="icon" style={{ height: "50%" }} />
        <div className='navHrDiv slide-in-left'><hr /></div>
        <img src={expanded?Cross:Hamburguer} className={`burguer ${expanded?"":"wobble-ver-right"}`} alt="icon" onClick={()=>setExpanded(!expanded)}/>
     
      
        <div className={`navbar flex ${expanded?"display":"displaynone"}`}>
        
          <Link to="/">
              <div className={`NavText navlistdiv slide-in-right2 ${backImg==="home"&&"underlined"}`}  onClick={()=>setExpanded(false)}>
              <span>00</span>  Home
              </div>
          </Link>
          <Link to="/destination">
              <div className={`NavText navlistdiv slide-in-right2 ${backImg==="destination"&&"underlined"}`}  onClick={()=>setExpanded(false)}>
              <span>01</span>  Destination
              </div>
          </Link>
          <Link to="/crew">
              <div className={`NavText navlistdiv slide-in-right2 ${backImg==="crew"&&"underlined"}`}  onClick={()=>setExpanded(false)}>
              <span>02</span>  Crew
              </div>
          </Link>
          <Link to="/technologies">
              <div className={`NavText navlistdiv slide-in-right2 ${backImg==="technology"&&"underlined"}`} onClick={()=>setExpanded(false)}>
              <span>03</span>  Technologies
              </div>
          </Link>

        </div>
      </div>

    </div>
  )
}

export default Navbar
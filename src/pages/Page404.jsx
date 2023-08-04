import { Link } from "react-router-dom"
import './styles/Page404.css'


const Page404 = () => {
  return (
   
    <div className="error-message">
      <p className="error-message__frase">
      ❌ This page not fount, please return ❌
      <Link to='/'> 
      <img src="/gif/PikaError.gif" alt="" />
      </Link>
      Press on Pikachu to go Home 👆
      </p>
    </div>
  )
}

export default Page404
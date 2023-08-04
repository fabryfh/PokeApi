import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import './styles/PokedexPage.css'
import { Link } from "react-router-dom"
import Paginations from "../components/Paginations"

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')

  const [selectValue, setSelectValue] = useState('allPokemons')

  
  // PAGINACIÓN 
  const [currentPage, setCurrentPage] = useState(1)
  const [pokePerPage] = useState(12)
  const trainer = useSelector(reducer => reducer.trainer)
  // PETICIÓN
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1010'
  const [ pokemons, getAllPokemons, getPokemonsByType ] = useFetch(url)

  // PETICIÓN AZINCRÓNICA

  useEffect (() => {
    if(selectValue === 'allPokemons'){
      getAllPokemons()
    } else {
      getPokemonsByType(selectValue)
    }
    }, [selectValue])


     //PAGIONACION PARA CAMBIAR DE PAG 
 const indexOfLastPoke = currentPage * pokePerPage
 const indexOfFirstPoke = indexOfLastPoke - pokePerPage

 const paginate = (pageNumber) => {
  setCurrentPage(pageNumber)
}

   const inputSearch = useRef()

   const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
   }

   const cbFilter = poke => poke.name.includes(inputValue)
    
  
  return (
    <div className="pokecard__space">
    <div className="pokecard__father__container">
      <div className="pokecard__father__container2">
        <Link className="pokecard__title__container" to='/' >
         <img  src="./pokedex.png" alt="" />
        </Link>
      </div>
      </div>
      <br/>
      <div className="pokecard__greeting__input__container">
      <p className="pokecard__frase"><span>Welcome {trainer}</span>, here you could find your favorite pokemon.</p>
      <form onClick={handleSubmit}>
        <input className="pokecard__input" placeholder="Pokemon's name" ref={inputSearch} type="text"/>
        <button className="pokecard__button">Search</button>
        <br />
      </form>
      <div>
      <SelectType setSelectValue={setSelectValue}/>
      </div>
      <div className="pokecard__container">
        {
          pokemons?.results.filter(cbFilter).map(poke => 
            <PokeCard
            key={poke.url}
            url={poke.url}
            />)
            .slice(indexOfFirstPoke, indexOfLastPoke)
        }
      </div>
    </div>
    <footer>
       <Paginations
        pokePerPage={pokePerPage}
        totalPoke={url.length}
        paginate={paginate}
        />
       </footer>
  </div>
  )
}

export default PokedexPage
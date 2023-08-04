import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerG } from "../store/slices/TrainerName.slice";
import { useNavigate } from "react-router-dom";
import './styles/HomePage.css'

const HomePage = () => {
  //  const trainer = useSelector( reducer => reducer.trainer )

  //  console.log(trainer)

  const inputTrainer = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target.inputTrainer.vale
    dispatch(setTrainerG(inputTrainer.current.value.trim()));
    navigate("/pokedex");
  };
  return (
    <div className="home-page__container">
      <div className="home-page__container-card">
      <h1 className="home-page__title"> <img src="./pokedex.png" alt="" /></h1>
      <h2 className="home-page__greeting">Hi trainer!</h2>
      <p className="home-page__frase">
        To start with the app, you need to set your name first 
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="home-page__input"
          placeholder="Set your name here trainer!" 
          id="inputTrainer"
          ref={inputTrainer}
          type="text"
        />
        <button className="home-page__button">Gotta catch'em all</button>
        <p className='Author'> By: Fabrizzio Heredia</p>
      </form>
      </div>
    </div>
  );
};

export default HomePage;

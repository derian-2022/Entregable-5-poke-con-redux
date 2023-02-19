import React from 'react'
import { setNameTrainer } from '../store/slices/trainerName.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './styles/home.css'

const Home = () => {

   const dispatch = useDispatch()
   const navigate = useNavigate()


    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setNameTrainer(e.target.name.value.trim()))
        e.target.name.value = ''
        navigate('/pokedex')
    }

  return (
    <div className='poke__home'>
        <img className='poke__home-img' src="/image 11.png" alt="" />
        <h2 className='poke__home-title'>Hi Traner</h2>
        <p className='poke__home-paragraph'>To start this Pokedex, give me your name</p>
        <form className='poke__home-form' onSubmit={handleSubmit}>
            <input className='poke__home-inp' id='name' type="text" />
            <button className='poke__home-btn'>Start</button>
        </form>
        <footer className='poke__home-foot'>
          <img className='poke__home-img147' src="/Rectangle 147.png" alt="" />
          <div>
            <img className='poke__home-img148' src="/Rectangle 148.png" alt="" />
          </div>
          <div>
            <img className='poke__home-elip3' src="/Ellipse 3.png" alt="" />
            <img className='poke__home-elip4' src="/Ellipse 4.png" alt="" />
          </div>
        </footer>
    </div>
  )
}

export default Home
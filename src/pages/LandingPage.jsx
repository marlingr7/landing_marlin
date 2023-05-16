import React from 'react'

//components
import { Header } from '../components/Header/Header'
import { GeneralButton } from '../components/GeneralButton/GeneralButton'

//styles
import './LandingPage.css'

//assets
import image from '../assets/image.png'


export const LandingPage = () => {

    const handleClick = () => {
        console.log('Start');
    }

    return (
        <div className='landing_page'>
            <Header />

            <div className='landing_page_container'>

                <div className='blue_container'>

                    <h1>A powerfull online engagment tool that's intuitive and simple to use</h1>

                    <p>With stellar one-click reports and unmatched support, see how Circle will make a difference in your business.</p>

                    <GeneralButton title={'Get started free'} onClick={handleClick} />
                </div>

                <img src={image} />

            </div>
        </div>
    )
}

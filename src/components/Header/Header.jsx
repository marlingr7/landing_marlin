import React from 'react'

//styles
import './Header.css'

//assets
import logo from '../../assets/logo.png'

export const Header = () => {

    const navigate = (route) => {
        console.log(route);
    }


    const headerList = [
        {
            title: 'Features',
            link: '/features'
        },
        {
            title: 'Pricing',
            link: '/pricing'
        },
        {
            title: 'Testimonials',
            link: '/testimonials'
        },
        {
            title: 'Restources',
            link: '/restources'
        },
    ]

    const headerContact = [
        {
            title: 'Company',
            link: '/company'
        },
        {
            title: 'Contact',
            link: '/contact'
        },
        {
            title: 'Login',
            link: '/login'
        },
    ]


    return (
        <div className='header'>
            <div className='header_button'>
                {
                    headerList.map(item => (
                        <button onClick={() => navigate(item.link)}>{item.title}</button>
                    ))
                }
            </div>

            <img src={logo} />

            <div className='header_button'>
                {
                    headerContact.map(item => (
                        <button className={item.title == 'Login' && 'login_button'} onClick={() => navigate(item.link)}>{item.title}</button>
                    ))
                }
            </div>

        </div>
    )
}

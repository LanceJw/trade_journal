import React, { useState } from 'react'
import styled from 'styled-components'

import './Navbar.css'

import { LinksData } from './LinksData'

const Container = styled.div`
width: 15%;
background-color: #1f1724;
color: white;
height: 100vh;
`

const TradeBtn = styled.div`
width: 90%;
margin: 1rem 0rem 2rem 5%;
border-radius: 5px;
background-color: #5543b2;
padding: 8px 10px;
`

const Links = styled.div`
display: flex;
flex-direction: column;
`

const Link = styled.a`
display: flex;
text-decoration: none;
color: white;
padding: 8px 10px;
width: 90%;
margin: 0rem 0rem 0.6rem 5%;
border-radius: 5px;
`

const Navbar = (props) => {

    const [currentLink, setCurrentLink] = useState(LinksData[0])

    const [appState, setAppState] = useState({
        activeObject: LinksData[0],
        objects: LinksData
    })

    const toggleActive = index => {
        setCurrentLink(appState.objects[index])
        setAppState({...appState, activeObject: appState.objects[index]})
    }

    const toggleActiveStyle = (index) => {
        if (appState.objects[index] === appState.activeObject) {
            return " active";
        } else {
            return " inactive";
        }
    }

    return (
        <Container>

            {/* Logo */}

            {/* Trade Button */}
            <TradeBtn>
                <span>Add Trade</span>
            </TradeBtn>

            {/* Links Section */}
            <Links>
            {LinksData.map((data, index) => {
                return (
                    <Link href="#"
                        id="Individual_Link"
                        className={toggleActiveStyle(index)}
                        onClick={() => {
                            toggleActive(index)
                            localStorage.setItem('selected-tab', data.link)
                            props.setTab(localStorage.getItem('selected-tab', data.link))
                        }}
                    >{data.link}</Link>
                )
            })}
            </Links>


            {/* Profile Section */}
        </Container>
    )
}

export default Navbar
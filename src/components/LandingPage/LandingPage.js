import React, {useState} from 'react'
import styled from 'styled-components';

import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Journal from '../Journal/Journal';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

const LandingPage = () => {

    const [tab, setTab] = useState(localStorage.getItem('selected-tab'))

    const switchView = (tab) => {
        switch(tab) {
            case 'Dashboard':
                return <Dashboard/>

            case 'Playbook':
                return <Journal/>


            default:
                return <h1>Test</h1>
        }
    }

    return (
        <Container>
            <Navbar setTab={setTab}/>
            <div>
                {switchView(tab)}
            </div>
        </Container>
    )
}

export default LandingPage
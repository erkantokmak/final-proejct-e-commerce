import React from 'react'
import Navbar from './Navbar'
import { Container } from '@/styles/LayoutStyle'
import { HeaderContainer } from '@/styles/ComponentStyle'

const Header = () => {

    return (
        <>
            <Container>
                <HeaderContainer>
                    <Navbar />
                </HeaderContainer>
            </Container>
        </>
    )
}

export default Header
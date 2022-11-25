import React from "react";
import logo from '../../assets/logo-dio.png';
import {Button} from '../Button';
import avatar from '../../assets/avatar.jpg'
import { IHeader } from "./types";


import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture
} from './styles';


const Header = ({autenticado} : IHeader) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio"/>
                    {autenticado ? (
                        <>
                        <BuscarInputContainer>
                        <Input placeholder="Buscar..." />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src={avatar} />
                    ) : (
                        <>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar"/>
                        <Button title="Cadastrar"/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header } 

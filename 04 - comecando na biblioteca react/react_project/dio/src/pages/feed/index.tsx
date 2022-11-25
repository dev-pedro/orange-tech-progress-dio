import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { UserInfo } from '../../components/UserInfo'
import avatar from '../../assets/avatar.jpg'

import { Container, Column, Title, TitleHighlight} from "./styles"
import React from "react"

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={45} name="Pedro Henrique" image={avatar}/>
                <UserInfo percentual={35} name="Pedro Henrique" image={avatar}/>
                <UserInfo percentual={55} name="Pedro Henrique" image={avatar}/>
                <UserInfo percentual={75} name="Pedro Henrique" image={avatar}/>
            </Column>
            
        </Container>
        </>
    )
}

export { Feed }
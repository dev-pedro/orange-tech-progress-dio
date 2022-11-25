import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import avatar from '../../assets/avatar.jpg'
import imageBackground from '../../assets/dhoefler_path.jpg'

import {
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture} from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src={imageBackground}/>
        <Content>
            <UserInfo>
                <UserPicture src={avatar}/>
                <div>
                    <h4>Pedro Henrique</h4>
                    <p>Há 10 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                    <h4>Projeto para o curso de HTML e CSS</h4>
                    <p>Projeto feito o curso de html e cess no bootcamp dio Global avanade...<strong>Saiba mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
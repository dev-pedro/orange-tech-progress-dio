import styled from "styled-components";
import { IUserInfoStyled } from "./types";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 14px;
    margin-top: 14px;

    margin-left: 10px;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFF;
    margin-right: 12px;
`

export const NameText = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #FFF
`
export const Progress = styled.div<IUserInfoStyled>`
    width: 180px;
    height: 6px;
    background-color: #FFF;
    border-radius: 3px;
    position: relative;

    &:after{

        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }
`
import styled, { css } from "styled-components";
import { IbuttonStyled } from "./types";

export const ButtonContainer = styled.button<IbuttonStyled>`
    background: #565656;
    border-radius: 22px;
    position: relative;
    border: 2px solid #000;
    color: #FFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    margin: 10px 0;

    &:hover{
        opacity: 0.6;
        cursor: pointer;
    }

    ${({variant})=> variant !== "primary" && css`
        min-width: 167px;
        height: 33px;

        background: #E4105D;

        

        &:after{
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -6px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`
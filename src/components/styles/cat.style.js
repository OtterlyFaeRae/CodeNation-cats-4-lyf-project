import styled from 'styled-components'

export const CatBox = styled.div`
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 30%;
    max-width: 30%;
    height: fit-content;
    width: fit-content;
    margin: auto;
    padding: auto;
    border: 1px solid;
    `

export const CatPic = styled.img`
    box-sizing: content-box;
    max-height: 250px;
    max-width: 250px;
    height: auto;
    width: auto;
`

export const InfoBox = styled.div`
    flex-direction: column; 
    margin: 5px;
`

export const BotBox = styled.div`
    flex-direction: row;
`

export const BadButton = styled.button`
    align-self: flex-end;
    margin: 5px;
`

export const Name = styled.h4`
    margin: 5px;
`
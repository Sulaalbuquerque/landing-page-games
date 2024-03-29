import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerContact = styled.div`
    position: absolute;
    background-color: ${({theme}) => theme.darkBlue};
    top: 5rem;
    left: 0;
    right: 0;
    //height: 100%;
    padding: 2rem 2rem 4rem;
    font-size: 1.2rem;
    display: none;

    p{
        color: ${({theme}) => theme.blue};
        font-size: .8rem;
        margin-bottom: 2rem;
    }

    .arrow{
        display: none;
    }

    .option{
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        gap: .5rem;
        color: ${({theme}) => theme.text};
    }
    
    .asterisk{
        display: inline;
        color: ${({theme}) => theme.blue};
        margin-left: .5rem;
    }

    input{
        padding: .7rem;
        border-radius: .3rem;
        background-color: ${({theme}) => theme.darkBlue};
        font-size: 1rem;
        color: ${({theme}) => theme.text};
        border: solid .13rem ${({theme}) => theme.silver};
    }

    textarea{
        border-radius: .3rem;
        background-color: ${({theme}) => theme.darkBlue};
        color: ${({theme}) => theme.text};
        border: solid .13rem ${({theme}) => theme.silver};
        font-size: 1rem;
        padding: .5rem;
    }

    button{
        border-radius: .3rem;
        border: none;
        padding: .7rem;
        width: 100%;
        background-color: ${({theme}) => theme.background};
        cursor: pointer;
        font-size: 1rem;

        :hover{
            background-color: ${({theme}) => theme.blue};
            color: ${({theme}) => theme.text};
        }
    }
    
    @media (min-width: 771px) {
        padding: 3rem;
        top: 4rem;
        left: -14rem;
        right: auto;
        bottom: auto;
        width: auto;
        height: auto;
        border: solid .13rem ${({theme}) => theme.blue};
        border-radius: .3rem;
        box-shadow: .6rem .6rem ${({theme}) => theme.blue};
        font-size: .9rem;

        .arrow{
            display: block;
            transform: rotate(45deg);
            z-index: -1;
            position: absolute;
            top: -.6rem;
            left: 18rem;
            height: 1.12rem;
            width: 1.12rem;
            background-color: ${({theme}) => theme.blue};
        }

        .main{
            display: flex;
            gap: 2rem;
        }
    }

    ${({ isVisibleContact }) => isVisibleContact && css`
        display: block;
    `}
` 
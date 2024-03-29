import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerNav = styled.div`
    color: ${({theme}) => theme.text};
    display: none;
    position: absolute;
    top: 5rem;
    left: 0;
    right: 0;
    z-index: 1;
    border-radius: .3rem;
    background-color: ${({theme}) => theme.darkBlue};
    padding: 1rem 0 6rem 1rem;
    pointer-events: none;

    .lists{
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        width: 85%;
    }

    h4{
        font-size: 1.5rem;
        font-weight: 900;
        padding: 0 1rem;
        margin: .2rem;
    }

    li{
        display: flex;
        list-style-type: none;
    }

    a{
        padding: .6rem 1rem;
        width: 100%;
        color: ${({theme}) => theme.text};
        text-decoration: none;
        font-weight: 400;
        font-size: 1.3rem; 
        border-radius: .3rem;

        :hover{
            background-color: ${({theme}) => theme.blue};
        }
    }

    @media (min-width: 771px) {
        padding: 0 1rem 1rem 1rem;
        top: 6rem;
        left: auto;
        right: auto;
        bottom: auto;
        width: auto;
        height: 15rem;
        z-index: 3;
        border: solid .13rem ${({theme}) => theme.blue};
        border-radius: .3rem;
        box-shadow: .6rem .6rem ${({theme}) => theme.blue};

        .lists{
            padding-top: 1rem;
            flex-direction: row;
            z-index: 1;
            width: 100%;
            gap: 1rem;
            background-color: ${({theme}) => theme.darkBlue};
        }

        .arrow{
            transform: rotate(45deg);
            z-index: -1;
            position: absolute;
            top: -.6rem;
            left: 1.5rem;
            height: 1.12rem;
            width: 1.12rem;
            background-color: ${({theme}) => theme.blue};
        }

        .list{
            width: 10rem;
            padding: 1rem;
            transition: .7s;
        }

        h4{
            font-size: 1rem;
            font-weight: 700;
            padding: 0 1rem;
        }

        li{
            display: flex;
            margin: .3rem 0;
            list-style-type: none;
        }

        a{
            padding: .6rem 1rem;
            width: 100%;
            color: ${({theme}) => theme.text};
            text-decoration: none;
            font-weight: 400;
            font-size: .85rem; 
            border-radius: .3rem;

            :hover{
                background-color: ${({theme}) => theme.blue};
            }
        }
    } 

    ${({ navIsVisible }) => navIsVisible && css`
        display: flex;
        pointer-events: auto;
    `}
` 
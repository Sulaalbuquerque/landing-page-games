import styled from 'styled-components'

export const ContainerProductBag = styled.div`
    border-radius: .3rem;
    padding: 1rem;
    border: .1rem solid ${({theme}) => theme.blue};
    display: flex;
    justify-content: space-between;

    .name{
        color: ${({theme}) => theme.blue};
    }

    .amount p span{
        margin-left: .5rem;
    }

    .change button{
        font-size: 1.2rem;
        padding: .5rem 1.2rem;
        border: none;
        cursor: pointer;

        :hover{
            background-color: ${({theme}) => theme.blue};
        }
    }

    .add{
        border-radius: .3rem 0 0 .3rem;
    }

    .remove{
        border-radius: 0 .3rem .3rem 0;
    }

    a{
        font-size: 1.2rem;
        width: 10rem;

        :hover{
            color: ${({theme}) => theme.blue};
        }
    }

    @media (min-width: 771px) {
        display: flex;
        gap: 1rem;

        a{
            font-size: 1rem;
            width: 9rem;
        }

        .change button{
            font-size: 1rem;
            padding: .5rem 1rem;
        }
    }
` 
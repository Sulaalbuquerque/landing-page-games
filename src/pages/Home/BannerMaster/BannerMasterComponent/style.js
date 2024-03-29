import styled from 'styled-components'

export const ContainerBannerMasterComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 2rem 2rem 0 2rem;
    width: 85%;

    h1{
        font-size: 2.9rem;
        margin: 0;
    }

    h2{
        margin: 0;
        padding-right: 2.5rem;
        position: relative;
        font-size: 4.3rem;
        color: ${({ theme }) => theme.blue};
    }

    .penny{
        position: absolute;
        top: .6rem;
        font-size: 1.75rem;
    }

    h1, 
    h2{
        font-weight: 900;
    }

    p{
        margin: 0;
        text-align: end;
        line-height: 1.55rem;
        font-weight: 400;
        font-size: 1rem;
        min-height: 10rem;
    }

    @media (max-width: 770px) {

        h1{
            font-size: 1.6rem;
        }

        h2{
            font-size: 3rem;
            margin-top: .6rem;
        }

        .penny{
            font-size: 1.75rem;
            top: .4rem;
        }
    }

    @media (min-width: 771px) and (max-width: 1150px) {
        padding-top: 0;

        h1{
            font-size: 1.2rem;
        }

        h2{
            font-size: 2rem;
            padding-right: 1.5rem;
        }

        .penny{
            font-size: 1rem;
            top: .4rem;
        }

        p{
            font-size: .9rem;
            line-height: 1.2rem;
        }
    }

    @media (min-width: 771px) {
        width: 80%;

        h2{
            margin-bottom: 1.3rem;
        }

        p{
            max-width: 50%;
        }
    }
` 
import styled from 'styled-components'

export const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;

    nav {
        display: flex;
        justify-content: space-between;
        width: 100vw;
    }
`

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p {
        background-color: ${(props) => props.theme['purple-light']};
        padding: 8px;
        border-radius: 6px;
        color: ${(props) => props.theme['purple-dark']};
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    button {
        background-color: ${(props) => props.theme['yellow-light']};
        padding: 8px;
        border-radius: 6px;
        color: ${(props) => props.theme['yellow-dark']};
        border: none;
    }
`

import styled from 'styled-components'

export const HeaderContainer = styled.header`
     display: flex;
     justify-content: center;
     align-items: center;
     padding: .5rem;

     h1 {
          font-size: 5rem;
          
          @media (max-width: 700px) {
               font-size: 3rem;
          }
     }

     span {
          color: #b69121;
     }

`
import styled from "@emotion/styled";

const Texto = styled.div`
    color: #fff;
    padding: 15px;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    background-color: #B7322C;
    font-family: 'Lato', sans-serif;
`;

function Alerta({children}) {
  return (
    <Texto>{children}</Texto>
  )
}

export default Alerta
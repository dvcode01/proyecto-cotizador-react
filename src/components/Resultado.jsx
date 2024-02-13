import styled from "@emotion/styled";

const Cotizacion = styled.div`
    gap: 15px;
    color: #fff;
    display: flex;
    margin-top: 30px;
    align-items: center;
    font-family: 'Lato', sans-serif;
`;

const Texto = styled.p`
    font-size: 18px;

    span{
        font-weight: 700;
    }
`;

const Precio = styled.p`
    font-size: 24px;
    margin-top: 0;

    span{
        font-weight: 700;
    }
`;

const Imagen = styled.img`
    width: 120px;
    display: block;
`;

function Resultado({cotizacion}) {
    const {HIGHDAY, LOWDAY, PRICE, IMAGEURL, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;
  return (
    <Cotizacion>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto" />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio más alto del día fue: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día fue: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Cotizacion>
  )
}

export default Resultado
import {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Spinner from './components/Spinner';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import ImagenCripto from './assets/img/imagen-criptos.png';

const Heading = styled.h1`
  color: #fff;
  font-size: 34px;
  margin-top: 80px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Lato', sans-serif;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    display: block;
    margin: 10px auto 0 auto;
    background-color: #66A2FE;
  }
`;

const Contenedor = styled.main`
  width: 90%;
  margin: 0 auto;
  max-width: 900px;
  @media(min-width: 992px){
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Imagen = styled.img`
  width: 80%;
  display: block;
  max-width: 400px;
  margin: 100px auto 0 auto;
`;

function App() {
  // Almacena los valores del formulario
  const [monedas, setMonedas] = useState({});

  // Almacena el nuevo resultado de la nueva consulta a la API
  const [cotizacion, setCotizacion] = useState({});

  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if(Object.keys(monedas).length > 0){
      const cotizarCripto = async() => {
        setCargando(true);
        setCotizacion({});

        const {moneda, criptomoneda} = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setCotizacion(resultado.DISPLAY[criptomoneda][moneda]);
        setCargando(false);
      };

      cotizarCripto();
    }
  }, [monedas]);

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt='Imagenes de criptomonedas' />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario setMonedas={setMonedas} />
        {cargando && <Spinner />}
        {cotizacion.PRICE && <Resultado cotizacion={cotizacion} />}
      </div>
    </Contenedor>
  )
}

export default App
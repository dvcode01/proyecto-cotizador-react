import {useEffect, useState} from 'react'
import styled from '@emotion/styled';
import Alerta from './Alerta.jsx';
import useSelectMonedas from '../hooks/useSelectMonedas';
import {monedas} from '../data/moneda.js';

const InputSubmit = styled.input`
    width: 100%;
    border: none;
    padding: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-top: 30px;
    border-radius: 5px;
    text-transform: uppercase;
    background-color: #9497ff;
    transition: background-color .3s ease;

    &:hover{
        cursor: pointer;
        background-color: #7a7dfe;
    }
`;

function Formulario({setMonedas}) {
    // Almacena los datos de la API
    const [criptos, setCriptos] = useState([]);


    // Mensaje de error
    const [error, setError] = useState(false);

    // Custom Hook
    const [moneda, SelectMonedas] = useSelectMonedas('Elige Tu Moneda', monedas);
    const [criptomoneda, SelectCriptomonedas] = useSelectMonedas('Elige Tu Criptomoneda', criptos);

    useEffect(() => {
        const consultarAPI = async() => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await fetch(url);
            const respuestaJSON = await resultado.json();
            

            const arrayCriptos = respuestaJSON.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                };
                
                return objeto;
            });

            setCriptos(arrayCriptos);
        };

        consultarAPI();

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if([moneda, criptomoneda].includes('')){
            setError(true);
            return;
        }

        setError(false);
        setMonedas({moneda, criptomoneda});
        
    };

  return (
    <>
        {error && <Alerta>Todos los campos son obligatorios</Alerta>}
        <form onSubmit={handleSubmit}>

            <SelectMonedas />

            <SelectCriptomonedas />

            <InputSubmit type="submit" value="Cotizar" />
        </form>
    </>
  )
}

export default Formulario
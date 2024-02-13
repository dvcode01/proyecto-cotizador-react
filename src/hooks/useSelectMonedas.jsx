import {useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    color: #fff;
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
    font-family: 'Lato', sans-serif;
`;

const Select = styled.select`
    width: 100%;
    border: none;
    padding: 14px;
    font-size: 18px;
    border-radius: 10px;
`;

function useSelectMonedas(label, opciones) {
    const [state, setState] = useState('');

  const SelectMonedas = () => (
    <>
        <Label htmlFor="">{label}</Label>

        <Select
            value={state}
            onChange={e => setState(e.target.value)}
        >
            <option value="">-- Seleccione --</option>
            {opciones.map(opcion => (
                <option
                    key={opcion.id}
                    value={opcion.id}
                >
                    {opcion.nombre}
                </option>
            ))}
        </Select>
    </>
  );


  return [
    state,
    SelectMonedas,
  ];
}

export default useSelectMonedas
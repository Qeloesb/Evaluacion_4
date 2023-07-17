import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const BarraBusqueda = ({ onSearch }) => {
  const [busquedaTerm, setBusquedaTerm] = useState('');

  const handleInputChange = (event) => {
    setBusquedaTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(busquedaTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <InputGroup className='my-3'>
        <Form.Control
        type="text" value={busquedaTerm} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Buscar por categoría o nombre" />
      <Button variant="warning" onClick={handleSearch}>Buscar</Button>
    </InputGroup>
  );
};
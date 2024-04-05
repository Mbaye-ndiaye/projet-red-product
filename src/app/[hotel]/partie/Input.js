import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './modal/Modal';

const CorpsContainer = styled.div`
    background-color: #f0f0f0;
    color: #55595C;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
    height: 100%;
    
`;
const Button = styled.button`
  font-size: 16px;
  padding: 8px 12px 8px 40px; 
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 230px;
  height: 30px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACUCAMAAAAAoYNxAAAAZlBMVEX///83QVExO0z7+/tKU2IuOUs5Q1Sjpq3Hyc0pNUclMUUzPk6Bho5DTFv3+PiusbVvdYBaYm7n6OlTW2iOkpnc3eAXJzzP0dSTl58QIjl2fIW5vMEeLUHw8fLV19mztrxka3YCHTXte5NtAAAB8UlEQVR4nO3b246CMBSFYVpALaUgJzk66vu/5ARjJgIRNLI3MFnfdS/+NDsKFCwLAAAAAAAAAAAAAN5gZ+Exio5hZi9d8q44NSclpWp2abx0y3vixNPiTnvJJprjSIk/KtpAs5164omXrn+eM6Gfk7XIli6aFJ5ExylcumjSUXWT1XHpoil2IrvJMln7MNtOP9lB8uyQzAHJHJDMAckckMwByRyQzAHJHJDMAckckMxhg8nWMHnpolYe7l8zupuszcjiMOfotQshpftSb4/v+zyyWoqCfG5ypxlGfUE3DvFO50ZNZ3xGGdrm+Yvb5oCwOJ13Kh6alK44EHo64HNa0G3zgWAsWupAlhy6NMku3RHQnip5T5a8wV3OqWaZ8Je5fwExD23oiq1LSZFcXgiTrSvBf0lzJb0yyiJvuuEzXkR8MB9XypV6xLBpbLVUqqJ/Y6OuIrN7bZg8sthEVU0e3Irzw2vDu5KRxfkq3olZ573fmA3eYSOZA5I5IJkDkjkgmQOSOSCZA5I5IJkDkjkgmQOSOWzwuxLL7z3N9fyliybV/W+keB5tfiMzncmQZv1foln77vd+dEd68wn8p/OUxqd8C2A256p8zIYsq/PSNe8JaufWKNXcTL2JPb6zfwrfL35W/4sMAAAAAAAAAAAA/9MvZiwhAox5l9UAAAAASUVORK5CYII=");
  background-repeat: no-repeat;
  background-position: 10px 50%; 
  background-size: 20px 20px;

  ::placeholder {
    color: #aaa;
  }
`;

const Input = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handelClosModal = () => {
    setIsModalOpen(!true)
  }
  return (
    <CorpsContainer>
      <p>Hôtels</p>
      <Button type='button' onClick={handleOpenModal}>Créer un nouveau hôtel</Button>
      <Modal isOpen={isModalOpen} onClose={handelClosModal}></Modal>

    </CorpsContainer>
  );
};

export default Input;


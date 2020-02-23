import React from "react";
import { useObserver } from "mobx-react";
import { Container } from 'react-bootstrap'

const PortypeServices: React.FC = () => {
  
  return useObserver(() => (
    <Container>
    </Container>
  ));
};
export default PortypeServices;

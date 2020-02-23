import React from "react";
import { useObserver } from "mobx-react";
import { Container } from 'react-bootstrap'

const Contact: React.FC = () => {
  
  return useObserver(() => (
    <Container>
    </Container>
  ));
};
export default Contact;

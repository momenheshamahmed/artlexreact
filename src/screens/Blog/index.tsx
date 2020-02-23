import React from "react";
import { useObserver } from "mobx-react";
import { Container } from 'react-bootstrap'

const Blog: React.FC = () => {
  
  return useObserver(() => (
    <Container>
    </Container>
  ));
};
export default Blog;

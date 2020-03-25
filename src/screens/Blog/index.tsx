import React from "react";
import { useObserver } from "mobx-react";
import { Container } from "react-bootstrap";
import BlogGridList from "../../components/BlogComponents/BlogGridList";

const Blog: React.FC = () => {
  return (
    <Container fluid={true} style={{marginTop: 101}}>
      <BlogGridList />
    </Container>
  );
};
export default Blog;

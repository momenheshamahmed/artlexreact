import React from "react";
import { Container } from "react-bootstrap";
import BlogGridList from "../../components/BlogComponents/BlogGridList";

const Blog: React.FC = () => {
  return (
    <Container fluid={true}  className="pt-5" style={{marginTop: 120}}>
      <BlogGridList />
    </Container>
  );
};
export default Blog;

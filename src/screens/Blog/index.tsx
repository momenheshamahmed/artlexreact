import React from "react";
import { Container } from "react-bootstrap";
import BlogGridList from "../../components/BlogComponents/BlogGridList";
import NavBar from "../../components/NavBar";

const Blog: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container fluid={true} className="pt-5" style={{ marginTop: 120 }}>
        <BlogGridList />
      </Container>
    </>
  );
};
export default Blog;

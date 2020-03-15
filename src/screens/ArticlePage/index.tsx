import React, { useState, useEffect } from "react";
import { useObserver } from "mobx-react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import { database } from "firebase";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
const StyledImg = styled.div`
  width: 100%;
  height: 40vh;
  margin-bottom: 3vh;
  background-image: url(${props => props.imgSrc});
  background-color: black;
`;
const ArticlePage: React.FC = props => {
  // const [data, setData] = useState(null);
  // let dummData;

  let { articleId } = useParams();
  let { state } = useLocation();
  // console.log(articleId);
  // console.log(state.documentId);
  // const dbRef = database().ref("/blog/" + state.documentId);

  // useEffect(() => {
  //   dbRef.on("value", snapshot => {
  //     dummData = snapshot.val();
  //     setData(dummData);
  //   });
  // }, [data]);
  return useObserver(() => (
    <Container className="pt-5 mt-5" fluid={true}>
      {state != null ? (
        <>
          <StyledImg imgSrc={state.content.en.image1} />
          <Container>
            <h1>{state.content.en.title}</h1>
            {ReactHtmlParser(state.content.en.richEditor1)}
          </Container>
        </>
      ) : (
        <h1>loading</h1>
      )}
    </Container>
  ));
};
export default ArticlePage;

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
import { stateToHTML } from "draft-js-export-html";
import { convertFromHTML, ContentState, convertFromRaw } from "draft-js";

const StyledImg = styled.div`
  width: 100%;
  height: 40vh;
  margin-bottom: 3vh;
  background-image: url(${props => props.imgSrc});
  background-color: black;
`;
const ArticlePage: React.FC = props => {
  const [data, setData] = useState(null);
  let { state } = useLocation();

  useEffect(() => {
    if (state.documentId != null) {
      const dbRef = database().ref("/blog/" + state.documentId);
      dbRef.on("value", snapshot => {
        setData(snapshot.val());
      });
    } else {
      console.log("no data :( ");
    }
  }, [state.documentId]);

  return useObserver(() => (
    <Container className="pt-5 mt-5" fluid={true}>
      {data != null ? (
        <>
          <StyledImg imgSrc={data.content.en.image1} />
          <Container>
            <h1>{data.content.en.title}</h1>
            {/* {JSON.parse(data.content.en.richEditor1)} */}
            {/* {mycontentstate} */}
          </Container>
        </>
      ) : (
        <h1>loading</h1>
      )}
    </Container>
  ));
};
export default ArticlePage;

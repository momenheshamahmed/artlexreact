import React from "react";
import { useObserver } from "mobx-react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import { database } from "firebase";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import { BlogStore } from "../../stores";
import {
  Typography,
  GridList,
  useMediaQuery,
  GridListTile
} from "@material-ui/core";

const StyledImg = styled.div`
  width: 100%;
  height: 70vh;
  margin: 101px 0 3vh 0;
  background-image: url(${props => props.imgSrc});
  background-color: black;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;
const CustomImg = styled.div`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  background: url(${props => props.src});
`;
const ArticlePage: React.FC = props => {
  const { articleId } = useParams();
  // let { state } = useLocation();
  const screenSize = useMediaQuery("(max-width:700px)");

  return useObserver(() => (
    <>
      {BlogStore.Blogs.map(val => {
        if (val.content.en.articleInternalURL === articleId) {
          return (
            <>
              <StyledImg imgSrc={val.content.en.image1} />
              <Container
                fluid={true}
                style={{ overflow: "hidden" }}
                className="qlContainer"
              >
                <h1>{val.content.en.title}</h1>
                {ReactHtmlParser(JSON.parse(val.content.en.richEditor1))}
                <Typography variant="h6" component="h6" className=" mb-3 mt-3">
                  Related Articles
                </Typography>
                <GridList
                  cellHeight={200}
                  cols={screenSize ? 1 : 6}
                  spacing={15}
                >
                  {val.content.en.relatedArticles[0] !== "noarticles" ? (
                    val.content.en.relatedArticles.map(type => {
                      return BlogStore.Blogs.map(sec => {
                        if (type === sec.content.en.articleInternalURL) {
                          return (
                            <GridListTile key={sec.key} cols={2}>
                              <img
                                src={sec.content.en.image1}
                                alt={sec.content.en.title}
                              />
                            </GridListTile>
                          );
                        }
                      });
                    })
                  ) : (
                    <Typography
                      variant="body1"
                      component="body1"
                      className=" mb-3 mt-3"
                    >
                      No Related Articles
                    </Typography>
                  )}
                </GridList>
              </Container>
            </>
          );
        } else if (val.content.en.articleInternalURL !== articleId) {
          console.log("HAHAHA!");
        } else {
          console.log("Sorry no article here by this name!");
        }
      })}
      {/* {BlogStore.Blogs.map(article => {
        if (article.key === state.documentId) {
          return article.content.en.relatedArticles.map(rar => {
            console.log("this is related article key", rar);
            if (article.key === rar) {
              console.log("I am Mad now", rar);
              return <h1>MAAAD</h1>;
            } else if (article.key === "noarticles") {
              console.log("MAAAAD");
              return <h1>MAAAD 2</h1>;
            }
          });
        }
      })} */}
    </>
  ));
};
export default ArticlePage;

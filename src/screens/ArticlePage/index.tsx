import React from "react";
import { useObserver } from "mobx-react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
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
  GridListTile,
  Divider
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
const CustomImgRelated = styled.div`
  position: relative;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  color: black;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => `'${props.src}'`});
  &:hover {
    -webkit-line-clamp: 3;
  }
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;
const CustomTag = styled(Typography)`
  position: absolute;
  top: 24px;
  left: 24px;
  background: #c9eec9;
  padding: 1rem 2rem;
  border-radius: 100px;
`;
const CustomTitle = styled(Typography)`
  position: absolute;
  bottom: 24px;
  left: 24px;
  width: 80%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: white;
  overflow: hidden;
  transition: 0.1s;
  transition-timing-function: ease-in;
  &:hover {
    -webkit-line-clamp: 3;
  }
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
                <Divider className="my-3" />
                <Typography variant="h6" component="h6" className=" mb-3 mt-3">
                  Related Articles
                </Typography>
                <GridList
                  cellHeight={
                    val.content.en.relatedArticles[0] !== "noarticles"
                      ? 400
                      : 20
                  }
                  cols={screenSize ? 1 : 6}
                  spacing={15}
                >
                  {val.content.en.relatedArticles[0] !== "noarticles" ? (
                    val.content.en.relatedArticles.map(type => {
                      return BlogStore.Blogs.map(sec => {
                        if (type === sec.content.en.articleInternalURL) {
                          return (
                            <GridListTile key={sec.key} cols={2}>
                              <Link
                                to={{
                                  pathname: `/blog/${sec.content.en.articleInternalURL}`,
                                  state: {
                                    documentId: sec.key
                                  }
                                }}
                              >
                                <CustomImgRelated
                                  src={sec.content.en.image1}
                                  alt={sec.content.en.title}
                                >
                                  <CustomTitle variant="h5">
                                    {sec.content.en.title}
                                  </CustomTitle>
                                  <CustomTag variant="body2">
                                    {sec.content.en.articleCategory}
                                  </CustomTag>
                                </CustomImgRelated>
                              </Link>
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

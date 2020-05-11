import React, { useRef, useState } from "react";
import { useObserver } from "mobx-react";
import styled, { useTheme } from "styled-components";
import { Container } from "react-bootstrap";
import {
  GridList,
  GridListTile,
  useMediaQuery,
  withStyles,
  Theme,
  createStyles,
  Typography,
  Box,
  makeStyles,
  Tabs,
  Tab
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { BlogStore } from "../../../stores";
import SwipeableViews from "react-swipeable-views";
const CustomImg = styled.div`
  position: relative;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  color: black;
  background: url(${props => `'${props.src}'`});
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

// Tabs

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      width: "100%"
    }
  }
})((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />
));

const TabsHeader = styled(Container)`
  display: flex;
`;

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      color: "#000",
      zIndex: 0,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      borderRadius: 100,
      outline: "none",
      "&:focus": {
        opacity: 1
      }
    }
  })
)((props: StyledTabProps) => <Tab disableRipple={true} {...props} />);

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    verticalAlign: "center",
    zIndex: 0
  },
  padding: {
    padding: theme.spacing(3)
  }
}));
const CustomText = styled.span`
  align-self: center;
  margin-right: 20px;
`;

const BlogGridList: React.FC = () => {
  const screenSize = useMediaQuery("(max-width:700px)");
  const imgSrcHover = useRef<HTMLImageElement>(null);

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return useObserver(() => (
    <Container fluid={true}>
      <TabsHeader fluid={true}>
        <CustomText>Filter By</CustomText>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab
            label="All"
            {...a11yProps(0)}
            style={{
              backgroundColor: value === 0 ? "#00FF00" : "white",
              border: value !== 0 ? "1px solid black" : "none"
            }}
          />
          <StyledTab
            label="Articles"
            {...a11yProps(1)}
            style={{
              backgroundColor: value === 1 ? "#00FF00" : "white",
              border: value !== 1 ? "1px solid black" : "none"
            }}
          />
          <StyledTab
            label="News"
            {...a11yProps(2)}
            style={{
              backgroundColor: value === 2 ? "#00FF00" : "white",
              border: value !== 2 ? "1px solid black" : "none"
            }}
          />
        </StyledTabs>
      </TabsHeader>

      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          <GridList
            cellHeight={400}
            spacing={16}
            cols={screenSize ? 1 : 4}
            rows={screenSize ? 1 : 4}
          >
            {BlogStore.Blogs.sort(
              (a, b) => a.content.en.sortArticle - b.content.en.sortArticle
            ).map(tile => (
              <GridListTile
                key={tile.key}
                cols={
                  screenSize
                    ? 1
                    : (tile.content.en.gridNumberCols > 4
                        ? 4
                        : tile.content.en.gridNumberCols) || 1
                }
                rows={
                  screenSize
                    ? 1
                    : (tile.content.en.gridNumberRows > 4
                        ? 4
                        : tile.content.en.gridNumberRows) || 1
                }
              >
                <Link
                  to={{
                    pathname: `/blog/${tile.content.en.articleInternalURL}`,
                    state: {
                      documentId: tile.key
                    }
                  }}
                >
                  <CustomImg
                    src={tile.content.en.thumbnialImage}
                    alt={tile.content.en.title}
                    ref={imgSrcHover}
                  >
                    <CustomTitle variant="h5">
                      {tile.content.en.title}
                    </CustomTitle>
                    <CustomTag variant="body2">
                      {tile.content.en.articleCategory}
                    </CustomTag>
                  </CustomImg>
                </Link>
              </GridListTile>
            ))}
          </GridList>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <GridList
            cellHeight={400}
            spacing={16}
            cols={screenSize ? 1 : 4}
            rows={screenSize ? 1 : 4}
          >
            {BlogStore.Blogs.sort(
              (a, b) => a.content.en.sortArticle - b.content.en.sortArticle
            ).map(tile => {
              if (tile.content.en.articleCategory === "articles") {
                return (
                  <GridListTile
                    key={tile.key}
                    cols={
                      screenSize
                        ? 1
                        : (tile.content.en.gridNumberCols > 4
                            ? 4
                            : tile.content.en.gridNumberCols) || 1
                    }
                    rows={
                      screenSize
                        ? 1
                        : (tile.content.en.gridNumberRows > 4
                            ? 4
                            : tile.content.en.gridNumberRows) || 1
                    }
                  >
                    <Link
                      to={{
                        pathname: `/blog/${tile.content.en.articleInternalURL}`,
                        state: {
                          documentId: tile.key
                        }
                      }}
                    >
                      <CustomImg
                        src={tile.content.en.thumbnialImage}
                        alt={tile.content.en.title}
                        ref={imgSrcHover}
                      >
                        <CustomTitle variant="h5">
                          {tile.content.en.title}
                        </CustomTitle>
                        <CustomTag variant="body2">
                          {tile.content.en.articleCategory}
                        </CustomTag>
                      </CustomImg>
                    </Link>
                  </GridListTile>
                );
              }
            })}
          </GridList>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <GridList
            cellHeight={400}
            spacing={16}
            cols={screenSize ? 1 : 4}
            rows={screenSize ? 1 : 4}
          >
            {BlogStore.Blogs.sort(
              (a, b) => a.content.en.sortArticle - b.content.en.sortArticle
            ).map(tile => {
              if (tile.content.en.articleCategory === "news") {
                return (
                  <GridListTile
                    key={tile.key}
                    cols={
                      screenSize
                        ? 1
                        : (tile.content.en.gridNumberCols > 4
                            ? 4
                            : tile.content.en.gridNumberCols) || 1
                    }
                    rows={
                      screenSize
                        ? 1
                        : (tile.content.en.gridNumberRows > 4
                            ? 4
                            : tile.content.en.gridNumberRows) || 1
                    }
                  >
                    <Link
                      to={{
                        pathname: `/blog/${tile.content.en.articleInternalURL}`,
                        state: {
                          documentId: tile.key
                        }
                      }}
                    >
                      <CustomImg
                        src={tile.content.en.thumbnialImage}
                        alt={tile.content.en.title}
                        ref={imgSrcHover}
                      >
                        <CustomTitle variant="h5">
                          {tile.content.en.title}
                        </CustomTitle>
                        <CustomTag variant="body2">
                          {tile.content.en.articleCategory}
                        </CustomTag>
                      </CustomImg>
                    </Link>
                  </GridListTile>
                );
              }
            })}
          </GridList>
        </TabPanel>
      </SwipeableViews>
    </Container>
  ));
};
export default BlogGridList;

import React, { useState } from "react";
import { useObserver } from "mobx-react";
import styled, { useTheme } from "styled-components";
import { Container } from "react-bootstrap";
import TypefaceTesterComponent from "../../components/TypefaceTesterComponent";
import { TypefaceStore } from "../../stores";
import SwipeableViews from "react-swipeable-views";
import {
  withStyles,
  Theme,
  createStyles,
  Typography,
  Box,
  makeStyles,
  Tabs,
  Tab
} from "@material-ui/core";

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
const Typefaces: React.FC = () => {
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
    <Container fluid={true} className="pt-5" style={{ marginTop: 120 }}>
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
            label="Free"
            {...a11yProps(1)}
            style={{
              backgroundColor: value === 1 ? "#00FF00" : "white",
              border: value !== 1 ? "1px solid black" : "none"
            }}
          />
          <StyledTab
            label="Premium"
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
          {TypefaceStore.Typefaces.sort(
            (a, b) =>
              a.content.en.typefaceSorting - b.content.en.typefaceSorting
          ).map(val => {
            return (
              <>
                <TypefaceTesterComponent typeface={val} key={val.key} />
              </>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {TypefaceStore.Typefaces.sort(
            (a, b) =>
              a.content.en.typefaceSorting - b.content.en.typefaceSorting
          ).map(val => {
            if (val.content.en.typefaceCategory === "free") {
              return (
                <>
                  <TypefaceTesterComponent typeface={val} key={val.key} />
                </>
              );
            }
          })}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {TypefaceStore.Typefaces.sort(
            (a, b) =>
              a.content.en.typefaceSorting - b.content.en.typefaceSorting
          ).map(val => {
            if (val.content.en.typefaceCategory === "premium") {
              return (
                <>
                  <TypefaceTesterComponent typeface={val} key={val.key} />
                </>
              );
            }
          })}
        </TabPanel>
      </SwipeableViews>
    </Container>
  ));
};
export default Typefaces;

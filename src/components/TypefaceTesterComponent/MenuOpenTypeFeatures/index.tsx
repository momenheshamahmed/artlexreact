import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import { FormControlLabel, Checkbox, CheckboxProps } from "@material-ui/core";
import styled from "styled-components";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    PaperProps={{
      style: {
        maxHeight: 200
      }
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      // backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function MenuOpenTypeFeatures(props) {
  const [state, setState] = React.useState({
    standardLigatures: false,
    contextuaLalternates: false,
    discretionLigatures: false,
    swash: false,
    fractions: false,
    stylisticOne: false,
    stylisticTwo: false,
    stylisticThree: false,
    stylisticFour: false,
    stylisticFive: false,
    stylisticSix: false,
    stylisticSeven: false
  });
  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked });
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const CustomButton = styled.div`
    background: red;
  `;
  const GreenCheckbox = withStyles({
    root: {
      color: "#000",
      "&$checked": {
        color: "#000"
      }
    },
    checked: {}
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />);

  return (
    <div>
      <div
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        className="text-center"
        onClick={handleClick}
      >
        {props.customText ? props.customText : "text here icon"}
      </div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted={true}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* // standardLigatures: boolean;
            // contextuaLalternates: boolean;
            // discretionLigatures: boolean;
            // swash: boolean;
            // fractions: boolean;
            // stylisticOne: boolean;
            // stylisticTwo: boolean;
            // stylisticThree: boolean;
            // stylisticFour: boolean;
            // stylisticFive: boolean;
            // stylisticSix: boolean;
            // stylisticSeven: boolean;
            //  */}
        <StyledMenuItem
          style={{}}>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.standardLigatures}
                onChange={handleChange("standardLigatures")}
                value="standardLigatures"
              />
            }
            label="standard ligatures"
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.contextuaLalternates}
                onChange={handleChange("contextuaLalternates")}
                value="contextuaLalternates"
              />
            }
            label="contextual alternates"
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.discretionLigatures}
                onChange={handleChange("discretionLigatures")}
                value="discretionLigatures"
              />
            }
            label="discretion ligatures"
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.swash}
                onChange={handleChange("swash")}
                value="swash"
              />
            }
            label="swash"
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.fractions}
                onChange={handleChange("fractions")}
                value="fractions"
              />
            }
            label="fractions"
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.stylisticOne}
                onChange={handleChange("stylisticOne")}
                value="stylisticOne"
              />
            }
            label="stylistic"
          />
        </StyledMenuItem>

        <StyledMenuItem>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.stylisticTwo}
                onChange={handleChange("stylisticTwo")}
                value="stylisticTwo"
              />
            }
            label="stylistic"
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.stylisticThree}
                onChange={handleChange("stylisticThree")}
                value="stylisticThree"
              />
            }
            label="stylistic"
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.stylisticFour}
                onChange={handleChange("stylisticFour")}
                value="stylisticFour"
              />
            }
            label="stylistic"
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.stylisticFive}
                onChange={handleChange("stylisticFive")}
                value="stylisticFive"
              />
            }
            label="stylistic"
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.stylisticSix}
                onChange={handleChange("stylisticSix")}
                value="stylisticSix"
              />
            }
            label="stylistic"
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.stylisticSeven}
                onChange={handleChange("stylisticSeven")}
                value="stylisticSeven"
              />
            }
            label="stylistic"
          />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

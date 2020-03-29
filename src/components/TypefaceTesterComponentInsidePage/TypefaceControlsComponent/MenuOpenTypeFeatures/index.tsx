import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {
  FormControlLabel,
  Checkbox,
  CheckboxProps,
  Typography,
  IconButton
} from "@material-ui/core";

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
  console.log("open type features here", props.openTypeFeatures);
  const [state, setState] = React.useState(props.openTypeFeatures);
  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked });
  };
  // useEffect(() => {

  //   props.onChange(state);

  // }[state])
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const GreenCheckbox = withStyles({
    root: {
      color: "#000",
      "&$checked": {
        color: "#000"
      }
    },
    checked: {}
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />);

  useEffect(() => {
    props.onChange(state);
  }, [state]);
  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        className="text-center"
        onClick={handleClick}
      >
        {props.customText ? props.customText : "text here icon"}
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted={true}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.showstandardLigatures === true ||
        props.showcontextuaLalternates === true ||
        props.showdiscretionLigatures === true ||
        props.showswash === true ||
        props.showfractions === true ||
        props.showstylisticOne === true ||
        props.showstylisticTwo === true ||
        props.showstylisticThree === true ||
        props.showstylisticFour === true ||
        props.showstylisticFive === true ||
        props.showstylisticSix === true ||
        props.showstylisticSeven === true ? (
          <>
            {props.showstandardLigatures === true ? (
              <StyledMenuItem>
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
            ) : null}
            {props.showcontextuaLalternates === true ? (
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
            ) : null}
            {props.showdiscretionLigatures === true ? (
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
            ) : null}
            {props.showswash === true ? (
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
            ) : null}
            {props.showfractions === true ? (
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
            ) : null}
            {props.showstylisticOne === true ? (
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
            ) : null}
            {props.showstylisticTwo === true ? (
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
            ) : null}
            {props.showstylisticThree === true ? (
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
            ) : null}
            {props.showstylisticFour === true ? (
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
            ) : null}
            {props.showstylisticFive === true ? (
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
            ) : null}
            {props.showstylisticSix === true ? (
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
            ) : null}
            {props.showstylisticSeven === true ? (
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
            ) : null}
          </>
        ) : (
          <StyledMenuItem>
            <Typography variant="h6">
              Sorry, no OpenType features in this font!
            </Typography>
          </StyledMenuItem>
        )}
      </StyledMenu>
    </div>
  );
}

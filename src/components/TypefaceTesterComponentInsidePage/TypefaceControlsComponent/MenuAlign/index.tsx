import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FormGroup, Radio, IconButton } from "@material-ui/core";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";

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

export default function MenuAlign(props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    console.log("handleChange Radio button", selectedValue);
    console.log("handleChange vaule Radio button", event.target.value);
  };
  useEffect(() => {
    props.onChange(selectedValue);
  }, [selectedValue]);
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
        <FormGroup row={true}>
          <StyledMenuItem>
            <IconButton
              onClick={() => setSelectedValue("a")}
              style={{
                backgroundColor: selectedValue === "a" ? "#000" : "white"
              }}
            >
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChangeRadio}
                value="a"
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
                style={{ display: "none" }}
              />
              <FormatAlignLeftIcon
                style={{ color: selectedValue === "a" ? "#00FF00" : "black" }}
              />
            </IconButton>
          </StyledMenuItem>
          <StyledMenuItem>
            <IconButton
              onClick={() => setSelectedValue("b")}
              style={{
                backgroundColor: selectedValue === "b" ? "#000" : "white"
              }}
            >
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChangeRadio}
                value="b"
                name="radio-button-demo"
                inputProps={{ "aria-label": "B" }}
                style={{ display: "none" }}
              />
              <FormatAlignJustifyIcon
                style={{ color: selectedValue === "b" ? "#00FF00" : "black" }}
              />
            </IconButton>
          </StyledMenuItem>
          <StyledMenuItem>
            <IconButton
              onClick={() => setSelectedValue("c")}
              style={{
                backgroundColor: selectedValue === "c" ? "#000" : "white"
              }}
            >
              <Radio
                checked={selectedValue === "c"}
                onChange={handleChangeRadio}
                value="c"
                name="radio-button-demo"
                inputProps={{ "aria-label": "C" }}
                style={{ display: "none" }}
              />
              <FormatAlignRightIcon
                style={{ color: selectedValue === "c" ? "#00FF00" : "black" }}
              />
            </IconButton>
          </StyledMenuItem>
        </FormGroup>
      </StyledMenu>
    </div>
  );
}

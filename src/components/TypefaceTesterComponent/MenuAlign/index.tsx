import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FormControlLabel, Checkbox, FormGroup } from "@material-ui/core";
import styled from "styled-components";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';

import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';


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
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
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
        {props.customText}
      </div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted={true}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <FormGroup row>
        <StyledMenuItem>
          <FormControlLabel
            control={
              <Checkbox
                icon={<FormatAlignLeftIcon />}
                checkedIcon={<FormatAlignLeftIcon />}
                value="checkedH"
              />
            }
            label=""
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <FormControlLabel
            control={
              <Checkbox
                icon={<FormatAlignJustifyIcon />}
                checkedIcon={<FormatAlignJustifyIcon />}
                value="checkedH"
              />
            }
            label=""
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <FormControlLabel
            control={
              <Checkbox
                icon={<FormatAlignRightIcon />}
                checkedIcon={<FormatAlignRightIcon />}
                value="checkedH"
              />
            }
            label=""
          />
        </StyledMenuItem>
        </FormGroup>
      </StyledMenu>
    </div>
  );
}

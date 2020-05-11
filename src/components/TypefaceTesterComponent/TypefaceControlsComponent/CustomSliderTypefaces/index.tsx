import React, { useState, useLayoutEffect } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { Typography, Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles"
const CustomSlider = withStyles({
  root: {
    color: "#171717",
    padding: "5px 0",
    marginBottom: 10
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#00FF00",
    marginTop: 0,
    marginLeft: -8
  },
  track: {
    height: 2,
    marginTop: 10
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#CACACA",
    marginTop: 10
  }
})(Slider);

interface Props {
  key: string;
  name: string;
  initialNumber: number;
  max?: number;
  min?: number;
  step?: number;
  onChange: (value: number) => void;
}

const CustomSliderTypefaces: React.FC<Props> = props => {
  const numberFromProps = props.initialNumber;
  const [value, setValue] = useState<number>(numberFromProps);
  const handleSliderChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  // props.onChange(value);

  useLayoutEffect(() => {
    props.onChange(value);
  }, [value]);

  return useObserver(() => (
    <div>
      <Row>
        <Col>
          <Typography>{props.name}</Typography>
        </Col>
        <Col>
          <Typography className="text-right font-weight-bold">
            {value}
          </Typography>
        </Col>
      </Row>
      <CustomSlider
        key={props.key}
        name={props.key}
        value={typeof value === "number" ? value : 0}
        onChange={handleSliderChange}
        max={props.max ? props.max : 100}
        min={props.min ? props.min : 0}
        step={props.step ? props.step : 0.5}

      />
    </div>
  ));
};
export default CustomSliderTypefaces;

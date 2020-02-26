import React, { useState, useRef } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  Collapse,
  Button,
  Overlay,
  Popover,
  OverlayTrigger
} from "react-bootstrap";
import {
  Slider,
  Tooltip,
  Typography,
  Menu,
  MenuItem 
} from "@material-ui/core";
import CustomizedMenus from "./Menu";

// Assets

const TypefaceTesterComponent: React.FC = () => {
  interface Prop {
    children: React.ReactElement;
    open: boolean;
    value: number;
  }
  const ValueLabelComponent = (props: Props) => {
    const { children, open, value } = props;
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  };
  const [myFontSize, setFontSize] = useState(90);
  const [myLineHeight, setLineHeight] = useState(90);
  const [myletterSpacing, setLetterSpacing] = useState(1);
  const [open, setOpen] = useState(false);
  
  const handleFontSizeChaning = (event: any, newValue: number | number[]) => {
    setFontSize(newValue);
  };
  const handleLineHeightChaning = (event: any, newValue: number | number[]) => {
    setLineHeight(newValue);
  };
  const handleLetterSpacingChanging = (
    event: any,
    newValue: number | number[]
  ) => {
    setLetterSpacing(newValue);
  };

  const TesterContainer = styled(Container)`
    margin-top: 4vh;
    margin-bottom: 4vh;
  `;
  const TextAreaContainer = styled.div`
    width: 100%;
    height: auto;
    position: relative;
  `;
  const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    border: none;
    font-size: ${myFontSize + "px"};
    line-height: ${myLineHeight + "px"};
    letter-spacing: ${myletterSpacing + "px"};
    overflow: hidden;
  `;
  const TypefaceControls = styled.div`
    height: auto;
    width: 100%;
    background: #f7f7f7;
    padding: 20px 0;
  `;

  return useObserver(() => (
    <TesterContainer>
      <Row>
        <Col>
          <h5>IBM</h5>
        </Col>

        <Col className="text-right">
          <h5>SEE SPECIMEN</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <TextAreaContainer>
            <TextArea readOnly={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </TextArea>
            <TypefaceControls>
              <Container>
                <Row>
                  <Col md={3}>
                    <Row>
                      <Col>
                        <Typography>Tracking</Typography>
                      </Col>
                      <Col>
                        <Typography className="text-right font-weight-bold">
                          {myFontSize}
                        </Typography>
                      </Col>
                    </Row>

                    <Slider
                      ValueLabelComponent={ValueLabelComponent}
                      aria-label="custom thumb label"
                      defaultValue={90}
                      value={myFontSize}
                      onChange={handleFontSizeChaning}
                    />
                  </Col>

                  <Col md={3}>
                    <Row>
                      <Col>
                        <Typography>Line Height</Typography>
                      </Col>
                      <Col>
                        <Typography className="text-right font-weight-bold">
                          {myLineHeight}
                        </Typography>
                      </Col>
                    </Row>

                    <Slider
                      ValueLabelComponent={ValueLabelComponent}
                      aria-label="custom thumb label"
                      defaultValue={90}
                      value={myLineHeight}
                      onChange={handleLineHeightChaning}
                    />
                  </Col>
                  <Col md={3}>
                    <Row>
                      <Col>
                        <Typography>Leading</Typography>
                      </Col>
                      <Col>
                        <Typography className="text-right font-weight-bold">
                          {myletterSpacing}
                        </Typography>
                      </Col>
                    </Row>

                    <Slider
                      ValueLabelComponent={ValueLabelComponent}
                      aria-label="custom thumb label"
                      defaultValue={90}
                      value={myletterSpacing}
                      onChange={handleLetterSpacingChanging}
                    />
                  </Col>

                  <Col md={1}>
                    <Typography>Test</Typography>
                  </Col>
                  <Col md={1}>
                      <CustomizedMenus customText="Momen Hesham"/>
                  </Col>
                  <Col md={1}>Maghrabi</Col>
                  <Col md={12} className="text-center">
                    <Button
                      onClick={() => setOpen(!open)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open}
                    >
                      click
                    </Button>
                    <Collapse in={open}>
                      <div id="example-collapse-text">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </div>
                    </Collapse>
                  </Col>
                </Row>
              </Container>
            </TypefaceControls>
          </TextAreaContainer>
        </Col>
      </Row>
    </TesterContainer>
  ));
};
export default TypefaceTesterComponent;

import React, { useState, useLayoutEffect } from "react";
import { useObserver } from "mobx-react";
import styled from "styled-components";

const TextAreaComponent: React.FC = props => {
  // props.onChange(value);

  const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    border: none;
    font-size: ${props => `${props.fontSize}px`};
    overflow: hidden;
  `;
  const [myFontSize, setMyFontSize] = useState(20);
  useLayoutEffect(() => {
    setMyFontSize(props.fontSize);
  }, [props.fontSize]);
  return useObserver(() => (
    <div>
      <TextArea fontSize={typeof myFontSize === "number" ? myFontSize : 20}>
        {props.words ? props.words : "lorem ipsum"}
      </TextArea>
    </div>
  ));
};
export default TextAreaComponent;

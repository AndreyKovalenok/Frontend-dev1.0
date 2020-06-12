import styled from "@emotion/styled";

const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out 0.7s;
  display: flex;
  align-items: center;
  height: 100%;
  width: ${(props) => props.width}px;
  margin-left: 17%;
`;

export default SliderContent;

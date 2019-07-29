import styled, { css } from "styled-components";

function createCSS(itemCount, x, y) {
  let styles = "";

  let angle = 360 / itemCount;
  let rot = 0;

  for (let i = 0; i < itemCount; i += 1) {
    styles += `
              &:nth-of-type(${i + 1}) {
                transform:
                  rotate(${rot * 1}deg)
                  translate(${x}vw,${y}vh)
                  rotate(${rot * -1}deg);
              }
         `;
    rot = rot + angle;
  }

  console.log(styles);

  return css`
    ${styles}
  `;
}

export const NetworkRadarContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  .radar-circle {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 100%;

    @media (min-width: 769px) {
      top: 50%;
    }
  }

  .radar-person {
    width: 80px;
    height: 100px;
    background: rgba(255, 0, 0, 0.3);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;

export const Circle = styled.div`
  /*https://css-tricks.com/snippets/sass/placing-items-circle/*/
  position: relative;
  width: 45vw;
  height: 40vh;
  padding: 0;
  border-radius: 50%;
  list-style: none;

  > * {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 100px;
    margin: -40px;
    background: red;

    ${props => createCSS(props.itemCount)};
  }
`;

export const RadarCloseFamily = styled.div`
  /* width: 20vw;
  height: 20vh;
  z-index: 4;

  @media (min-width: 769px) {
    width: 25vw;
    height: 20vh;
  } */
  position: relative;
  width: 20vw;
  height: 20vh;
  padding: 0;
  border-radius: 50%;
  list-style: none;

  > * {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 100px;
    margin: -40px;
    background: red;

    ${props => createCSS(props.itemCount, 10, 10)};
  }
`;
export const RadarFamily = styled.div`
  /* width: 45vw;
  height: 45vh;
  z-index: 3;

  @media (min-width: 769px) {
    width: 45vw;
    height: 40vh;
  } */
  position: relative;
  width: 40vw;
  height: 40vh;
  padding: 0;
  border-radius: 50%;
  list-style: none;

  > * {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 100px;
    margin: -40px;
    background: red;

    ${props => createCSS(props.itemCount, 20, 20)};
  }
`;
export const RadarFriends = styled.div`
  /* width: 70vw;
  height: 70vh;
  z-index: 2;

  @media (min-width: 769px) {
    width: 70vw;
    height: 65vh;
  } */
  position: relative;
  width: 70vw;
  height: 70vh;
  padding: 0;
  border-radius: 50%;
  list-style: none;

  > * {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 100px;
    margin: -40px;
    background: red;

    ${props => createCSS(props.itemCount, 35, 35)};
  }
`;
export const RadarOther = styled.div`
  /* width: 95vw;
  height: 95vh;
  z-index: 1;

  @media (min-width: 769px) {
    width: 95vw;
    height: 90vh;
  } */
  position: relative;
  width: 90vw;
  height: 90vh;
  padding: 0;
  border-radius: 50%;
  list-style: none;

  > * {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 100px;
    margin: -40px;
    background: red;

    ${props => createCSS(props.itemCount, 45, 45)};
  }
`;

export const RadarGroup = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 75vw;
  height: 75vw;
  transform: translate(-50%, -50%);

  @media (min-width: 769px) {
    width: 95vw;
    height: 90vh;
  }
`;

export default NetworkRadarContainer;

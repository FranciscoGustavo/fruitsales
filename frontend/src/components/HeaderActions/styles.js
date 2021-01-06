import styled from 'styled-components';

export const HeaderCSS = styled.div`
height: 50px;
padding: 0px 28px;
background-color: #FFF;
> button {
  height: 100%;
  padding: 14px;
  margin-right: 0;
  border-left: solid 1px gray;
  background-color: transparent;
  cursor: pointer;

  &:last-child {
    border-right: solid 1px gray;
  }
}
`;
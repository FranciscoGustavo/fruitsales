import styled from 'styled-components';

export const InputTextCSS = styled.div`
> div {
  display: flex;
  border-radius: 7px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 0px 2px;
  overflow: hidden;

  select, input {
    display: inline-flex;
    width: 100%;
    padding: 12px;
    outline: none;
    resize: none;
  }
}
`;
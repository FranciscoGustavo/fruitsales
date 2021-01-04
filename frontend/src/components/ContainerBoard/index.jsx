import { HeaderActions } from '../index';
import { ContainerCSS, WrapperCSS } from './styles';

const ContainerBoard = ({ children }) => {
  return (
    <ContainerCSS>
      <HeaderActions />
      <WrapperCSS>
        {children}
      </WrapperCSS>
    </ContainerCSS>
  );
}

export default ContainerBoard;
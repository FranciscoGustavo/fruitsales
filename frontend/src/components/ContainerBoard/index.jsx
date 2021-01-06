import { HeaderActions } from '../index';
import { ContainerCSS, WrapperCSS } from './styles';

const ContainerBoard = ({ children, handleNew }) => {
  return (
    <ContainerCSS>
      <HeaderActions
        handleNew={handleNew}
      />
      <WrapperCSS>
        {children}
      </WrapperCSS>
    </ContainerCSS>
  );
}

export default ContainerBoard;
import styled from 'styled-components';

const StyledButton = styled.button`
  background : transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color : palevioletred;

  ${props => props.primary && 
  `
  background: palevioletred;
  color: white;
  `}
`;

export default StyledButton;
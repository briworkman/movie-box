import styled from "styled-components";

const StyledSpinner = styled.div`
  border: 5px solid white; /* Light grey */
  border-top: 5px solid black; /* Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default StyledSpinner;

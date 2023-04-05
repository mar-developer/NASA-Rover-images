import styled from "vue-styled-components";

export const LoadingContainer = styled.div`
  margin-top: 2em;
  width: 100%;
`
export const Loader = styled.div`
  border: 6px solid ${(props) => props.theme.colors.grey3};
  border-top: 6px solid ${(props) => props.theme.colors.blue};
  border-radius: 100%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
import styled from "vue-styled-components";

export const CardWrapper = styled.div`
  box-shadow: 0 2px 7px 3px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 350px;
  margin: 1rem;
`
export const CardTitle = styled.div`
  padding: 20px
  font-size: 18px;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey3};
`
export const CardImage = styled.img`
  max-width: 100%;
`
export const CardDescription = styled.div`
  padding: 1rem;

  p {
    text-align: center;
    font-size: 14px;
    margin: 0;
  }
`
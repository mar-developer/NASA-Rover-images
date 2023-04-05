import styled from "vue-styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.purple};
  padding: 10px 20px;
`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    a {
        font-size: 14px;
        padding: 0 20px;
        color: ${(props) => props.theme.colors.white};
        text-decoration: none;
    }
`;

export const LogoWrapper = styled.div`
    margin-right: 20px;

    img {
        width: 50px;
    }
`;

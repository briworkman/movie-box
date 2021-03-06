import styled from "styled-components";

export const StyledHeader = styled.div`
  background: #1b252b;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    display: flex;
    max-width: 1280px;
    min-height: 50px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

export const StyledRMDBLogo = styled.img`
  width: 100px;
  margin-top: -15px;

  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 122px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;

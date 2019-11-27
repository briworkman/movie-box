import styled from "styled-components";

export const StyledSearchBar = styled.div`
  width: 65%;
  height: 75px;
  padding: 15px 20px 0px 20px;
  box-sizing: border-box;
  color: #fff;
  margin: 0 auto;
`;

export const StyledSearchBarContent = styled.div`
  max-width: 100%;
  width: 100%;
  height: 55px;
  background: #353535;
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  color: #fff;

  .fa-search {
    position: absolute;
    left: 20px;
    top: 12px;
    color: #fff;
    z-index: 1000;
  }

  input {
    font-family: "Abel", sans-serif;
    font-size: 28px;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: #fff;
    box-sizing: border-box;

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`;

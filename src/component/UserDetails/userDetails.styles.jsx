import styled from "styled-components";

export const UserDetailsDiv = styled.div`
margin-left: 12px;
display: flex;
margin-top: 12px;

.avatar {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: 1px solid black;
}

h3 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
}

.userName{
    margin-left: -36px;
}

.displayName {
    margin-left: -15px;
}
`
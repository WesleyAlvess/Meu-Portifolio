import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 10px;
    width: 90%;

    nav{
        width: 90%;
        margin: 0 auto;
        padding: 15px 35px;
        background-color: darkgray;
        border-radius: 5px;
        z-index: 5;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    div{
        display: flex;
        gap: 30px;
    }
    
    p{
        font-size: 20px;
        font-weight: 500;
        color: #ecf1f8;
        &:hover{
            color: #FA8900;
        }
    }
    h1{
        color: #ecf1f8;
        font-size: 25px;
        &:hover{
            color: #FA8900;
        }
    }
    img{
        width: 50px;
    }

`;

export const SocialMedia = styled.div`
    font-size: 25px;

    .fa-github{ 
        color: white;
        &:hover{
            color: #B9BBBD;
        }
        &:active{
        transform: translateY(5px);
    }
    }
    .fa-linkedin{
        color: white;
        &:hover{
            color: #0A66C2;
        }
        &:active{
        transform: translateY(5px);
    }
    }
    .fa-square-instagram{
        color: white;
        &:hover{
            color: #C5357A;
        }
        &:active{
            transform: translateY(5px);
    }
    }

  
`
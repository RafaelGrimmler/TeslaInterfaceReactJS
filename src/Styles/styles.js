import { createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body,  #root {
        height: 100%;
    }
    
    body {
        font: 14px 'Lato', sans-serif;
        height: 100vh;
        scroll-snap-type: y mandatory;
    }

    ul {
        list-style: none;
    }
`;
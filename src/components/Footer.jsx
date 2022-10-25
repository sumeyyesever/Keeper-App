import React from "react";

const date = new Date();
let y = date.getFullYear();

function Footer(){
    return <footer><p>Copyright {y}</p></footer>
}

export default Footer;
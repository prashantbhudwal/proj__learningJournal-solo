import el from "./DOMElements.js";
// <!-- Header Component -->
const footer = /*HTML*/ ` 
    <footer class="footer_container">
        <h2 class="footer__siteName big-heading">My Learning Journal</h2>
        <p class="footer__copyrightText">Copyright 2023</p>
    </footer>
`;

el.mainContainer.insertAdjacentHTML("afterend", footer);

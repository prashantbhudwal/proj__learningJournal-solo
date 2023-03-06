import el from "./DOMElements.js";
// <!-- Header Component -->
const header = /*HTML*/ ` 
    <header class="header_container">
        <div class="header__logo">
        </div>
        <p class="header__title">My Learning Journal</p>
        <nav class="header__nav">
            <ul class="nav__container">
                <li class="nav__home nav__item"><a href="/article.html">Home</a></li>
                <li class="nav__about nav__item"><a href="/about.html">About</a></li>
            </ul>
        </nav>
    </header>                                                   
`;

el.mainContainer.insertAdjacentHTML("afterbegin", header);

import el from "./DOMElements.js";
// <!-- Header Component -->
const recentPosts = /*HTML*/ ` 
    <div class="post_container">
                <div class="post__thumbnail">
                    <img src="./img/article-image-01.png" alt="">

                </div>
                <p class="post__date date">July 25, 2022</p>
                <h1 class="post__heading big-heading">My new journey as a bootcamp student.</h1>
                <p class="post__summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor
                    nobis,
                    reiciendis maiores hic </p>
            </div>
            <div class="post_container">
                <div class="post__thumbnail">
                    <img src="./img/article-image-02.png" alt="">
                </div>
                <p class="post__date date">July 25, 2022</p>
                <h1 class="post__heading big-heading">My new journey as a bootcamp student.</h1>
                <p class="post__summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor
                    nobis.</p>
            </div>
            <div class="post_container">
                <div class="post__thumbnail">
                    <img src="./img/article-image-02.png" alt="">
                </div>
                <p class="post__date date">July 25, 2022</p>
                <h1 class="post__heading big-heading">My new journey as a bootcamp student.</h1>
                <p class="post__summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor
                    nobis.</p>
            </div>
            <div class="post_container">
                <div class="post__thumbnail">
                    <img src="./img/article-image-02.png" alt="">
                </div>
                <p class="post__date date">July 25, 2022</p>
                <h1 class="post__heading big-heading">My new journey as a bootcamp student.</h1>
                <p class="post__summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor
                    nobis.</p>
            </div>
            <div class="post_container">
                <div class="post__thumbnail">
                    <img src="./img/article-image-02.png" alt="">
                </div>
                <p class="post__date date">July 25, 2022</p>
                <h1 class="post__heading big-heading">My new journey as a bootcamp student.</h1>
                <p class="post__summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor
                    nobis.</p>
            </div>
            <a href="#" class="view-more">View More</a>
`;

el.recentContainer.insertAdjacentHTML("afterbegin", recentPosts);

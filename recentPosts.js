import el from "./DOMElements.js";
import postSummaries from "./postSummaryData.js";

// <!-- RecentPosts Component -->

const transformDate = function (unformattedDate) {
  const date = new Date(unformattedDate);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return formattedDate;
};

const getRecentPosts = function getRecentPostsHtml() {
  const recentPostsHtml = postSummaries.map((post) => {
    return /*HTML*/ `  <div class="post_container">
                <div class="post__thumbnail">
                    <img src=${post.image} alt="">
                </div>
                <p class="post__date date">${transformDate(post.date)}</p>
                <h1 class="post__heading big-heading">${post.title}</h1>
                <p class="post__summary">${post.summary}</p>
            </div>`;
  });
  return recentPostsHtml;
};

el.recentContainer.insertAdjacentHTML("afterbegin", getRecentPosts());

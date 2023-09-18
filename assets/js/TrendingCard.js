function TrendingCard({ id, title, trendTitle, description, image, category }) {
    return `
        <div class = "trending__product swiper-slide" data-id='${id}' data-category='${category}'>
            <div class='trending__product__image'>
                <img src='${image}' alt='${title}'/>
            </div>
            <div class="trending__product__description">
                <div class="trending__product__text">
                    <h1 class="title">
                        <span>${trendTitle.split(" ")[0]}</span>
                        <p>${trendTitle.split(" ").slice(1).join(" ")}</p>
                    </h1>
                    <p class="category"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                    <p class="desc">${description}</p>
                </div>
                
            </div>
        </div>
    `;
}

export default TrendingCard;

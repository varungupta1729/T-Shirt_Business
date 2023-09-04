function ProductCard({ id, title, price, image, image2, category }) {
    return `<div class="swiper-slide product-card" data-id="${id}" data-category="${category}" data-image1="${image}" data-image2="${image2}">
                <div class="product-card__image">
                    <img src="${image}" alt="${title}" />
                </div>
                <div class="product-card__description">
                    <div class="row1">
                        <div class="product-card__title">${title}</div>
                        <button class="product-card__btn btn">
                            
                        </button>
                    </div>
                    <div class="row1">
                        <div class="product-card__price">${price} GSM</div>
                        <a href="https://api.whatsapp.com/send?phone=+917617730973&text=My Enquiry is about ${title} \n GSM:${price} \n Question :"  target="_blank"> <button class="explore-more btn">Enquiry<i class="bi bi-whatsapp "></i></button></a>
                    </div>
                    <span class="border-animation"></span>
                    <span class="border-animation"></span>
                    <span class="border-animation"></span>
                </div>
            </div>`;
}

export default ProductCard;

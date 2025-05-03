let assetUrl = '/assets/img/';

function renderIcon() {
    let iconEls = document.querySelectorAll('.jsIcon');
    if (iconEls.length > 0) {
        iconEls.forEach(iconEl => {
            let useEl = document.createElementNS('http://www.w3.org/2000/svg', 'use'),
                url = assetUrl + 'icon/icons.svg#' + iconEl.dataset.id;
            useEl.setAttribute('href', url);
            iconEl.classList.add('he-icon')
            iconEl.appendChild(useEl)
        });
    }
}

window.addEventListener('load', function() {
    renderIcon();
    // <svg class="he-icon jsIcon" data-id="i-close"></svg>
});
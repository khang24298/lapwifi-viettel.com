// Get base path to ensure icons work in all contexts (http, https, file)
function getBasePath() {
    // For file:// protocol, we need an absolute path
    if (window.location.protocol === 'file:') {
        // Get the directory part of the current page URL
        let pathParts = window.location.pathname.split('/');
        pathParts.pop(); // Remove the HTML file name
        return pathParts.join('/') + '/assets/img/';
    }
    // For http/https, relative path works fine
    return './assets/img/';
}

function renderIcon() {
    console.log('Rendering icons...');
    let iconEls = document.querySelectorAll('.jsIcon');
    console.log('Found ' + iconEls.length + ' icons to render');
    
    if (iconEls.length > 0) {
        // Get the base path dynamically
        let assetUrl = getBasePath();
        console.log('Using asset URL: ' + assetUrl);
        
        iconEls.forEach(iconEl => {
            // Check if the icon already has a <use> element to avoid duplicates
            if (iconEl.querySelector('use')) {
                console.log('Icon already has a use element, skipping: ' + iconEl.dataset.id);
                return;
            }
            
            let useEl = document.createElementNS('http://www.w3.org/2000/svg', 'use');
            let iconId = iconEl.dataset.id;
            let url = assetUrl + 'icon/icons.svg#' + iconId;
            
            useEl.setAttribute('href', url);
            iconEl.classList.add('he-icon');
            iconEl.appendChild(useEl);
            console.log('Added icon: ' + iconId + ' with URL: ' + url);
        });
    }
}

// Run immediately and also on window load to catch all cases
renderIcon();

window.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded - rendering icons');
    renderIcon();
});

window.addEventListener('load', function() {
    console.log('Window load - rendering icons');
    renderIcon();
});
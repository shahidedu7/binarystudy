// Function to load components dynamically
async function loadComponent(id, file) {
    const element = document.getElementById(id);
    if (element) {
        const response = await fetch(file);
        const content = await response.text();
        element.innerHTML = content;
    }
}

// Load header and footer
loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');

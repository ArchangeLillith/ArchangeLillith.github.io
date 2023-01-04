document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    if (!isDropdownButton && e.target.closest('[data-dropdown]') !== null) {
        console.log('clicking on closest');
        return;
    } 

    let currentDropdown;
    if (isDropdownButton) {
        console.log('toggling active');
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) {
            console.log('not removing active on current dropdown')
            return;
        }
        console.log('removing active on not current dropdowns')
        dropdown.classList.remove('active');
    })
})
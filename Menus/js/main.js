/*
    Function takes an object as a parameter to
    determine where to display the context menu

    menu:
        value       - Text to display
        icon        - True for default icon, false for no icon, or a string for a custom icon
        function    - Function to call when clicked
        type        - Type of menu item (critical, warning, success, info)
*/

function showContextMenu(obj, menu) {
    // If the context menu is already open, close it first
    if (document.querySelector(".contextMenu")) {
        dissmissContextMenu();
    }

    // Add span to close the context menu
    var closeSpan = document.createElement("span");
    closeSpan.className = "contextMenuClose";
    closeSpan.onclick = dissmissContextMenu;

    // Create the context menu
    var contextMenu = document.createElement("div");
    contextMenu.className = "contextMenu";

    // Create the menu items
    menu.forEach(array => {
        if (array.value == "divider") {
            // If the menu item is a divider, create a divider
            var divider = document.createElement("hr");
            divider.className = "contextMenuDivider";
            contextMenu.appendChild(divider);
            return;
        } else if (array.value == "title") {
            // Create the title and add it to the context menu
            var titleP = document.createElement("p");
            titleP.className = "contextMenuTitle";
            titleP.innerHTML = array.text;
            contextMenu.appendChild(titleP);
            // Add a divider after the title
            var divider = document.createElement("hr");
            divider.className = "contextMenuDivider";
            contextMenu.appendChild(divider);
            return;
        }

        // Create the menu item
        itemBtn = document.createElement("button");
        itemBtn.className = "contextMenuItem";
        itemBtn.onclick = array.function;

        if (array.type == "critical") {
            itemBtn.classList.add("contextMenuItem__critical");
        } else if (array.type == "warning") {
            itemBtn.classList.add("contextMenuItem__warning");
        } else if (array.type == "success") {
            itemBtn.classList.add("contextMenuItem__success");
        } else if (array.type == "info") {
            itemBtn.classList.add("contextMenuItem__info");
        }

        // Create the icon for the action
        itemIcon = document.createElement("span");
        itemIcon.className = "contextMenuIcon";
        // Determine if the menu item has an icon
        if (array.icon != null) {
            itemIcon.innerHTML = array.icon;
        } else {            
           itemIcon.innerHTML = '';
        }
        itemBtn.appendChild(itemIcon);

        // Create the text for the action
        itemText = document.createElement("p");
        itemText.className = "contextMenuText";
        itemText.innerHTML = array.value;
        itemBtn.appendChild(itemText);

        // Add menu item to the context menu
        contextMenu.appendChild(itemBtn);
    });

    // Add the context menu to the body
    document.body.appendChild(contextMenu);
    document.body.appendChild(closeSpan);

    // Get position of the item clicked or the mouse
    try {
        var posX = event.clientX + 5;
        var posY = event.clientY + 5;
    } catch (error) {
        var posX = obj.offsetLeft + (bj.offsetWidth * 0.6) + 2;
        var posY = obj.offsetTop + obj.offsetHeight + 2
    }

    // Move the context menu if it is off the screen
    if (posX + contextMenu.offsetWidth > window.innerWidth) {
        posX = window.innerWidth - (contextMenu.offsetWidth + 5);
    }
    if (posY + contextMenu.offsetHeight > window.innerHeight) {
        posY = window.innerHeight - (contextMenu.offsetHeight + 5);
    }

    contextMenu.style.left = posX + "px";
    contextMenu.style.top = posY + "px";

    setTimeout(function() {
        contextMenu.classList.add("contextMenu__show");
    }, 1);
}

function dissmissContextMenu() {
    // Remove the close span
    var contextMenu = document.querySelectorAll(".contextMenuClose");
    contextMenu.forEach(menu => {
        menu.remove();
    });

    // Get the context menu
    var contextMenu = document.querySelectorAll(".contextMenu");

    contextMenu.forEach(menu => {
        menu.classList.add("contextMenu__hide");
        // Animatin should be 500ms
        setTimeout(function() {
            menu.remove();
        }, 500);
    });
}
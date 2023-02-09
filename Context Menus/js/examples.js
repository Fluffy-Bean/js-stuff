function contextAtMouse(obj) {
    showContextMenu(obj, [
        {
            'value': 'gwagwa',
            'function': dissmissContextMenu
        },
        {
            'value': 'gwagwa',
            'function': dissmissContextMenu
        }
    ])
}
function contextAtButton(obj) {
    showContextMenu(obj, [
        {
            'value': 'gwagwa',
            'function': dissmissContextMenu
        },
        {
            'value': 'gwagwa',
            'function': dissmissContextMenu
        }
    ], 'button')
}
function contextAtCenter(obj) {
    showContextMenu(obj, [
        {
            'value': 'gwagwa',
            'function': dissmissContextMenu
        },
        {
            'value': 'gwagwa',
            'function': dissmissContextMenu
        }
    ], 'center')
}

function contextImageAction(obj) {
    showContextMenu(obj, [
        {
            'value': 'title',
            'text': 'Image actions',
        },
        {
            'value': 'Copy Link',
            'icon': link,
            'function': dissmissContextMenu
        },
        {
            'value': 'Download',
            'icon': download,
            'function': dissmissContextMenu
        },
        {
            'value': 'divider',
        },
        {
            'value': 'Edit',
            'icon': edit,
            'function': dissmissContextMenu,
            'type': 'critical'
        },
        {
            'value': 'Delete',
            'icon': trash,
            'function': dissmissContextMenu,
            'type': 'critical'
        },
        {
            'value': 'divider',
        },
        {
            'value': 'Edit',
            'icon': edit,
            'function': dissmissContextMenu,
            'type': 'warning'
        },
        {
            'value': 'Delete',
            'icon': trash,
            'function': dissmissContextMenu,
            'type': 'warning'
        },
        {
            'value': 'divider',
        },
        {
            'value': 'Edit',
            'icon': edit,
            'function': dissmissContextMenu,
            'type': 'success'
        },
        {
            'value': 'Delete',
            'icon': trash,
            'function': dissmissContextMenu,
            'type': 'success'
        },
        {
            'value': 'divider',
        },
        {
            'value': 'Edit',
            'icon': edit,
            'function': dissmissContextMenu,
            'type': 'info'
        },
        {
            'value': 'Delete',
            'icon': trash,
            'function': dissmissContextMenu,
            'type': 'info'
        },
        {
            'value': 'divider',
        },
        {
            'value': 'gwagwa',
            'function': dissmissContextMenu
        }
    ])
};
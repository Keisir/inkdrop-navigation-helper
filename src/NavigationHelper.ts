'use babel';

import { BringToNotebook } from './BringToNotebook';
import { NavigationHistory } from './NavigationHistory';

class NavigationHelperPlugin {
    activate = async () => {
        if (inkdrop.config.get('navigation-helper.navigationHistory')) {
            inkdrop.components.registerClass(NavigationHistory);
            inkdrop.layouts.insertComponentToLayoutBefore('sidebar-menu', 'SideBarMenuItemAllNotes', NavigationHistory.name);
        }
        if (inkdrop.config.get('navigation-helper.bringToNotebook')) {
            inkdrop.components.registerClass(BringToNotebook);
            inkdrop.layouts.insertComponentToLayoutBefore('editor-meta', 'EditorMetaNotebook', BringToNotebook.name);
        }
    };

    deactivate = async () => {
        inkdrop.layouts.removeComponentFromLayout('sidebar-menu', NavigationHistory.name);
        inkdrop.components.deleteClass(NavigationHistory);

        inkdrop.layouts.removeComponentFromLayout('editor-meta', BringToNotebook.name);
        inkdrop.components.deleteClass(BringToNotebook);
    };
}

const plugin = new NavigationHelperPlugin();

module.exports = {
    config: {
        navigationHistory: {
            title: 'Show navigation history',
            description:
                'If this function is activated, a component is displayed in the sidebar with which you can navigate backwards and forwards in the history of the notes you have visited. (This plugin must be reloaded to apply this setting)',
            type: 'boolean',
            default: true
        },
        bringToNotebook: {
            title: 'Bring to notebook',
            description:
                'If this feature is activated, a button is displayed above the editor that you can use to quickly navigate to the notebook of the current note. (This plugin must be reloaded to apply this setting)',
            type: 'boolean',
            default: true
        }
    },
    activate() {
        plugin.activate();
    },
    deactivate() {
        plugin.deactivate();
    }
};

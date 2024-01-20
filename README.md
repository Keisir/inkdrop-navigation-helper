# Navigation Helper

This plugin simplifies the navigation in Inkdrop.
It offers the backward and forward navigation via the mouse buttons 3 and 4.
Additionally, a visual component can be added via the settings, which enables the forward and backward navigation.

![Screenshot Navigation Component](./img/navigation-component.png)

## Usage

The navigation is based on two commands provided by Inkdrop.

| Control                   | Command                 |
| ------------------------- | ----------------------- |
| <kbd>Mouse Button 3</kbd> | `core:navigate-back`    |
| <kbd>Mouse Button 4</kbd> | `core:navigate-forward` |

## Install

```bash
ipm install navigation-helper
```

## Contact

If you have any suggestions for this plugin, feel free to share them with me by opening an [issue on Github](https://github.com/keisir/inkdrop-navigation-helper/issues).

If you find a bug, you can also submit it to me by opening an [issue on Github](https://github.com/keisir/inkdrop-navigation-helper/issues).

## Changelog

### 1.1.1 - Support Inkdrop `>= 5.6.3`
- Fixed a bug that affected the layout when the plugin was used with Inkdrop `>= 5.6.3`.

### 1.1.0 - UX
- Arrow keys are now slightly larger
- The arrow keys are now disabled when navigation in that direction is not possible.

### 1.0.0 - Initial release
- Added basic UI component for navigation
- Added mapping between mouse buttons and navigation commands

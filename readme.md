# Bottom Tabs Navigator
Creates Tab Navigator in Yugal

## How to use this library?
- Render Bottom Tab Navigator as a screen in Yugal, this can be done with Router and as well as yugal.navigate directly. But you have to parse some arguments into it.
- All paramaters must be defined into an object.
### style
Defined css for Bottom Tab Navigator. `string` is accepted.
### tabs
An array of all tabs as objects. Objects must be having `icon`, `label` and destination `screen`.
### hideLabel
If `true`, then label will be hidden in tab navigator.
### initial
Defined initial screen to render into the navigator.

## Example Code
```javascript
window.addEventListener("load", () => {
    yugal.navigate(BottomTabNavigator({
        style: "background: #fff;",
        tabs: [
            {
                icon: "HOME",
                label: "WORLD",
                screen: "HomePage()"
            },
            {
                icon: "ABOUT",
                label: "IKHKHNI",
                screen: "About()"
            }
        ],
        hideLabel: true,
        initial: ()=>HomePage()
    }
    ));
});
```

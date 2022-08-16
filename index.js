const setView = ({ willMount, onMount, render, uri, historyTitle }) => {
    const viewslot = document.getElementById("bottom_tabs_view");
    try {
        historyTitle = !historyTitle ? uri : historyTitle;
        if (willMount !== undefined) {
            willMount();
        }
        if (render !== undefined) {

            if (viewslot.innerHTML = render) {
                if (onMount !== undefined) {
                    onMount();
                }
            }
            if (uri !== undefined) {
                history.pushState({ urlPath: `./${uri}` }, historyTitle, `./${uri}`)
                YugalVars.pageNum++;
            }
        } else {
            yugal.navigate(YugalErrorPage("RENDER ARGUMENT NOT SUPPLIED", "Can't find code to render."))
        }
    } catch (error) {
        yugal.navigate(YugalErrorPage('Something went wrong, check below', error))
    }
}
function BottomTabNavigator({ initial, tabs, style, hideLabel }) {

    let all_tabs = "";
    style = style ? style : "";
    tabs.forEach(tab => {
        if (hideLabel == true) {
            tab_lbl = '';
        } else {
            tab_lbl = `<span class="tab_label">${tab.label}</span>`;
        }
        all_tabs = `${all_tabs}<div onclick="setView(${tab.screen})"><span class="tab_icon">${tab.icon}</span>${tab_lbl}</div>`;
    });
    return {
        onMount: ()=>{
            setView(initial())
        },
        render: `
        <section style="width:100vw;height:100vh" id="bottom_tabs_view"></section>
            <div id="bottom_tab_navigator" style="${style}">${all_tabs}</div>

        `
    }
}

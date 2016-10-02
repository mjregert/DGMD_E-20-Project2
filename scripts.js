/* Javascript finctions */

function resize() {
    // Get a handle to the navigation div tag
    var navigation = document.getElementById("nav");
    if (navigation.className == "expanded") {
        // div is expanded, so collapse it
        navigation.className = "collapsed";
        navigation.style.width = "0px";
    } else {
        // div is collapsed, so expand it
        navigation.className = "expanded";
        navigation.style.width = "100px";
    }
}

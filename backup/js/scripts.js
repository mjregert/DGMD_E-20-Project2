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





function onLoadHandler() {
    // For now, just calling resize which does the resize code for the elements
    onResizeHandler();
}

function onResizeHandler() {
    // Get a handle to the elements
    var left = document.getElementById("leftcolumn");
    var right = document.getElementById("rightcolumn");
    /* Reset the elements to their "original values".  This is needed in case
       the user resizes the window larger, then smaller */
    left.style.height = "initial";
    right.style.height = "initial";

    // Set the two containers to the size of the largest one
    if (left.offsetHeight > right.offsetHeight) {
        right.style.height = left.offsetHeight + "px";
    } else {
        left.style.height = right.offsetHeight + "px";
    }
}

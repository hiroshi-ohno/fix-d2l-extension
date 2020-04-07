// This iframe is the area where remote plug-in is hosted.
// This script might be loaded into unrelated page.
// The script proceeds only if the target iframe is in the document.
var remoteIframe = document.getElementById("remoteIframe");
if (remoteIframe != null) {
    remoteIframe.onload = function() {
        adjustRemoteIframeHeight();

        // Listen to resize event after iframe is loaded.
        window.onresize = function() {
            adjustRemoteIframeHeight();
        };
    };
}

// This function is called both at the time of load and resize.
function adjustRemoteIframeHeight() {
    try {
        var iframe = document.getElementById("remoteIframe");
        var iframeTop = iframe.getBoundingClientRect().top;

        // d_content_inner div is the dialog area but does not include D2L button region.
        var contentInnerBottom = document.getElementById("d_content_inner").getBoundingClientRect().bottom;

        // Adjust iframe height to exactly the rendered height, which is from the top of iframe to the bottom of d_content_inner.
        let adjustedHeight = (contentInnerBottom - iframeTop).toString();
        console.log("Adjusting the height of remoteIframe: " + adjustedHeight);
        iframe.setAttribute("height", adjustedHeight);
    } catch(e) {
        // Log any error and pass.
        console.log(e);
    }
}

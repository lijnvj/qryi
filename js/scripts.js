!function(){"use strict"
function e(){l.each(r,function(e,a){var n=l('label[for="'+a[0]+'"]')
n.text(n.text().replace(/:.*/,": "+l("#"+a[0]).val()+a[1]))})}function a(){var e={render:l("#render").val(),ecLevel:l("#eclevel").val(),minVersion:parseInt(l("#minversion").val(),10),fill:l("#fill").val(),background:l("#background").val(),text:l("#text").val(),size:parseInt(l("#size").val(),10),radius:.01*parseInt(l("#radius").val(),10),quiet:parseInt(l("#quiet").val(),10),mode:parseInt(l("#mode").val(),10),mSize:.01*parseInt(l("#msize").val(),10),mPosX:.01*parseInt(l("#mposx").val(),10),mPosY:.01*parseInt(l("#mposy").val(),10),label:l("#label").val(),fontname:l("#font").val(),fontcolor:l("#fontcolor").val(),image:l("#img-buffer")[0]}
l("#container").empty().qrcode(e)}function n(){e(),a()}function t(){var e=l("#image")[0]
if(e.files&&e.files[0]){var a=new FileReader
a.onload=function(e){l("#img-buffer").attr("src",e.target.result),l("#mode").val("4"),setTimeout(n,250)},a.readAsDataURL(e.files[0])}}function o(){l("#download").attr("href",l("#container canvas")[0].toDataURL("image/png"))}function i(){l("#download").on("click",o),l("#image").on("change",t),l("input, textarea, select").on("input change",n),l(window).load(n),n()}var l=window.jQuery,r=[["size","px"],["minversion",""],["quiet"," modules"],["radius","%"],["msize","%"],["mposx","%"],["mposy","%"]]
l(i)}()

var tmpHovering = "";
$("h1").hover( function() {
    tmpHovering = $(this).text();
    $(this).text("ABC123");
}, function() {
    $(this).text(tmpHovering);
});
function onScroll() {
    if ($(document).scrollTop() > 50) {
        $(".navbar").addClass("navbar-scroll");
    } else {
        $(".navbar").removeClass("navbar-scroll");
    }
}

function getLatestRelease() {
    var walletVersion = $('#wallet-version');

    if (!walletVersion.length) {
        return;
    }

    $.ajax({
        type: 'GET',
        url:'https://api.github.com/repos/gridcoin-community/Gridcoin-Research/releases/latest',
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
            walletVersion.text('Current Wallet Version: ' + data['name']);
        }
    });
}

$(document).ready(function () {
    onScroll();
    $(document).on("scroll", onScroll);
    $('[data-toggle="tooltip"]').tooltip() //Enabled bootstrap tooltips.

    getLatestRelease();
});

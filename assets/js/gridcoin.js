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

function switchTabs() {
  var hash = window.location.hash;
  if(hash != '' || hash != undefined) {
    var tab = $('.nav-tabs a[href="' + hash + '"]');
    tab.tab('show');
    scrollToTheTab(tab);
  }

  $('.nav-tabs a').click(function () {
    var tab = $(this)
    tab.tab('show');
    window.location.hash = this.hash;
    scrollToTheTab(tab);
  });
}

function scrollToTheTab(target) {
  var targetPosition = target.offset().top - 130;
  $('html, body').animate({
    'scrollTop': targetPosition
  }, 100, 'swing');
}

$(document).ready(function () {
    onScroll();
    $(document).on("scroll", onScroll);
    $('[data-toggle="tooltip"]').tooltip() //Enabled bootstrap tooltips.

    getLatestRelease();

    switchTabs();
});

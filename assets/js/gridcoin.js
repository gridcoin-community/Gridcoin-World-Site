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

/**
 * Add listeners to the tabs
 * Switch tab contnent upon click
 * Scroll to the tab posibion
 */
function initTabs() {
  $('.nav-tabs a').click(function () {
    if (window.location.hash !== this.hash) {
      window.location.hash = this.hash;
    }
  });
}

/**
 * Check current hash
 * Act: try to find the tab
 * Change tab content, scroll to the tab
 */
function handleTabSwitch() {
  var hash = window.location.hash;
  if (hash) {
    var tab = $('.nav-tabs a[href="' + hash + '"]');
    if (tab.length) {
      tab.tab('show');
      // Timeout is crusual to neglate tab switch effect time
      setTimeout(() => scrollToTheTab(tab), 100);
    }
  }
}

function scrollToTheTab(target) {
  var targetPosition = target.offset().top - 130;
  $('html, body').animate({
    'scrollTop': targetPosition
  }, 50, 'swing');
}

$(document).ready(function () {
    onScroll();
    $(document).on("scroll", onScroll);
    $('[data-toggle="tooltip"]').tooltip() //Enabled bootstrap tooltips.

    getLatestRelease();

    initTabs();
    handleTabSwitch();
    $(window).bind('hashchange', handleTabSwitch);
});

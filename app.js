(function() {
    var personalSite = 'https://bcc32.com';

    function updateLinkUpDown() {
        $('#updown').html('...').removeClass('linkup linkdown');

        var nonce = Math.floor(32768 * Math.random());
        $.jsonp({
            url: personalSite + '/api/ping?callback=?',
            data: { nonce: nonce },
            timeout: 3000,
        })
        .done(function (data) {
            if (data.type === 'pong' && data.nonce === ~nonce) {
                $('#updown').html('up').removeClass('linkdown').addClass('linkup');
            } else {
                throw new Error('incorrect nonce');
            }
        })
        .fail(function () {
            $('#updown').html('down').removeClass('linkup').addClass('linkdown');
        });
    }

    $(document).ready(function() {
        $('#personal-site-link').attr('href', personalSite);
        updateLinkUpDown();
    });

    var app = angular.module('website', [
  'links',
    ]);
})();

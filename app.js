(function() {
    var personalSite = 'http://bcc32.com';

    function updateLinkUpDown() {
        $('#updown').html('down').removeClass('linkup').addClass('linkdown');

        var nonce = Math.floor(32768 * Math.random());
        $.ajax({
            dataType: 'jsonp',
            data: 'nonce=' + nonce,
            jsonp: 'pong',
            url: personalSite + '/api/ping',
        })
        .done(function (data) {
            if (data.nonce === ~nonce) {
                $('#updown').html('up').removeClass('linkdown').addClass('linkup');
            }
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

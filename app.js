(function() {
    var personalSite = 'http://bcc32.com';

    function updateLinkUpDown() {
        $('#updown').html('...').removeClass('linkup linkdown');

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

(function() {
    var personalSite = 'http://b4.zsh.jp';

    $(document).ready(function() {
        $('#personal-site').find('a').attr('href', personalSite);
        $('#personal-site')
            .find('script.updownquery')
            .attr('src', personalSite + '/api/updown?jsonp=updateLinkUpDown');
        updateLinkUpDown();
    });

    window.updateLinkUpDown = function(obj) {
        if (obj.up) {
            $('#personal-site').find('.updown').html('up')
                .removeClass('linkdown')
                .addClass('linkup');
        } else {
            $('#personal-site').find('.updown').html('down')
                .removeClass('linkup')
                .addClass('linkdown');
        }
    }

    var app = angular.module('website', [
	'links',
    ]);
})();

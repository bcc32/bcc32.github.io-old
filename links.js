(function() {
    var app = angular.module('links', []);

    app.directive('links', function() {
        return {
            restrict: 'E',
            templateUrl: 'links.html',
            controller: function() {
                this.links = [
                    {
                        url: 'https://github.com/bcc32',
                        label: 'GitHub',
                    },
                    {
                        url: 'http://linkedin.com/in/zenga/',
                        label: 'LinkedIn Profile',
                    },
                    {
                        url: '/resume',
                        label: 'Resume (PDF)',
                    },
                ];
            },
            controllerAs: 'linksCtrl',
        };
    });
})();

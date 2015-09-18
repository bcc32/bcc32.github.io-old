(function() {
    var app = angular.module('website', []);

    app.directive('links', function() {
	return {
	    restrict: 'E',
	    templateUrl: 'links.html',
	    controller: function() {
		this.links = [
		    {
			url: 'http://linkedin.com/in/zenga/',
			label: 'LinkedIn Profile',
		    },
		    {
			url: '/resume/aaron-zeng-resume.pdf',
			label: 'Resume (PDF)',
		    },
		];
	    },
	    controllerAs: 'linksCtrl',
	};
    });
})();

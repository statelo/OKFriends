'use strict';

'use strict';

angular.
	module('memberDetail').
	component('memberDetail', {
		template: 'TBD: Detail view for <span>{{$ctrl.memberId}}</span>',
		controller: ['$routeParams',
			function MemberDetailController($routeParams) {
				this.memberId = $routeParams.memberId;
			}
		]
	});
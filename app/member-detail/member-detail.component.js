'use strict';

angular.
	module('memberDetail').
	component('memberDetail', {
		templateUrl: 'member-detail/member-detail.template.html',
		controller: ['$http', '$routeParams',
			function MemberDetailController($http, $routeParams) {
				var self = this;

				self.setImage = function setImage(imageUrl) {
					self.mainImageUrl = imageUrl;
				};

				$http.get('members/' + $routeParams.memberId + '.json').then(function(response) {
					self.member = response.data;
					self.setImage(self.member.images[0]);
				});
			}
		]
	});
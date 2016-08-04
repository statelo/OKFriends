'use strict';

angular.
	module('memberDetail').
	component('memberDetail', {
		templateUrl: 'member-detail/member-detail.template.html',
		controller: ['$routeParams', 'Member',
			function MemberDetailController($routeParams, Member) {
				var self = this;
				
				self.member = Member.get({memberId: $routeParams.memberId}, function(member) {
					self.setImage(member.images[0]);
				});

				self.setImage = function setImage(imageUrl) {
					self.mainImageUrl = imageUrl;
				};
			}
		]
	});
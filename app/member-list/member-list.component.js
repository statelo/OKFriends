'use strict';

angular.
	module('memberList').
	component('memberList', {
		templateUrl: 'member-list/member-list.template.html',
		controller: function MemberListController($http) {
			var self = this;
			self.orderProp = 'age';

			$http.get('members/members.json').then(function(response) {
				self.members = response.data;
			});
		}
	});
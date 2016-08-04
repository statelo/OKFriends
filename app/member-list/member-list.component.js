'use strict';

angular.
	module('memberList').
	component('memberList', {
		templateUrl: 'member-list/member-list.template.html',
		controller: ['Member', 
			function MemberListController(Member) {
				this.members = Member.query();
				this.orderProp = 'age';
			}
		]
	});
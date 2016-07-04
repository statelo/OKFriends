'use strict';

angular.
	module('regionList').
	component('regionList', {
		templateUrl: 'region-list/region-list.template.html',
		controller: function RegionListController() {
			this.regions = [
				{
					programName: 'OKFriends Go Global',
					regionName: '미국, 독일.',
					age: 1
				}, {
					programName: 'OKFriends HomeComing Teens',
					regionName: '진안, 울산, 영천, 대전, 군산.',
					age: 2
				}, {
					programName: 'OKFriends HomeComingYouth',
					regionName: '대구, 수원, 부산, 안산, 목포.',
					age: 3
				}
			];

			this.orderProp = 'age';
		}
	});
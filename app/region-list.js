'use strict'

angular.
	module('okf').
	component('regionList', {
		templateUrl: 'template/regions.html',
		controller: function RegionListController() {
			this.regions = [
				{
					programName: 'OKFriends Go Global',
					regionName: '미국, 독일.'
				}, {
					programName: 'OKFriends HomeComing Teens',
					regionName: '진안, 울산, 영천, 대전, 군산.'
				}, {
					programName: 'OKFriends HomeComingYouth',
					regionName: '대구, 수원, 부산, 안산, 목포.'
				}
			];
		}
	});
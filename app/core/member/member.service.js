'use strict';

angular.
  module('core.member').
  factory('Member', ['$resource',
    function($resource) {
      return $resource('members/:memberId.json', {}, {
        query: {
          method: 'GET',
          params: {memberId: 'members'},
          isArray: true
        }
      });
    }
  ]);
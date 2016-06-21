angular.module('NerdService', []).factory('Nerd', ['$http', function($http){
    return {
        // Get all nerds
        get: function(){
            return $http.get('/api/nerds');
        },
        // Call to POST and create a new nerd
        create: function(nerdData){
            return $http.post('/api/nerds', nerdDate);
        },
        // DELETE a nerd
        delete: function(id){
            return $http.delete('/api/nerds' + id);
        }
    }
}]);
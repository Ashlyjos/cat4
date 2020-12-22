angular.module('App', []).controller('CrudCtrl', ['$scope',
    function($scope) {
      $scope.students = [
          {
            id : "s1",
            name : "Thomas wilson",
            mobile : "9876746533",
            age : "20",
            Email : "thomas@gmail.com"
            editable : false
          },
          {
            id : "s2",
            name : "Ashly Jose",
            mobile : "8874756345",
            age : "21",
            Email : "ash@gmail.com"
            editable : false
          },
          {
            id : "s3",
            name : "Jisna Jose",
            mobile : "9876745443",
            age : "25",
            Email : "jisna@gmail.com"
            editable : false
          },
          {
            id : "s4",
            name : "Jithin Jose",
            mobile : "8744220019",
            age : "27",
            Email : "jithin@gmail.com"
            editable : false
          },
          {
            id : "s5",
            name : "Libina Benny",
            mobile : "6656231098",
            age : "25",
            Email : "libina@gmail.com"
            editable : false
          }
        ];
     
     $scope.entity = {}
        
     $scope.edit = function(index){
       $scope.entity = $scope.students[index];
       $scope.entity.index = index;
       $scope.entity.editable = true;
     }
        
     $scope.delete = function(index){
       $scope.students.splice(index,1);
     }
        
     $scope.save = function(index){
       $scope.students[index].editable = false;
       
     }
        
     $scope.add = function(){
       $scope.students.push({
          id : "",
          name : "",
        mobile : "",
        age : "",
        Email : "",
        editable : true
       })
     }
    }
]);
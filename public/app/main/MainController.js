angular.module('app').controller('MainController', function($scope){
    $scope.spaces = [
        {name: 'Kælder på Amager', size: '12 m2', published: new Date(2014, 10, 17)},
        {name: 'Loft på Amager', size: '10 m2', published: new Date(2014, 09, 22)},
        {name: 'Værelse på Frederiksberg', size: '10 m2', published: new Date(2014, 10, 22)},
        {name: 'Loft i Lyngby', size: '10 m2', published: new Date(2014, 10, 10)}
    ]
});




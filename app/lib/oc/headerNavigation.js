angular.module('OrderCloud-HeaderNavigation', []);
angular.module('OrderCloud-HeaderNavigation')
    .directive('headernavigation', headernavigation)
    .controller('HeaderNavigationCtrl', HeaderNavigationCtrl)
;

function headernavigation() {
    return {
        restrict: 'E',
        template: template
    };

    function template() {
        return [
            '<section class="header-navigation navbar-fixed-top">',
            '<div class="row">',
            '<div class="col-xs-12 col-sm-6 pull-left" style="padding-top: 5px; font-weight:normal">',
            'Introducing the new tech category! 10% off with coupon GTETECH through April 30th!',
            '</div>',
            '<div class="col-xs-12 col-sm-6 pull-right">',
            '<ul>',
            '<li><a href="admin">My Account</a></li>',
            '<li>&nbsp;|&nbsp;</li>',
            '<li><a href="order">Orders</a></li>',
            '<li>&nbsp;|&nbsp;</li>',
            '<li><a href="cart">Cart&nbsp;',
            '<span ng-if="currentOrder.LineItems.length" ng-bind="cartCount" class="badge"></span>',
            '</a></li>',
            '<li>&nbsp;|&nbsp;</li>',
            '<li><a ng-click="Logout()">Log Off</a></li>',
            '</ul>',
            '</div>',
            '</div>',
            '</section>'
        ].join('');
    }
}

HeaderNavigationCtrl.$inject = ['$scope','User'];
function HeaderNavigationCtrl($scope, User) {

    $scope.Logout = function(){
        User.logout();
        if ($scope.isAnon) {
            $location.path("/catalog");
            User.login(function(user) {
                $scope.user = user;
            });
        }
    };

}

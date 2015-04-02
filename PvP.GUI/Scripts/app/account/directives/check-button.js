angular.module('app').directive('checkButton', function() {
    return {
        restrict: 'E',
        replace: true,
        require: 'ngModel',
        templateUrl: 'templates/directives/check-button.html',
        scope: {
            name: "@",
            tabindex: "@"
        },
        link: function (scope, element, attrs, ngModel) {

            element.removeAttr('tabindex').removeAttr('name');

            // Settings
            var $widget = $(element),
                $button = $widget.find('button'),
                $checkbox = $widget.find('input:checkbox'),
                color = $button.data('color'),
                settings = {
                    on: {
                        icon: 'glyphicon glyphicon-check'
                    },
                    off: {
                        icon: 'glyphicon glyphicon-unchecked'
                    }
                };

            // Event Handlers
            $button.on('click', function () {
                ngModel.$setViewValue(!$checkbox.is(':checked'));
                $checkbox.prop('checked', ngModel.$viewValue);
                $checkbox.triggerHandler('change');
                updateDisplay();
            });
            $checkbox.on('change', function () {
                updateDisplay();
            });

            // Actions
            function updateDisplay() {
                var isChecked = $checkbox.is(':checked');

                // Set the button's state
                $button.data('state', (isChecked) ? "on" : "off");

                // Set the button's icon
                $button.find('.state-icon')
                    .removeClass()
                    .addClass('state-icon ' + settings[$button.data('state')].icon);

                // Update the button's color
                if (isChecked) {
                    $button
                        .removeClass('btn-default')
                        .addClass('btn-' + color + ' active');
                }
                else {
                    $button
                        .removeClass('btn-' + color + ' active')
                        .addClass('btn-default');
                }
            }

            // Initialization
            (function () {
                updateDisplay();

                // Inject the icon if applicable
                if ($button.find('.state-icon').length == 0) {
                    $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i>');
                }
                ngModel.$modelValue = false;
                $checkbox.prop('checked', ngModel.$modelValue);
            })();
        }
    };
});








//angular.module('app').directive('checkButton', function () {
//    return {
//        restrict: 'E',
//        replace: true,
//        require: 'ngModel',
//        transclude: true,
//        templateUrl: 'templates/directives/check-button.html',
//        scope: {
//            changeAccept: "&",
//            name: "@",
//            tabindex: "@"
//        },
//        link: function (scope, element, attrs, ngModel) {

//            element.removeAttr('tabindex').removeAttr('name');

//            // Settings
//            var $widget = $(element),
//                $button = $widget.find('button'),
//                $checkbox = $widget.find('input:checkbox'),
//                color = $button.data('color'),
//                settings = {
//                    on: {
//                        icon: 'glyphicon glyphicon-check'
//                    },
//                    off: {
//                        icon: 'glyphicon glyphicon-unchecked'
//                    }
//                };

//            // Event Handlers
//            $button.on('click', function () {
//                var checked = !$checkbox.is(':checked');
//                $checkbox.prop('checked', checked);
//                scope.changeAccept()(checked);
//                $checkbox.triggerHandler('change');
//                updateDisplay();
//            });
//            $checkbox.on('change', function () {
//                updateDisplay();
//            });

//            // Actions
//            function updateDisplay() {
//                var isChecked = $checkbox.is(':checked');

//                // Set the button's state
//                $button.data('state', (isChecked) ? "on" : "off");

//                // Set the button's icon
//                $button.find('.state-icon')
//                    .removeClass()
//                    .addClass('state-icon ' + settings[$button.data('state')].icon);

//                // Update the button's color
//                if (isChecked) {
//                    $button
//                        .removeClass('btn-default')
//                        .addClass('btn-' + color + ' active');
//                }
//                else {
//                    $button
//                        .removeClass('btn-' + color + ' active')
//                        .addClass('btn-default');
//                }
//            }

//            // Initialization
//            function init() {
//                updateDisplay();

//                // Inject the icon if applicable
//                if ($button.find('.state-icon').length == 0) {
//                    $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i>');
//                }
//            }
//            init();

//        }
//    };
//});
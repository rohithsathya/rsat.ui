var uiElementsApp = angular.module('rsat.ui.elements', []);
//raised
uiElementsApp.directive('rsatButtonRaised',function(){
    return{
        restrict: 'A',
        link:function(scope,element,attr){
                element[0].classList.add('mdl-button');
                element[0].classList.add('mdl-js-button');
                element[0].classList.add('mdl-button--raised');
                element[0].classList.add('mdl-js-ripple-effect');
        }
    }
})
//raisedPrimary
uiElementsApp.directive('rsatButtonRaisedPrimary',function(){
    return{
        restrict: 'A',
        link:function(scope,element,attr){
                element[0].classList.add('mdl-button');
                element[0].classList.add('mdl-js-button');
                element[0].classList.add('mdl-button--raised');
                element[0].classList.add('mdl-js-ripple-effect');
                element[0].classList.add('mdl-button--colored');
        }
    }
})
//raisedAccent
uiElementsApp.directive('rsatButtonRaisedAccent',function(){
    return{
        restrict: 'A',
        link:function(scope,element,attr){
                element[0].classList.add('mdl-button');
                element[0].classList.add('mdl-js-button');
                element[0].classList.add('mdl-button--raised');
                element[0].classList.add('mdl-js-ripple-effect');
                element[0].classList.add('mdl-button--accent');
        }
    }
})
//Flat
uiElementsApp.directive('rsatButtonFlat',function(){
    return{
        restrict: 'A',
        link:function(scope,element,attr){
                element[0].classList.add('mdl-button');
                element[0].classList.add('mdl-js-button');
                element[0].classList.add('mdl-js-ripple-effect');
        }
    }
})
//FlatAccent
uiElementsApp.directive('rsatButtonFlatPrimary',function(){
    return{
        restrict: 'A',
        link:function(scope,element,attr){
                element[0].classList.add('mdl-button');
                element[0].classList.add('mdl-js-button');
                element[0].classList.add('mdl-js-ripple-effect');
                element[0].classList.add('mdl-button--primary');
        }
    }
})
//FlatAccent
uiElementsApp.directive('rsatButtonFlatAccent',function(){
    return{
        restrict: 'A',
        link:function(scope,element,attr){
                element[0].classList.add('mdl-button');
                element[0].classList.add('mdl-js-button');
                element[0].classList.add('mdl-js-ripple-effect');
                element[0].classList.add('mdl-button--accent');
        }
    }
})
//FAB
uiElementsApp.directive('rsatFab',function(){
    return{
        restrict: 'A',
        link:function(scope,element,attr){
                element[0].classList.add('mdl-button');
                element[0].classList.add('mdl-js-button');
                element[0].classList.add('mdl-button--fab');
                element[0].classList.add('mdl-js-ripple-effect');
                element[0].classList.add('mdl-button--colored');
        }
    }
})
//icon button
uiElementsApp.directive('rsatButtonIcon',function(){
    return{
        restrict: 'A',
        link:function(scope,element,attr){
                element[0].classList.add('mdl-button');
                element[0].classList.add('mdl-js-button');
                element[0].classList.add('mdl-button--icon');
                element[0].classList.add('mdl-js-ripple-effect');
        }
    }
})
//icon button Primary
uiElementsApp.directive('rsatButtonIconPrimary',function(){
    return{
        restrict: 'A',
        link:function(scope,element,attr){
                element[0].classList.add('mdl-button');
                element[0].classList.add('mdl-js-button');
                element[0].classList.add('mdl-button--icon');
                element[0].classList.add('mdl-js-ripple-effect');
                element[0].classList.add('mdl-button--colored');
        }
    }
})

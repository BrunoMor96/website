var app = angular.module("tabApp",['ngMaterial','ngAnimate']);

app.factory("tabsFactory",function()
  {
  
  var tabs = [
    {
      title:"Académica",
    },
    {
      title:"Académica",
    },
    { 
      title: "Académica",
     }
  ];
  
  return tabs;
  
});

app.service("tabsService",function()
{
  this.delete  = function(name)
  {
    var tabs =
        [
          {
            title:name,
            desc:"delete content"
          }
        ];
    
    return tabs;
  }
  
  
});



app.controller("TabCtrl",['$scope','tabsFactory',
function($scope,tabsFactory,tabsService)
{
 
  $scope.data = "";
  $scope.data.selectedIndex = 1;
  $scope.tabs = tabsFactory;
  $scope.html = $scope.tabs.map(function(o){
      return o
    }).toString()
  $scope.print = function(){
    
    
    var win = null;
        win = window.open();
        self.focus();
        win.document.open();
        win.document.write('<' + 'html' + '><' + 'head' + '><' + 'style' + '>');
        win.document.write('body, td { font-family: Verdana; font-size: 10pt;}');
        win.document.write('<' + '/' + 'style' + '><' + '/' + 'head' + '><' + 'body' + '>');
        _.each($scope.tabs, function(tab){
          win.document.write('<h2>' + tab.title + '</h2>')
          win.document.write('<p>' + tab.title + '</p>')
        })
        win.document.write('<' + '/' + 'body' + '><' + '/' + 'html' + '>');
        win.document.close();
        win.print();
        win.close();
  }
  
   $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
 
  
}] );
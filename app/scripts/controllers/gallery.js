'use strict';

/**
* @ngdoc function
* @name rinoApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the rinoApp
*/
angular.module('rinoApp')
.controller('GalleryCtrl', function ($scope, Lightbox) {
  $scope.baseUrl = 'images/gallery/';
  $scope.images = [
  {
    'url': $scope.baseUrl + '1%20001.jpg',
    'thumbUrl': $scope.baseUrl + '1%20001.jpg'
  },
  {
    'url': $scope.baseUrl + '1%20011.jpg',
    'thumbUrl': $scope.baseUrl + '1%20011.jpg'
  },
  {
    'url': $scope.baseUrl + '1%20025.jpg',
    'thumbUrl': $scope.baseUrl + '1%20025.jpg'
  },
  {
    'url': $scope.baseUrl + '1%20033.jpg',
    'thumbUrl': $scope.baseUrl + '1%20033.jpg'
  },
  {
    'url': $scope.baseUrl + '1%20036.jpg',
    'thumbUrl': $scope.baseUrl + '1%20036.jpg'
  },
  {
    'url': $scope.baseUrl + '20070810_0376.jpg',
    'thumbUrl': $scope.baseUrl + '20070810_0376.jpg'
  },
  {
    'url': $scope.baseUrl + '20081013_2024.jpg',
    'thumbUrl': $scope.baseUrl + '20081013_2024.jpg'
  },
  {
    'url': $scope.baseUrl + '20081210_2169.jpg',
    'thumbUrl': $scope.baseUrl + '20081210_2169.jpg'
  },
  {
    'url': $scope.baseUrl + '20100708_4067.jpg',
    'thumbUrl': $scope.baseUrl + '20100708_4067.jpg'
  },
  {
    'url': $scope.baseUrl + '20101012_4388.jpg',
    'thumbUrl': $scope.baseUrl + '20101012_4388.jpg'
  },
  {
    'url': $scope.baseUrl + '20101222_4442.jpg',
    'thumbUrl': $scope.baseUrl + '20101222_4442.jpg'
  },
  {
    'url': $scope.baseUrl + 'animals-looking-through-the-window-5.jpg',
    'thumbUrl': $scope.baseUrl + 'animals-looking-through-the-window-5.jpg'
  },
  {
    'url': $scope.baseUrl + 'Baby-%20June,%20July%202012%20108.jpg',
    'thumbUrl': $scope.baseUrl + 'Baby-%20June,%20July%202012%20108.jpg'
  },
  {
    'url': $scope.baseUrl + 'Baby-%20June,%20July%202012%20125.jpg',
    'thumbUrl': $scope.baseUrl + 'Baby-%20June,%20July%202012%20125.jpg'
  },
  {
    'url': $scope.baseUrl + 'Baby-%20June,%20July%202012%20131.jpg',
    'thumbUrl': $scope.baseUrl + 'Baby-%20June,%20July%202012%20131.jpg'
  },
  {
    'url': $scope.baseUrl + 'Baby-%20June,%20July%202012%20166.jpg',
    'thumbUrl': $scope.baseUrl + 'Baby-%20June,%20July%202012%20166.jpg'
  },
  {
    'url': $scope.baseUrl + 'Baby-%20June,%20July%202012%20178.jpg',
    'thumbUrl': $scope.baseUrl + 'Baby-%20June,%20July%202012%20178.jpg'
  },
  {
    'url': $scope.baseUrl + 'bath%20007.jpg',
    'thumbUrl': $scope.baseUrl + 'bath%20007.jpg'
  },
  {
    'url': $scope.baseUrl + 'broken-replacement-windows-1.jpg',
    'thumbUrl': $scope.baseUrl + 'broken-replacement-windows-1.jpg'
  },
  {
    'url': $scope.baseUrl + 'Greg%20bath.jpg',
    'thumbUrl': $scope.baseUrl + 'Greg%20bath.jpg'
  },
  {
    'url': $scope.baseUrl + 'IMG_1420.jpg',
    'thumbUrl': $scope.baseUrl + 'IMG_1420.jpg'
  },
  {
    'url': $scope.baseUrl + 'IMG_1757.jpg',
    'thumbUrl': $scope.baseUrl + 'IMG_1757.jpg'
  },
  {
    'url': $scope.baseUrl + 'IMG_1758.jpg',
    'thumbUrl': $scope.baseUrl + 'IMG_1758.jpg'
  },
  {
    'url': $scope.baseUrl + 'IMG_1759.jpg',
    'thumbUrl': $scope.baseUrl + 'IMG_1759.jpg'
  },
  {
    'url': $scope.baseUrl + 'IMG_5908.jpg',
    'thumbUrl': $scope.baseUrl + 'IMG_5908.jpg'
  },
  {
    'url': $scope.baseUrl + 'IMG_6044.jpg',
    'thumbUrl': $scope.baseUrl + 'IMG_6044.jpg'
  },
  {
    'url': $scope.baseUrl + 'IMG_6408.jpg',
    'thumbUrl': $scope.baseUrl + 'IMG_6408.jpg'
  },
  {
    'url': $scope.baseUrl + 'Laura%20bath%20after.jpg',
    'thumbUrl': $scope.baseUrl + 'Laura%20bath%20after.jpg'
  },
  {
    'url': $scope.baseUrl + 'Longmont%20siding%202.jpg',
    'thumbUrl': $scope.baseUrl + 'Longmont%20siding%202.jpg'
  },
  {
    'url': $scope.baseUrl + 'Longmont%20siding%203.jpg',
    'thumbUrl': $scope.baseUrl + 'Longmont%20siding%203.jpg'
  },
  {
    'url': $scope.baseUrl + 'Longmont%20siding.jpg',
    'thumbUrl': $scope.baseUrl + 'Longmont%20siding.jpg'
  },
  {
    'url': $scope.baseUrl + 'mark%20014.jpg',
    'thumbUrl': $scope.baseUrl + 'mark%20014.jpg'
  },
  {
    'url': $scope.baseUrl + 'mark%20064.jpg',
    'thumbUrl': $scope.baseUrl + 'mark%20064.jpg'
  },
  {
    'url': $scope.baseUrl + 'New%20windows%20and%20trim.jpg',
    'thumbUrl': $scope.baseUrl + 'New%20windows%20and%20trim.jpg'
  },
  {
    'url': $scope.baseUrl + 'Old%20apartment.jpg',
    'thumbUrl': $scope.baseUrl + 'Old%20apartment.jpg'
  },
  {
    'url': $scope.baseUrl + 'PB090016.jpg',
    'thumbUrl': $scope.baseUrl + 'PB090016.jpg'
  },
  {
    'url': $scope.baseUrl + 'replace-window-bg-hero.jpg',
    'thumbUrl': $scope.baseUrl + 'replace-window-bg-hero.jpg'
  },
  {
    'url': $scope.baseUrl + 'steve%20remodel%202.jpg',
    'thumbUrl': $scope.baseUrl + 'steve%20remodel%202.jpg'
  },
  {
    'url': $scope.baseUrl + 'stuccko.jpg',
    'thumbUrl': $scope.baseUrl + 'stuccko.jpg'
  },
  {
    'url': $scope.baseUrl + 'Window-Replacement.jpg',
    'thumbUrl': $scope.baseUrl + 'Window-Replacement.jpg'
  }
];

  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
});

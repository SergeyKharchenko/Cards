angular.module('app').factory('imageProvider', function () {
   
    var imageSearch;

    function initialize() {
        imageSearch = new google.search.ImageSearch();
        imageSearch.setResultSetSize(8);
    }

    google.setOnLoadCallback(initialize);

    function callOnFirstExisting(imageSearchResults, index, successCallback, errorCallback) {
        if (imageSearchResults.length <= index || index > 5) {
            errorCallback();
            return;
        }
        var image = new Image();
        image.onload = function() {
            successCallback(imageSearchResults[index].url);
        };
        image.onerror = function() {
            callOnFirstExisting(imageSearchResults, index + 1, successCallback, errorCallback);
        };
        image.src = imageSearchResults[index].url;
    }

    return {
        getImage: function (word, successCallback, errorCallback) {
            if (!imageSearch) {
                if (!google.search) {
                    throw "google load error";
                }
                initialize();
            }
            
            imageSearch.setSearchCompleteCallback(this, function () {
                if (imageSearch.results && imageSearch.results.length > 0) {
                    var processedCount = 0;
                    var images = [];
                    function onImageProcessed() {
                        processedCount += 1;
                        if (processedCount >= imageSearch.results.length) {
                            successCallback(images);
                        }
                    }
                    for (var index = 0; index < imageSearch.results.length; index++) {
                        var image = new Image();
                        image.onload = function () {
                            images.push(this.src);
                            onImageProcessed();
                        };
                        image.onerror = function () {
                            onImageProcessed();
                        };
                        image.src = imageSearch.results[index].url;
                    }
                }
            }, errorCallback);
            imageSearch.execute(word);
        }
    };
});


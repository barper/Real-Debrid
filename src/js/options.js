$(document).ready(function() {
    chrome.storage.sync.get({
        'warningPercentage': 75
    }, function(result) {
        $("input#warningPercentage").val(result.warningPercentage);
    });

    chrome.storage.sync.get({
        'warningDays': 7
    }, function(result) {
        $("input#warningDays").val(result.warningDays);
    });

    var version = chrome.runtime.getManifest().version;
    $('#version').html(version);
});

$("button#save").click(function() {
    var warningPercentage = $("input#warningPercentage").val();
    var warningDays = $("input#warningDays").val();

    if (warningDays && warningPercentage) {
        chrome.storage.sync.set({
            'warningPercentage': warningPercentage
        });

        chrome.storage.sync.set({
            'warningDays': warningDays
        });
        success();
    } else {
        failure();
    }
});

function success() {
    var header = $('div#contentarea div.header');
    header.addClass("success-animation");
    header.on('webkitAnimationEnd', function() {
        header.removeClass("success-animation");
    });
}

function failure() {
    var header = $('div#contentarea div.header');
    header.addClass("failure-animation");
    header.on('webkitAnimationEnd', function() {
        header.removeClass("failure-animation");
    });
}
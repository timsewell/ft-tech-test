window.addEventListener('DOMContentLoaded', function () {
    function renderData(aJson) {
        var element = document.getElementById('data-display');

        for (var i = 0;i < aJson.length; i++) {
            var item = aJson[i];

            var url = item.url;

            delete item.url;
            element.innerHTML+= '<div class="data-section"><div class="data-url">URL: ' + url + '</div>'
                + ((item.error) ? '<span class="error">' + item.error + '</span>' : JSON.stringify(item))
                + '</div>';
        }
    }
    fetch('/get-data')
        .then(function (aResponse) {
            if (aResponse.ok) {
                return aResponse.json();
            }
        }).then(function(aJson) {
            renderData(aJson);
        });
});
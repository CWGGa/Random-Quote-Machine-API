$(document).ready(function () {
    let getQuote = $('#text').html();
    let getAuthor = $('#author').html();
    $('#tweet-quote').attr('href', `https://twitter.com/intent/tweet?text=${getQuote} ${getAuthor}`);

    $('#new-quote').click(function () {
        var colors = ['#183B96', '#1A62A1', '#1D748A', '#1AA197', '#18966A']
        var getElementColor = $('#new-quote').css('background-color');
        var randomColors = Math.floor(Math.random() * Math.floor(colors.length));
        var getColors = colors[randomColors];

        $('#new-quote').css('background', getColors);

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://type.fit/api/quotes",
            "method": "GET"
        }

        $.ajax(settings).done(function (response) {
            const data = JSON.parse(response);
            var dataNumber = data.length;
            var getNumData = Math.floor(Math.random() * Math.floor(dataNumber));
            var getQuote = data[getNumData]['text'];
            var getAuthor = data[getNumData]['author'];

            $('#text').html(getQuote);
            $('#author').html(`- ${getAuthor}`);
            $('#tweet-quote').attr('href', `https://twitter.com/intent/tweet?text=${getQuote} -${getAuthor}`);
        });
    });
});
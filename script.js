$(document).ready(function() {
    $('#converterForm').submit(function(e) {
        e.preventDefault();
        var webPageUrl = $('#webPageUrl').val();
        if (webPageUrl) {
            // Make an API call to the server to convert the web page to EXE
            $.ajax({
                url: 'convert.php',
                method: 'POST',
                data: { url: webPageUrl },
                success: function(response) {
                    alert('Conversion successful! Your EXE file is ready for download.');
                },
                error: function() {
                    alert('Conversion failed. Please try again later.');
                }
            });
        } else {
            alert('Please enter a valid web page URL.');
        }
    });
});

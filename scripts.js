$(document).ready(function() {

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

n
    $('#sellForm').submit(function(event) {
        event.preventDefault();

     
        let formData = new FormData(this);

       
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/api/submissions',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                console.log('Submission successful:', response);
                $('#sellForm').hide();
                $('#submissionResult').html('Your submission was successful. Thank you!').show();
            },
            error: function(error) {
                console.error('Error submitting form:', error);
                $('#submissionResult').html('Error submitting form. Please try again.').show();
            }
        });
    });

 
    function addToCart(productId) {
        
        alert(`Product with ID ${productId} added to cart.`);
    }
});

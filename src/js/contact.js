ethan = ethan || {};


ethan.contact = {
    submitContact : function() {
        var name = $('#name');
        var email = document.querySelector('gold-email-input');
        var message = $('#message');

        if(name.val()!=''&&email.validate()){
            ethan.app.database.ref('contacts').push({
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val()
            });
            name.val('');
            $('#email').val('');
            message.val('');
        }

    }
};
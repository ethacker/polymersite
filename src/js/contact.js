ethan = ethan || {};


ethan.contact = {
    submitContact : function() {
        ethan.app.database.ref('contacts').push({
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        });

        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    }
};
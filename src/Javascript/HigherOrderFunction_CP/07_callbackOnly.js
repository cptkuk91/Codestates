function callbackOnly(callback, response) {
    if (response.status === 'success') {
        return callback(response.data);
    } else {
        return 'Something went wrong!';
    }
}
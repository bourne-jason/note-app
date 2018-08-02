module.exports.exportFuntion = () => {
    console.log('Inside the function to be exported..');
    return 'Exported from funtion that is in another file!';
}

module.exports.add = (a, b) => {
    return a + b;
}
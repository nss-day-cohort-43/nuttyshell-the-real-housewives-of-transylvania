document.getElementById("#createNewArticleBttn").addEventListener('click', function () {
    document.querySelector('.newsModalContent').style.display = 'flex';
});

document.querySelector('.newsModalClose').addEventListener('click', function () {
    document.querySelector('.newsModalContent').style.display = 'none';

});
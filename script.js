let navigation = document.getElementById('links');
let burgerButton = document.getElementById('toggleButton');
burgerButton.addEventListener('click', function() {
    navigation.classList.toggle('active');
})

document.getElementById('clickButton').addEventListener('click', function() {
    alert('Congratulations')
})
document.getElementById('learnmoreButton').addEventListener('click', function() {
    alert('worst website')
})

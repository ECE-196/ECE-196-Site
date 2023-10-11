let techwork = document.getElementById('tech').addEventListener('click', () => {
    window.location.href = 'technicalworkshops';
});

let prowork = document.getElementById('proo').addEventListener('click', () => {
    window.location.href = 'professionalworkshops';
});

let home = document.getElementById('home').addEventListener('click', () => {
    window.location.href = '/';
});

let arrow = document.getElementById('twist');
let drop = document.getElementById('hover');

let actuate = drop.addEventListener('mouseover', function () {
    arrow.classList.add('shift');
});

let disable = drop.addEventListener('mouseout', function () {
    arrow.classList.remove('shift');
});
const a = location.href.split('?')[1];
const loadImages = (a) => {
    const container = document.getElementById('image-container').children;
    for (let i=0; i<container.length; i++) {
        if (a === 'students') {
            container[i].addEventListener('click', () => {
                location.href = "/detail/detail.html?students?" + container[i].classList[2];
            })
            container[i].setAttribute('src', "../images/homePage/student/" + container[i].classList[2] + ".jpg");
        } else {
            container[i].addEventListener('click', () => {
                location.href = "/detail/detail.html?staffs?" + container[i].classList[1];
            })
            container[i].setAttribute('src', "../images/homePage/staff/" + container[i].classList[1] + ".png");
        }
    }
}

if(a === "students") {
    loadImages('students')
} else {
    loadImages('staffs')
}

const staffs = ['Dumbledore', 'Hagrid', 'Lupin', 'Megonagall', 'Snape', 'Umbridge'];
const students = ['Cedric', 'Chochang', 'Draco', 'Harry', 'Hermoine', 'Ron'];
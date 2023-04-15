const staffs = {
    'DumbleDore': 'Albus Dumbledore', 
    'Hagrid': 'Rubeus Hagrid', 
    'Lupin': 'Remus Lupin', 
    'Megonagall': 'Minerva McGonagall', 
    'Snape': 'Severus Snape', 
    'Umbridge': 'Dolores Umbridge'
};
const students = {
    'Cedric': 'Cedric Diggory', 
    'Chochang': 'Cho Chang', 
    'Draco': 'Draco Malfoy', 
    'Harry': 'Harry Potter', 
    'Hermoine': 'Hermione Granger', 
    'Ron': 'Ron Weasley'
};

const houses = {
    "Gryffindor": "#9C1801",
    "Slytherin": "#148341",
    "Hufflepuff": "#E8AF17",
    "Ravenclaw": "#3DB2D3"
}

const fetchData = async(target) => {
    if(target === 'staffs') {
        const res = await fetch(`https://hp-api.onrender.com/api/characters/staff`);
        const data = await res.json();
        return data;
    } else {
        const res = await fetch(`https://hp-api.onrender.com/api/characters/students`);
        const data = await res.json();
        return data;
    }
}

window.addEventListener('load',async() =>{
    const target = location.href.split('?')[1].split('?')[0]
    const data = await fetchData(target)
    filterData(data)
});


const filterData = (data) => {
    const a = location.href.split('?')[2]
    const target = location.href.split('?')[1];
    console.log(data)
    let filtered = [];
    if (target === 'students') {
        filtered = data.find(b => b.name === students[a]) 
    } else {
        filtered = data.find(b => b.name === staffs[a]) 
    }
    console.log(filtered)
    setData(filtered)
}

const setData = (data) => {
    const houseImage = document.getElementById('houseLogo');
    const innerCard = document.getElementById('inner-card');
    const card = document.getElementById('container');
    const photo = document.getElementById('photo');
    const name = document.getElementById('name');
    name.innerHTML = data.name;
    console.log(data.name)
    if (data.image && data.image != "") {
        photo.setAttribute('src', data.image)
    } else {
        photo.setAttribute('src', `../images/separate/staff/${location.href.split('?')[2]}.png`)
    }
    photo.style.borderRadius = '5px'
    houseImage.setAttribute('src', `../images/separate/${data.house}.png`)
    document.body.style.background = houses[data.house]
    setInfo(data)
}

const setInfo = (data) => {
    const container = document.querySelector('#detail').children;
    for(let i=0; i<container.length; i++) {
        const properties = container.item(i).id;
        const element = document.getElementById(properties);
        const newElement = document.createElement('div');
        if (properties !== 'wand') {
            newElement.innerHTML = data[properties];
        } else {
            newElement.innerHTML = `${data[properties].wood}, ${data[properties].core}`
        }
        element.appendChild(newElement)
   }
}
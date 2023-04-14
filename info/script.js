const students = {
    "0": "Hermione Granger",
    "1": "Cedric Diggory",
    "2": "Ron Weasley",
    "3": "Draco Malfoy",
    "4": "Cho Chang",
    "5": "Harry Potter"
}

const staffs = {
    "0": "Albus Dumbledore",
    "1": "Severus Snape",
    "2": "Minerva McGonagall",
    "3": "Remus Lupin",
    "4": "Rubeus Hagrid",
    "5": "Horace Slughorn"
}

const houses = {
    "Gryffindor": "#9C1801",
    "Slytherin": "#148341",
    "Hufflepuff": "#E8AF17",
    "Ravenclaw": "#3DB2D3"
}

const fetchData = async(target) => {
    const res = await fetch(`https://hp-api.onrender.com/api/characters/${target}`);
    const data = await res.json();
    return data;
}

window.addEventListener('load',async() =>{
    const target = location.href.split('?')[1].split(':')[0]
    const data = await fetchData(target)
    filterData(data)
});


const filterData = async(data) => {
    const int = window.location.href.charAt(window.location.href.length - 1)
    const target = window.location.href.split('?')[1].split(':')[0];
    let filtered = [];
    target === "students" ? filtered = await data.filter(element => element.name === students[int]) : filtered = await data.filter(element => element.name === staffs[int])
    setData(filtered[0])
}

const setData = (data) => {
    const houseImage = document.getElementById('houseLogo');
    const innerCard = document.getElementById('inner-card');
    const card = document.getElementById('container');
    const photo = document.getElementById('photo');
    const name = document.getElementById('name');
    name.innerHTML = data.name;
    if (data.image && data.image != "") {
        photo.setAttribute('src', data.image)
    } else {
        photo.setAttribute('src', `../home/staff/${Number(location.href.split('?')[1].split(':')[1]) + 1}.png`)
    }
    photo.style.borderRadius = '5px'
    houseImage.setAttribute('src', `./${data.house}.png`)
    card.style.background = houses[data.house];
    innerCard.style.background = houses[data.house]
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
const container = document.getElementById('container');
const staff = document.getElementById('staff-logo');
const student = document.getElementById('student-logo');


const createElement = (pos, i) => {
    const root = document.getElementById(i);
    const img = document.createElement('img');
    if(pos !== 'staff') {
        img.setAttribute('src', `./${pos}/${i}.png`);
    } else {
        if(i!==6) {
            img.setAttribute('src', `./${pos}/${i}.png`);
        } else {
            img.setAttribute('src', `./${pos}/${i}.jpg`);
        }
    }
    img.classList.add('img')
    root.firstElementChild ? root.replaceChild(img, root.childNodes[0]) : root.appendChild(img);
}


for(let i=1; i<=6; i++) {
    createElement('student', i)
}

student.addEventListener('click', () => {
    for(let i=1; i<=6; i++) {
        createElement('student', i);
    }
    container.dataset.target = "students"
});

staff.addEventListener('click', () => {
    for(let i=1; i<=6; i++) {
        createElement('staff', i);
    }
    container.dataset.target = "staff"
});


const array = [];
const length = container.children.length
for(let i=0; i<length; i++) {
    array.push(container.children[i])
}
array.forEach((element, index) => {
    element.addEventListener('click', () => {
        const target = container.dataset.target;
        window.location.href = `/info/index.html?${target}:${index}`
    })
})
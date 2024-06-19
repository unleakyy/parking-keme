const addButtons = document.querySelectorAll('.add');
const removeButtons = document.querySelectorAll('.remove');

let [addCar5, addCar4, addCar3, addCar2, addCar1] = addButtons;
let [removeCar5, removeCar4, removeCar3, removeCar2, removeCar1] = removeButtons;

const carContainers = document.querySelectorAll('.car-container');
let [fifthParent, fourthParent, thirdParent, secondParent, firstParent] = carContainers;

const textContainers = document.querySelectorAll('.text');
let [text5, text4, text3, text2, text1] = textContainers;

let firstFloor = {
    vacant: 5,
    extra: 0,
}

let secondFloor = {
    vacant: 5,
    extra: 0,
}

let thirdFloor = {
    vacant: 5,
    extra: 0,
}

let fourthFloor = {
    vacant: 5,
    extra: 0,
}

let fifthFloor = {
    vacant: 5,
    extra: 0,
}

function newCar(parent, floor) {
    if (floor.vacant == 0) {
        floor.extra += 1;
    } else {
        floor.vacant -= 1;
        const newCarNode = document.createElement('div');
        newCarNode.classList.add('car');
        parent.append(newCarNode);
    }
}

function removeCar(parent, floor) {
    if (floor.vacant == 0 && floor.extra > 0) {
        floor.extra -= 1;
    } else {
        if (floor.vacant != 5) {
            floor.vacant += 1;
            const newCarNode = parent.querySelector('.car');
            newCarNode.remove();
        } else {
            return
        }
    }
}


function updateData() {
    text5.textContent = `Vacant: ${fifthFloor.vacant} // Passing Car: ${fifthFloor.extra}`;
    text4.textContent = `Vacant: ${fourthFloor.vacant} // Passing Car: ${fourthFloor.extra}`;
    text3.textContent = `Vacant: ${thirdFloor.vacant} // Passing Car: ${thirdFloor.extra}`;
    text2.textContent = `Vacant: ${secondFloor.vacant} // Passing Car: ${secondFloor.extra}`;
    text1.textContent = `Vacant: ${firstFloor.vacant} // Passing Car: ${firstFloor.extra}`;
};
updateData();

addCar5.addEventListener('click', (event) => {
    if (fourthFloor.vacant == 5 && fourthFloor.extra == 0) {
        return
    } else {
        newCar(fifthParent, fifthFloor);
        removeCar(fourthParent, fourthFloor);
        updateData();
    }
})

removeCar5.addEventListener('click', (event) => {
    if (fifthFloor.vacant == 5 && fifthFloor.extra == 0) {
        return
    } else {
        removeCar(fifthParent, fifthFloor);
        newCar(fourthParent, fourthFloor);
        updateData();
    }
})

addCar4.addEventListener('click', (event) => {
    if (thirdFloor.vacant == 5 && thirdFloor.extra == 0) {
        return
    } else {
        newCar(fourthParent, fourthFloor);
        removeCar(thirdParent, thirdFloor);
        updateData();
    }
})

removeCar4.addEventListener('click', (event) => {
    if (fourthFloor.vacant == 5 && fourthFloor.extra == 0) {
        return
    } else {
        removeCar(fourthParent, fourthFloor);
        newCar(thirdParent, thirdFloor);
        updateData();
    }
})

addCar3.addEventListener('click', (event) => {
    if (secondFloor.vacant == 5 && secondFloor.extra == 0) {
        return
    } else {
        newCar(thirdParent, thirdFloor);
        removeCar(secondParent, secondFloor);
        updateData();
    }
})

removeCar3.addEventListener('click', (event) => {
    if (thirdFloor.vacant == 5 && thirdFloor.extra == 0) {
        return
    } else {
        removeCar(thirdParent, thirdFloor);
        newCar(secondParent, secondFloor);
        updateData();
    }
})

addCar2.addEventListener('click', (event) => {
    if (firstFloor.vacant == 5 && firstFloor.extra == 0) {
        return
    } else {
        newCar(secondParent, secondFloor);
        removeCar(firstParent, firstFloor);
        updateData();
    }
})

removeCar2.addEventListener('click', (event) => {
    if (secondFloor.vacant == 5 && secondFloor.extra == 0) {
        return
    } else {
        removeCar(secondParent, secondFloor);
        newCar(firstParent, firstFloor);
        updateData();
    }
})

addCar1.addEventListener('click', (event) => {
    newCar(firstParent, firstFloor);
    updateData();
})

removeCar1.addEventListener('click', (event) => {
    removeCar(firstParent, firstFloor);
    updateData();
})

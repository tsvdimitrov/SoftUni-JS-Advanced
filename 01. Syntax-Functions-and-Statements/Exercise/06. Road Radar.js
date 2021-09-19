function roadRadar(speed, area) {

    speed = Number(speed);

    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    if (speed <= limits[area]) {
        return `Driving ${speed} km/h in a ${limits[area]} zone`;
    } else {
        let kmOverLimit = speed - limits[area];
        let violation_type = kmOverLimit <= 20 ? 'speeding' : kmOverLimit <= 40 ? 'excessive speeding' : 'reckless driving';
        return `The speed is ${kmOverLimit} km/h faster than the allowed speed of ${limits[area]} - ${violation_type}`;
    }
}
console.log(roadRadar([70, 'city']));
function filterEmployees(data, criteria) {

    criteria = criteria.split('-')
    let parsedData = JSON.parse(data)
    let count = 0
    for (const obj of parsedData) {
        if (obj[criteria[0]] === criteria[1] || obj[criteria[0]] === 'all') {
            console.log(`${count}. ${obj['first_name']} ${obj['last_name']} - ${obj.email}`)
            count++
        }
    }
}

console.log(filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'));
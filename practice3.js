const common = (a, b) => {
    let map = {}
    for (let i = 0; i < a.length; i++) {
        map[a[i]] = 0;
    }
    console.log(map)

    count = 0;
    for (let i = 0; i < b.length; i++) {
        if (map[b[i]] === 0) {
            count++
        }
    }

    console.log(count)

}

common([1, 2, 3, 5, 6, 4, 8, 9], [1, 2, 3, 4, 5, 6, 7])
var arr = [
    [0, 1, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1]
];

// Solution to this we can create a BFS algorithm and add all the adj nodes to the first node in the array first.
// Then work our way on the next elements not part of the array.

// function islands(arr) {
//     let neighbours = [[-1, 0], [0, -1], [1, 0], [0, 1]];
//     let queue = [];
//     let visited = [];
//     let islands = 0;
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             if (arr[i][j] === 1) {
//                 visited.push([i, j]);
//                 queue.push([i, j]);
//                 islands++;
//                 while (queue.length) {
//                     let currItem = queue.shift();
//                     for(let neighbour of neighbours) {
//                         let posX = currItem[0] + neighbour[0];
//                         let posY = currItem[0] + neighbour[0];

//                     }
//                 }
//             }

//         }
//     }
// }
function islands(array) {
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let queue = [];
    let visited = [];
    let islands = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 1) {
                if (visited.find(([checkI, checkJ]) => checkI == i && checkJ == j)) {
                    continue;
                }
                visited.push([i, j]);
                queue.push([i, j]);
                console.log(visited)
                console.log(queue)
                islands++;
                while (queue.length) {
                    let [baseI, baseJ] = queue.shift();
                    for (let dir of directions) {
                        let adjI = baseI + dir[0];
                        let adjJ = baseJ + dir[1];
                        // Check out of bounds
                        if (
                            adjI < 0 ||
                            adjI > array.length - 1 ||
                            adjJ < 0 ||
                            adjJ > array[i].length - 1
                        ) {
                            continue;
                        }
                        if (
                            array[adjI][adjJ] === 1 &&
                            !visited.find(
                                ([checkI, checkJ]) => checkI == adjI && checkJ == adjJ
                            )
                        ) {
                            visited.push([adjI, adjJ]);
                            queue.push([adjI, adjJ]);
                        }
                    }
                }
            }
        }
    }

    return islands;
}

console.log(islands(arr));

// let counter = 0;
// document.getElementById('button').addEventListener("click", function(x) {
//     let temp = counter;
//   counter++;
//     temp +=1;
//     counter
//        if (counter % 2 == 0) {
//         document.body.style.backgroundColor = '#00bfff';
//         document.getElementById('main-content').style.color = '#3d3a3a';
//         document.getElementById('button').innerText = 'Dark-Mode';
//         temp +=1;
//        } else {
//         document.body.style.backgroundColor = '#1f1f1f';
//         document.getElementById('main-content').style.color = '#7fffd4';
//         document.getElementById('button').innerText = 'Light-Mode';
//         temp +=1;
//        }
// })
 
function DarkAlgo(x) {
    document.body.style.backgroundColor = '#00bfff';
    document.getElementById('main-content').style.color = '#3d3a3a';
    document.getElementById('button').innerText = 'Dark-Mode';
}
function LightAlgo(x) {
    document.body.style.backgroundColor = '#1f1f1f';
    document.getElementById('main-content').style.color = '#7fffd4';
    document.getElementById('button').innerText = 'Light-Mode';
}



document.getElementById('button').addEventListener("click", function () {
    if ( x === undefined) {
        x = 1;
    } else if (x % 2 == 0) {
      DarkAlgo(x)
      x++;
    } else {
        LightAlgo(x)
        x++;
    }
})

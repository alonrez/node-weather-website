


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
    x = counter +1;
}
function LightAlgo(x) {
    document.body.style.backgroundColor = '#1f1f1f';
    document.getElementById('main-content').style.color = '#7fffd4';
    document.getElementById('button').innerText = 'Light-Mode';
     x = counter +1;
}



document.getElementById('button').addEventListener("click", function () {
    if (counter % 2 == 0) {
      DarkAlgo(counter)
      counter++;
    } else {
        LightAlgo(counter)
        counter ++;
    }
})

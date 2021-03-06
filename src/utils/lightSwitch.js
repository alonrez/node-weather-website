const fs = require('fs');
  

  
const loadSwitches = () => {
     try{
      const dataBuffer = fs.readFileSync('/web-server/src/utils/DarkModeBoolean.json')
      const dataJSON = dataBuffer.toString()
       return JSON.parse(dataJSON)
        } catch (e) {
            return []
        }
    }




  const lightSwitch = loadSwitches()
  const Switch = lightSwitch[0]

document.getElementById('button').addEventListener("click", function(x) {
 

       if (Switch.Dark === false) {   // if switch is currently on dark mode
        document.body.style.backgroundColor = '#00bfff';             
        document.getElementById('main-content').style.color = '#3d3a3a';  // change to light mode
        document.getElementById('button').innerText = 'Dark-Mode';
        console.log(Switch.Dark)
        Switch.Dark = true; 
       } else {                     // if switch is currently on light mode
        document.body.style.backgroundColor = '#1f1f1f';            
        document.getElementById('main-content').style.color = '#7fffd4'; // change to dark mode
        document.getElementById('button').innerText = 'Light-Mode';
        console.log(Switch.Dark)
        Switch.Dark = false
       }
})
module.exports = lightSwitch;
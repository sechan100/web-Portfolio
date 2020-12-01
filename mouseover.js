const dot_1 = document.querySelector("#module_1_dot")
const dot_2 = document.querySelector("#module_2_dot")
const dot_3 = document.querySelector("#module_3_dot")
const dot_4 = document.querySelector("#module_4_dot")

const hexagon_1 = document.getElementById("m_1_hexagon")
const hexagon_2 = document.getElementById("m_2_hexagon")
const hexagon_3 = document.getElementById("m_3_hexagon")
const hexagon_4 = document.getElementById("m_4_hexagon")

const icon_1 = document.getElementById("m_1_icon")
const icon_2 = document.getElementById("m_2_icon")
const icon_3 = document.getElementById("m_3_icon")
const icon_4 = document.getElementById("m_4_icon")

function animation_over(target) {
    const t = target.target
    const t_id = t.id;
    if(t_id.indexOf('1') !== -1){
        console.log('dot 1 mouse over')
        hexagon_1.classList.add('hexagon_animation_1')
        icon_1.classList.add('icon_animation')
    }else if(t_id.indexOf('2') !== -1){
        console.log('dot 2 mouse over')
        hexagon_2.classList.add('hexagon_animation_2')
        icon_2.classList.add('icon_animation')
    }else if(t_id.indexOf('3') !== -1){
        console.log('dot 3 mouse over')
        hexagon_3.classList.add('hexagon_animation_3')
        icon_3.classList.add('icon_animation')
    }else if(t_id.indexOf('4') !== -1){
        console.log('dot 4 mouse over')
        hexagon_4.classList.add('hexagon_animation_4')
        icon_4.classList.add('icon_animation')
    }
}


function animation_out() {
        hexagon_1.className = "hexagon"
        hexagon_2.className = "hexagon"
        hexagon_3.className = "hexagon"
        hexagon_4.className = "hexagon"
        icon_1.className = "module_icon"
        icon_2.className = "module_icon"
        icon_3.className = "module_icon"
        icon_4.className = "module_icon"
        
        console.log('mouse out')
}

function init() {
    for(let i=0; i<4; i++){
        var i_string = String(i+1)
        document.querySelector(`#module_${i_string}_dot`).addEventListener('mouseover', animation_over)
        document.querySelector(`#module_${i_string}_dot`).addEventListener('mouseout', animation_out)
    }
    hexagon_1.addEventListener('mouseover', animation_over)
    hexagon_1.addEventListener('mouseout', animation_out)
    hexagon_2.addEventListener('mouseover', animation_over)
    hexagon_2.addEventListener('mouseout', animation_out)
    hexagon_3.addEventListener('mouseover', animation_over)
    hexagon_3.addEventListener('mouseout', animation_out)
    hexagon_4.addEventListener('mouseover', animation_over)
    hexagon_4.addEventListener('mouseout', animation_out)
    console.log('on load')
}

init();
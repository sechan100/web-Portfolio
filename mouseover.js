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

const line_1 = document.querySelector("#line_1")
const line_2 = document.querySelector("#line_2")
const line_3 = document.querySelector("#line_3")
const line_4 = document.querySelector("#line_4")

const year_1 = document.querySelector("#year_1")
const year_2 = document.querySelector("#year_2")
const year_3 = document.querySelector("#year_3")
const year_4 = document.querySelector("#year_4")

const info_1 = document.querySelector("#info_1")
const info_2 = document.querySelector("#info_2")
const info_3 = document.querySelector("#info_3")
const info_4 = document.querySelector("#info_4")

function animation_over(target) {
    const t = target.target
    const t_id = t.id;
    if(t_id.indexOf('1') !== -1){
        console.log('dot 1 mouse over')
        hexagon_1.classList.add('hexagon_hover_1')
        icon_1.classList.add('icon_hover')
        line_1.classList.add('line_hover')
        year_1.classList.add('year_hover')
        info_1.classList.add('info_hover')

    }else if(t_id.indexOf('2') !== -1){
        console.log('dot 2 mouse over')
        hexagon_2.classList.add('hexagon_hover_2')
        icon_2.classList.add('icon_hover')
        line_2.classList.add('line_hover')
        year_2.classList.add('year_hover')
        info_2.classList.add('info_hover')

    }else if(t_id.indexOf('3') !== -1){
        console.log('dot 3 mouse over')
        hexagon_3.classList.add('hexagon_hover_3')
        icon_3.classList.add('icon_hover')
        line_3.classList.add('line_hover')
        year_3.classList.add('year_hover')
        info_3.classList.add('info_hover')

    }else if(t_id.indexOf('4') !== -1){
        console.log('dot 4 mouse over')
        hexagon_4.classList.add('hexagon_hover_4')
        icon_4.classList.add('icon_hover')
        line_4.classList.add('line_hover')
        year_4.classList.add('year_hover')
        info_4.classList.add('info_hover')
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

        line_1.className = "line"
        line_2.className = "line"
        line_3.className = "line"
        line_4.className = "line"
        
        year_1.className = "year"
        year_2.className = "year"
        year_3.className = "year"
        year_4.className = "year"

        info_1.className = "info"
        info_2.className = "info"
        info_3.className = "info"
        info_4.className = "info"
        
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
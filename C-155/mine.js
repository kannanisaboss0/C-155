//----------------------------------------------------------------Ablaze Under the Water----------------------------------------------------------------//
//-----------------------------------------------------------------------mine.js---------------------------------------------------------------//

//Registering a component for generating mines of random locations over a certain area
AFRAME.registerComponent("mine-dynamic",{

    //Calling schema
    schema:{

    },

    //Calling the init function
    init:function(){

        //Running a for loop over 24 iterations to genrate that amny mines
        for(var i=1;i<25;i++ ){

            //Providing each mine with a unique id, with accordance to the iteration number
            var id=`mine${i}`

            //Decalring a new variable for storing the postion coordinates of each mine per iteration, with x and y being random values
            var position={
                x:Math.random()*13-Math.random()*13,
                z:-1.5,
                y:Math.random()*1200+80
            }

            //Creating a new entity to embody the mine
            mine_el=document.createElement("a-entity")

            //Seeting attributes of gltf-model, scale and position to the mine
            mine_el.setAttribute("gltf-model","/SeaMine/scene.gltf")
            mine_el.setAttribute("scale","0.75 0.75 0.75")
            mine_el.setAttribute("position",position)
            mine_el.setAttribute("id",id)
            mine_el.setAttribute("static-body",{shape:"sphere",sphereRadius:0.07})


            //Obtaining the element representing the water and appending the recently created mine as a child to it
            water_el=document.querySelector("#water")
            water_el.appendChild(mine_el)
    }
    }
})

//-----------------------------------------------------------------------move.js---------------------------------------------------------------//
//----------------------------------------------------------------Ablaze Under the Water----------------------------------------------------------------//
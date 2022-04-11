//Registering a component to detect subamrine collisions
AFRAME.registerComponent("collision-detector",{
    //Schema
    schema:{
        elId:{type:"string",default:"mountain"}
    },

    //Calling an init function
    init: function(){
       
       //Initiating an event listener to detect collide events
       this.el.addEventListener("collide",(e)=>{
          
           //Assigning a variable to the target body id 
           target_id=e.detail.body.el.id 

           //Assessing the id of the element the submarine has collided with
           ////Case-1 -Target id includes "mine"
           if(target_id.includes("mine")){

              //Sourcing the submarine and effectively givving it s high mass to produce a sinking effect  
              submarine_el=document.querySelector("#submarine_player")
              submarine_el.setAttribute("dynamic-body",{mass:"32"})
           }

           ////Case-2 -Target id includes "survivor"
           if(target_id.includes("survivor")){
               
               //Sourcing the element that has the target id as its  id and reducing the humber of survivors left 
               survivor_el=document.querySelector(`#${target_id}`)
               survivor_el.remove()
               survivor_el_number=document.querySelector("#survivor_count_num")
               survivor_el_number_attr_val=survivor_el_number.getAttribute("text").value
               survivor_el_number_attr_val=parseInt(survivor_el_number_attr_val)-1
               survivor_el_number.setAttribute("text",{value:survivor_el_number_attr_val})

               //Verifying whether the humber of survivors left is 0 or not
               ////Case-2 -It is 0
               if(survivor_el_number_attr_val===0){

                //Setting the text elements' colors to green
                survivor_el_number.setAttribute("text",{color:"green"})
                survivor_text_el=document.querySelector("#survivor_count")
                survivor_text_el.setAttribute("text",{color:"green"})
               }
           }       
       })   
    }
})
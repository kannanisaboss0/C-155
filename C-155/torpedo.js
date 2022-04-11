//Registering a component to launc torpedoes
AFRAME.registerComponent("torpedo-launcher",{

    //Schema
    schema:{
        torpedo_num:{type:"string",default:"1"}
    },

    //Calling an init function
    init:function(){

        //Adding an event listener inititated by a keydown event
        window.addEventListener("keydown",(e)=>{


            //Verifying whether the key pressed is "T" or not
            ////Case-1 -The key pressed is "T"
            if(e.key==="t"){

                //Verifying whether the torpedo count is zro or not
                ////Case-1 -The torpedo count is not zero 
                if(this.data.torpedo_num!=="0"){

                 //Creating a torpedo element and setting its attributes
                torpedo_el=document.createElement("a-entity")
                torpedo_el.setAttribute("width","15")
                torpedo_el.setAttribute("position",{x:"0",y:"-1.5",z:"0"})
                torpedo_el.setAttribute("velocity","0 0 -50")
                torpedo_el.setAttribute("id","torpedo")
                torpedo_el.setAttribute("dynamic-body",{shape:"sphere",sphereRadius:"0.2",mass:0})

                //Sourcing the camera and setting its velocity attribute as well
                camera_el=document.querySelector("#camera")
                camera_el.setAttribute("velocity","0 0 -50")
                camera_el.setAttribute("position",{z:"2",y:"-3"})

                //Sourcing the torpedo count
                torpedo_el_number=document.querySelector("#torpedo_count_num")
                torpedo_el_number_attr=torpedo_el_number.getAttribute("text").value                
               
                //Appending the torpedo to the submarine  
                this.el.appendChild(torpedo_el)

                //Sourcing the torpedo number    
                torpedo_el_number=document.querySelector("#torpedo_count_num")
                torpedo_text_el=document.querySelector("#torpedo_count")

                //Setting the value to 0 and color to red
                torpedo_el_number.setAttribute("text",{value:"0",color:"red"})
                torpedo_text_el.setAttribute("text",{color:"red"})

                //Getting the torpedo count and assigning it to a custom property
                torpedo_el_number_val=torpedo_el_number.getAttribute("text").value
                this.data.torpedo_num=torpedo_el_number_val
                }   
            }
        })
    },

   //Calling the tick function 
   tick:function(){

    //Souricng the sumarine element and actively reading its position
    submarine_el=document.querySelector("#submarine_player")
    submarine_el_position_z=submarine_el.getAttribute("position").z
   
    //Verifying whether zeroth element of the parent's children exists
    ////Case-1 -Thhe child exists
    if(this.el.children[0]){

        //Sourcing the z position of the element
        torpedo_el=this.el.children[0]
        torpedo_el_position_z=torpedo_el.getAttribute("position").z

        //Veirfying whhether the torpedo and camera's z postions have a difference greater 200 or not
        ////Case-1 -The elements have a difference of greater than 200 in their z positions
        if(parseInt(torpedo_el_position_z)<parseInt(submarine_el_position_z)-200){
            torpedo_el.remove()
            camera_el=document.querySelector("#camera")
            camera_el.setAttribute("position",{z:parseInt(submarine_el_position_z)+20,y:"2.5"})
            camera_el.removeAttribute("velocity")
        }
    }
   } 
})
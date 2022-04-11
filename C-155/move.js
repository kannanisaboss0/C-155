//----------------------------------------------------------------Ablaze Under the Water----------------------------------------------------------------//
//-----------------------------------------------------------------------move.js---------------------------------------------------------------//

//Registering components for planar and vertical movement of the submarine
////Vertical Movement
AFRAME.registerComponent("move-submarine-vertical",{
    
    //Calling the tick function
    tick:function(){

        //Creating a constant to store the element's name
        const el=this.el

        //Sourcing the element's position
        position=this.el.getAttribute("position")

        //Creating animation strings for the initial and final positions 
        animation_string_start=position.x+" -3 "+position.z
        animation_string_end=position.x+" 0 "+position.z

        //Initiating a new event listener for responding to key down events
        window.addEventListener("keydown",function(e){

            //Assessing the key down events to identify the key pressed
            //Case-1 -Down arrow is pressed
            if(e.key==="ArrowDown" && position.y===0){
                el.setAttribute("animation",{property:"position",to:animation_string_start,dur:"25000",loop:"false",easing:"linear"}) 
            }   

            //Case-2 -Up arrow is pressed
            if(e.key==="ArrowUp" && position.y===-3){
                el.setAttribute("animation",{property:"position",to:animation_string_end,dur:"25000",loop:"false",easing:"linear"}) 
            }
        })
    
        //Calling the "ModifyFog" function to modify the fog according to the submarine's y position, which is passed as an argument
        this.ModifyFog(position.y)
        
    },

    //Modify Fog function
    ModifyFog:function(y){

        //Accessing the scene component
        scene_component=document.querySelector("#fog_container")
        
        //Checking whether the parameter is lesser than 2.75 or not
        //Case-1 -Parameter is lower than -2.75
        if(y<-2.1){
            scene_component.setAttribute("fog",{density:0})
        }

        //Case-2 -Parameter is higher than -2.75
        else{
            scene_component.setAttribute("fog",{density:0.08})
        }
    }
})

////Planar Movement
AFRAME.registerComponent("move-submarine-planar",{

    //Calling schema and defining two states
    schema:{
        posZ:{type:"number",default:0},
        posX:{type:"number",default:0}
    },

    //Calling the tick function
    tick:function(){

        //Sourcing the element's position
        position=this.el.getAttribute("position")
        
        //Initiating a new event listener for responding to key down events
        window.addEventListener("keydown",(e)=>{

            //Assessing the key down events to identify the key pressed
            ////Case-1 -W is pressed
            if(e.key==="w"){

                //Checking whether z velocity of the element is lesser than -0.02 or not
                ////Case-1 -The z velocity is lower than -0.09
                if(this.data.posZ<-0.09){
                 this.data.posZ=-0.09 
                }

                ////Case-2 -The z velocity is higher than -0.09
                else{
                 this.data.posZ-=0.0001
                }
            }

            ////Case-2 -S is pressed
            else if (e.key==="s"){
                //Checking whether z velocity of the element is greater than 0.02 or not
                ////Case-1 -The z velocity is higher than 0.09
                if(this.data.posZ>0.09){
                    this.data.posZ=0.09 
                   }

                ////Case-2 -The z velocity is lower than 0.09   
                else{
                    this.data.posZ+=0.000001
                   }
            }

            ////Case-3 -A is pressed
            if(e.key==="a"){

                //Checking whether x position of the element is greater than -10 or not
                ////Case-1 -The x position is higher than -10
                if(position.x>-10 ){

                    //Checking whether the x velocity is greater than -0.00003 or not
                    ////Case-1 -The x velocity is higher than -0.00003
                    if(this.data.posX>-0.0003){
                        this.data.posX=-0.0003
                    }

                    ////Case-2 -The x velocity is lower than -0.00003
                    else{
                        this.data.posX-=0.0015
                    }
                    
                    
                    
                    
                }
            }

            //Case-4 -D is pressed
            if(e.key==="d"){

                //Checking whether x position of the element is lesser than 10 or not
                //Case-1 -The x position is lower than 10
                if(position.x<+10){

                    //Checking whether the x velocity is lesser than 0.00003 or not
                    //Case-1 -The x velocity is lower than 0.00003                    
                    if(this.data.posX<+0.0003){
                        this.data.posX+=0.0003
                    }

                    //Case-2 -The x velocity is higher than 0.00003
                    else{
                        this.data.posX+=0.0015
                    }
                }   
            }
        })

        //Updating the x and z values of the element with the modified states
        position.z+=this.data.posZ
        position.x=this.data.posX
        
        //Seeting the new position values to the element
        this.el.setAttribute("position",{x:position.x,y:position.y,z:position.z})    
    }
})

//-----------------------------------------------------------------------move.js---------------------------------------------------------------//
//----------------------------------------------------------------Ablaze Under the Water----------------------------------------------------------------//

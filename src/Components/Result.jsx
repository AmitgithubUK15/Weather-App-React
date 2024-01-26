import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { BiDroplet } from 'react-icons/bi';
import { BiCloud } from 'react-icons/bi';
import { BiWind } from 'react-icons/bi';

const Result = ({temprature,city, humidity, feel, wind})=>{
       
    return (
        <>
        <div className="resultmain">
            <div style={{width:"100%", height:"166px", backgroundColor:"rgba(208,208,222,0.07)", borderRadius:"6px"}}>
             <div style={{width:"100%", height:"40px",display:"flex", padding:"7px 0"}}>   {/*1*/}
               <div style={{width:"50%", textAlign:"right", height:"38px"}}>
                    <span style={{fontSize:"30px",fontWeight:"700",cursor:"u"}}>{temprature}</span>
               </div>
               <div style={{width:"50%", height:"38px", textAlign:"left"}}>
                    <span style={{fontSize:"17px", display:"inline-block",margin:"0px 4px"}}>o</span>
                    <span style={{fontSize:"15px", fontWeight:"600"}}>C</span>
               </div>
             </div>

             <div style={{width:"100%", height:"40px", textAlign:"center",}}>                {/*2*/}
               <MdLocationOn size={30} color="white" style={{display:"inline-block", height:"22px"}} />
               <h2 style={{fontSize:"18px",display:"inline-block", margin:"0px" , cursor:"pointer"}}>{city}</h2>
            </div>

             <div style={{width:"96%", height:"60px", display:"flex", justifyContent:"space-around"}}>                                                                       
                <div style={{width:"24%", height:"61px", display:"flex",  borderRadius:"6px", cursor:"pointer"}}>
                    <div style={{width:"40%", height:"60px"}}>
                    <BiDroplet size={30} color="white" style={{display:"block", margin:"15px 0px", height:"20px"}} />
                    </div>
                    <div style={{width:"60%", height:"60px"}}>
                        <div style={{width:"100%", height:"27px", textAlign:"left"}}>{humidity} %</div>
                        <div>
                            <div style={{width:"100%", height:"20px", fontSize:"13px"}}>
                                <h7>Humidity</h7>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{width:"24%", height:"61px", display:"flex",  borderRadius:"6px", cursor:"pointer" }}>
                    <div style={{width:"40%", height:"60px"}}>
                    <BiCloud size={30} color="white" style={{display:"block", margin:"15px 0px", height:"20px"}} />
                    </div>
                    <div style={{width:"60%", height:"60px"}}>
                        <div style={{width:"100%", height:"27px", textAlign:"left"}}>{feel} %</div>
                        <div>
                            <div style={{width:"100%", height:"20px", fontSize:"13px",textAlign:"left"}}>
                                <h7>Feel</h7>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{width:"24%", height:"61px", display:"flex", borderRadius:"6px", cursor:"pointer"}}>     {/*boxShadow:"0 1px 4px 2px rgba(208,208,222,0.07)"*/}
                    <div style={{width:"40%", height:"60px"}}>
                    <BiWind size={30} color="white" style={{display:"block", margin:"15px 0px", height:"20px"}} />
                    </div>
                    <div style={{width:"60%", height:"60px"}}>
                        <div style={{width:"100%", height:"27px", textAlign:"left"}}>{wind} </div>
                        <div>
                            <div style={{width:"100%", height:"20px", fontSize:"13px" ,textAlign:"left"}}>
                                <h7>Wind</h7>
                            </div>
                        </div>
                    </div>
                </div>

             </div> 
            </div>
        </div>
        
        </>
    )
}

export default Result;
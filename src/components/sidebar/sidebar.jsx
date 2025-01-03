import React, { useContext, useState } from "react";
import './sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from "../../context/context";
const Sidebar = () =>{
    const [extended,setExtended] = useState(false)

    const{onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)

    const loadPrompt = async(prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
  return(
    <div className="sidebar">
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="error" />
            <div onClick={()=>newChat()} className="newchat">
                <img src={assets.plus_icon} alt="error"/>
                {extended? <p>New Chat</p>:null}
            </div>
            {extended? <div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompts.map((item,index)=>{
                    return(
                        <div onClick={()=>loadPrompt(item)} className="recent-entry">
                    <img src={assets.message_icon} alt="error"/>
                    <p>{item.slice(0,18)}...</p>
                </div>
                    )
                })}
                

            </div> : null}
        </div>
        <div className="bottom">
            <div className="bottom-entry recent-entry">
                <img src={assets.question_icon} alt=""/>
                {extended?<p>help</p> :null}
            </div>
            <div className="bottom-entry recent-entry">
                <img src={assets.history_icon} alt=""/>
                {extended?<p>Activity</p> :null}
            </div>
            <div className="bottom-entry recent-entry">
                <img src={assets.setting_icon} alt=""/>
                {extended?<p>settings</p> :null}
            </div>
        </div>

    </div>
  )
}
export default Sidebar
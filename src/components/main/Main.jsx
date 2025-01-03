import React, { useContext, useState } from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import ContextProvider, { Context } from '../../context/context'
export const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,input,setInput} = useContext(Context)
  return (
    <div className='main'>
      <div className="nav">
        <p>Evana.ai</p>
        <img src={assets.j_icon} alt=''/>
      </div>
      <div className="main-container">
        {!showResult
        ?<>
        <div className="greet">
          <p><span>Hello User!</span></p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>suggest beautiful places to see on the upcoming road trip</p>
            <img src={assets.compass_icon} alt=''/>
          </div>
          <div className="card">
            <p>Briefly summerise the concept:Urban planning</p>
            <img src={assets.bulb_icon} alt=''/>
          </div>
          <div className="card">
            <p>Brainstorm team bondingactivities for our work retreat</p>
            <img src={assets.message_icon} alt=''/>
          </div>
          <div className="card">
            <p>Improve the readiability of the following code</p>
            <img src={assets.code_icon} alt=''/>
          </div>
        </div>
        </>
        :<div className='result'>
          <div className='result-title'>
            <img src={assets.page_icon} alt=''/>
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.j_icon} alt=''/>
            {loading
            ?<div className='loader'>
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
              </div>
              :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
          </div>
         </div>
        }
        
        <div className="main-bottom">
          <div className="searchbox">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='enter the prompt here'/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            gemini may display incorrect info,including about people. so double cheack your responses.
          </p>
        </div>
      </div>
    </div>
  )
}

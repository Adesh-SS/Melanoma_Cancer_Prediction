import './PreventionCards.css';
import React from 'react';
import Sun from './Sun.jpg';
import SunScreen from './SunScreen.jpg';
import Tanning from './TanningBeds.jpeg';
import Skin from './Skin CheckUp.jpg';
import Glass from './SunGlass.jpg';
import Family from './Family.jpg';

function Cards() {
    return(
       <div className='Prevention'>
        <div className='PreventionRow'>
            <article class="card">
                <div class="temporary_text">
                    <img src={Sun} alt='sun' style={{marginLeft: '-2em', marginTop: '-1em'}}/>
                </div>
                <div class="card_content">
                    <span class="card_title">Avoid prolonged exposure to the sun</span>
                    <span class="card_subtitle">Avoid prolonged exposure to the sun, especially during<br/>peak hours.</span>
                    <div className='textArea'>
                        <p class="card_description"> The ultraviolet (UV) rays from the sun are 
                        the primary cause of skin damage that can lead 
                        to melanoma. By avoiding the sun during 
                        peak hours and wearing protective clothing, you can limit your exposure to these harmful rays.</p>

                    </div>                    
                </div>
            </article>
            <article class="card">
                <div class="temporary_text">
                    <img src={SunScreen} alt='sunscreen' style={{height: '12em', marginLeft: '-2em', marginTop: '-1em'}}/>
                </div>
                <div class="card_content">
                    <span class="card_title">Use sunscreen</span>
                    <span class="card_subtitle">Use sunscreen with a sun protection factor (SPF).<br/></span>
                    <div className='textArea'>
                    <p class="card_description">Sunscreen helps to protect your skin from UV rays by 
                    absorbing or reflecting them. It's important to choose a broad-spectrum sunscreen 
                    that protects against both UVA and UVB rays and to apply it generously and frequently
                    to all exposed skin.</p>
                    </div>                    
                </div>
            </article>
            <article class="card">
                <div class="temporary_text">
                <img src={Tanning} alt='sunscreen' style={{height: '12em', marginLeft: '-2em', marginTop: '-1em'}}/>
                </div>
                <div class="card_content">
                    <span class="card_title">Avoid tanning beds and sunlamps</span>
                    <span class="card_subtitle">Avoid tanning beds and sunlamps, as they can increase the risk.</span>
                    <div className='textArea'>
                    <p class="card_description"><br/>Tanning beds and sunlamps emit UV radiation that can be 
                    even more harmful than the sun. Avoiding them altogether can help reduce your risk of
                    developing melanoma.</p>
                    </div>                    
                </div>
            </article>
        </div>
        <div className='PreventionRow'>
            <article class="card">
                <div class="temporary_text">
                    <img src={Skin} alt='sunscreen' style={{height: '12em', marginLeft: '-2em', marginTop: '-1em'}}/>
                </div>
                <div class="card_content">
                    <span class="card_title">Check your skin regularly</span>
                    <span class="card_subtitle">Check your skin regularly for moles.</span>
                    <div className='textArea'>
                    <p class="card_description">Being aware of any changes in your skin, such as the 
                    appearance of new moles or changes in existing moles, is crucial for early detection 
                    and treatment of melanoma. Regular self-exams can help you spot any suspicious 
                    changes.</p>
                    </div>
                </div>
            </article>
            <article class="card">
                <div class="temporary_text">
                    <img src={Glass} alt='sunscreen' style={{height: '12em', marginLeft: '-2em', marginTop: '-1em'}}/>
                </div>
                <div class="card_content">
                    <span class="card_title">Protect your eyes</span>
                    <span class="card_subtitle">Protect your eyes by wearing sunglasses.</span>
                    <div className='textArea'>
                    <p class="card_description"><br/>UV rays can also damage your eyes, so wearing sunglasses 
                    that block UVA and UVB rays is important for protecting your vision and reducing your
                    risk of developing melanoma of the eye.</p>
                    </div>
                </div>
            </article>
            <article class="card">
                <div class="temporary_text">
                    <img src={Family} alt='sunscreen' style={{height: '12em', width:'15em', marginLeft: '-1em', marginTop: '-1em'}}/>
                </div>
                <div class="card_content">
                    <span class="card_title">Consider your family history</span>
                    <span class="card_subtitle">Consider your family history of melanoma.</span>
                    <div className='textArea'>
                    <p class="card_description">If you have a family history of melanoma, you may be at 
                    higher risk for developing the disease. Discuss your risk factors with your 
                    healthcare provider and consider additional screening or surveillance as appropriate.</p>          
                    </div>
                </div>
            </article>
        </div>
       </div>
    );
}

export default Cards;
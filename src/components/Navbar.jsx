import { Link } from "react-scroll";
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { IoHeartOutline } from 'react-icons/io5';
import { FiChevronDown } from 'react-icons/fi';
import  ReturnedHtml  from './ReturnedHtml';

import Multicolor from './Multicolor.jpeg'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [inputValue, setInputValue] = useState('');


    const links = [
        {
            id: 1,
            link: 'Red',
            text: 'Red'
        },
        {
            id: 2,
            link: 'Blue',
            text: 'Blue'
        },
        {
            id: 3,
            link: 'Green',
            text: 'Green'
        },
        {
            id: 4,
            link: 'Yellow',
            text: 'Yellow'
        },
        {
            id: 5,
            link: 'Purple',
            text: 'Purple'
        },
        {
            id: 6,
            link: 'Orange',
            text: 'Orange'
        }
    ]

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        
    };

    return (
        <div style={{width:'100%', height:'70px',background : 'black'}}>
            <div style={{display:'flex',justifyContent:'space-between',position:'fixed',width:'100%',alignItems:'center',justifyItems:'center',background:'white',height:'60px',zIndex:'2'}}>
                <p style={{margin:'2%',fontFamily: 'Dancing Script',fontSize:'35px'}}>Sravani</p>
                <button style={{border : 'none',background:'white',margin:'2%'}} onClick={() => setNav(!nav)} >{!nav ?<FiMenu style={{ fontSize: '30px',color:'rgb(62, 155, 202)' }}/> :<AiOutlineClose style={{ fontSize: '30px',color:'rgb(62, 155, 202)' }}/>}</button>
            </div>
            <p style={{zIndex:'1',position:'absolute',top :'20%',left:'15%',color:'white',fontSize:'25px',fontWeight:'900',textAlign:"center"}}>Unleash Your Creativity with the Ultimate Color Picker <IoHeartOutline style={{color:'red',fontSize:'25px',zIndex:'1'}}/>....</p>
            <input onChange={handleInputChange} type="text" placeholder="Enter Your Color....." style={{zIndex:'1',background:'white',position:'absolute',top:'38%',left:'35%',width:'35%',padding:'6px',borderRadius:'15px',outline:'none'}}/>
            <Link 
              activeClass="active" 
              to='Red'
              spy={true} 
              smooth={true}
              offset={-70}
              duration={500} 
            ><FiChevronDown className={"downArrow-animated"} style={{position:'absolute',top:'55%',left:'50%',zIndex:'1',fontSize:'70px',color:'rgb(22, 56, 73)'}}/></Link>
            <img src={Multicolor} style={{width:'100%',height:'80vh'}} alt="" />
            
            <div style={{ width: '100%',position:'fixed',top:'60px',zIndex:'2'}}>
                {
                    nav && links.map(({ link, text }) => (
                        <Link 
                        onClick={()=>setNav(!nav)}
                        activeClass="active" 
                        to={link}
                        spy={true} 
                        smooth={true}
                        offset={-70}
                        duration={700} 
                        style={{display:'flex',flexDirection:'coloum',justifyContent : 'center', background : 'white',padding : '10px'}} 
                        >
                       <p style={{borderBottom : '2px solid skyblue',width:'20%',textAlign:'center'}}>{text}</p>
                        </Link>
                    ))
                }
            </div>
            <ReturnedHtml inputValue={inputValue} />
        </div>
    )
}

export default Navbar
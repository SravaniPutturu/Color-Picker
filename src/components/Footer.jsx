import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {

    const links = [
        {name : "Red"},{name : "Blue"},{name:'Green'},{name:'Yellow'}, {name:"Purple"},{name:'Orange'
    }
    ]

  return (
    <footer>
        {
            links.map((link)=>{
               return <Link
                to = {link.name}
                spy ='true'
                smooth = 'true'
                duration={700}
                >
                   <p>{link.name}<hr style={{color:'bisque',width:'50px'}}/></p>
                </Link>
            })
        }
    </footer>
  )
}

export default Footer
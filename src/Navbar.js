
import { FaBars } from 'react-icons/fa';
import './App.css'
import { links, social } from './data';
import { useState } from 'react';
function Navbar() {
 const [showlink, setShowlink] = useState(false)
  return (
    <div className='navbar'>
      <div className='leftside'>
      <div className="link"  id={showlink ? 'hidden':''}>
  {links.map((link) => (
    <a href={link.url} key={link.id}> {link.text}
    </a>
  ))}

</div>
<button onClick={()=>{setShowlink(!showlink)}}><FaBars/></button>
       </div>
    <div className='rightside'>
      <div className='icon'>
    {social.map((socialIcon) => (
    //  const { id, url, icon } = socialIcon;
    <a href={socialIcon.url} key={socialIcon.id}>          {socialIcon.icon}
    </a>
  ))}
    </div>
      </div>     
    </div>
  )
}

export default Navbar

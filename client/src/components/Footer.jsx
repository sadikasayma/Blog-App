import React from 'react'
import{Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <ul className='footer__categories'>
        <li><Link to='/posts/categories/Travel'>Travel</Link></li>
        <li><Link to='/posts/categories/Food'>Food</Link></li>
        <li><Link to='/posts/categories/Entertainment'>Entertainment</Link></li>
        <li><Link to='/posts/categories/Technology'>Technology</Link></li>
        <li><Link to='/posts/categories/Art'>Art</Link></li>
        <li><Link to='/posts/categories/Buisness'>Buisness</Link></li>
        <li><Link to='/posts/categories/Uncategorised'>Uncategorised</Link></li>
      </ul>
      <div className="footer__copyright">
        <small>All Rights Reserved &copy;Copyright,SaSa blog.</small>
      </div>
    </footer>
  )
}

export default Footer
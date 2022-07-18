// @ts-nocheck
import './navbar.css'
import home from '../assets/home.png'
import home_ from '../assets/home_.png'
import cblol from '../assets/CBLOL.png'
import lcs from '../assets/LCS.png'
import lck from '../assets/LCK.png'
import lec from '../assets/LEC.png'
import lpl from '../assets/LPL.png'
import lla from '../assets/LLA.png'
import pcs from '../assets/PCS.png'
import tcl from '../assets/TCL.png'
import vcs from '../assets/VCS.png'
import ljl from '../assets/LJL.png'
import lco from '../assets/LCO.png'
import lcl from '../assets/LCL.png'
import cblol_ from '../assets/CBLOL_.png'
import lcs_ from '../assets/LCS_.png'
import lck_ from '../assets/LCK_.png'
import lec_ from '../assets/LEC_.png'
import lpl_ from '../assets/LPL_.png'
import lla_ from '../assets/LLA_.png'
import pcs_ from '../assets/PCS_.png'
import tcl_ from '../assets/TCL_.png'
import vcs_ from '../assets/VCS_.png'
import ljl_ from '../assets/LJL_.png'
import lco_ from '../assets/LCO_.png'
import lcl_ from '../assets/LCL_.png'
export default (props)=>{
  
const items = [['LCS',lcs,lcs_],  ['LCK',lck,lck_],['LPL',lpl,lpl_], ['LEC',lec, lec_],['CBLOL',cblol, cblol_],['PCS',pcs,pcs_],
 ['TCL',tcl, tcl_], ['LLA',lla, lla_],['LJL',ljl,ljl_],['LCL',lcl,lcl_],, ['VCS',vcs, vcs_],['LCO',lco,lco_]]
  return(
  <div className='navcontainer'>
    <span className='underline'></span>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <div class="navbar-brand"></div>
    <a class="navbar-brand tab" href={`/`}>
    <div className='subcon'>
      <div>
      <img className='' onMouseOver={e => (e.currentTarget.src = home_)} onMouseOut={e => (e.currentTarget.src = home)} src={home}/>
      </div><span className='name'></span></div>
    </a>
    {items.map((item, index)=>{if(items[index][0]!=props.selected){
      return(
<a class="navbar-brand tab" href={`/${items[index][0]}`}><div className='subcon'><div>
  <img className='' onMouseOver={e => (e.currentTarget.src = items[index][2])} onMouseOut={e => (e.currentTarget.src = items[index][1])} src={items[index][1]}/>
  <span className='name'>{items[index][0]}</span></div></div></a>
      )} else{return(<a class="navbar-brand tab" href={`/${items[index][0]}`}><div className='subcon'><div><img onMouseOver={e => (e.currentTarget.src = items[index][2])} onMouseOut={e => (e.currentTarget.src = items[index][2])} src={items[index][2]}/><span className='name'>{items[index][0]}</span></div></div></a>
      )}
      })}
    <div class="navbar-brand"></div>
  </div>
</nav>
<span className='underline'></span>
</div>
    
    
)}
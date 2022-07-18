import {BrowserRouter, Routes, Route, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import CBLOL from './pages/CBLOL'
import LCK from './pages/LCK'
import LCS from './pages/LCS'
import LPL from './pages/LPL'
import LEC from './pages/LEC'
import LJL from './pages/LJL'
import LLA from './pages/LLA'
import PCS from './pages/PCS'
import TCL from './pages/TCL'
import VCS from './pages/VCS'
import LCO from './pages/LCO'
import LCL from './pages/LCL'
import data from './data.json'
import Banner from './components/banner'

function App() {
  document.title = "ProStandings"
  const Leagues = ['LCS', 'LCK','LPL','LEC','CBLOL','PCS','TCL','LLA','LJL','LCL','VCS','LCO']
  const matches = []
  var today = new Date();
  console.log('today',today)
  for(let i=0; i<Leagues.length; i++){
    for(let j=0; j<data[Leagues[i]]['matches'].length; j++){
      var date = new Date(data[Leagues[i]]['matches'][j][0][2])
      if(date >= today){
        matches.push(data[Leagues[i]]['matches'][j])}
        console.log('thisdate',date, data[Leagues[i]]['matches'][j][0][2])
    }
  }
  //var today= new Date();
  //var tomorrow = new Date("2022-07-19:16:00")

  const ordered_matches = matches.sort((a,b)=>new Date(a[0][2]) - new Date(b[0][2]))
  console.log('ordered', ordered_matches)
  return (
    <BrowserRouter>
    <Banner matches={ordered_matches}/>
     <Routes>
      <Route path='/' element={<Home data={data}/>}></Route>
      <Route path='/CBLOL' element={<CBLOL data={data}/>}></Route>
      <Route path='/LCK' element={<LCK data={data}/>}></Route>
      <Route path='/LCS' element={<LCS data={data}/>}></Route>
      <Route path='/LPL' element={<LPL data={data}/>}></Route>
      <Route path='/LEC' element={<LEC data={data}/>}></Route>
      <Route path='/LJL' element={<LJL data={data}/>}></Route>
      <Route path='/LLA' element={<LLA data={data}/>}></Route>
      <Route path='/PCS' element={<PCS data={data}/>}></Route>
      <Route path='/TCL' element={<TCL data={data}/>}></Route>
      <Route path='/VCS' element={<VCS data={data}/>}></Route>
      <Route path='/LCO' element={<LCO data={data}/>}></Route>
      <Route path='/LCL' element={<LCL data={data}/>}></Route>
     </Routes>
     
      <footer style={{margin:'auto', marginTop:'3%', padding:'1%', width:'90%', borderTop:'solid white 1px'}}>
        <div style={{display:'flex', width:'30%', margin:'auto'}}>
              <span style={{color:'white', fontSize:'20px'}}>About me</span>
              <a style={{margin:'auto'}} href="#"><i class="fa fa-twitter" style={{color:'white', fontSize:'30px'}}></i></a>
              <a style={{margin:'auto'}} href="#"><i class="fa fa-instagram" style={{color:'white', fontSize:'30px'}}></i></a>
              <a style={{margin:'auto'}} href="#"><i class="fa fa-linkedin" style={{color:'white', fontSize:'30px'}}></i></a>
          </div>
          
      </footer>

    </BrowserRouter>
  );
}

export default App;

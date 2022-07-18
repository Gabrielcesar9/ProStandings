import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Table from '../components/table'
import image from '../assets/banners/home1.png'
import Cha from '../components/chart'
import data from '../data.json'
import Next from '../components/next'
function LPL(props){
    //console.log('data', data)
    const data = props.data
    return (
    <>
    <Navbar selected={'LPL'}/>
    <table style={{marginTop:'2%'}}>
        <tr>
            <td style={{width:'50%'}}><Table ratings={data['LPL']}/></td>
            <td ><Cha ratings={data['LPL']}/></td>
        </tr>
    </table>
    <Next matches={data['LPL']['matches']}/>
    <footer>This is a footer</footer>
    </>
        
    )
}

export default LPL
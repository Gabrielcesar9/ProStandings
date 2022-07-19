import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Table from '../components/table'
import image from '../assets/banners/home1.png'
import Cha from '../components/chart'
import Next from '../components/next'
function LCL(props){
    //console.log('data', data)
    const data = props.data
    return (
    <>
    <Navbar selected={'LCL'}/>
    <table style={{marginTop:'2%'}}>
        <tr>
            <td style={{width:'50%'}}><Table ratings={data['LCL']}/></td>
            <td ><Cha ratings={data['LCL']}/></td>
        </tr>
    </table>
    <Next matches={data['LCL']['matches']}/>
    <footer style={{textAlign:'center', color:"white", margin:'1%', fontSize:'larger'}}>League interupted due to the Russian invasion of Ukraine</footer>
    </>
        
    )
}

export default LCL
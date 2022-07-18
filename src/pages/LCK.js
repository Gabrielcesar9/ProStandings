import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Table from '../components/table'
import image from '../assets/banners/home1.png'
import Cha from '../components/chart'
import Next from '../components/next'
function LCK(props){
    //console.log('data', data)
    const data = props.data
    return (
    <>
    <Navbar selected={'LCK'}/>
    <table style={{marginTop:'2%'}}>
        <tr>
            <td style={{width:'50%'}}><Table ratings={data['LCK']}/></td>
            <td ><Cha ratings={data['LCK']}/></td>
        </tr>
    </table>
    <Next matches={data['LCK']['matches']}/>
    <footer>This is a footer</footer>
    </>
        
    )
}

export default LCK
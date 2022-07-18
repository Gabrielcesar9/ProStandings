import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Table from '../components/table'
import image from '../assets/banners/home1.png'
import Cha from '../components/chart'
import Next from '../components/next'
function LJL(props){
    //console.log('data', data)
    const data = props.data
    return (
    <>
    <Navbar selected={'LJL'}/>
    <table style={{marginTop:'2%'}}>
        <tr>
            <td style={{width:'50%'}}><Table ratings={data['LJL']}/></td>
            <td ><Cha ratings={data['LJL']}/></td>
        </tr>
    </table>
    <Next matches={data['LJL']['matches']}/>
    <footer>This is a footer</footer>
    </>
        
    )
}

export default LJL
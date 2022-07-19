import './next.css'
import next from '../assets/next.png'
import {useRef, useEffect} from 'react'
//cblol
import RED from '../assets/team_icons/cblol/RED.png'
import PNG from '../assets/team_icons/cblol/PNG.png'
import LLL from '../assets/team_icons/cblol/LLL.png'
import KBM from '../assets/team_icons/cblol/KBM.png'
import FUR from '../assets/team_icons/cblol/FUR.png'
import RNS from '../assets/team_icons/cblol/RNS.png'
import NMG from '../assets/team_icons/cblol/NMG.png'
import LBR from '../assets/team_icons/cblol/LBR.png'
import ITZ from '../assets/team_icons/cblol/ITZ.png'
import FLA from '../assets/team_icons/cblol/FLA.png'
//lck
import BRO from '../assets/team_icons/lck/BRO.png'
import DWG from '../assets/team_icons/lck/DWG.png'
import DRX from '../assets/team_icons/lck/DRX.png'
import GEN from '../assets/team_icons/lck/GEN.png'
import HLE from '../assets/team_icons/lck/HLE.png'
import KDF from '../assets/team_icons/lck/KDF.png'
import KT from '../assets/team_icons/lck/KT.png'
import LSB from '../assets/team_icons/lck/LSB.png'
import NS from '../assets/team_icons/lck/NS.png'
import T1 from '../assets/team_icons/lck/T1.png'
//lcs
import T100 from '../assets/team_icons/lcs/100.png'
import C9 from '../assets/team_icons/lcs/C9.png'
import CLG from '../assets/team_icons/lcs/CLG.png'
import DIG from '../assets/team_icons/lcs/DIG.png'
import FLY from '../assets/team_icons/lcs/FLY.png'
import GG from '../assets/team_icons/lcs/GG.png'
import IMT from '../assets/team_icons/lcs/IMT.png'
import TL from '../assets/team_icons/lcs/TL.png'
import TSM from '../assets/team_icons/lcs/TSM.png'
import EG from '../assets/team_icons/lcs/EG.png'
//lpl
import AL from '../assets/team_icons/lpl/AL.png'
import EDG from '../assets/team_icons/lpl/EDG.png'
import FPX from '../assets/team_icons/lpl/FPX.png'
import IG from '../assets/team_icons/lpl/iG.png'
import JDG from '../assets/team_icons/lpl/JDG.png'
import LGD from '../assets/team_icons/lpl/LGD.png'
import LNG from '../assets/team_icons/lpl/LNG.png'
import OMG from '../assets/team_icons/lpl/OMG.png'
import RA from '../assets/team_icons/lpl/RA.png'
import RNG from '../assets/team_icons/lpl/RNG.png'
import TES from '../assets/team_icons/lpl/TES.png'
import TT from '../assets/team_icons/lpl/TT.png'
import UP from '../assets/team_icons/lpl/UP.png'
import V5 from '../assets/team_icons/lpl/V5.png'
import WBG from '../assets/team_icons/lpl/WBG.png'
import WE from '../assets/team_icons/lpl/WE.png'
import BLG from '../assets/team_icons/lpl/BLG.png'
//lcl
import BSG from '../assets/team_icons/lcl/BSG.png'
import CC from '../assets/team_icons/lcl/CC.png'
import CTR from '../assets/team_icons/lcl/CTR.png'
import DRA from '../assets/team_icons/lcl/DRA.png'
import OBG from '../assets/team_icons/lcl/OBG.png'
import TS from '../assets/team_icons/lcl/TS.png'
import UNL from '../assets/team_icons/lcl/UNL.png'
import VS from '../assets/team_icons/lcl/VS.png'
//lco
import CHF from '../assets/team_icons/lco/CHF.png'
import DW from '../assets/team_icons/lco/DW.png'
import GRV from '../assets/team_icons/lco/GRV.png'
import KNG from '../assets/team_icons/lco/KNG.png'
import MEC from '../assets/team_icons/lco/MEC.png'
import ORD from '../assets/team_icons/lco/ORD.png'
import PCE from '../assets/team_icons/lco/PCE.png'
import PGG from '../assets/team_icons/lco/PGG.png'
//lec
import AST from '../assets/team_icons/lec/AST.png'
import BDS from '../assets/team_icons/lec/BDS.png'
import FNC from '../assets/team_icons/lec/FNC.png'
import G2 from '../assets/team_icons/lec/G2.png'
import MAD from '../assets/team_icons/lec/MAD.png'
import MSF from '../assets/team_icons/lec/MSF.png'
import RGE from '../assets/team_icons/lec/RGE.png'
import SK from '../assets/team_icons/lec/SK.png'
import VIT from '../assets/team_icons/lec/VIT.png'
import XL from '../assets/team_icons/lec/XL.png'
//ljl
import AXZ from '../assets/team_icons/ljl/AXZ.png'
import BC from '../assets/team_icons/ljl/BC.png'
import CGA from '../assets/team_icons/ljl/CGA.png'
import DFM from '../assets/team_icons/ljl/DFM.png'
import RJ from '../assets/team_icons/ljl/RJ.png'
import SG from '../assets/team_icons/ljl/SG.png'
import SHG from '../assets/team_icons/ljl/SHG.png'
import V3 from '../assets/team_icons/ljl/V3.png'
//lla
import AK from '../assets/team_icons/lla/AK.png'
import AZE from '../assets/team_icons/lla/AZE.png'
import EST from '../assets/team_icons/lla/EST.png'
import GET from '../assets/team_icons/lla/GET.png'
import INF from '../assets/team_icons/lla/INF.png'
import ISG from '../assets/team_icons/lla/ISG.png'
import R7 from '../assets/team_icons/lla/R7.png'
import XTN from '../assets/team_icons/lla/XTN.png'
//pcs
import BYG from '../assets/team_icons/pcs/BYG.png'
import CFO from '../assets/team_icons/pcs/CFO.png'
import DCG from '../assets/team_icons/pcs/DCG.png'
import DWT from '../assets/team_icons/pcs/DWT.png'
import FAK from '../assets/team_icons/pcs/FAK.png'
import IMP from '../assets/team_icons/pcs/IMP.png'
import JT from '../assets/team_icons/pcs/JT.png'
import MFT from '../assets/team_icons/pcs/MFT.png'
import PSG from '../assets/team_icons/pcs/PSG.png'
import S9 from '../assets/team_icons/pcs/S9.png'
//tcl
import R5 from '../assets/team_icons/tcl/5R.png'
import AUR from '../assets/team_icons/tcl/AUR.png'
import BJK from '../assets/team_icons/tcl/BJK.png'
import DP from '../assets/team_icons/tcl/DP.png'
import FB from '../assets/team_icons/tcl/FB.png'
import GAL from '../assets/team_icons/tcl/GAL.png'
import GS from '../assets/team_icons/tcl/GS.png'
import IW from '../assets/team_icons/tcl/IW.png'
import NSR from '../assets/team_icons/tcl/NSR.png'
import SMB from '../assets/team_icons/tcl/SMB.png'
//vcs
import ASE from '../assets/team_icons/vcs/ASE.png'
import CES from '../assets/team_icons/vcs/CES.png'
import GAM from '../assets/team_icons/vcs/GAM.png'
import GE from '../assets/team_icons/vcs/GE.png'
import SE from '../assets/team_icons/vcs/SE.png'
import SGB from '../assets/team_icons/vcs/SGB.png'
import TSE from '../assets/team_icons/vcs/TS.png'
import TW from '../assets/team_icons/vcs/TW.png'
export default (props)=>{
    //console.log('matches', props)
    const icons = {'RED':RED, 'PNG':PNG, 'LLL':LLL,'KBM':KBM, 'FUR':FUR, 'RNS':RNS, 'NMG':NMG, 'LBR':LBR, 'ITZ':ITZ,'FLA':FLA,
                    'BRO':BRO,'DWG':DWG,'DRX':DRX,'GEN':GEN,'HLE':HLE,'KDF':KDF,'KT':KT,'LSB':LSB,'NS':NS,'T1':T1,
                    '100T':T100,'C9':C9,'CLG':CLG,'DIG':DIG,'FLY':FLY,'GG':GG,'IMT':IMT,'TL':TL,'TSM':TSM,'EG':EG,
                    'AL':AL, 'EDG':EDG, 'FPX':FPX,'iG':IG,'JDG':JDG,'LGD':LGD,'LNG':LNG,'OMG':OMG,'RA':RA,'RNG':RNG,'TES':TES,'TT':TT,'UP':UP,'V5':V5,'WBG':WBG,'WE':WE, 'BLG':BLG,
                    'BSG':BSG, 'CC':CC, 'CTR':CTR, 'DRA':DRA, 'OBG':OBG, 'TS':TS, 'UNL':UNL,
                    'CHF':CHF,'DW':DW,'GRV':GRV,'KNG':KNG,'MEC':MEC,'ORD':ORD,'PCE':PCE,'PGG':PGG,
                    'AST':AST,'BDS':BDS,'FNC':FNC,'G2':G2,'MAD':MAD,'MSF':MSF,'RGE':RGE,'SK':SK,'VIT':VIT,'XL':XL,
                    'AXZ':AXZ,'BC':BC,'CGA':CGA, 'DFM':DFM, 'RJ':RJ, 'SG':SG, 'SHG':SHG, 'V3':V3,
                    'AK':AK, 'AZE':AZE, 'EST':EST, 'GET':GET, 'INF':INF, 'ISG':ISG, 'R7':R7,'XTN':XTN,
                    'BYG':BYG,'CFO':CFO,'DCG':DCG,'DWT':DWT,'FAK':FAK,'IMP':IMP,'JT':JT,'MFT':MFT,'PSG':PSG,'S9':S9,
                    '5R':R5,'AUR':AUR,'BJK':BJK,'DP':DP,'FB':FB,'GAL':GAL,'GS':GS,'IW':IW,'NSR':NSR,'SMB':SMB,
                    'ASE':ASE,'CES':CES,'GAM':GAM,'GE':GE,'SE':SE,'SGB':SGB,'TSE':TSE,'TW':TW,
                    }
    const matches = props.matches.slice(0, 5)          
    const many = (matches.length/2).toPrecision(1)
    const fHalf = matches.slice(0, many)
    const sHalf = matches.slice(many, )
    const green = '#2ebd24'
    const red = '#DC143C'
    var colors;
    return(
        <div className='container'>
            <div style={{display:'flex', margin:'auto', marginTop:'2%', color:'white'}}><img style={{margin:'auto',width:'600px'}} src={next}></img></div>
            <span className='underline'></span>
            <div className='subcontainer'>
                {fHalf.map((item, index)=>{
                    if(fHalf[index][1] <= 50){
                        colors = [red, green]
                    }
                    else{
                        colors = [green,red]
                    };
                    return (
                    <div className='next'>
                    <table className='next'>
                        <tbody>
                    <tr>
                        <td className='next'><img src={icons[fHalf[index][0][0]]}></img>{fHalf[index][0][0]}</td>
                        <td className='next' style={{backgroundColor:colors[0]}}>{(fHalf[index][1]).toPrecision(4)}%</td>
                    </tr>
                    <tr>
                        <td className='next'><img src={icons[fHalf[index][0][1]]}></img>{fHalf[index][0][1]}</td>
                        <td className='next' style={{backgroundColor:colors[1]}}>{(100-fHalf[index][1]).toPrecision(4)}%</td>
                    </tr>
                    
                </tbody>
            </table>
                 </div>   
                    )
                    })
                }
                  
            </div>
            <div className='subcontainer'>
                {sHalf.map((item, index)=>{
                     if(sHalf[index][1] <= 50){
                        colors = [red,green]
                    }
                    else{
                        colors = [green,red]
                    };
                    return (
                    <div className='next'>
                    <table className='next'>
                        <tbody>
                    <tr>
                        <td className='next' ><img src={icons[sHalf[index][0][0]]}></img>{sHalf[index][0][0]}</td>
                        <td className='next' style={{backgroundColor:colors[0]}}>{(sHalf[index][1]).toPrecision(4)}%</td>
                    </tr>
                    <tr>
                        <td className='next' ><img src={icons[sHalf[index][0][1]]}></img>{sHalf[index][0][1]}</td>
                        <td className='next' style={{backgroundColor:colors[1]}}>{(100-sHalf[index][1]).toPrecision(4)}%</td>
                    </tr>
                    
                </tbody>
            </table>
                 </div>   
                    )
                    })
                }
            </div>
        </div>
    )
}
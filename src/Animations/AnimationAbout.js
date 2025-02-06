import { useAnimationFrame } from "motion/react"
import { useRef } from "react"
import MensFashionImage from '../Images/12.jpeg'
import WomensFashionImage from '../Images/11.jpg'
import electronicsImage from "../Images/electronics.jpg";
import stationeryImage from "../Images/15.jpg";
import sportsImage from "../Images/13.jpg";
import shoeImage from "../Images/14.jpg"; 
import '../Animations/Animation.css'

export default function UseAnimationFrame() {
    const ref = useRef(null)

    useAnimationFrame((t) => {
        if (!ref.current) return

        const rotate = Math.sin(t / 10000) * 200
        const y = (1 + Math.sin(t / 1000)) * -50
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
    })

    return (
        <div className="container">
            <div className="cube" ref={ref}>
                <div className="side front" >
                    <img src={MensFashionImage} className="w-full h-full" alt="Load"/>
                </div>
                <div className="side left" >
                    <img src={WomensFashionImage} className="w-full h-full" alt="Load"/>
                </div>
                <div className="side bottom" >
                    <img src={electronicsImage} className="w-full h-full" alt="Load"/>
                </div>
                <div className="side back" >
                    <img src={shoeImage} className="w-full h-full" alt="Load"/>
                </div>
                <div className="side top" >
                    <img src={sportsImage} className="w-full h-full" alt="Load"/>
                </div>
                <div className="side right" >
                    <img src={stationeryImage} className="w-full h-full" alt="Load"/>
                </div>
            </div>
        </div>
    )
}
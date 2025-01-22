import { useAnimationFrame } from "motion/react"
import { useRef } from "react"
import MensFashionImage from '../Images/12.jpeg'
import WomensFashionImage from '../Images/11.jpg'
import electronicsImage from "../Images/electronics.jpg";
import stationeryImage from "../Images/15.jpg";
import sportsImage from "../Images/13.jpg";
import shoeImage from "../Images/14.jpg"; 

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
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>{`
            .container {
                perspective: 800px;
                width: 100px;
                height: 100px;
                display : flex;
                align-items:center;
            }

            .cube {
                width: 100px;
                height: 100px;
                position: relative;
                transform-style: preserve-3d;
            }

            .side {
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: black;
                opacity: 1;
            }

            .front {
                transform: rotateY(0deg) translateZ(100px);
                background-color:white;
            }
            .right {
                transform: rotateY(90deg) translateZ(100px);
                background-color:white;
            }
            .back {
                transform: rotateY(180deg) translateZ(100px);
                background-color:white;
            }
            .left {
                transform: rotateY(-90deg) translateZ(100px);
                background-color:white;
            }
            .top {
                transform: rotateX(90deg) translateZ(100px);
                background-color:white;
            }
            .bottom {
                transform: rotateX(-90deg) translateZ(100px);
                background-color:white;
            }
        `}</style>
    )
}

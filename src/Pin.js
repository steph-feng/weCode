import React, {useState} from 'react';


function Pin(props) {
    const [isHovered, setIsHovered] = useState(false);
    const textCol = (props.type == "0")? "white" : "black";

    return (
        <div style = {{
            ...styles.pin, 
            ...styles[props.size]}}
        >
            <a href = {props.link} >
            <div style={{filter: isHovered? 'brightness(0.5)': 'brightness(1)', color: textCol, backgroundImage: `url(${props.image})`, backgroundSize: 'cover'}} className='h-full w-full rounded-lg text-center text-lg' onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}> 
                    {isHovered && <p>{props.text}</p>} 
                </div>
            </a>
        </div>
    );

}

const styles = {
    pin: {
        margin: '15px 10px', 
        padding: 0
    }, 
    small: {
        gridRowEnd: 'span 30'
    }, 
    medium: {
        gridRowEnd: 'span 40'
    }, 
    large: {
        gridRowEnd: 'span 45'
    }
}

export default Pin;
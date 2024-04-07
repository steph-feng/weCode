import React from 'react';
import Pin from './Pin';
import trails from './trails.json';
import items from './items.json';
// type is 0 for trails
// type is 1 for items

// level = 1 = beginner
// level = 2 = intermediate
// level = 3 = hard

function PinterestLayout(props) {
    function randomNumGen(min, max) {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    // generate items
    const i1 = randomNumGen(0, 2);
    const i2 = randomNumGen(0, 2) + 3;
    const i3 = randomNumGen(0, 2) + 6;
    const i4 = randomNumGen(0, 2) + 9;
    const i5 = randomNumGen(0, 2) + 12;
    
    // generate trails
    const t1 = randomNumGen(0, 3);
    const t2 = randomNumGen(0, 3) + 4;
    const t3 = randomNumGen(0, 3) + 8;

    let lvlT;
    let lvlI;

    // for debugging: console.log("LEVEL = " + props.level);

    if (props.level === 3) {
        lvlT = trails.hard_trails;
        lvlI = items.hard_items;
    } else if (props.level === 2) {
        lvlT = trails.intermediate_trails;
        lvlI = items.intermediate_items;
    } else {
        lvlT = trails.beginner_trails;
        lvlI = items.beginner_items;
    }

    return (
        <div>
            <div className = "text-7xl m-10">
                Your Arc'venture Starter Pack
            </div>
            <div style={styles.pin_container}>
                {/* trail */}
                <Pin size = {lvlT[t1]['size']} image = {lvlT[t1]['Image Link']} link = {lvlT[t1]['Info Link']} text = {lvlT[t1]['Hike']} type = "0"/>
                {/* item */}
                <Pin size = {lvlI[i1]['size']} image = {lvlI[i1]['thumb_image']} link = {lvlI[i1]['link_to_website']} text = {lvlI[i1]['title']} type = "1" />
                {/* trail */}
                <Pin size = {lvlT[t2]['size']} image = {lvlT[t2]['Image Link']} link = {lvlT[t2]['Info Link']} text = {lvlT[t2]['Hike']} type = "0"/>
                {/* item */}
                <Pin size = {lvlI[i2]['size']} image = {lvlI[i2]['thumb_image']} link = {lvlI[i2]['link_to_website']} text = {lvlI[i2]['title']} type = "1" />
                {/* item */}
                <Pin size = {lvlI[i3]['size']} image = {lvlI[i3]['thumb_image']} link = {lvlI[i3]['link_to_website']} text = {lvlI[i3]['title']} type = "1" />
                {/* item */}
                <Pin size = {lvlI[i4]['size']} image = {lvlI[i4]['thumb_image']} link = {lvlI[i4]['link_to_website']} text = {lvlI[i4]['title']} type = "1" />
                {/* trail */}
                <Pin size = {lvlT[t3]['size']} image = {lvlT[t3]['Image Link']} link = {lvlT[t3]['Info Link']} text = {lvlT[t3]['Hike']} type = "0"/>
                {/* item */}
                <Pin size = {lvlI[i5]['size']} image = {lvlI[i5]['thumb_image']} link = {lvlI[i5]['link_to_website']} text = {lvlI[i5]['title']} type = "1" />
            </div>
        </div>
    
    )
}

const styles = {
    pin_container: {
    margin: 0,
    padding: 0,
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 330px)',
    gridAutoRows: '10px',
    position: 'absolute',
    justifyContent: 'center'
    }
}

export default PinterestLayout;

/*export default function PinterestLayout( {level} ) {
    return <div className="h-[100vh]"></div>
}*/
import React from 'react';
import Pin from './Pin';
import trails from './trails.json';
import items from './items.json';
// type is 0 for trails
// type is 1 for items

function PinterestLayout() {
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

    return (
        <div>
            <div className = "text-7xl m-10">
                Your Arc'venture Starter Pack
            </div>
            <div style={styles.pin_container}>
                {/* trail */}
                <Pin size = {trails.beginner_trails[t1]['size']} image = {trails.beginner_trails[t1]['Image Link']} link = {trails.beginner_trails[t1]['Info Link']} text = {trails.beginner_trails[t1]['Hike']} type = "0"/>
                {/* item */}
                <Pin size = {items.intermediate_items[i1]['size']} image = {items.intermediate_items[i1]['thumb_image']} link = {items.intermediate_items[i1]['link_to_website']} text = {items.intermediate_items[i1]['title']} type = "1" />
                {/* trail */}
                <Pin size = {trails.beginner_trails[t2]['size']} image = {trails.beginner_trails[t2]['Image Link']} link = {trails.beginner_trails[t2]['Info Link']} text = {trails.beginner_trails[t2]['Hike']} type = "0"/>
                {/* item */}
                <Pin size = {items.intermediate_items[i2]['size']} image = {items.intermediate_items[i2]['thumb_image']} link = {items.intermediate_items[i2]['link_to_website']} text = {items.intermediate_items[i2]['title']} type = "1" />
                {/* item */}
                <Pin size = {items.intermediate_items[i3]['size']} image = {items.intermediate_items[i3]['thumb_image']} link = {items.intermediate_items[i3]['link_to_website']} text = {items.intermediate_items[i3]['title']} type = "1" />
                {/* item */}
                <Pin size = {items.intermediate_items[i4]['size']} image = {items.intermediate_items[i4]['thumb_image']} link = {items.intermediate_items[i4]['link_to_website']} text = {items.intermediate_items[i4]['title']} type = "1" />
                {/* trail */}
                <Pin size = {trails.beginner_trails[t3]['size']} image = {trails.beginner_trails[t3]['Image Link']} link = {trails.beginner_trails[t3]['Info Link']} text = {trails.beginner_trails[t3]['Hike']} type = "0"/>
                {/* item */}
                <Pin size = {items.intermediate_items[i5]['size']} image = {items.intermediate_items[i5]['thumb_image']} link = {items.intermediate_items[i5]['link_to_website']} text = {items.intermediate_items[i5]['title']} type = "1" />
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
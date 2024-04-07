import React from 'react';
import Pin from './Pin';
import trails from './trails.json';
import items from './items.json';

function PinterestLayout() {
    return (
        <div>
            <div className = "text-7xl m-10">
                Your Arc'venture Starter Pack
            </div>
            <div style={styles.pin_container}>
                <Pin size = {trails.beginner_trails[1]['size']} image = {trails.beginner_trails[1]['Image Link']} link = {trails.beginner_trails[1]['Info Link']} text = {trails.beginner_trails[1]['Hike']}/>
                <Pin size = {items.intermediate_items[1]['size']} image = {items.intermediate_items[1]['thumb_image']} link = {items.intermediate_items[1]['link_to_website']} text = {items.intermediate_items[1]['title']} />
                <Pin size = "large" image = "https://i.pinimg.com/474x/76/e4/cd/76e4cd4d3b44dc51ac775a664f55c8cf.jpg"/>
                <Pin size = "small" image = "https://i.pinimg.com/474x/06/fd/99/06fd990cea38cf817681ca479ae322fe.jpg"/>
                <Pin size = "medium" image = "https://i.pinimg.com/474x/97/c5/70/97c570ea99186e27ee1ac53e60d6014f.jpg"/>
                <Pin size = "large" image = "https://i.pinimg.com/474x/2f/cb/76/2fcb76ac0eabfa6c6f5d3bd6d90b3678.jpg"/>
                <Pin size = "large" image = "https://i.pinimg.com/474x/a2/e4/8b/a2e48bf80067dbd043d5357760cc8b3b.jpg"/>
                <Pin size = "medium" image = "https://i.pinimg.com/474x/61/05/28/61052801a9b33f9e90381d84bad48217.jpg"/>
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
    // left: '50%',
    // transform: 'translateX(-50%)',
    justifyContent: 'center'
    // backgroundColor: 'black'
    }
}

export default PinterestLayout;
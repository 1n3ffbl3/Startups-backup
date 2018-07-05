import React from 'react';

const SideBar = ({startups, handleSelectedStartup} ) => {

let sideBarStyle = {
    margin: 0,
    overflow: 'hidden',
    borderStyle: 'outset',
    height: '100px',
    weight: '50px',
    float: 'left'
};

let liSidBArStyle = {
    listStyle: 'none',
    display: 'table',
    paddingLeft: '20px',
    paddingRight: '20px',
    fontSize: '20px',
    fontWeight: 'bold'
    
};
    return(
        <div style={sideBarStyle}>
            <ul>
                {startups.map(startup =>
                    <li style={liSidBArStyle} key={startup._id} onClick={() => handleSelectedStartup(startup._id)} >
                        {startup.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default SideBar;
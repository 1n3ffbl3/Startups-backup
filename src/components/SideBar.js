import React from 'react';

const SideBar = ({startups}) => {
    return(
        <div>
            <ul>
                {startups.map(startup =>
                    <li key={startup._id}>
                        {startup.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default SideBar;
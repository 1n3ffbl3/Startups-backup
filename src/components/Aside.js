import React from 'react';

const Aside = ({startups}) => {
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

export default Aside;
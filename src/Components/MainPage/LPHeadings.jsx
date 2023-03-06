import React from 'react'

const LPHeadings = ({ heading, span1, span2 }) => {
    return (
        <>
            <div className='lp_heading'>
                <h3>
                    {heading}
                </h3>
            </div>
        </>
    )
}

export default LPHeadings;
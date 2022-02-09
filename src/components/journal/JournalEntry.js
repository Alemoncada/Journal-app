import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry'>
            
            <div 
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://www.latercera.com/resizer/oStaaBjKjrTK8rrWE2MFitEba_g=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/FIN7ZFLY2VF7ZIO3F4VAH7DJ5I.jpg)'

                }}
            ></div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo dia
                </p>
                <p className='journal__entry-content'>
                    sfhjbgdxvdbcvgxdvgxcvxc dzdfsfzsfc ada
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>12</h4>

            </div>
            
        </div>
    )
}

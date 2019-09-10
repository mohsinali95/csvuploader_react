import React from 'react'

export default function ReportCard(props) {
    let { name, byText, date, isLast } = props
    return (
        <div className='col-md-4 col-sm-6 col-xs-6'>
            <div className='row align-items-center'>
                <div className='col-md-10 col-sm-9 col-xs-9'>
                    <div className={!isLast? `row align-items-center pt-2 pb-2 report-card`: `row align-items-center pt-2 pb-2 report-card-green`}>
                        <div className='col-md-6'>
                            <p className='m-0'>{byText}</p>
                            <h5>{name}</h5>
                        </div>
                        <div className='col-md-6 text-right'>
                            <h5>{date}</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md-2 col-sm-3 col-xs-3 text-center'>
                    {
                        !isLast ?
                            <span style={{ fontSize: 25 }} className='fa fa-arrow-right'></span>
                            :
                            null
                    }
                </div>
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Bar, Doughnut, Line } from 'react-chartjs-2'

const Contents = () => {

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get("https://api.covid19api.com/total/dayone/country/kr")
        }
        fetchEvents()
    })

    return (
        <section>
            <h2>국내 코로나 현황</h2>
            <div className="contents">
                <div>
                    {/* <Bar data={confirmedData} options={
                        {
                            title: {
                                display: true,
                                text: "누적 확인자 추이",
                                fontSize: 16
                            }
                        },
                        {
                            legend: {
                                display: true,
                                position: "bottom"
                            }
                        }
                    } /> */}
                </div>
            </div>
        </section>
    )
}

export default Contents

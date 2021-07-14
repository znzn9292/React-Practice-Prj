import React, { useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

function LandingPage(props) {
    useEffect(() => {
        axios.get('/api/hello')
            .then(response => {
                console.log("response => " + response)
                console.log("response.data => " + response.data)
            })
    }, [])

    const onClickHandler = () => {
        axios.get('/api/users/logout')
            .then(response => {
                console.log("response => " + response)
                console.log("response.data => " + response.data)

                if (response.data.success) {
                    props.history.push("/login")
                } else {
                    alert("로그아웃 실패 했습니다.")
                }
            })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
            <h2>시작페이지</h2>

            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default withRouter(LandingPage)

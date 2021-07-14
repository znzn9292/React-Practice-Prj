import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null) {

    const dispatch = useDispatch();

    // option 
    // null => 아무나 접근 가능
    // true => 로그인 한 유저만 접근 가능
    // false => 로그인한 유저는 접근 불가

    function AuthenticationCheck(props) {
        useEffect(() => {
            dispatch(auth())
                .then(response => {
                    console.log(response)

                    // 미로그인 상태
                    if (!response.payload.isAuth) {
                        if (option) {
                            props.history.push('/login')
                        }
                    } else {
                        if (adminRoute && !response.payload.isAdmin) {
                            props.history.push('/')
                        } else {
                            if (option === false) {
                                props.history.push('/')
                            }
                        }
                    }
                })
        }, [])

        return (
            < SpecificComponent />
        )
    }

    return AuthenticationCheck
}
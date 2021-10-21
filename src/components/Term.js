import React, {useState} from 'react'
import {Select, Typography, Row, Col, Avatar, Card} from 'antd'
import moment from 'moment'
import { useGetCryptoTagsQuery } from '../services/cryptotagsApi'

import Loader from './Loader'
const {Text, Title} = Typography
const {Option} = Select

const Term= ()=> {
    const { data } = useGetCryptoTagsQuery();
    console.log(data)
    return (
        <div>
            Tags
        </div>
    )
}
export default Term;






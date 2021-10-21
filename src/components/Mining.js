import React from 'react'
import { Typography, Row, Col, Card } from "antd";
import { useGetCryptoMiningQuery } from "../services/cryptoMiningApi";
import Loader from "./Loader";
const { Text, Title } = Typography;
const Mining = () => {
    const { data, isFetching } = useGetCryptoMiningQuery();
    console.log(data);
    return (
        <div>
            hi
        </div>
    )
}

export default Mining

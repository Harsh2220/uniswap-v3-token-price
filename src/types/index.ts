export interface Response {
    poolDayDatas: PoolDayData[]
}

export interface PoolDayData {
    __typename: string
    date: number
    liquidity: string
    sqrtPrice: string
    token0Price: string
    token1Price: string
    volumeToken0: string
    volumeToken1: string
}

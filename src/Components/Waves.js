import * as React from 'react'


export default function Wave(){
    return(
        <>
                <svg width="100%" height="172"  fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path  fill="white">
                    <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                    
                    M0 83.1596C316 83.1597 444 156 884 48C1324 -59.9999 1317.79 46.8746 1535.5 83.1596C1811.5 129.16 2156 185.252 2560 83.1597V229.161L0 229.161V83.1596Z;

                    M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

                    M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z

                    "
                    />
                    </path>
                   </svg>
        </>
    )
}


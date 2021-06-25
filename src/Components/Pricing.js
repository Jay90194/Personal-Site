import * as React from 'react'
import "../Components/Css/Pricing.css"


export default function Pricing() {
    return(
        <>
     
    <div className='section'>
        <a to="#" class="pricing-card">
            <div className="box1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width='60px' >
                    <title>Skype</title>
                    <path fill="#32c5f0" d="M50,25A25,25,0,1,1,25,0,25,25,0,0,1,50,25Z" />
                    <path fill="#fff"
                        d="M39.1,27.5a14,14,0,0,0,.33-3c0-.35,0-.7,0-1.05A14,14,0,0,0,25.3,10.59a14.7,14.7,0,0,0-2.41.2,8.3,8.3,0,0,0-4.36-1.24,8.14,8.14,0,0,0-8.19,8.08,8,8,0,0,0,1.12,4.08c-.1.51-.17,1-.22,1.54s-.06.84-.06,1.26A14,14,0,0,0,25.3,38.44a14.68,14.68,0,0,0,2.59-.23,8.24,8.24,0,0,0,3.87.95A8.12,8.12,0,0,0,40,31.09,7.88,7.88,0,0,0,39.1,27.5Zm-6.55,3.67a6.46,6.46,0,0,1-2.87,2.14,11.64,11.64,0,0,1-4.42.77,10.77,10.77,0,0,1-5.05-1,6.55,6.55,0,0,1-2.33-2,4.39,4.39,0,0,1-.9-2.52,1.73,1.73,0,0,1,.59-1.31A2.07,2.07,0,0,1,19,26.63a1.88,1.88,0,0,1,1.24.42,3.08,3.08,0,0,1,.83,1.2,7.29,7.29,0,0,0,.81,1.41,3.12,3.12,0,0,0,1.19.91,4.89,4.89,0,0,0,2.05.36A5,5,0,0,0,28,30.2a2,2,0,0,0,1.05-1.74,1.69,1.69,0,0,0-.55-1.32,3.79,3.79,0,0,0-1.5-.82c-.64-.2-1.52-.41-2.59-.64a19.81,19.81,0,0,1-3.71-1.09,6,6,0,0,1-2.42-1.75,3.53,3.53,0,0,1-.49-.78,4.64,4.64,0,0,1-.43-2,4.54,4.54,0,0,1,1-2.82,6,6,0,0,1,2.74-1.87,12.13,12.13,0,0,1,4.15-.65,11.54,11.54,0,0,1,3.3.43,7.57,7.57,0,0,1,2.33,1.15,5,5,0,0,1,1.37,1.52,3.35,3.35,0,0,1,.44,1.59,1.84,1.84,0,0,1-.58,1.34,1.92,1.92,0,0,1-1.45.6A1.82,1.82,0,0,1,29.41,21a4.45,4.45,0,0,1-.85-1.11,4.6,4.6,0,0,0-1.26-1.55,4.09,4.09,0,0,0-2.36-.53,4.53,4.53,0,0,0-2.45.59,1.6,1.6,0,0,0-.87,1.34,1.21,1.21,0,0,0,.28.81,2.57,2.57,0,0,0,.84.63,6.33,6.33,0,0,0,1.14.43l.24.07,1.71.41c1.14.24,2.2.51,3.12.8A9.89,9.89,0,0,1,31.37,24,4.76,4.76,0,0,1,33,25.61a4.91,4.91,0,0,1,.58,2.45A5.28,5.28,0,0,1,32.55,31.17Z" />
                </svg>
                <h3>Starter</h3>
                <h4>$8.99</h4>
                <p>per Month</p>
                <ul>
                    <li>100 Transaction</li>
                    <li>2% Cash Back</li>
                    <li>$10,000 limit</li>
                </ul>
                <a class="btn primary">Choose Plan</a>
            </div>
        </a>

        <a to="#" class="pricing-card">
            <div className="box2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width='60px' >
                    <title>Skype</title>
                    <path fill="#32c5f0" d="M50,25A25,25,0,1,1,25,0,25,25,0,0,1,50,25Z" />
                    <path fill="#fff"
                        d="M39.1,27.5a14,14,0,0,0,.33-3c0-.35,0-.7,0-1.05A14,14,0,0,0,25.3,10.59a14.7,14.7,0,0,0-2.41.2,8.3,8.3,0,0,0-4.36-1.24,8.14,8.14,0,0,0-8.19,8.08,8,8,0,0,0,1.12,4.08c-.1.51-.17,1-.22,1.54s-.06.84-.06,1.26A14,14,0,0,0,25.3,38.44a14.68,14.68,0,0,0,2.59-.23,8.24,8.24,0,0,0,3.87.95A8.12,8.12,0,0,0,40,31.09,7.88,7.88,0,0,0,39.1,27.5Zm-6.55,3.67a6.46,6.46,0,0,1-2.87,2.14,11.64,11.64,0,0,1-4.42.77,10.77,10.77,0,0,1-5.05-1,6.55,6.55,0,0,1-2.33-2,4.39,4.39,0,0,1-.9-2.52,1.73,1.73,0,0,1,.59-1.31A2.07,2.07,0,0,1,19,26.63a1.88,1.88,0,0,1,1.24.42,3.08,3.08,0,0,1,.83,1.2,7.29,7.29,0,0,0,.81,1.41,3.12,3.12,0,0,0,1.19.91,4.89,4.89,0,0,0,2.05.36A5,5,0,0,0,28,30.2a2,2,0,0,0,1.05-1.74,1.69,1.69,0,0,0-.55-1.32,3.79,3.79,0,0,0-1.5-.82c-.64-.2-1.52-.41-2.59-.64a19.81,19.81,0,0,1-3.71-1.09,6,6,0,0,1-2.42-1.75,3.53,3.53,0,0,1-.49-.78,4.64,4.64,0,0,1-.43-2,4.54,4.54,0,0,1,1-2.82,6,6,0,0,1,2.74-1.87,12.13,12.13,0,0,1,4.15-.65,11.54,11.54,0,0,1,3.3.43,7.57,7.57,0,0,1,2.33,1.15,5,5,0,0,1,1.37,1.52,3.35,3.35,0,0,1,.44,1.59,1.84,1.84,0,0,1-.58,1.34,1.92,1.92,0,0,1-1.45.6A1.82,1.82,0,0,1,29.41,21a4.45,4.45,0,0,1-.85-1.11,4.6,4.6,0,0,0-1.26-1.55,4.09,4.09,0,0,0-2.36-.53,4.53,4.53,0,0,0-2.45.59,1.6,1.6,0,0,0-.87,1.34,1.21,1.21,0,0,0,.28.81,2.57,2.57,0,0,0,.84.63,6.33,6.33,0,0,0,1.14.43l.24.07,1.71.41c1.14.24,2.2.51,3.12.8A9.89,9.89,0,0,1,31.37,24,4.76,4.76,0,0,1,33,25.61a4.91,4.91,0,0,1,.58,2.45A5.28,5.28,0,0,1,32.55,31.17Z" />
                </svg>
                <h3>Popular</h3>
                <h4>$29.99</h4>
                <p>per Month</p>
                <ul>
                    <li>1000 Transaction</li>
                    <li>3.5% Cash Back</li>
                    <li>$100,000 limit</li>
                </ul>
                <a class="btn blue">Choose Plan</a>
            </div>
        </a>

        <a to="#" class="pricing-card">
            <div className="box3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width='60px'>
                    <title>Skype</title>
                    <path fill="#32c5f0" d="M50,25A25,25,0,1,1,25,0,25,25,0,0,1,50,25Z" />
                    <path fill="#fff"
                        d="M39.1,27.5a14,14,0,0,0,.33-3c0-.35,0-.7,0-1.05A14,14,0,0,0,25.3,10.59a14.7,14.7,0,0,0-2.41.2,8.3,8.3,0,0,0-4.36-1.24,8.14,8.14,0,0,0-8.19,8.08,8,8,0,0,0,1.12,4.08c-.1.51-.17,1-.22,1.54s-.06.84-.06,1.26A14,14,0,0,0,25.3,38.44a14.68,14.68,0,0,0,2.59-.23,8.24,8.24,0,0,0,3.87.95A8.12,8.12,0,0,0,40,31.09,7.88,7.88,0,0,0,39.1,27.5Zm-6.55,3.67a6.46,6.46,0,0,1-2.87,2.14,11.64,11.64,0,0,1-4.42.77,10.77,10.77,0,0,1-5.05-1,6.55,6.55,0,0,1-2.33-2,4.39,4.39,0,0,1-.9-2.52,1.73,1.73,0,0,1,.59-1.31A2.07,2.07,0,0,1,19,26.63a1.88,1.88,0,0,1,1.24.42,3.08,3.08,0,0,1,.83,1.2,7.29,7.29,0,0,0,.81,1.41,3.12,3.12,0,0,0,1.19.91,4.89,4.89,0,0,0,2.05.36A5,5,0,0,0,28,30.2a2,2,0,0,0,1.05-1.74,1.69,1.69,0,0,0-.55-1.32,3.79,3.79,0,0,0-1.5-.82c-.64-.2-1.52-.41-2.59-.64a19.81,19.81,0,0,1-3.71-1.09,6,6,0,0,1-2.42-1.75,3.53,3.53,0,0,1-.49-.78,4.64,4.64,0,0,1-.43-2,4.54,4.54,0,0,1,1-2.82,6,6,0,0,1,2.74-1.87,12.13,12.13,0,0,1,4.15-.65,11.54,11.54,0,0,1,3.3.43,7.57,7.57,0,0,1,2.33,1.15,5,5,0,0,1,1.37,1.52,3.35,3.35,0,0,1,.44,1.59,1.84,1.84,0,0,1-.58,1.34,1.92,1.92,0,0,1-1.45.6A1.82,1.82,0,0,1,29.41,21a4.45,4.45,0,0,1-.85-1.11,4.6,4.6,0,0,0-1.26-1.55,4.09,4.09,0,0,0-2.36-.53,4.53,4.53,0,0,0-2.45.59,1.6,1.6,0,0,0-.87,1.34,1.21,1.21,0,0,0,.28.81,2.57,2.57,0,0,0,.84.63,6.33,6.33,0,0,0,1.14.43l.24.07,1.71.41c1.14.24,2.2.51,3.12.8A9.89,9.89,0,0,1,31.37,24,4.76,4.76,0,0,1,33,25.61a4.91,4.91,0,0,1,.58,2.45A5.28,5.28,0,0,1,32.55,31.17Z" />
                </svg>
                <h3>Premium</h3>
                <h4>$99.99</h4>
                <p>per Month</p>
                <ul>
                    <li>Unlimited Transaction</li>
                    <li>5% Cash Back</li>
                    <li>Unlimited Spending</li>
                </ul>
                <a class="btn primary">Choose Plan</a>
            </div>
        </a>
        </div>
  

        </>
    )
}

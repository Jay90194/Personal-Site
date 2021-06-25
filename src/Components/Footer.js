import * as React from 'react'
import '../Components/Css/Footer.css'

export default function Footer() {
    return (
        <>
<footer class="footer-distributed">

    <div class="footer-right">

        <a to="#"><i class="fa fa-facebook"></i></a>
        <a to="#"><i class="fa fa-twitter"></i></a>
        <a to="#"><i class="fa fa-linkedin"></i></a>
        <a to="#"><i class="fa fa-github"></i></a>

    </div>

    <div class="footer-left">

        <p class="footer-links">
            <a class="link-1" to="#">Home</a>

            <a to="#">Blog</a>

            <a to="#">Pricings</a>

            <a to="#">About</a>

            <a to="#">Faq</a>

            <a to="#">Contact</a>
        </p>

        <p>Company Name &copy; 2015</p>
    </div>

</footer>
        </>
    )
}
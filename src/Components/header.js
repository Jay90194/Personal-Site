import * as React from 'react'
import {Link} from 'gatsby'
import d from "../images/d.svg"
import "../Components/Css/Header.css"


class Header extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            hasScrolled: false
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }
    
    handleScroll = (event) => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 50) {
            this.setState({ hasScrolled: true})
        } else {
            this.setState({hasScrolled:false})
        }
    }
    render () {
        return (
            <div className= {this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header' }>
            <div className="HeaderGroup">
                <Link to='/'><img src={d} alt='logo'  width=""/> </Link>
                <Link to='/About'>About Me</Link>
                <Link to='/Faq'>FAQ</Link>
                <Link to='/Contact'>Contact</Link>
    
            </div>
        
            </div>
        )
    }
}
export default Header


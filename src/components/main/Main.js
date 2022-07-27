import Images from "./Images"
import "./Main.css"
import Description from "./Description"
import { useState } from "react"
function Main() {
    let [index, setIndex] = useState(0)
    const headers = ['Discover innovative ways to decorate', 'About our furniture']
    const dynamicText = [
        {
            title: "Discover innovative ways to decorate",
            description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
            imgSrc: "https://images.unsplash.com/photo-1551909353-2804e5407fef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        },
        {
            title: "We are available all across the globe",
            description: "With stores all over the owrld, its easy for you to find furniture for your home or place of business.Locally, we're in most major cities throughout the country.Find the branch nearest your using our store locatior.Any questions? Dont hesitate to contact us today.",
            imgSrc: "https://images.unsplash.com/photo-1487446929682-f62f73984006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        },
        {
            title: "Manufactured with the best materials",
            description: "Our modern furniture store provide a high level of quality.Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible,With three decades of experience in this industry, we understand what customers whant for their home and office.",
            imgSrc: "https://images.unsplash.com/photo-1551909402-f3411b5c4248?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469"
        }
    ]
    const text = [
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        "Our multifunctional collection blends design and function to suit your individual taste.Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between."
    ]
    const banner = ["https://images.unsplash.com/photo-1551909353-2804e5407fef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        "https://images.unsplash.com/photo-1551917230-e273ee50c5e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        "https://images.unsplash.com/photo-1489269637500-aa0e75768394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1441&q=80"]
    function clickRight() {
        if (index == 2) {
            setIndex(0)
        } else {
            setIndex(index += 1)
        }
    }
    function clickLeft() {
        if (index == 0) {
            setIndex(2)
        } else {
            setIndex(index -= 1)
        }
    }

    return (<div>

        <div className="firstSection">
            <div className="firstImg">
                <Images src={dynamicText[index].imgSrc} />
                <div className="arrows"><i className="fa-solid fa-chevron-left" onClick={clickLeft}></i><i className="fa-solid fa-chevron-right" onClick={clickRight}></i></div>
            </div>
            <div className='articleText'>
                <Description header={dynamicText[index].title} text={dynamicText[index].description} />
            </div>
        </div>

        <div className="secondSection">
            <div className="secondImg">
                <Images src={banner[1]} />
            </div>
            <div className='articleText'>
                <Description header={headers[1]} text={text[1]} />
            </div>
            <div className="footer">
                <Images src={banner[2]} />
            </div>
        </div>

    </div>)
}

export default Main
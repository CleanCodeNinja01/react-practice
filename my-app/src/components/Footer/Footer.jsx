import "./Footer.css"
import {Clock} from "lucide-react"

export const Footer = () => {
    const openingHour = 9;
    const closingHour = 17;

    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay();

    const isWeekDay = currentDay >=1 && currentDay <=5

    const isOpen = isWeekDay && currentHour>=openingHour && currentHour<=closingHour;

    const openElement = (
        <>
            <div className="message">
                <Clock className="icon"/>
                <span className="status open">We are open now!</span>
            </div>
            <div className="text-style">
                Call us at: <strong>(555) 123-4567</strong>
            </div>
        </>
    )

    const closedElement = (
        <>
            <div className="message">
                <Clock className="icon"/>
                <span className="status closed">We are closed now.</span>
            </div>
            <div>
                Opening hours: Monday to Friday, 9am to 17pm
                {/* Call us at: <strong>(555) 123-4567</strong> */}
            </div>
        </>
    )

    // const isOpen = true

    return (
        <footer className="footer">
            {isOpen ? openElement : closedElement}
        </footer>
    )
}
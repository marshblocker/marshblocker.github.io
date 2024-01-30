import "./Address.styles.css";

const Address = () => {
    return (
        <address>
            <div className="Address__listing">
                <div className="Address__item">
                    <a href="https://github.com/marshblocker"><img width="32" height="32" src="https://img.icons8.com/glyph-neue/64/EEEEEE/github.png" alt="github"/></a>
                    <a href="https://github.com/marshblocker">Github</a>
                </div>
                <div className="Address__item">
                    <a href="www.linkedin.com/in/kenneth-marinas"><img width="32" height="32" src="https://img.icons8.com/glyph-neue/64/FFFFFF/linkedin.png" alt="linkedin"/></a>
                    <a href="www.linkedin.com/in/kenneth-marinas">LinkedIn</a>
                </div>    
                <div className="Address__item">
                    <a href="mailto:gabrielkennethmarinas@gmail.com"><img width="32" height="32" src="https://img.icons8.com/glyph-neue/FFFFFF/64/filled-message.png" alt="filled-message"/></a>
                    <a href="mailto:gabrielkennethmarinas@gmail.com">Email</a>
                </div>
            </div>
        </address>
    )
};

export default Address;
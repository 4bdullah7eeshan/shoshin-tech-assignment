function MenuItem({ icon, text }) {
    return (
        <>
            <li>
                <a href="#">
                    <img src={icon}/>
                    <span>{text}</span>
                </a>
            </li>
        </>
    )
}

export default MenuItem;
function MenuItem({ icon, text }) {
    return (
        <>
            <li>
                <a href="#">
                    <span>{icon}</span>
                    <span>{text}</span>
                </a>
            </li>
        </>
    )
}

export default MenuItem;
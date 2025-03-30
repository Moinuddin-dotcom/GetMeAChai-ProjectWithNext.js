import React from 'react'

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-slate-950 text-white p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by GET_ME_A_CHAI Ltd</p>
            </aside>
        </footer>
    )
}

export default Footer

// import React from 'react'

function getCurrentYear() {
    return new Date().getFullYear()
}

const Footer = () => {
  return (
    <footer className='text-center pb-16 pt-2 text-xl space-y-1 customfont-base text-white'>
        <p>© {getCurrentYear()} All rights reserved.</p>
        <p>Made with ❤️ by <a href='https://www.dashnyam.com' target='_blank'>Dashnyam</a></p>
        <p>Built with <a href='https://react.dev' target='_blank'>ReactJS</a></p>
    </footer>
  )
}

export default Footer
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="logo.svg" alt=" logo icon" />
            <span>Dashboard</span>
        </div>
        <div className="icons">
            <img src="/search.svg" alt="search icon" className='icon'/>
            <img src="/app.svg" alt="app icon" className='icon'/>
            <img src="/expand.svg" alt="expand icon" className='icon'/>
            <div className="notification">
                <img src="/notifications.svg" alt="notification icon" />
                <span>1</span>
            </div>
            <div className="user">
                <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user icon" />
                <span>Mark</span>
            </div>
            <img src="/settings.svg" alt="settings icon" className='icon'/>
        </div>
    </div>
  )
}

export default Navbar
import { useState, useEffect, Fragment } from "react"
import { Modal, Button, Collapse } from "react-bootstrap"
import { NavLink, useSubmit, useLocation } from "react-router-dom"
import "../scss/sidebar.scss"


export const Sidebar = () => {
  const location = useLocation()
  const submit = useSubmit()
  const [modalState, setModalState] = useState(false)
  const [collapseState, setCollapseState] = useState(false)
  const handleCollapseChange = () => {
    const classList = document.querySelector(".icon-pencil").classList;
    const classList2 = document.getElementById("curriculum").classList
    classList.toggle("active")
    classList2.toggle("active")
    setCollapseState(!collapseState)
  }
  const hideSidebar = () => {
    const sidebar = document.getElementById("nav-bar")
    if (window.getComputedStyle(sidebar).width === "48px" || sidebar.classList.contains("active")) {
      sidebar.classList.toggle("collapsed")
      sidebar.classList.toggle("active")
    } else {
      sidebar.classList.remove("active")
      sidebar.classList.toggle("collapsed")
    }
    
  }

  useEffect(() => {
    if (location.pathname === "/") {
      document.getElementById("dashboardLink").classList.add("dashboard")
    } else {
      document.getElementById("dashboardLink").classList.remove("dashboard")
    }
  }, [location.pathname])

    return (
        <Fragment>
            <div className="sidebar" id="nav-bar">
              <nav className="nav show">
                <div>
                  <span className="nav-logo" onClick={() => hideSidebar()}> 
                    <i className="icon-clompassTest3 nav-logo-icon"><i className="path1 icon-clompassTest3"></i><i className="path2 icon-clompassTest3"></i><i className="path3 icon-clompassTest3"></i><i className="path4 icon-clompassTest3"></i><i className="path5 icon-clompassTest3"></i><i className="path6 icon-clompassTest3"></i><i className="path7 icon-clompassTest3"></i></i>
                    <span className="nav-logo-name">
                      Clompass
                    </span>  
                  </span>
                  <div className="nav_list">
                    <NavLink to="/" className="nav-link" id="dashboardLink"> 
                      <i className='icon-house-door nav-icon'></i> 
                      <span className="nav-name">Dashboard</span> 
                    </NavLink>
                    <NavLink to="/schedule" className="nav-link"> 
                      <i className='icon-calendar3 nav-icon'></i> 
                      <span className="nav-name">Schedule</span> 
                    </NavLink> 
                    <a href="https://outlook.com/lilydaleheights.vic.edu.au" target="_blank" rel="noopener noreferrer" aria-hidden="true" data-rr-ui-event-key="https://outlook.com/lilydaleheights.vic.edu.au" className="nav-link">
                        <i className="icon-envelope nav-icon"></i>
                        <span className="nav-name">Emails</span>
                    </a>
                    <span className="curriculum-container"> 
                      <div id="curriculum" className="nav-link" onClick={() => handleCollapseChange()}>
                        <i className='icon-pencil nav-icon'></i> 
                        <span className="nav-name">Curriculum</span> 
                      </div>
                      <Collapse in={collapseState}>
                        <div>
                          <div className="collapse-background">
                            <div className="collapse-list">
                              <NavLink to="/learningtasks" className="nav-link collapse-link">
                                Learning tasks
                              </NavLink>
                              <NavLink to="/subjects" className="nav-link collapse-link">
                                Subjects
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </span>
                    <NavLink to="/communications" className="nav-link" id="communication"> 
                      <i className='icon-chat-left-text nav-icon'></i> 
                      <span className="nav-name">Communication</span> 
                    </NavLink> 
                  </div>
                </div>
                <div>
                  <NavLink to="/settings" className="nav-link">
                    <i className="nav-icon icon-gear"></i>
                    <span className="nav-name">Settings</span>
                  </NavLink>
                  <NavLink to="/profile" className="nav-link"> 
                    <i className='icon-person nav-icon'></i> 
                    <span className="nav-name">Profile</span> 
                  </NavLink> 
                  <span className="nav-link" onClick={() => setModalState(true)}> 
                    <i className='bx bx-log-out nav-icon'></i> 
                    <span className="nav-name">Sign out</span> 
                  </span>
                </div> 
              </nav>
            </div>
            <Modal show={modalState} onHide={() => setModalState(false)}> 
                <Modal.Header closeButton className="sidebar-modal">
                    <Modal.Title className="sidebar-modal">Sign out</Modal.Title>
                </Modal.Header>
                <Modal.Body className="sidebar-modal">
                    Are you sure that you want to sign out?
                </Modal.Body>
                <Modal.Footer className="sidebar-modal">
                    <Button onClick={(e) => submit({logout: true}, {method: "POST"})} name="logout" value="true">Yes</Button>
                    <Button variant="dark" onClick={() => setModalState(false)}>No</Button>
                </Modal.Footer>
            </Modal>    
        </Fragment>              
    )
}

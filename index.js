const Notification = props => {
  //  Write your code here.
  const{className,content,src} = props

  return{
      <div className = {notifications-container}>
        <img className = "icon"/>
        <p >{content}</p>

      </div>
  }
}

const element = (
  //  Write your code here.   
  <div className = "notifications-container">
    <h1 className = "heading">Notifications</h1>
    <Notification className = "button" content = "Information Message" src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
    <Notification className = "button" content = "Success Message" src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"/>
    <Notification className = "button" content = "Warning Message" src = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"/>
    <Notification className = "button" content = "Error Message" src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"/>

  </div>
)

ReactDOM.render(element, document.getElementById('root'))

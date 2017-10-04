// Code Invitation Component Here
import React from 'react';


class Invitation extends React.Component {
  render() {
    
    const myHeading = "You've been invited!";
    const myChildren = React.Children.map(this.props.children, child => {
      return (
          <div>{child}</div>
        );
    });

    return (
      <div className="myInvitation">
        <h1>{myHeading}</h1>
        {myChildren}
      </div>
    );
  }
}

export default Invitation;
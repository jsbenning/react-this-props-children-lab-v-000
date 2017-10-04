// Code ThemedDecoration Component Here
import React from 'react';

class ThemedParty extends React.Component {
  render() {
    const theme = this.props.theme;
    const myChildren = React.Children.map(this.props.children, child => {
      return (
        <div className={theme}>{child}</div>
        );
      });

      return (
      <div>
      {myChildren}
      </div>
    );
  } 
}
export default ThemedParty


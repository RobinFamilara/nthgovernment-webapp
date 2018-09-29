import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleMap from './Map';
import SocialMediaIcons from 'react-social-media-icons';
import Button from '@material-ui/core/Button';


const socialMediaIcons = [
  {
    url: 'https://github.com/andrewgbliss',
    className: 'fa fa-twitter',
  },
  {
    url: 'https://gitlab.com/andrewgbliss',
    className: 'fa fa-google-plus-square',
  },
  {
    url: 'https://www.npmjs.com/~andrewgbliss',
    className: 'fa fa-facebook-square',
  },
];
class App extends Component {


  render() {
    return (
      <div className="App">

        <header className="App-header">
		<img src= {require('./img/logo.png')}  style={ {width:'10',position:'absolute'}} />
          <div className="social-icon"  style={{ marginLeft: 120}}>
            <SocialMediaIcons
              icons={socialMediaIcons}
              iconSize={'1.8em'}
              iconColor={'#495056'}
            />    </div>
            <div>
            <Button variant="raised" color="primary"  style={{top:15,position:'absolute',right: 145}}>Rescue</Button>

            </div>
			            <div>
            <Button variant="raised" color="primary"  style={{top:15,position:'absolute',right: 235}}>CRISIS MAP</Button>

            </div>
        </header>
        <SimpleMap />
      </div>
    );
  }
}

export default App;

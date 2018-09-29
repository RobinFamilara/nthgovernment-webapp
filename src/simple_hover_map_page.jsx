/*
 * GoogleMap hover example
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import MyGreatPlaceWithHover from './my_great_place_with_hover.jsx';

import {K_SIZE} from './my_great_place_with_hover_styles.js';

export default class SimpleHoverMapPage extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };


  constructor(props) {
    super(props);
	debugger;
  }

  render() {
    return (
       <GoogleMap
        bootstrapURLKeys={{ key: 'AIzaSyDxceICFv8myc7D1RxegftnqsN-T82t3e4' }} // set if you need stats etc ...
        center={this.props.center}
        zoom={this.props.zoom}
        // instead of css hover (which sometimes is bad for map markers) (bad means inability to hover on markers placed under other markers)
        // you can use internal GoogleMap component hover algorithm
        // hover algorithm explained at x_distance_hover example
        hoverDistance={K_SIZE / 2}
        >
        <MyGreatPlaceWithHover lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
       
      </GoogleMap>
    );
  }
}

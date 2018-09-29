import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { CardStack, Card } from 'react-cardstack';
import people from './people';
import rescuegroups from './rescuegroups';
import MyGreatPlaceWithHover from './my_great_place_with_hover.jsx';
import io from 'socket.io-client';
import { K_SIZE } from './my_great_place_with_hover_styles.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'font-awesome/css/font-awesome.min.css';
import 'react-tabs/style/react-tabs.css';
import './index.css'
const socketURL = 'http://localhost:4333'
let socket = io(socketURL);
const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'black',
    backgroundImage: "url('https://image.ibb.co/kj2tgp/hotel_4.png')",
    padding: '1px 7px',
    textAlign: 'center',
    alignItems: 'center',
    width: 50,
    height: 60,
    backgroundRepeat: 'no-repeat',
    justifyContent: 'center',
  }}>
    {text}
  </div>
);
const AnyeactComponent = ({ text }) => (
  <div style={{
    color: 'black',
    backgroundImage: "url('https://image.ibb.co/cCWpnU/man_2.png')",
    padding: '1px 7px',
    width: 50,
    height: 60,
    textAlign: 'center',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

const AnReactComponent = ({ text }) => (
  <div style={{
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    height: 620,
    width: 350,
    borderWidth: 1,
    top: 56,
    left: 0,
    right: 20,
    opacity: 10,
    zIndex: 200,
    position: 'absolute',
    overflow: 'scroll'
  }}>
    <Tabs>
      <TabList>
        <Tab>Evacuation Center</Tab>
        <Tab>Rescue Group</Tab>
      </TabList>
	      <TabPanel >  
{people && people.map((data, i) =>


       <div className="tab-panel" key ={i}>
	    <h5 className="name" >${data.attributes.ID}</h5>
       <h5 className="name" >${data.attributes.NAME}</h5>
       <p className="safe-icon" ><i className="fa fa-times fa-times"><span>open</span></i></p>
       <p className="address"><strong>Address :</strong>${data.attributes.ADDRESS}</p>      
       <p className="address"><strong>City :</strong>${data.attributes.CITY}</p>
	   <p className="address"><strong>State :</strong>${data.attributes.STATE}</p>
	   <p className="address"><strong>State :</strong>${data.attributes.COUNTRY}</p>
       <p className="address"><strong>Phone :</strong>+01 4578 7845 7841</p>
       </div>
     
)}
 </TabPanel>
      <TabPanel>
       <CardStack
      height={1000}
      width={400}
      background="#f8f8f8"
      hoverOffset={0}>

      {rescuegroups.map((person, i) =>
        <Card
          key={i}
          background={person.background}>
          <TeamMemberCard {...person} />
        </Card>
      )}

    </CardStack>
      </TabPanel>
    </Tabs>
   
  </div>
);



const ProfilePicture = ({ imgSrc, borderColor }) => (
  <img
    style={{
      width: '60px',
      height: '60px',
      borderRadius: '100%',
      border: `5px solid ${borderColor}`,
    }}
    src={imgSrc}
  />
);

const DetailsRow = ({ icon, title, summary }) => {
  const renderSummary = () => {
    if (summary) return (
      <p style={{ fontWeight: 300, lineHeight: 1 }}>
        {summary}
      </p>
    );
    return null;
  };

  return (
    <div style={styles.detailsRow.row}>

    </div>
  );
};

const TeamMemberCard = (props) => (
 

 <div style={{ background: 'white' }} onClick={props.onClick}>
    <header style={styles.cardHeader} className='card-header-details'>
      <ProfilePicture imgSrc={props.imgSrc} borderColor={props.imgBorderColor} />
      <div>
        <h1 style={styles.headerName}>{props.name}</h1>
        <h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{props.title}</h3>
      </div>
    </header>

  </div>
);

const styles = {
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    color: 'black',
  },
  headerName: {
    margin: 0,
    fontWeight: 500,
    fontSize: '16px',
    textAlign: 'right'
  },
  headerTitle: {
    margin: '4px 0 0',
    fontWeight: 300,
    fontSize: '16px',
    opacity: 0.8,
    textAlign: 'right'
  },
  detailsRow: {
    row: {
      width: '100%',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      margin: '25px 0',
    },
    icon: {
      display: 'block',
      width: '25px',
      height: '30px',
      margin: '0 20px 0 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
      textAlign: 'center',
      fontSize: '22px',
    },
    title: {
      fontWeight: 500,
      fontSize: '20px',
      margin: 0,
      fontStyle: 'italic',
    },
  },
};
let test = [
  {
    "id": 1,
    "state": "Alaska",
    "latitude": 61.3850,
    "longitude": -152.2683
  },
  {
    "id": 2,
    "state": "Alabama",
    "latitude": 32.7990,
    "longitude": -86.8073
  },
  {
    "id": 3,
    "state": "Arkansas",
    "latitude": 34.9513,
    "longitude": -92.3809
  },
  {
    "id": 4,
    "state": "Arizona",
    "latitude": 33.7712,
    "longitude": -111.3877
  },
  {
    "id": 5,
    "state": "California",
    "latitude": 36.1700,
    "longitude": -119.7462
  },
  {
    "id": 6,
    "state": "Colorado",
    "latitude": 39.0646,
    "longitude": -105.3272
  },
  {
    "state": "Connecticut",
    "latitude": 41.5834,
    "longitude": -72.7622
  },
  {
    "state": "Delaware",
    "latitude": 39.3498,
    "longitude": -75.5148
  },
  {
    "state": "Florida",
    "latitude": 27.8333,
    "longitude": -81.7170
  },
  {
    "state": "Georgia",
    "latitude": 32.9866,
    "longitude": -83.6487
  },
  {
    "state": "Hawaii",
    "latitude": 21.1098,
    "longitude": -157.5311
  },
  {
    "state": "Iowa",
    "latitude": 42.0046,
    "longitude": -93.2140
  },
  {
    "state": "Idaho",
    "latitude": 44.2394,
    "longitude": -114.5103
  },
  {
    "state": "Illinois",
    "latitude": 40.3363,
    "longitude": -89.0022
  },
  {
    "state": "Indiana",
    "latitude": 39.8647,
    "longitude": -86.2604
  },
  {
    "state": "Kansas",
    "latitude": 38.5111,
    "longitude": -96.8005
  },
  {
    "state": "Kentucky",
    "latitude": 37.6690,
    "longitude": -84.6514
  },
  {
    "state": "Louisiana",
    "latitude": 31.1801,
    "longitude": -91.8749
  },
  {
    "state": "Massachusetts",
    "latitude": 42.2373,
    "longitude": -71.5314
  },
  {
    "state": "Maryland",
    "latitude": 39.0724,
    "longitude": -76.7902
  },
  {
    "state": "Maine",
    "latitude": 44.6074,
    "longitude": -69.3977
  },
  {
    "state": "Michigan",
    "latitude": 43.3504,
    "longitude": -84.5603
  },
  {
    "state": "Minnesota",
    "latitude": 45.7326,
    "longitude": -93.9196
  },
  {
    "state": "Missouri",
    "latitude": 38.4623,
    "longitude": -92.3020
  },
  {
    "state": "Mississippi",
    "latitude": 32.7673,
    "longitude": -89.6812
  },
  {
    "state": "Montana",
    "latitude": 46.9048,
    "longitude": -110.3261
  },
  {
    "state": "North Carolina",
    "latitude": 35.6411,
    "longitude": -79.8431
  },
  {
    "state": "North Dakota",
    "latitude": 47.5362,
    "longitude": -99.7930
  },
  {
    "state": "Nebraska",
    "latitude": 41.1289,
    "longitude": -98.2883
  },
  {
    "state": "New Hampshire",
    "latitude": 43.4108,
    "longitude": -71.5653
  },
  {
    "state": "New Jersey",
    "latitude": 40.3140,
    "longitude": -74.5089
  },
  {
    "state": "New Mexico",
    "latitude": 34.8375,
    "longitude": -106.2371
  },
  {
    "state": "Nevada",
    "latitude": 38.4199,
    "longitude": -117.1219
  },
  {
    "state": "New York",
    "latitude": 42.1497,
    "longitude": -74.9384
  },
  {
    "state": "Ohio",
    "latitude": 40.3736,
    "longitude": -82.7755
  },
  {
    "state": "Oklahoma",
    "latitude": 35.5376,
    "longitude": -96.9247
  },
  {
    "state": "Oregon",
    "latitude": 44.5672,
    "longitude": -122.1269
  },
  {
    "state": "Pennsylvania",
    "latitude": 40.5773,
    "longitude": -77.2640
  },
  {
    "state": "Rhode Island",
    "latitude": 41.6772,
    "longitude": -71.5101
  },
  {
    "state": "South Carolina",
    "latitude": 33.8191,
    "longitude": -80.9066
  },
  {
    "state": "South Dakota",
    "latitude": 44.2853,
    "longitude": -99.4632
  },
  {
    "state": "Tennessee",
    "latitude": 35.7449,
    "longitude": -86.7489
  },
  {
    "state": "Texas",
    "latitude": 31.1060,
    "longitude": -97.6475
  },
  {
    "state": "Utah",
    "latitude": 40.1135,
    "longitude": -111.8535
  },
  {
    "state": "Virginia",
    "latitude": 37.7680,
    "longitude": -78.2057
  },
  {
    "state": "Vermont",
    "latitude": 44.0407,
    "longitude": -72.7093
  },
  {
    "state": "Washington",
    "latitude": 47.3917,
    "longitude": -121.5708
  },
  {
    "state": "Wisconsin",
    "latitude": 44.2563,
    "longitude": -89.6385
  },
  {
    "state": "West Virginia",
    "latitude": 38.4680,
    "longitude": -80.9696
  },
  {
    "state": "Wyoming",
    "latitude": 42.7475,
    "longitude": -107.2085
  }
]


class SimpleMap extends Component {

  constructor(props) {
    super(props);

    this.socket = io(socketURL);

    this.state = {
      markerCoordinates: [],
      region: {
        latitude: 10.782546,
        longitude: 106.650416,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }
  }

	
  componentDidMount() {

    const socket = this.socket;
    if (!socket) return;

    socket.on('disconnect', () => alert('You have been disconnected.'));

    socket.on("locationUpdated", (locationState) => {
      const newMarkerCoordinates = Object.values(locationState).map(item => ({
        latitude: item.lat,
        longitude: item.lng
      }));

      this.setState({ markerCoordinates: newMarkerCoordinates });
    });
  }


  static defaultProps = {
    center: {
      lat: 34.9513,
      lng: -92.3809
    },
    zoom: 5
  };
  handleMarkerClick(marker_id) {
  }

  onGoogleApiLoaded = ({ map, maps }) => {
    this.map = map;
    this.maps = maps;
    let map_options = {
      styles:
        [
          { "featureType": "all", "elementType": "all", "stylers": [{ "hue": "#e7ecf0" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#636c81" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{ "color": "#636c81" }] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "landscape", "elementType": "labels.text.fill", "stylers": [{ "color": "#496271" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -70 }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#c6d3dc" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#898e9b" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "saturation": -60 }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#ECEDEC" }] }
        ]
    }
    this.map.setOptions(map_options);


    this.infowindow = new maps.InfoWindow();
    var address = {
      lat: 34.9513,
      lng: -92.3809
    };

    for (var i = 0; i < test.length; i++) {
      this.renderMarkers(test[i]);
    }
  }



  renderMarkers = (place) => {
    let marker = new this.maps.Marker({
      position: { lat: place.latitude, lng: place.longitude },
      map: this.map,
      icon: 'pinkball.png',
      title: 'Hello World!',

    });

    marker.addListener('mouseover', () => {
      this.infowindow.setContent('test');
      this.infowindow.open(this.map, marker);
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <AnReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'.'}
        />

        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDxceICFv8myc7D1RxegftnqsN-T82t3e4' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={this.onGoogleApiLoaded}
          onChildMouseEnter={this.handleMarkerClick}
        >
          {this.state.markerCoordinates.map(marker =>
            <AnyeactComponent
              key={marker.state}
              lat={marker.latitude}
              lng={marker.longitude}
              text={'.'}
            />

          )}
          {test.map(marker =>
            <AnyReactComponent
              key={marker.state}
              lat={marker.latitude}
              lng={marker.longitude}
              text={'.'}
            />

          )}

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
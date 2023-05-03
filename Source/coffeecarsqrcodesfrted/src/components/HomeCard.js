import { useParams } from "react-router-dom";
//import axios from 'axios';
//import { useEffect, useState } from 'react';
/////////////////////////////////////
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Item from '@mui/material/ListItem'
import Grid from '@mui/material/Grid';
import VehicleCard from './VehicleCard';




const HomeCard = (props) => {
  const { id } = useParams();
  //const navigate = useNavigate();
  //const [ user, setUser] = useState(null);
  //let token = localStorage.getItem('token');
  let fName = localStorage.getItem('fName');
  //let likes = localStorage.getItem('likes');
  //let make = localStorage.getItem('make');
  let authUser = props.authUser;
  console.log(authUser);
  const deleteCallback = (id) => {
    // navigate('/events');
  };

  let likedVehiclesList = "You dont have any liked vehicles";

     likedVehiclesList = authUser.likes?.map((vehicle) => {
      // return <VehicleCard key={vehicle.vehicle_id._id} vehicle={vehicle.vehicle_id} authenticated={props.authenticated} callback={deleteCallback}/>;
      return (
            <p><a href={`/vehicles/${vehicle.vehicle_id._id}`}>{vehicle.vehicle_id.make} {vehicle.vehicle_id.model
                  }</a></p> 
      );
    });
  return (     
    <>       
      <div className='column50'>  
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Item>
              <Card style={{ width: '25rem' }}>
                <CardContent>
                  <p> Hi {fName} welcome to CoffeeCarsQRCodes.</p>       
                </CardContent>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </div>
      <br></br>
      <div className='column1'>  
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Item>
              <Card style={{ width: '25rem' }}>
                <CardContent>
                  <p>Vehicles {fName} liked.</p>   
                        {likedVehiclesList}     
                </CardContent>           
              </Card>
            </Item>
          </Grid>
        </Grid>
      </div>
      
      <div className='column1'>  
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Item>
              <Card style={{ width: '25rem' }}>
                <CardContent>
                  <p>Events {fName} liked.</p>
                              
                </CardContent>           
              </Card>
            </Item>
          </Grid>
        </Grid>
      </div>
    </>  
    )
};
export default HomeCard;
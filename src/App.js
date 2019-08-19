import React from 'react';
import { Grid } from  '@material-ui/core';
import Navbar from './components/Navbar';
import RightMenu from './components/RightMenu';
import image from './assets/landing_page_img_1.JPG';

const bg = {
    background: '#78CFE3'
}

class App extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <Grid justify="center" container spacing={16}>
                    <Grid item xs={12}>
                        <Grid container spacing={16}>
                            <Grid item xs={12}>
                                {/* TOP SIDE */}
                            </Grid>
                            <Grid item xs={9} style={bg}>
                                {/* LEFT SIDE */}
                                <img src={image} alt="landing page" width="100%" />
                            </Grid>
                            <Grid item xs={3} style={bg}>
                                {/* RIGHT SIDE */}
                                <RightMenu />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default App;
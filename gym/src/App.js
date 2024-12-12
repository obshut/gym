import Header from "./component/header/header";
import React from "react";
import Open from "./component/open/open";
import Footer from "./component/footer/footer";
import Card from "./component/card/card";
import Slider from "./component/slider/slider";
import Team from "./component/team/team";
import Video from "./component/video/video";
import Application from "./component/application/application";
import Reviews from "./component/reviews/reviews";
import {Switch} from "react-router-dom";
import {Route} from "react-router";
import Services from "./component/services/services";
import Trener from "./component/trener/trener";
import Questions from "./component/questions/questions";
import Benefit from "./component/benefit/benefit";
import Authorization from "./component/authorization/authorization";
import Registration from "./component/registration/registration";
import CalendarComponent from "./component/Calendar/Calendar";
import Statistic from "./component/statistics/statistics";
import Records from "./component/records/records";

const App = () => {

    return (
        <>
            
        
            
            <Switch>
                <Route exact path={'/'}>
                    <Authorization/>
                </Route>

                <Route exact path={'/registration'}>
                    <Registration/>
                </Route>

                <Route exact path={'/calendar'}>
                    <Header/>
                    <CalendarComponent/>
                    <Footer/>
                </Route>

                <Route exact path={'/statistic'}>
                    <Header/>
                    <Statistic/>
                    <Footer/>
                </Route>

                <Route exact path={'/records'}>
                    <Header/>
                    <Records/>
                    <Footer/>
                </Route>

                <Route path={'/home'}>
                    <Header/>
                    <Open/>
                    <Slider/>
                    <Team/>
                    <Video/>
                    <Questions/>
                    <Card/>
                    <Application/>
                    <Benefit/>
                    <Reviews/>
                    <Footer/>
                </Route>

                <Route path={'/services'}>
                    <Header/>
                    <Services></Services>
                    <Footer/>
                </Route>
                <Route path={'/trainer'}>
                    <Header/>
                    <Trener/>
                    <Slider/>
                    <Video/>
                    <Benefit/>
                    <Footer/>
                </Route>
            </Switch>
            
        </>
    );
}

export default App;
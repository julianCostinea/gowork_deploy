import React, { Component } from 'react';

import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import JobLaptop from '../../components/ContentImages/JobLaptop';
import CardContainer from '../../components/Card/CardContainer';
import Card from '../../components/Card/Card';
import CardFrihed from '../../components/ContentImages/CardImages/CardFrihed';
import CardKompetence from '../../components/ContentImages/CardImages/CardKompetence';
import CardTeam from '../../components/ContentImages/CardImages/CardTeam';
import ClientVideoDiv from '../../components/ClientVideoDiv/ClientVideoDiv';

import classes from './Vikar.module.css';

class Vikar extends Component {
    render() { 
        return ( 
          <div>
            <div className={classes.Content}>
                <TwoColumnDiv 
                    imageDiv = {<JobLaptop />}
                    buttonText ={'SE STILLINGER'}
                    button2Text = {'OPRET CV'}
                    header = {'Søger du\net fleksibelt job?'}>
                   Bliv vikar, og få tilbudt jobs der <br /> passer til din hverdag, 
                   som studerende <br />nyuddannet 
                   eller dig på sabbatår.
                </TwoColumnDiv>
                {/* <OneColumnDiv 
                    header ={'VI MATCER ÅRLIGT +1000 KANDIDATER TIL OPGAVER I SPÆNDENDE VIRKSOMHEDER '}
                    >
                        <FirmaLogos />
                </OneColumnDiv> */}
                <OneColumnDiv 
                    header = {'Skal du være en del af vikar-teamet?'}
                    paragraph = {`Vores vikar-team består af friske studerende, nyuddannede og mennesker i starten af deres karriere,\n
                      der springer til med kort varsel, har lyst til at møde nye virksomheder og kollegaer, og nyder\n 
                      den frihed som vikarjobbet giver. Lyder det som noget for dig? `}
                    >
                      Opret dit CV – hvis ikke nu, hvornår så?
                </OneColumnDiv>
                <OneColumnDiv 
                    whiteDiv
                    header={'3 gode grunde til at hoppe ombord'}>
                    <CardContainer>
                        <Card 
                            cardHeader = {'FRIHED'}
                            cardPhoto = {<CardFrihed />}
                            cardBody ={'Jobs der passer til din\nhverdag og dine ønsker.'}
                            />
                        <Card 
                            cardHeader = {'KOMPETENCE'}
                            cardPhoto = {<CardKompetence />}
                            cardBody ={'Få testet dine\nkompetencer og føj\nrelevant til CV\'et.'}
                            />
                        <Card 
                            cardHeader = {'TEAM'}
                            cardPhoto = {<CardTeam />}
                            cardBody ={'Bliv en del af et friskt\nog uformelt team på\nen fælles mission.'}
                            />
                    </CardContainer>
                </OneColumnDiv>
                <ClientVideoDiv
                    // imageDiv = {'BILLEDE AF SIMON ELLER VIDEO?'} 
                    header = {'Mød Simon'}>
                   "Som vikar igennem GOWORK kan jeg forene arbejde og studieliv, samt opnå <br /> et større økonomisk råderum” <br /><br /> 
                   <span style={{color:'white', fontWeight: 'bold'}}>Se video ></span>
                </ClientVideoDiv>
            </div>
          </div>  
        );
    }
}

export default Vikar;
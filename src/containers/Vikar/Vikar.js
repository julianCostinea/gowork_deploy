import React, { Component } from 'react';

import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import JobLaptop from '../../components/ContentImages/JobLaptop';
import CardContainer from '../../components/Card/CardContainer';
import Card from '../../components/Card/Card';
import CardFrihed from '../../components/ContentImages/CardImages/CardFrihed';
import CardKompetence from '../../components/ContentImages/CardImages/CardKompetence';
import CardTeam from '../../components/ContentImages/CardImages/CardTeam';
import CarouselContainer from '../../components/CarouselContainer/CarouselContainer';
import Carousel from '../../components/UI/Carousel/Carousel';
import * as VikarPhotos from '../../components/ContentImages/VikarPhotos/VikarPhotos';

import classes from './Vikar.module.css';

class Vikar extends Component {
    render() { 
        return ( 
          <React.Fragment>
            <div className={classes.Content}>
                <TwoColumnDiv 
                    imageDiv = {<JobLaptop />}
                    buttonText ={'SE STILLINGER'}
                    button2Text = {'OPRET CV'}
                    header = {'Søger du\net fleksibelt job?'}
                    underText = {'Læs mere om dine muligheder >'}
                    >
                   Bliv GoWork’er! Og få tilbudt jobs der passer til <br />din hverdag, 
                   som studerende <br />nyuddannet 
                   eller specialist. <br /><br />
                </TwoColumnDiv>
                <OneColumnDiv 
                    header = {'Attention all doers'}
                    paragraph = {`Vores vikar- og freelance team består af ambitiøse mennesker i starten af deres karriere, der \n
                        springer til med kort varsel, har lyst til at møde nye virksomheder og kollegaer, og nyder den \n
                            frihed som vikar-/freelance jobbet giver. Lyder det som noget for dig? `}
                    >
                      Opret dit CV – hvis ikke nu, hvornår så?
                </OneColumnDiv>
                <OneColumnDiv 
                    whiteDiv
                    header={'Join us'}>
                    <CardContainer>
                        <Card 
                            cardHeader = {'FRIHED'}
                            cardPhoto = {<CardFrihed />}
                            cardBody ={'Jobs der passer til din\nhverdag og dine ønsker.'}
                            />
                        <Card 
                            cardHeader = {'TEAM'}
                            cardPhoto = {<CardTeam />}
                            cardBody ={'Bliv en del af et friskt\nog uformelt team på\nen fælles mission.'}
                            />
                        <Card 
                            cardHeader = {'KOMPETENCE'}
                            cardPhoto = {<CardKompetence />}
                            cardBody ={'Få testet eller udviklet\ndine ’skills’ og øg din \nmarkedsværdi.'}
                            />
                    </CardContainer>
                </OneColumnDiv>
                <CarouselContainer
                    header = {'Hvad siger vores vikarer om os?'}>
                   <Carousel 
                        slide1 = {`Det har været en fornøjelse at være vikar ved GoWork. 
                            På jobbet har det været rart at tale med kunder der gerne vil 
                            snakke med dig, i selskab af ligesindede kollegaer.`}
                        vikarPhoto1 = {<VikarPhotos.VikarPhotoMagnus />}
                        slide1Name = {'Magnus'}
                        jobTitle1 = {'Kontor og eksamensvagt'}
                        slide2 = {`GoWork er et nærværende vikarbureau, jeg nemt kan komme i 
                            kontakt med. På min arbejdsplads, føler jeg mig ligeværdig med 
                            de ansatte og føler der bliver sat pris på mit arbejde.`}
                        vikarPhoto2 = {<VikarPhotos.VikarPhotoKatrine />}
                        slide2Name = {'Katrine'}
                        jobTitle2 = {'Kontor vikar'}
                        slide3 = {`Som vikar ved GoWork er jeg fysisk aktiv. Jeg oplever 
                            tillid fra arbejdspladserne, som giver mig ansvar. 
                            Mine vagter er altid tilpasset min kalender.`}
                        vikarPhoto3 = {<VikarPhotos.VikarPhotoMathias />}
                        slide3Name = {'Mathias'}
                        jobTitle3 = {'Lager vikar'}
                   />
                </CarouselContainer>
            </div>
           </React.Fragment>
        );
    }
}

export default Vikar;
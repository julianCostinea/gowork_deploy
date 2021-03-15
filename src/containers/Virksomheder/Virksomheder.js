import React, { Component } from 'react';

import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import FirmaLogos from '../../components/Logo/FirmaLogo/FirmaLogos';
import ServiceIcons from '../../components/Logo/ServiceIcons/ServiceIcons';
import CardContainer from '../../components/Card/CardContainer';
import Card from '../../components/Card/Card';
import CardMatch from '../../components/ContentImages/CardImages/CardMatch';
import CardOkonomi from '../../components/ContentImages/CardImages/CardOkonomi';
import CardAttitude from '../../components/ContentImages/CardImages/CardAttitude';
import KontaktModalButton from '../../components/Button/KontaktModalButton';
import VirksomehederImg from '../../components/ContentImages/VirksomhederImage';

import classes from './Virksomheder.module.css';

import KontaktModal from '../../components/UI/Modal/KontaktModal';
import CarouselContainer from '../../components/CarouselContainer/CarouselContainer';
import Carousel from '../../components/UI/Carousel/Carousel';
import * as ClienPhotos from '../../components/ContentImages/ClientPhotos/ClientPhotos';

class Virksomheder extends Component {
    state={
        showModal: false,
    }
    showModal = () => {
        this.setState( { showModal: true } );
      }
    closeModal = () => {
        this.setState( { showModal: false } );
      }
    render() { 
        return ( 
          <div>
              <KontaktModal show = {this.state.showModal} modalClosed={this.closeModal} />
              <div className={classes.Content}>
                <TwoColumnDiv 
                    imageDiv = {<VirksomehederImg />}
                    header = {'Få de bedste \n vikarer og\n freelancere\n til opgaven'}>
                   Hurtig adgang til de rette kompetencer og <br /> 
                   garanti for et godt match. <br />
                   Og så kan du spare op til 35% på dit vikargebyr. <br /><br/><br/> 
                   Hvilken opgave søger du personale til? <br/>
                   <KontaktModalButton openKontakt = {this.showModal} />
                </TwoColumnDiv>
                <OneColumnDiv 
                    firmaHeader ={'KOM I GODT SELSKAB. VI BESÆTTER ÅRLIGT MERE END 25.000 JOBS'}
                    >
                        <FirmaLogos />
                </OneColumnDiv>
                <OneColumnDiv
                    whiteDiv
                    header={'3 gode grunde til at bruge os'}
                >
                    <CardContainer>
                        <Card 
                            cardPhoto ={<CardMatch />}
                            cardHeader = {'MATCH'}
                            cardBody ={'Kunderne giver vores\nkandidater 4,5 ud af 5,0\nsterjner. Vi giver dig\n tryghed.'}
                            />
                        <Card 
                            cardPhoto = {<CardOkonomi />}
                            cardHeader = {'ØKONOMI'}
                            cardBody ={'Lavere gebyr end\ntraditionelle bureauer\ngiver mere udført\n arbejde for færre penge.'}
                            />
                        <Card 
                            cardPhoto={<CardAttitude />}
                            cardHeader = {'ATTITUDE'}
                            cardBody ={'Vi udvælger kun\nkandidater med en \'Can\ndo\' attitude. Så dine opgaver \n bliver løst effektivt.'}
                            />
                    </CardContainer>
                </OneColumnDiv>
                <OneColumnDiv 
                    header = {'Kvikke hoveder til de fleste opgaver'}
                    paragraph = {`Vi holder os skarpt opdateret på udviklingen indenfor flere fagområder. Sådan sikrer vi at din \n
                    virksomhed til enhver tid har de stærkeste vikar eller freelance-specialister til opgaven.`}
                    >
                        <br />
                        Vælg det område du søger personale til: 
                        <ServiceIcons />
                        <br />
                        Søger du personale til andre opgaver? <br /> <br />
                        <a 
                            style={{cursor: 'pointer'}}
                            onClick = {this.showModal}>
                                Fortæl os om dit behov
                        </a>
                </OneColumnDiv>
                <CarouselContainer
                    whiteDiv
                    header = {'Hvad siger vores kunder?'}>
                   <Carousel 
                        slide1 = {`Vi er særdeles tilfredse med vores samarbejde med Go:Work. Vi er i en branche, hvor behovet
                            for personale varierer enormt - ofte med kort varsel. Med det samarbejde vi har
                            med GoWork, er vi aldrig bange for at tage opgaver ind.`}
                        vikarPhoto1 = {<ClienPhotos.ClientPhotoJacob />}
                        slide1Name = {'Jacob Riis'}
                        jobTitle1 = {'Terminalchef'}
                        firma1 = {'Alex Andersen Ølund A/S'}
                        slide2 = {`GoWork er et nærværende vikarbureau, jeg nemt kan komme i 
                            kontakt med. På min arbejdsplads, føler jeg mig ligeværdig med 
                            de ansatte og føler der bliver sat pris på mit arbejde.`}
                        vikarPhoto2 = {<ClienPhotos.ClientPhotoRikke  />}
                        slide2Name = {'Rikke Røjgaard'}
                        jobTitle2 = {'COO & Partner'}
                        firma2 = {'Valeur A/S'}
                        slide3 = {`Som vikar ved GoWork er jeg fysisk aktiv. Jeg oplever 
                            tillid fra arbejdspladserne, som giver mig ansvar. 
                            Mine vagter er altid tilpasset min kalender.`}
                        vikarPhoto3 = {<ClienPhotos.ClientPhotoTine  />}
                        slide3Name = {'Tine Nyegaard Pedersen'}
                        jobTitle3 = {'Studieadministrativ'}
                        firma3 = {'Roskilde Universitet'}
                   />
                </CarouselContainer>
            </div>
          </div>  
        );
    }
}

export default Virksomheder;
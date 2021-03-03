import React, { Component } from 'react';

import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import FirmaLogos from '../../components/Logo/FirmaLogo/FirmaLogos';
import ServiceIcons from '../../components/Logo/ServiceIcons/ServiceIcons';
import QuoteDiv from '../../components/QuoteDiv/QuoteDiv';
import CardContainer from '../../components/Card/CardContainer';
import Card from '../../components/Card/Card';
import CardMatch from '../../components/ContentImages/CardImages/CardMatch';
import CardOkonomi from '../../components/ContentImages/CardImages/CardOkonomi';
import CardAttitude from '../../components/ContentImages/CardImages/CardAttitude';
import Button from '../../components/Button/Button';
import VirksomehederImg from '../../components/ContentImages/VirksomhederImage';

import classes from './Virksomheder.module.css';

class Vikar extends Component {
    render() { 
        return ( 
          <div>
              <div className={classes.Content}>
                <TwoColumnDiv 
                    imageDiv = {<VirksomehederImg />}
                    buttonText = {'START HER'}
                    header = {'Vi finder kvikke\n hoveder til at løse\n dine opgaver'}>
                   GOWORK formidler studerende og nyuddannede  <br /> 
                   til de fleste opgaver, og specialister til det der kræver <br />
                   noget mere. <br /><br />
                   Vi udvælger kun de stærkeste kandidater, så du kommer <br /> 
                   sikkert i mål opgaven – simple eller komplekse, <br /> 
                   få timer eller på fuld tid. <br /> <br /> 
                   Og JA, så kan du spare op til 35% på dit vikargebyr. <br /> 
                   Hvilken opgave søger du personale til?
                </TwoColumnDiv>
                <OneColumnDiv 
                    header ={'KOM I GODT SELSKAB. VI BESÆTTER ÅRLIGT MERE END 25.000 JOBS'}
                    >
                        <FirmaLogos />
                </OneColumnDiv>
                <OneColumnDiv 
                    whiteDiv
                    header = {'Kvikke hoveder til de fleste opgaver'}
                    paragraph = {'Vi oplever stor efterspørgsel på personale til nedenstående områder, og har derfor opbygget \net  omfattende korps af kompetente profiler klar til at løse din næste opgave.'}
                    >
                        <br />
                        Vælg det område du søger personale til: 
                        <ServiceIcons />
                        <br />
                        Søger du personale til andre opgaver? <br /> <br />
                        <a href='#'>Fortæl os om dit behov</a>
                </OneColumnDiv>
                <OneColumnDiv
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
                            cardBody ={'Lavere \'over-head\' end\ntraditionelle bureauer\ngiver mere udført\n arbejde for færre penge.'}
                            />
                        <Card 
                            cardPhoto={<CardAttitude />}
                            cardHeader = {'ATTITUDE'}
                            cardBody ={'Vi udvælger kun\nkandidater med en \'Can\ndo\' attitude og et godt\n hoved. Så dine opgaver \n bliver løst effektivt'}
                            />
                    </CardContainer>
                </OneColumnDiv>
                <QuoteDiv 
                    header = {'Hvad siger vores kunder?'}
                    author={'Jacob Riis, Terminalchef'}
                    firma={'Alex Andersen Ølund A/S'}
                    >
                    "Vi er særdeles tilfredse med vores samarbejde med GOWORK. Vi er i en branche, hvor behovet <br /> for personale varierer enormt - ofte med kort varsel. Med det samarbejde vi har <br /> med GOWORK, er vi aldrig bange for at tage opgaver ind."
                </QuoteDiv>
                <OneColumnDiv
                    header = {'Passion for fremtidens medarbejdere'}
                    paragraph={'GOWORK er et vikar- og freelancebureau, som siden 2012 har hjulpet mennesker i starten af deres\nkarriere mod det næste job, og virksomheder med at komme sikkert i mål med dagens opgaver.'}
                >
                    <Button rounded buttonText={'LÆS MERE'} />
                </OneColumnDiv>
            </div>
          </div>  
        );
    }
}

export default Vikar;
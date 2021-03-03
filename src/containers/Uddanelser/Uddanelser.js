import React, { Component } from 'react';

import classes from './Uddanelser.module.css';

import Button from '../../components/Button/Button';
import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import SchoolLogos from '../../components/Logo/FirmaLogo/SchoolLogos';
import CardContainer from '../../components/Card/CardContainer';
import Card from '../../components/Card/Card';
import CardMatch from '../../components/ContentImages/CardImages/CardMatch';
import CardFleksibilitet from '../../components/ContentImages/CardImages/CardFleksibilitet';
import CardOkonomi from '../../components/ContentImages/CardImages/CardOkonomi';
import UddannelserImage from '../../components/ContentImages/UddannelserImage';
import SkanderborgLogo from '../../components/Logo/FirmaLogo/SkanderborgLogo';
import ClientVideoDiv from '../../components/ClientVideoDiv/ClientVideoDiv';

class Uddanelser extends Component {
    render() { 
        return ( 
          <div>
              <div className={classes.Content}>
                <TwoColumnDiv 
                    imageDiv = {<UddannelserImage />}
                    buttonText ={'BESTIL TILBUD'}
                    header = {'Outsource trygt\ndit eksamenstilsyn'}>
                   Vi tilbyder fleksible og IT-kompetente vagter<br /> i hele landet, og sparer dig for en masse <br />tid og omkostninger.
                </TwoColumnDiv>
                <OneColumnDiv 
                    header ={'VI ER DEN FORETRUKNE LEVERANDØR HOS +50 UDDANNELSESSTEDER'}
                    >
                       <div style={{marginTop: '2rem'}}>
                            <SchoolLogos />
                       </div>
                </OneColumnDiv>
                <OneColumnDiv
                    whiteDiv
                    header = {'Fleksible løsninger til alle behov'}
                    paragraph={'Vi tilpasser løsningen, så den matcher jeres behov. Det kan være tale om alt fra få vagter, som supplement\ntil jeres eget korps, til fuld outsourcing, hvor vi stiller med koordinatorer og et større antal vagter.'}
                >
                    <Button buttonText={'LÆS MERE'} />
                </OneColumnDiv>
                <OneColumnDiv
                 header={'3 gode grunde til at bruge os'}>
                <CardContainer>
                        <Card 
                            cardPhoto = {<CardMatch />}
                            cardHeader = {'ET GODT MATCH'}
                            cardBody ={'Kunderne giver vores\nkandidater 4,5 ud af 5,0\nsterjner.'}
                            />
                        <Card 
                            cardPhoto={<CardFleksibilitet />}
                            cardHeader = {'FLEKSIBILITET'}
                            cardBody ={'Skru op og ned\nfor antal bestilte vagter\nsom det passer dig.'}
                            />
                        <Card 
                            cardPhoto = {<CardOkonomi />}
                            cardHeader = {'ØKONOMI'}
                            cardBody ={'Lavere vikargebyr\nend hos traditionelle\n vikarbureauer.'}
                            />
                    </CardContainer>
                </OneColumnDiv>
                <ClientVideoDiv
                    whiteDiv
                    imageDiv = {<SkanderborgLogo width = {'20rem'} height = {'16rem'} />} 
                    header = {'Mød Jakob fra Skanderborg Gymnasium'}>
                   Hør det fra Skanderborg Gymnasium her!<br />
                   I videon kan I møde Jacob Peter Thomsen,<br />
                   som fortæller om samarbejdet med GOWORK. <br /><br /> 
                   <span style={{color:'#2a5c91', fontWeight: 'bold'}}>Se video ></span>
                </ClientVideoDiv>
            </div>
          </div>  
        );
    }
}

export default Uddanelser;
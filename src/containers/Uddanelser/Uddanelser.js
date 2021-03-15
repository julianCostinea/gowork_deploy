import React, { Component } from 'react';

import classes from './Uddanelser.module.css';

import KontaktModalButton from '../../components/Button/KontaktModalButton';
import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import SchoolLogos from '../../components/Logo/FirmaLogo/SchoolLogos';
import CardContainer from '../../components/Card/CardContainer';
import Card from '../../components/Card/Card';
import CardMatch from '../../components/ContentImages/CardImages/CardMatch';
import CardFleksibilitet from '../../components/ContentImages/CardImages/CardFleksibilitet';
import CardOkonomi from '../../components/ContentImages/CardImages/CardOkonomi';
import UddannelserImage from '../../components/ContentImages/UddannelserImage';
import ClientVideoDiv from '../../components/ClientVideoDiv/ClientVideoDiv';
import KontaktModal from '../../components/UI/Modal/KontaktModal';

class Uddanelser extends Component {
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
                    imageDiv = {<UddannelserImage />}
                    header = {'Vi letter \n arbejdsbyrden i\n den travle\n eksamenstid'}>
                   GoWork formidler fleksible og IT-kompetente<br /> 
                   eksamensvagter i hele landet. <br />
                   Som den foretrukne samarbejdspartner hos mere end 50 <br/>
                   uddannelsessteder, har vi den erfaring og viden der skal <br/>
                   til for at bringe jer sikkert i mål med eksamensperioden. <br/><br/>
                   Vil du vide hvordan vi kan hjælpe jer? <br/>
                   <KontaktModalButton openKontakt = {this.showModal} />
                </TwoColumnDiv>
                <OneColumnDiv 
                    firmaHeader ={'VI ER DEN FORETRUKNE LEVERANDØR HOS +50 UDDANNELSESSTEDER'}
                    >
                       <div style={{marginTop: '2rem'}}>
                            <SchoolLogos />
                       </div>
                </OneColumnDiv>
                <OneColumnDiv
                    whiteDiv            
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
                <OneColumnDiv
                    header = {'Fleksible løsninger til alle behov'}
                    paragraph={`
                    Vi tilpasser løsningen, så den matcher perfekt til jeres behov. Der kan være tale om alt fra få 
                    eksamensvagter, som supplement til jeres eget korps, til fuld outsourcing, hvor vi stiller med 
                    koordinatorer og et større antal vagter.\n
                    Som den foretrukne leverandør af eksterne eksamensvagter er vi din garanti for et velgennemført 
                    eksamenstilsyn.\n
                    Vores team af flittige konsulenter med omfattende viden og erfaring indenfor eksamenstilsyn står 
                    klar til at hjælpe med den løsning, der matcher jeres behov.\n
                    Kontakt os for en uforpligtende snak om mulighederne. Vi sidder klar til at hjælpe dig godt på vej. 
                    Tlf.: 66 10 65 00.
                    `}
                />
                <ClientVideoDiv
                    whiteDiv
                    header = {'Hvad siger vores kunder om os?'}>
                   &quot;GoWork rammer plet med deres korps.&quot;<br />
                   Jacob Peter Thomsen<br /> <br/>
                   <strong>Skanderborg Gymnasium.</strong> 
                </ClientVideoDiv>
            </div>
          </div>  
        );
    }
}

export default Uddanelser;
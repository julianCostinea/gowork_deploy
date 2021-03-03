import React, { Component } from 'react';

import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import TwoColumnDiv from '../../components/TwoColumnDiv/TwoColumnDiv';
import CardContainer from '../../components/Card/CardContainer';
import BigCard from '../../components/BigCard/BigCard';
import TextCard from '../../components/TextCard/TextCard';
import CardFrihed from '../../components/ContentImages/CardImages/CardFrihed';
import CardKompetence from '../../components/ContentImages/CardImages/CardKompetence';
import CardTeam from '../../components/ContentImages/CardImages/CardTeam';
import ClientVideoDiv from '../../components/ClientVideoDiv/ClientVideoDiv';

import classes from './HopOmbord.module.css';

class HopOmbord extends Component {
    render() { 
        return ( 
          <div>
            <div className={classes.Content}>
                <OneColumnDiv 
                    whiteDiv
                    bigHeader
                    header ={'Hop Ombord'}
                    >
                    <CardContainer>
                        <BigCard
                            cardTitle = {'Sabbatår'} 
                            cardHeader = {'LOREM'}
                            cardPhoto = {<CardFrihed />}
                            cardBody ={'Jobs der passer Anim im aliquip quis. til din Et proident id ea non exercitation et aute tempor.hverdag og dine ønsker Amet adipisicing officia incididunt irure.'}
                            />
                        <BigCard 
                            cardTitle = {'Studerende'} 
                            cardHeader = {'LOREM'}
                            cardPhoto = {<CardKompetence />}
                            cardBody ={'Consequat sint qui tempor incididunt enim deserunt.Officia tempor excepteur magna excepteur voluptate aliquip nulla dolor deserunt laboris reprehenderit culpa aliquip.'}
                            />
                        <BigCard 
                            cardTitle = {'Freelancer'} 
                            cardHeader = {'LOREM'}
                            cardPhoto = {<CardTeam />}
                            cardBody ={'Sint ad duis aute cupidatat Consequat sunt pariatur aliqua duis culpa qui non consequat est. laborum cupidatat irure sint.Nisi elit aute veniam enim ut.'}
                            />
                    </CardContainer>
                </OneColumnDiv>
                <OneColumnDiv 
                    header = {'Fagområder'}
                    paragraph = {`Vi har et særligt fokus på midlertidige jobs indenfor salg, det digitale og kreative, kundeservice,\n
                      operations, eksamentilsyn, økonomi og administration. Her er et overblik over nogle af de\n 
                      stillinger/opgaver vi løser:`}
                    >
                    <CardContainer>
                        <TextCard
                            cardHeader = {`SALG &\n KUNDESERVICE:`}
                            cardBody ={'Jobs der passer Anim im aliquip quis. til din Et proident id ea non exercitation et aute tempor.hverdag og dine ønsker Amet adipisicing officia incididunt irure.'}
                            />
                        <TextCard 
                            cardHeader = {'DIGITALT &\n KREATIVT'}
                            cardBody ={'Consequat sint qui tempor incididunt enim deserunt.Officia tempor excepteur magna excepteur voluptate aliquip nulla dolor deserunt laboris reprehenderit culpa aliquip.'}
                            />
                        <TextCard 
                            cardHeader = {'LAGER &\n PRODUKTION'}
                            cardBody ={'Sint ad duis aute cupidatat Consequat sunt pariatur aliqua duis culpa qui non consequat est. laborum cupidatat irure sint.Nisi elit aute veniam enim ut.'}
                            />
                        <TextCard 
                            cardHeader = {'ØKONOMI &\n ADMINISTRATION'}
                            cardBody ={'Sint ad duis aute cupidatat Consequat sunt pariatur aliqua duis culpa qui non consequat est. laborum cupidatat irure sint.Nisi elit aute veniam enim ut.'}
                            />
                    </CardContainer>
                </OneColumnDiv>
                <OneColumnDiv 
                    whiteDiv
                    header={'Ansøgningsproces'}
                    paragraph ={`Vi er stolte af vores mange glade kunder, som rater vores kandidater 4.5 ud af 5.0 stjerner. Du får med\n
                        vores hjælp sikkerhed for, at du passer godt til de opgaver vi tilbyder dig. Vi sørger også for at den \n
                        virksomhed du får tilbudt arbejde i, passer til dine ønsker. Det er nemlig kun et godt match hvis både \n
                        virksomheden og den ansatte er glade for hinanden - og det er vores mål!`}
                    underHeader = {'Her er en kort beskrivelse af en standard ansættelsesproces.'}
                    >
                        BILLEDE MED ANSÆTTELSESPROCES
                </OneColumnDiv>
            </div>
          </div>  
        );
    }
}

export default HopOmbord;
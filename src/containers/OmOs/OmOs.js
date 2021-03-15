import React, { Component } from 'react';

import OneColumnDiv from '../../components/OneColumnDiv/OneColumnDiv';
import CardContainer from '../../components/Card/CardContainer';
import Card from '../../components/Card/Card';
import * as TeamPhotos from '../../components/ContentImages/TeamPhotos/TeamPhotos';

import classes from './OmOs.module.css';

class OmOs extends Component {
    render() { 
        return ( 
          <div>
              <div className={classes.Content}>
                <OneColumnDiv
                    whiteDiv
                    header = {'Passion for fremtidens medarbejdere'}
                    paragraph={`Go:Work er et vikar- og freelancebureau.Vi har siden 2012 formidlet studerende og \n
                        nyuddannede til vikariater- og studiejobs, og specialister til freelanceopgaver.\n
                        Vi er vilde med den energi og de ambitioner som definerer generation Y og Z.\n 
                        Og brænder for at bringe talent og virksomhed sammen.`}
                >
                </OneColumnDiv>
                <OneColumnDiv
                    header={'Vores team'}
                >
                    <CardContainer>
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoOle />}
                            cardHeader = {'OLE'}
                            cardBody ={'Senior Konsulent & Indehaver'}
                            />
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoJonas />}
                            cardHeader = {'JONAS'}
                            cardBody ={'HR Konsulent'}
                            />
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoJulian />}
                            cardHeader = {'JULIAN'}
                            cardBody ={'HR Konsulent'}
                            />
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoErik />}
                            cardHeader = {'ERIK'}
                            cardBody ={'HR Konsulent'}
                            />
                    </CardContainer>
                    <CardContainer>
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoIgnacio />}
                            cardHeader = {'Ignacio'}
                            cardBody ={'LUCHADOR'}
                            />
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoPeter/>}
                            cardHeader = {'PETER'}
                            cardBody ={'HR Konsulent'}
                            />
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoArne/>}
                            cardHeader = {'ARNE'}
                            cardBody ={'Senior Konsulent'}
                            />
                        <Card 
                            cardPhoto = {<TeamPhotos.CandidatePhotoTrine/>}
                            cardHeader = {'TRINE'}
                            cardBody ={'Bogholder'}
                            />
                    </CardContainer>
                </OneColumnDiv>
            </div>
          </div>  
        );
    }
}

export default OmOs;
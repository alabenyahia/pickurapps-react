import styled from "styled-components";
import {Helmet} from "react-helmet";
import React from "react";

const StyledDiv = styled.div`
  color: #ffffff;
  background-color: #ff4444;
  border-radius: 6px;
  padding: 12px;
  text-align: center;
  margin-bottom: 16px;
  line-height: 2rem;
`;

function NotAvailableError() {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Helmet>
                <title>Dlilek Mlak | pickurapps</title>
            </Helmet>
            <StyledDiv>
                This game is still not optimized for small screen but you can still Get the mobile app from Google Play
                On the link below.
            </StyledDiv>
            <a style={{width: '100%', textAlign: 'center'}}
               href='https://play.google.com/store/apps/details?id=com.pickurapps.dlilekmlak&hl=fr&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img style={{height: '100px', objectFit: 'contain'}}
                     alt='Get it on Google Play'
                     src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
            </a>
        </div>
    );
}

export default NotAvailableError;
import React, { Fragment } from 'react';

import { TopPart } from '../components/TopPart';
import { BottomPart } from '../components/BottomPart';
import { Row } from '../components/Row';
import { SectionSeparator } from '../components/Section';

import { bankingData, ethereumData } from '../data/donate';
import { VERTICAL_PADDING } from '../data/style'
import ColorFacesIllustration from '../assets/ColorfacesWithMargin.svg'

const DataWithNewlines = ({data}) => <Fragment>
    {
        data
        .split('\n')
        .map(line => <Fragment>{line}<br/></Fragment>)
    }
</Fragment>

const DonateInfo = ({title, data}) => (
    <div
        style={{
            flexDirection: 'column',
            flex: 1,
            alignSelf: 'stretch',
        }}
    >
        <h3 style={{
            fontFamily: 'Jost',
            fontSize: 21,
            marginBottom: 0,
        }}>
            {title}
        </h3>
        <br />
        {Object.keys(data).map(key => {
            if (data[key]) {
                return (
                    <p
                        key={key}
                        style={{
                            fontSize: 14,
                            margin: 0,
                            wordBreak: 'break-word',
                            paddingBottom: 10,
                        }}
                    >
                        <b>{key}: </b>
                        <br/>
                        <DataWithNewlines data={data[key]} />
                    </p>
                );
            }
        })}
    </div>
)

const DonateIllustration = ({}) => (
    <div
        className='donate-image'
        style={{
            background: 'white',
            backgroundImage: `url(${ColorFacesIllustration})`,
            backgroundRepeat: 'repeat-x',
            width: '100vw',
            height: 251,
            position: 'relative',
        }}
        title='Illustration by Ailadi — ailadi.com'
    >
    </div>
)

export const Donate = ({data}) => (
    <Fragment>
        <TopPart
            icon={<DonateIllustration />}
            iconStyle={{
                marginTop: VERTICAL_PADDING,
            }}
            pageTitle='Donate'
            title='MAKE A DONATION'
            subTitle='We’ve been lucky enough to get this far with the help of friends, and by investing our own resources. Boost your karma.'
        />
        <BottomPart>
            <Row>
                <DonateInfo
                    title='ETHEREUM TRANSACTION'
                    data={ethereumData}
                />
            </Row>
        </BottomPart>
    </Fragment>
)

export default Donate;

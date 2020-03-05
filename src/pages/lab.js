import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import { TopPart } from '../components/TopPart';
import { BottomPart } from '../components/BottomPart';
import { Row } from '../components/Row';
import { SectionWithImageAndLink, SectionSeparator } from '../components/Section';
import { Illustration } from '../components/Illustration'

import FelfeleLabLogo from '../assets/felfele-lab-logo.svg'

export const Lab = ({data}) => (
    <Fragment>
        <TopPart
            icon={<Illustration src={FelfeleLabLogo} style={{
                maxHeight: 50,
            }} />}
            iconStyle={{
                marginTop: 100,
                marginBottom: 100,
            }}
            pageTitle='Lab'
            subTitle='Where we share work-in-progress and unpolished experiments. Everything is open source, so feel free to use or contribute. '
        />
        <BottomPart>
            <Row>
                <SectionWithImageAndLink
                    title='NICHE BETA (Next release)'
                    text='Work-in-progress for the next release of Niche.'
                    image={data.nicheBetaImage.childImageSharp.fluid}
                    link='https://swapchat.felfele.org'
                    label='TRY IN TESTFLIGHT'
                />
                <SectionSeparator/>
                <SectionWithImageAndLink
                    title='FEEDS'
                    text='We wanted a mobile, completely free and independent RSS reader with no algorithmic timeline—like in the good ol’ days—so we built it.'
                    image={data.feedsImage.childImageSharp.fluid}
                    link='https://github.com/felfele/feeds'
                    label='GITHUB'
                />
            </Row>

            <Row>
                <SectionWithImageAndLink
                    title='SWAPCHAT'
                    text='A disposable, end-to-end encrypted, and completely anonymous chat DApp that was built during the Swarm Hack Week 2019 in Madrid.'
                    image={data.swapchatImage.childImageSharp.fluid}
                    link='https://swapchat.felfele.org'
                    label='WEBSITE'
                />
                <SectionSeparator/>
                <SectionWithImageAndLink
                    title='FELFELE ON GITHUB'
                    text='Access all our repositories on Github'
                    image={data.githubImage.childImageSharp.fluid}
                    link='https://github.com/felfele'
                    label='GITHUB'
                />
            </Row>
        </BottomPart>
    </Fragment>
)

export default Lab;

export const query = graphql`
    query {
        felfeleLabImage: file(
            relativePath: { eq: "felfele-lab-image.png" },
            sourceInstanceName: { eq: "images" }
            ) {
            childImageSharp {
                fluid(maxWidth: 560, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        swapchatImage: file(
            relativePath: { eq: "swapchat-image.png" },
            sourceInstanceName: { eq: "images" }
            ) {
            childImageSharp {
                fluid(maxWidth: 560, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        feedsImage: file(
            relativePath: { eq: "feeds-image.png" },
            sourceInstanceName: { eq: "images" }
            ) {
            childImageSharp {
                fluid(maxWidth: 560, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        nicheBetaImage: file(
            relativePath: { eq: "niche-beta-image.png" },
            sourceInstanceName: { eq: "images" }
            ) {
            childImageSharp {
                fluid(maxWidth: 560, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        githubImage: file(
            relativePath: { eq: "github-image.png" },
            sourceInstanceName: { eq: "images" }
            ) {
            childImageSharp {
                fluid(maxWidth: 560, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`;

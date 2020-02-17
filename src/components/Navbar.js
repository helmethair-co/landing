import React, { Component } from 'react';
import { Link } from 'gatsby';
// import font file
import 'typeface-nunito-sans';

import Logo from './../assets/Felfele_Horizontal.svg'
import Phone from './../assets/baseline-smartphone-24-px.svg'
import { Button } from './Button';
export const WIDTH_THRESHOLD = 650;

export class Navbar extends Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 90,
                    }}
                >
                    <Link
                        to='/'
                        style={{
                            color: '#FFFFFF',
                            flexDirection: 'row',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src={Logo} style={{ width: 100, marginBottom: 0, fill: '#000000' }}/>
                    </Link>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingRight: 10,
                        }}
                    >
                        <Button
                            icon={Phone}
                            link='/niche'
                            label='NICHE'
                            style={{
                                fontWeight: 600,
                            }}
                        />
                        <Button
                            link='/lab'
                            label='LAB'
                            style={{
                                fontWeight: 600,
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;

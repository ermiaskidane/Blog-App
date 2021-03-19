import React from "react";
import Sprite from "../../assets/images/sprite.svg";
// import "../../App.scss"
import "./Services.scss"

const Services = () => {
    return (
        <div className="services">
            <div className="services--sidebar">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-hand`} />
                </svg>
                <span>72k</span>
                <svg>
                  <use xlinkHref={`${Sprite}#icon-bubble`} />
                </svg>
                <span>74 </span>
                <svg>
                  <use xlinkHref={`${Sprite}#icon-bookmark`} />
                </svg>
            </div>
            
            <div className="services--detail">
                <div className="detail--container">
                    <div className="detail--title">
                        <h1>Generating Passive Income is Really Hard</h1>
                    </div>
                    <div className="detail--body">
                        <figure>
                            <img src="/images/img-3.jpg" alt="passive income"/>
                        </figure>
                        <div className="detail--content">
                            <p>
                            The highest level of financial freedom is having enough passive income to cover
                             your living expenses. If you manage to reach that point, you can spend your 
                             days doing whatever makes you happiest.
                            If passive income is the key to financial freedom, 
                            then anyone who can enable others to generate passive 
                            income will be able to wield massive influence and make themselves 
                            wealthy. That is why the internet is full of spammy articles and 
                            videos, promising easy solutions to generate passive income.
                            </p>

                            <p>
                            The highest level of financial freedom is having enough passive income to cover
                             your living expenses. If you manage to reach that point, you can spend your 
                             days doing whatever makes you happiest.
                            If passive income is the key to financial freedom, 
                            then anyone who can enable others to generate passive 
                            income will be able to wield massive influence and make themselves 
                            wealthy. That is why the internet is full of spammy articles and 
                            videos, promising easy solutions to generate passive income.
                            </p>
                            <p>
                            The highest level of financial freedom is having enough passive income to cover
                             your living expenses. If you manage to reach that point, you can spend your 
                             days doing whatever makes you happiest.
                            If passive income is the key to financial freedom, 
                            then anyone who can enable others to generate passive 
                            income will be able to wield massive influence and make themselves 
                            wealthy. That is why the internet is full of spammy articles and 
                            videos, promising easy solutions to generate passive income.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default Services
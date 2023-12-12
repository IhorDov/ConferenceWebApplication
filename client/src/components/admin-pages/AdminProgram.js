import React, { useState } from 'react';
import AdminSideBar from '../../Extra/AdminSideBar';
import Tab from '../../Extra/Tab';
import LocationMarker from '../../Pictures/location_marker.png';
import PlaceHolderPic from '../../Pictures/placeholder_banner.jpg';
import '../../CSS/styles.css';
import '../../CSS/w3.css';
import '../../CSS/sideNav.css';

const tabs = [
    {
        label: 'Onsdag d. 22. marts 2023',
        content: <div></div>,
        buttons: [
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 10.30 - 11.00</td>
                            <th>
                                Ankomst og morgenkaffe <br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>Vingfoyer</a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Ankomst og morgenkaffe <br></br>{' '}
                                <a style={{ fontSize: 'small' }}>Vingfoyer</a>
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>
                                    Vi anbefaler, at du kommer i god tid og får
                                    dit navneskilt, en kop kaffe og lidt
                                    morgenmad. Du må gerne finde en plads i
                                    salen, før vi går i gang med det officielle
                                    program.
                                </td>
                            </tr>
                        </table>
                    </div>
                ),
            },
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 11.00 - 11.10</td>
                            <th>
                                Velkomst <br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>Vingsal 1</a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Velkomst <br></br>{' '}
                                <a style={{ fontSize: 'small' }}>Vingsal 1</a>
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>
                                    Steen Enemark Kildesgaard byder velkommen
                                    til sektorkonferencen 2023
                                </td>
                            </tr>
                            <tr>
                                <th>Speakers:</th>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                        alt=""
                                        style={{ width: '5%' }}
                                    ></img>{' '}
                                    Steen Enemark Kildesgaard
                                </td>
                            </tr>
                        </table>
                    </div>
                ),
            },
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 11.10 - 11.40</td>
                            <th>
                                Det datadrevne smafund <br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>Vingsal 1</a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Det datadrevne smafund <br></br>{' '}
                                <a style={{ fontSize: 'small' }}>Vingsal 1</a>
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>
                                    Brug af data er ikke til at komme udenom for
                                    virksomhederne. Det er en del af
                                    digitaliseringen, men hvad betyder det for
                                    virksomhederne at bruge data, og hvordan
                                    bliver de datadrevne? Hvordan hænger den
                                    datadrevne virksomhed sammen med grøn
                                    omstilling, og hvilke krav stiller det til
                                    uddannelse? Det er nogle af de spørgsmål,
                                    Astrid vil give svar på.
                                </td>
                            </tr>
                            <tr>
                                <th>Speakers:</th>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                        alt=""
                                        style={{ width: '5%' }}
                                    ></img>{' '}
                                    Astrid Haug
                                </td>
                            </tr>
                        </table>
                    </div>
                ),
            },
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 11.40 - 13.00</td>
                            <th>
                                Hvordan sikrer vi de rette kompentencer?{' '}
                                <br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>Vingsal 1</a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Hvordan sikrer vi de rette kompentencer?{' '}
                                <br></br>{' '}
                                <a style={{ fontSize: 'small' }}>Vingsal 1</a>
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>
                                    De otte erhvervsakademier arbejder især med
                                    de tre områder fuldtidsuddannelserm
                                    deltidsuddannelser og endelig forsking og
                                    udvikling. Hør tre oplægsholdere fortælle,
                                    hvad erhvervsakademierne med fordel også kan
                                    være opmærksomme på udviklingen af
                                    uddannelser og forsking. De tre oplæg
                                    handler om: <br></br>{' '}
                                    <li>
                                        Praksis ind i forsking - forsking ud i
                                        praksis
                                    </li>{' '}
                                    <br></br>{' '}
                                    <li>Grønne kompentencer til fremtiden</li>{' '}
                                    <br></br>{' '}
                                    <li>Virksomhedernes udfordinger.</li>
                                </td>
                            </tr>
                            <tr>
                                <th>Speakers:</th>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                        alt=""
                                        style={{ width: '5%' }}
                                    ></img>{' '}
                                    Casper Waldemar Hald <br></br>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                        alt=""
                                        style={{ width: '5%' }}
                                    ></img>{' '}
                                    Louise Gade <br></br>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                        alt=""
                                        style={{ width: '5%' }}
                                    ></img>{' '}
                                    Christina Aabo
                                </td>
                            </tr>
                        </table>
                    </div>
                ),
            },
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 13.00 - 13.45</td>
                            <th>
                                Frokost <br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>
                                    Restauranten
                                </a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Frokost <br></br>{' '}
                                <a style={{ fontSize: 'small' }}>
                                    Restauranten
                                </a>
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>Så er der frokost i restauranten.</td>
                            </tr>
                        </table>
                    </div>
                ),
            },
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 13.45 - 14.30</td>
                            <th>
                                Idebazar <br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>Vingsal 2</a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Idebazar <br></br>{' '}
                                <a style={{ fontSize: 'small' }}>Vingsal 2</a>
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>
                                    På erhvervsakademierne bugner det med gode
                                    ideer, cases og løsninger. Til idebasaren
                                    får du mulighed for at høre tre korte oplæg,
                                    som måske kan inspirere dig i dit arbejde.
                                    Du kan høre om tre af disse nedenstående
                                    emner. I programmet for idébazaren kan du
                                    læse mere om, hvad de enkelte emner
                                    indeholder. <br></br>
                                    <ol type="A">
                                        <li>
                                            Arbejdet med de studerendes
                                            personlige kompentence
                                        </li>
                                        <li>
                                            Bæredygtighed i de finansielle
                                            uddannelser
                                        </li>
                                        <li>Bæredygtighedsuge på tværs</li>
                                        <li>Fremtidspulje</li>
                                        <li>Industriel 3D-print</li>
                                        <li>Jobtrend</li>
                                        <li>
                                            Masterclass i innovationspædagogik
                                        </li>
                                        <li>
                                            Når forskellige uddannelsesformater
                                            er værdiskabende sammen
                                        </li>
                                        <li>
                                            Omsætning af viden til erhverv og
                                            studerende
                                        </li>
                                        <li>
                                            Partnerskaber om entreprenørskab
                                        </li>
                                        <li>
                                            Studenterengagement og frivillighed
                                        </li>
                                        <li>Virtual reality som dialogkanal</li>
                                    </ol>
                                </td>
                            </tr>
                        </table>
                    </div>
                ),
            },
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 14.30 - 15.15</td>
                            <th>
                                Unges trivsel I <br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>Vingsal 1</a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Unges trivsel I <br></br>{' '}
                                <a style={{ fontSize: 'small' }}>Vingsal 1</a>
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>
                                    Der er mange meninger om, hvorfor så mange
                                    unge ikke trives - og hvor stort problemet
                                    egentlig er. Ifølge Rasmus Meyer, er de
                                    unges ubehag reelt. Problemet skyldes dog
                                    ikke kun strukturelle forhold og et ydre
                                    pres på de unge, men i højere grad i en
                                    kulturel frisættelse.
                                </td>
                            </tr>
                            <tr>
                                <th>Speakers:</th>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                        alt=""
                                        style={{ width: '5%' }}
                                    ></img>{' '}
                                    Rasmus Meyer
                                </td>
                            </tr>
                        </table>
                    </div>
                ),
            },
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 15.15 - 15.45</td>
                            <th>
                                Unges trivsel II <br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>Vingsal 1</a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Unges trivsel II <br></br>{' '}
                                <a style={{ fontSize: 'small' }}>Vingsal 1</a>
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>
                                    Hvad siger de studerende selv om unges
                                    vilkår i dag. Hvad er et inkluderende
                                    læringsmiljø for dem? Hvilken rolle spiller
                                    erhvervsakademierne og underviserne for
                                    deres trivsel, og hvad gør de selv?
                                </td>
                            </tr>
                            <tr>
                                <th>Speakers:</th>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                        alt=""
                                        style={{ width: '5%' }}
                                    ></img>{' '}
                                    Helle Guldberg <br></br>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                        alt=""
                                        style={{ width: '5%' }}
                                    ></img>{' '}
                                    Johan Jeppersen <br></br>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                        alt=""
                                        style={{ width: '5%' }}
                                    ></img>{' '}
                                    Mads Hedemark
                                </td>
                            </tr>
                        </table>
                    </div>
                ),
            },
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 15.45 - 16.15</td>
                            <th>
                                Pause <br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>Vingfoyer</a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Pause <br></br>{' '}
                                <a style={{ fontSize: 'small' }}>Vingfoyer</a>
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>
                                    Vi strækker benene og tanker op på kaffe og
                                    kage.
                                </td>
                            </tr>
                        </table>
                    </div>
                ),
            },
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 16.15 - 17.00</td>
                            <th>
                                Blandede bolsjer<br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>Vingsal 1</a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Blandede bolsjer<br></br>{' '}
                                <a style={{ fontSize: 'small' }}>Vingsal 1</a>
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>
                                    Vi slutter dagen med tre skarpe oplæg. Du
                                    kommer til at høre om:<br></br>
                                    <li>Det kønsopdelte studievalg</li>
                                    <li>Rollen som underviser i stormvejr</li>
                                </td>
                            </tr>
                            <tr>
                                <th>Speakers:</th>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                        alt=""
                                        style={{ width: '5%' }}
                                    ></img>{' '}
                                    Helle Bro-Nielsen <br></br>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                        alt=""
                                        style={{ width: '5%' }}
                                    ></img>{' '}
                                    Camilla Rosengaard
                                </td>
                            </tr>
                        </table>
                    </div>
                ),
            },
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 17.15 - 18.30</td>
                            <th>
                                Pause før middagen<br></br>
                                <img src={LocationMarker} alt=""></img>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Pause før middagen
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>
                                    Tid til at tjekke mails, ringe hjem, slappe
                                    af eller løbe en tur og klæde om til
                                    middagen.
                                </td>
                            </tr>
                        </table>
                    </div>
                ),
            },
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 18.30 - 23.00</td>
                            <th>
                                Middag - Bord 5<br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>
                                    Restauranten
                                </a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Middag - Bord 5<br></br>{' '}
                                <a style={{ fontSize: 'small' }}>
                                    Restauranten
                                </a>
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>
                                    Vi starter med en drink i foyeren kl. 18.30,
                                    og middagen serveres kl. 19.00 i
                                    restauranten. Under middagen vil der være
                                    underholdning. Efter middagen er der
                                    mulighed for en øl, et glas vin eller en
                                    drink i baren for egen regning.<br></br>
                                    <br></br>
                                    Ved dette bord sidder:<br></br>
                                    <table>
                                        <tr>
                                            <td>Frank A. Mathiasen</td>
                                            <td>Cphbusiness</td>
                                        </tr>
                                        <tr>
                                            <td>Karin Hansen</td>
                                            <td>DKEA</td>
                                        </tr>
                                        <tr>
                                            <td>Vibeke Højgaard</td>
                                            <td>Dania</td>
                                        </tr>
                                        <tr>
                                            <td>Henriette Brrun-Ingvardsen</td>
                                            <td>EAMV</td>
                                        </tr>
                                        <tr>
                                            <td>Anne Storm Rasmussen</td>
                                            <td>EAAA</td>
                                        </tr>
                                        <tr>
                                            <td>Jacob Krøyer Olsen</td>
                                            <td>KEA</td>
                                        </tr>
                                        <tr>
                                            <td>Henrik Andersen</td>
                                            <td>Zealand</td>
                                        </tr>
                                        <tr>
                                            <td>Mikkel Steenberg</td>
                                            <td>Zealand</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                ),
            },
        ],
    },
    {
        label: 'Torsdag d. 23. marts 2023',
        content: <div></div>,
        buttons: [
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 07.00 - 09.00</td>
                            <th>
                                Morgenmad <br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>
                                    Restauranten
                                </a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Morgenmad <br></br>{' '}
                                <a style={{ fontSize: 'small' }}>
                                    Restauranten
                                </a>
                            </div>
                        </div>
                    </div>
                ),
            },
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 09.00 - 10.45</td>
                            <th>
                                Sådan bruger vi videndeling til at ændre
                                organisationen<br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>Lokale 15</a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Sådan bruger vi videndeling til at ændre
                                organisationen<br></br>{' '}
                                <a style={{ fontSize: 'small' }}>Lokale 15</a>
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>
                                    Hvordan kan videnarbejde skabe forandring i
                                    en organisation? Hvordan kan et helt akademi
                                    få noget ud af, hvad den enkelte undervisers
                                    tager med hjem fra en konference? Og hvilken
                                    rolle kan en central udviklingsafdeling
                                    spille i processen? Erhvervsakademi Dania
                                    gennemførte i efteråret 2022 et projekt med
                                    at forandre og professionalisere
                                    videnarbejdet. Workshoppen giver indsigt i
                                    projektet og hjælper deltagerne med at
                                    identificere udfordringer og løsninger inden
                                    for videnarbejdet. <br></br>
                                    <br></br>
                                    Målet med workshoppen er at inspirere og
                                    konkretisere organisationsforandringer om
                                    videnarbejdet. Deltagerne går fra
                                    workshoppen med en plan for, hvordan de kan
                                    gå til en forandring i deres egen
                                    organisation.
                                </td>
                            </tr>
                            <tr>
                                <th>Speakers:</th>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                        alt=""
                                        style={{ width: '5%' }}
                                    ></img>{' '}
                                    Mikkel Lodahl <br></br>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                        alt=""
                                        style={{ width: '5%' }}
                                    ></img>{' '}
                                    Andreas Fjord Bonven
                                </td>
                            </tr>
                        </table>
                    </div>
                ),
            },
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 10.45 - 11.00</td>
                            <th>
                                Pause<br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>Vingfoyer</a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Pause<br></br>{' '}
                                <a style={{ fontSize: 'small' }}>Vingfoyer</a>
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>
                                    Pause med tid til at snuppe en ekstra kop
                                    kaffe og finde tilbage til salen.
                                </td>
                            </tr>
                        </table>
                    </div>
                ),
            },
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 11.00 - 12.00</td>
                            <th>
                                Lederen som beskytter<br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>Vingsal 1</a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Lederen som beskytter<br></br>{' '}
                                <a style={{ fontSize: 'small' }}>Vingsal 1</a>
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>
                                    Storm Stensgaard giver os sit bud på
                                    lederens rolle og karakter i forhold til
                                    arbejdskulturen i en omskiftelig verden.
                                    Tidens forandringer og krav udfordrer de
                                    fleste arbejdspladser på deres robusthed.
                                    Her spiller ledelseskulturen en vigtig
                                    rolle, nærmere bestemt lederens evne til at
                                    beskytte medarbejderens evne til fokuseret
                                    nærvær og opmærksomhed på kerneydelsen.{' '}
                                    <br></br>
                                    <br></br>
                                    Hvad skal arbejdsstyrken da beskyttes mod?
                                    Den voksende mængde både inde- og udefra
                                    kommenede forstyrrelser og overbalastninger,
                                    som svækker blandt andet engagement og
                                    mental sundhed. <br></br>
                                    <br></br>
                                    Lederen skal beskytte medarbejdernes
                                    bæredygtige præsemtationsevne til at udføre
                                    arbejdsopgaverne med koncentration,
                                    effetivitet og over lang tid. Det indebærer
                                    en helhedstænkning, og at lederen også
                                    beskytter sig selv.
                                </td>
                            </tr>
                            <tr>
                                <th>Speakers:</th>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                        alt=""
                                        style={{ width: '5%' }}
                                    ></img>{' '}
                                    Storm Steensgaard
                                </td>
                            </tr>
                        </table>
                    </div>
                ),
            },
            {
                label: (
                    <table>
                        <tr>
                            <td>Kl. 12.15 - 13.00</td>
                            <th>
                                Frokost<br></br>
                                <img src={LocationMarker} alt=""></img>
                                <a style={{ fontSize: 'small' }}>
                                    Restauranten
                                </a>
                            </th>
                        </tr>
                    </table>
                ),
                content: (
                    <div>
                        <div className="sideContainer">
                            <img
                                src={PlaceHolderPic}
                                alt="Snow"
                                style={{ width: '100%' }}
                            ></img>
                            <div className="bottom-left">
                                Frokost<br></br>{' '}
                                <a style={{ fontSize: 'small' }}>
                                    Restauranten
                                </a>
                            </div>
                        </div>
                        <table className="event">
                            <tr>
                                <td>
                                    Du har valgt frokost på Vingsted. <br></br>
                                    <br></br>
                                    God rejse hjem. Vi håber, vi ses igen til
                                    sektorkonference den 19. - 20. marts 2024
                                </td>
                            </tr>
                        </table>
                    </div>
                ),
            },
        ],
    },
];

export default function AdminProgram() {
    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };
    return (
        <div>
            <nav className="w3-bar w3-red">
                <span
                    style={{ font: 30, cursor: 'pointer' }}
                    onClick={handleViewSidebar}
                >
                    &#9776;
                    <AdminSideBar
                        isOpen={sidebarOpen}
                        toggleSidebar={handleViewSidebar}
                    />
                </span>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                    alt="avatar"
                    style={{ width: 40 }}
                ></img>
                viho@eadania.dk
                <img
                    src="https://dkea.dk/files/styles/open_graph/public/media/image/EA%20Dania_1.jpg"
                    alt="logo"
                    style={{ width: 75, float: 'right' }}
                ></img>
            </nav>

            <div className="scrollable-container">
                <Tab tabs={tabs} />
            </div>
        </div>
    );
}

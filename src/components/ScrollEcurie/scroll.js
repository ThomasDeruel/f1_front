import React, { useState } from "react";




import "./scroll.css";


let g;
fetch('http://142.93.104.14/api/summary_seasons?year=2018')
    .then((result) => {

        return result.json();
    }).then((jsonResult) => {
        var tab = jsonResult['hydra:member'];

        let a = new Array;
        for (let i = 0; i < tab.length; i++) {
            let tt = tab[i].constructor.name;
            let p = tab[i].driver;
            let h = Object.assign(p, { constructor: tt });

        }


        g = a;
        // console.log(galery, "hhhhhh");
        console.log(g);
    })
const Scroll = (props) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    let a = 2014;
    fetch('http://142.93.104.14/api/summary_season_constructors?year=2012&order%5Bscore%5D=desc')
        .then((result) => {

            return result.json();
        }).then((jsonResult) => {
            var tab = jsonResult['hydra:member'];

            for (let i = 0; i < tab.length; i++) {

                let childArray = tab[i].drivers;

                let p;
                for (let j = 0; j < childArray.length; j++) {
                    let cons = tab[i].constructor;

                    p = childArray[j];
                    let tt = cons.name;



                }

            }

        })

    console.log(props);

    const images = props.galery
    console.log(images, "zzzzzz");


    const galeryEcurieurl = [
        { name: "Mercedes", url: "https://images-na.ssl-images-amazon.com/images/I/61VaoHj7IbL._SL1500_.jpg" },
        { name: "Ferrari", url: "https://seeklogo.net/wp-content/uploads/2017/01/ferrari-logo.png" },
        { name: "Red Bull", url: "http://tous-logos.com/wp-content/uploads/2017/05/Red-Bull-logo.png" },
        { name: "McLaren", url: "https://www.carlogos.org/logo/McLaren-logo-2002-2560x1440.png" },
        { name: "Renault", url: "http://tous-logos.com/wp-content/uploads/2017/07/Symbole-Renault.jpg" },
        { name: "Force India", url: "http://www.orissapost.com/wp-content/uploads/2018/09/Force_India.png" },
        { name: "Sauber", url: "http://www.snaplap.net/wp-content/uploads/2015/03/Alfa-Romeo-Sauber-logo.jpg" },
        { name: "Williams", url: "https://i.pinimg.com/originals/ce/97/ed/ce97ed6be99003209de5a968f32985cc.jpg" },
        { name: "Toro Rosso", url: "https://i.wheelsage.org/pictures/toro_rosso/logotypes/autowp.ru_toro_rosso_logo_2.jpg" },
        { name: "Haas F1 Team", url: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Logo_Haas_F1.png" },
        { name: "Manor Marussia", url: "https://upload.wikimedia.org/wikipedia/fr/7/78/Marussia_logo_2012.png" },
        { name: "Lotus F1", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmFnLkF1I1BbkyW2PoN5vOCbddmmaYkyr6VW63j2v1_YNmo92" },
        { name: "Marussia", url: "http://3.bp.blogspot.com/-HB-xC4_rS7c/VL7CM8mf7tI/AAAAAAAAIZg/xtTAFhqRlJs/s1600/Logo%2BMarussia.png" },
        { name: "Caterham", url: "http://marque-voiture.com/wp-content/uploads/2017/12/Caterham-logo.png        " },
        { name: "HRT ", url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Logo_of_the_HRT.svg/1200px-Logo_of_the_HRT.svg.png" },
        { name: "Virgin ", url: "https://cdn-1.motorsport.com/static/img/mgl/900000/950000/951000/951100/951121/s8/f1-bahrain-gp-2010-virgin-racing-logo.jpg" },
        { name: "Toyota", url: "https://img-4.linternaute.com/X2P6AsG_KeG_EaIdrdoZLy0t8r8=/fit-in/620x/smart/07bef879c2754ebf8ed6f42fcb954628/ccmcms-linternaute/1257383.jpg " },
        { name: "BMW Sauber", url: "https://blogautomobile.fr/wp-content/uploads/2009/08/logo_bmw.jpg" },
        { name: "Brawn", url: "http://imagescdn.sportnetwork.net/images/169/114175_350_233" },

    ]

    const changeIndex = i => {
        let next = currentIndex + i;
        if (next < 0 || next >= images.length) {
            return;
        }

        setCurrentIndex(next);
    };
    console.log(images)

    var tableauOrig = [{ val1: 1, val2: 10 }, { val1: 2, val2: 10 }, { val1: 3, val2: 10 }];

    var tableauFormaté = tableauOrig.map(obj => {
        var rObj = {};
        rObj = obj;
        //console.log(rObj.val1);
        return rObj;
    });

    return (
        <div className="fixe">
            <div
                className="scroll">
                {images.map((url, i) => {

                    return (
                        <div className="scrolldiv">
                            <div>
                                <figure className="snip0012"
                                    onClick={() => {
                                        setCurrentIndex(i.image);
                                        props.setFirstPilot(url);
                                        console.log(i + 1, url);
                                    }}>

                                    {

                                        galeryEcurieurl.map((g, i) => {

                                            if (g.name === url.name) {

                                                return (
                                                    <img
                                                        className="im"

                                                        src={g.url}

                                                    />)
                                            }


                                        })
                                    }
                                    {/*   <h1 className="name aboutPilote">{url.name}</h1>*/}

                                    <div>
                                        <a href="#"><i className="ion-ios-star-outline left-icon"><p>{url.position}</p></i></a>
                                    </div>
                                </figure>
                            </div>

                        </div>
                    )
                })

                }
            </div>
        </div >

    )
}

export default Scroll;
import {React} from "react"
import Location from "@material-ui/icons/LocationOnOutlined"
import Lake from "./assets/travel/lakekivu1.jpg"
import Fourpoints from "./assets/travel/fourpoint.jpg"
import Mountfuji from "./assets/travel/mountfuji.jpg"
import Sydney from "./assets/travel/Sydney.jpg"
import radison from "./assets/travel/radison.jpg"
import jungfraujoch from "./assets/travel/jungfraujoch.jpg"

export default [
    {
        title:"Lake Kivu",
        location:"RWANDA",
        locationIcon:<Location/>,
        StartDate :"21 july,2023 -",
        EndDate : "25 july,2023",
        description : "Part of Africa's Great Rift Valley, Lake Kivu in the west of Rwanda is surrounded by magnificent mountains and has deep emerald green waters covering a surface area of 2,700 km2.It is Rwanda's largest lake and the sixth largest in Africa.",
        Image:Lake
    },
    {
        title:"Four Points Hotel",
        location:"RWANDA",
        locationIcon:<Location/>,
        StartDate :"21 july,2023 -",
        EndDate : "25 july,2023",
        description : "Four Points Hotel Located in Kigal,600 metres from Belgian PeaceKeepers Memorial,Four points by Sheraton Kigali features accommodation with an outdoor swimming ",
        Image: Fourpoints
    },
    {
        title:"Mount Fuji",
        location:"JAPAN",
        locationIcon:<Location/>,
        StartDate :"21 July,2023 -",
        EndDate : "25 July,2023",
        description : "Mount Fuji is the tallest mountain is Japan,standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan,for both Japanese and foreign tourists.",
        Image: Mountfuji
    },
    {
        title:"Sydney Opera House",
        location:"AUSTRALIA",
        locationIcon:<Location/>,
        StartDate :"21 May,2023 - ",
        EndDate : "25 May,2023",
        description : "The Opera House is a multipurpose performing arts facility whose largest venue,the 2,679-seat Concert Hall, is host to symphony concerts,choir performances,and popular music shows.Opera and dance performances,including ballet, take place in the Opera Theatre,which seats just over 1,500.",
        Image: Sydney
    },
    {
        title:"Radisson Blu Hotel",
        location:"RWANDA",
        locationIcon:<Location/>,
        StartDate :"21 June,2023 - ",
        EndDate : "25 June,2023",
        description : "Enjoy modern accommodation and excellent on-site meeting facilities at the Radisson Blu & Convection Centre in Kigali,just 5km from thr city center ",
        Image: radison
    },
    {
        title:"Jungfrau Glacier Tours ",
        location:"SWITZERLAND",
        locationIcon:<Location/>,
        StartDate :"21 April,2023 - ",
        EndDate : "25 April,2023",
        description : "The jungfraujoch is a glacier saddle,on the upper snows of the Aletsch Glacier, and part of the jungfrau-Aletsch area,situated on the boundary between the cantons of Bern and Valais,halfway between Interlaken and Fiesch. Here at an altitude of 3,454 metres above sea level",
        Image: jungfraujoch
    },
]
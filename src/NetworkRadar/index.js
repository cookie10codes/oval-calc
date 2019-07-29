import React, { useEffect, useRef, useState } from "react";
import {
    NetworkRadarContainer,
    RadarCloseFamily,
    RadarFamily,
    RadarFriends,
    RadarOther,
    RadarGroup
} from "./styles";

function NetworkRadar() {
    const arrNetwork = {
        closeFamily: [{ name: "test" }, { name: "test" }, { name: "test" }],
        family: [{ name: "test" }, { name: "test" }, { name: "test" }],
        friends: [{ name: "test" }, { name: "test" }],
        other: [
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" }
        ]
    };

    const radarGroup = useRef(null);

    useEffect(() => {
        calculatePositions();
    }, [arrNetwork.closeFamily.length]);

    const calculatePositions = () => {
        // const radarBounding = radarGroup.current.getBoundingClientRect();
        // const calculatePosition = (person, i) => {
        //   const angle = Math.random() * Math.PI * 2;
        //   const radius = i === 0 ? 50 : 80 * i;
        //   let x = Math.cos(angle) * radius;
        //   let y = Math.sin(angle) * radius;
        //   person.style.marginLeft = x + "px";
        //   person.style.marginTop = y + "px";
        // };
        // document.querySelectorAll(".radar-person").forEach((person, i) => {
        //   calculatePosition(person, i);
        // });
    };

    return (
        <NetworkRadarContainer>
            <RadarCloseFamily
                className="radar-circle"
                itemCount={arrNetwork["closeFamily"].length}
            >
                {arrNetwork["closeFamily"].map((_, i) => {
                    return (
                        <div className="radar-person" key={i}>
                            1.{i}
                        </div>
                    );
                })}
            </RadarCloseFamily>
            <RadarFamily
                className="radar-circle"
                itemCount={arrNetwork["family"].length}
            >
                {arrNetwork["family"].map((_, i) => {
                    return (
                        <div className="radar-person" key={i}>
                            2.{i}
                        </div>
                    );
                })}
            </RadarFamily>
            <RadarFriends
                className="radar-circle"
                itemCount={arrNetwork["friends"].length}
            >
                {arrNetwork["friends"].map((_, i) => {
                    return (
                        <div className="radar-person" key={i}>
                            3.{i}
                        </div>
                    );
                })}
            </RadarFriends>
            <RadarOther
                className="radar-circle"
                itemCount={arrNetwork["other"].length}
            >
                {arrNetwork["other"].map((_, i) => {
                    return (
                        <div className="radar-person" key={i}>
                            4.{i}
                        </div>
                    );
                })}
            </RadarOther>
        </NetworkRadarContainer>
    );
}

export default NetworkRadar;

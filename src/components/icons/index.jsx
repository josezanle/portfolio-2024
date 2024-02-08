import React from 'react'
import { Announce } from './announce'
import { Applause } from './applause'
import { ArrowLong } from './arrowLong'

export const Icon = ({ name = "applause", size = 20, fill = "silver" }) => {
    switch (name) {
        case "announce":
            return <Announce size={size} fill={fill} />

        case "applause":
            return <Applause size={size} fill={fill} />

        case "arrow-large":
            return <ArrowLong size={size} fill={fill} />
    }

}
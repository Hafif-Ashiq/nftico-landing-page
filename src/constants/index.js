import search from "../assets/search.svg"

import arrowRight from "../assets/arrowRight.svg"
import play from "../assets/play.svg"
import heart from "../assets/heart.svg"
import currencyIcon from "../assets/currencyIcon.svg"
import verifiedTick from "../assets/verifiedTick.svg"
import reload from "../assets/reload.svg"
import comment from "../assets/comment.svg"
import shape from "../assets/shape.svg"

import largeImg1 from "../assets/largeImg1.png"
import largeImg2 from "../assets/largeImg2.png"
import mediumImg1 from "../assets/mediumImg1.png"
import smallImg1 from "../assets/smallImg1.png"


import noteable1 from "../assets/noteable1.png"
import noteable2 from "../assets/noteable2.png"
import noteable3 from "../assets/noteable3.png"
import noteable4 from "../assets/noteable4.png"

import collection1 from "../assets/collection1.png"



import trending1 from "../assets/trending1.png"
import trending2 from "../assets/trending2.png"
import trending3 from "../assets/trending3.png"
import trending4 from "../assets/trending4.png"



import resources1 from "../assets/resources1.jpeg"
import resources2 from "../assets/resources2.jpeg"
import resources3 from "../assets/resources3.jpeg"

import rperson1 from "../assets/rperson1.png"
import rperson2 from "../assets/rperson2.png"
import rperson3 from "../assets/rperson3.png"

import diamond from "../assets/diamond.png"

import company1 from "../assets/company1.png"
import company2 from "../assets/company2.png"
import company3 from "../assets/company3.png"
import company4 from "../assets/company4.png"
import company5 from "../assets/company5.png"










const navLinks = [
    {
        id: "Explore",
        link: "Explore"
    },
    {
        id: "Stats",
        link: "Stats"
    },
    {
        id: "Drops",
        link: "Drops"
    },
    {
        id: "Activity",
        link: "Activity"
    },
]


const heroArray = [
    {
        heading: "Discover, collect, and sell extraordinary NFTs 1",
        desc: "Our marketplace is the world's first and largest NFT market for independent creators worldwide ",
        b1: "Explore",
        b2: "Create" ,
        smallImg : smallImg1,
        mediumImg: mediumImg1,
        largeImg: largeImg1,

    },
    {
        heading: "Discover, collect, and sell extraordinary NFTs 2",
        desc: "Our marketplace is the world's first and largest NFT market for independent creators worldwide ",
        b1: "Explore",
        b2: "Create" ,
        smallImg : smallImg1,
        mediumImg: mediumImg1,
        largeImg: largeImg2,

    },
    {
        heading: "Discover, collect, and sell extraordinary NFTs 3",
        desc: "Our marketplace is the world's first and largest NFT market for independent creators worldwide ",
        b1: "Explore",
        b2: "Create" ,
        smallImg : smallImg1,
        mediumImg: mediumImg1,
        largeImg: largeImg1,

    },
    {
        heading: "Discover, collect, and sell extraordinary NFTs 4",
        desc: "Our marketplace is the world's first and largest NFT market for independent creators worldwide ",
        b1: "Explore",
        b2: "Create" ,
        smallImg : smallImg1,
        mediumImg: mediumImg1,
        largeImg: largeImg2,

    },
    
    

]

const figures  = [
    {
        id: 1,
        number: "30,000+",
        desc: "World Arts"
    },
    {
        id: 2,
        number: "18,000+",
        desc: "Digital Artists"
    },
    {
        id: 3,
        number: "22,000+",
        desc: "Live Auctions"
    },
    {
        id: 4,
        number: "50,000+",
        desc: "Unique Products"
    },
]

const noteableDropsArray =[
    {
        id:1,
        img: noteable1,
        heading: "Science Jobs",
        likes: 24,
        price: "17.359",
        people: [],
    },
    {
        id:2,
        img: noteable2,
        heading: "Science Jobs",
        likes: 24,
        price: "17.359",
        people: [],
    },
    {
        id:3,
        img: noteable3,
        heading: "Science Jobs",
        likes: 24,
        price: "17.359",
        people: [],
    },
    {
        id:4,
        img: noteable4,
        heading: "Science Jobs",
        likes: 24,
        price: "17.359",
        people: [],
    },
    // {
    //     id:5,
    //     img: noteable4,
    //     heading: "Science Jobs",
    //     likes: 24,
    //     price: "17.359",
    //     people: [],
    // },
    
    
]

const collectionsArray = [
    {
        id: 1,
        heading: "Bored Ape Yacht Club",
        quantity: "2.9K ETH",
        price: "10,450.00",
        percent: "+10.00",
        img: collection1
    },
    {
        id: 2,
        heading: "Bored Ape Yacht Club",
        quantity: "2.9K ETH",
        price: "10,450.00",
        percent: "+10.00",
        img: collection1
    },
    {
        id: 3,
        heading: "Bored Ape Yacht Club",
        quantity: "2.9K ETH",
        price: "10,450.00",
        percent: "+10.00",
        img: collection1
    },
    {
        id: 4,
        heading: "Bored Ape Yacht Club",
        quantity: "2.9K ETH",
        price: "10,450.00",
        percent: "+10.00",
        img: collection1
    },
    {
        id: 5,
        heading: "Bored Ape Yacht Club",
        quantity: "2.9K ETH",
        price: "10,450.00",
        percent: "+10.00",
        img: collection1
    },
    {
        id: 6,
        heading: "Bored Ape Yacht Club",
        quantity: "2.9K ETH",
        price: "10,450.00",
        percent: "+10.00",
        img: collection1
    },
    {
        id: 7,
        heading: "Bored Ape Yacht Club",
        quantity: "2.9K ETH",
        price: "10,450.00",
        percent: "+10.00",
        img: collection1
    },
    {
        id: 8,
        heading: "Bored Ape Yacht Club",
        quantity: "2.9K ETH",
        price: "10,450.00",
        percent: "+10.00",
        img: collection1
    },
    {
        id: 9,
        heading: "Bored Ape Yacht Club",
        quantity: "2.9K ETH",
        price: "10,450.00",
        percent: "+10.00",
        img: collection1
    },
]

const trendingArray = [
    {
        id:1,
        img: trending1,
        likes:32,
        by: "Ya Chin-Ho",
        verified:true,
        name: "Venture Capitalist",
        startingPrice: "22 ETH",
        highestBid: "28.35 ETH",

    },
    {
        id:2,
        img: trending2,
        likes:32,
        by: "Ya Chin-Ho",
        verified:true,
        name: "Venture Capitalist",
        startingPrice: "22 ETH",
        highestBid: "28.35 ETH",

    },
    {
        id:3,
        img: trending3,
        likes:32,
        by: "Ya Chin-Ho",
        verified:false,
        name: "Venture Capitalist",
        startingPrice: "22 ETH",
        highestBid: "28.35 ETH",

    },
    {
        id:4,
        img: trending4,
        likes:32,
        by: "Ya Chin-Ho",
        verified:true,
        name: "Venture Capitalist",
        startingPrice: "22 ETH",
        highestBid: "28.35 ETH",

    },
]


const resourcesArray = [
    
    {
        img: resources1,
        heading: "The Seven Secrets I should have received NFTs. ",
        by: "Election Season",
        date: "June 2, 2022",
        byImg: rperson1,
        numComments: 0,
        tags: ["NFT Token"],

    },
    {
        img: resources2,
        heading: "I think I minted duplicate NFTs",
        by: "Courtney Henry",
        date: "May 27, 2022",
        byImg: rperson2,
        numComments: 4,
        tags: ["Game","NFT"],

    },
    {
        img: resources3,
        heading: "The  Marketplace isn’t working",
        by: "Election Season",
        date: "June 2, 2022",
        byImg: rperson3,
        numComments: 10,
        tags: ["NFT Token","NFT"],

    },
]



const marketLinks = [
    {
        name: "Explore",
        link: "explore"
    },
    {
        name: "Help Center",
        link: "help-center"
    },
    {
        name: "Become a Partner",
        link: "partner"
    },
    {
        name: "About Us",
        link: "partner"
    },
    {
        name: "Platform Status",
        link: "partner"
    },
]
const communityLinks = [
    {
        name: "Profile",
        link: "explore"
    },
    {
        name: "Favorites",
        link: "help-center"
    },
    {
        name: "Watchlist",
        link: "partner"
    },
    {
        name: "My Collections",
        link: "partner"
    },
    {
        name: "Rankings",
        link: "partner"
    },
    {
        name: "Activity",
        link: "partner"
    },
]
const categoriesLinks = [
    {
        name: "Arts",
        link: "explore"
    },
    {
        name: "Collectibles",
        link: "help-center"
    },
    {
        name: "Games",
        link: "partner"
    },
    {
        name: "Sports",
        link: ""
    },
    {
        name: "Trading Cards",
        link: "partner"
    },
    {
        name: "Photography",
        link: "partner"
    },
]


const company_array = [company1,company2,company3,company4,company5]

export{
    search,
    navLinks,
    arrowRight,
    play,
    heroArray,
    figures,
    heart,
    currencyIcon,
    noteableDropsArray,
    collectionsArray,
    verifiedTick,
    reload,
    trendingArray,
    resourcesArray,
    comment,
    shape,
    diamond,
    company_array,
    marketLinks,
    communityLinks,
    categoriesLinks
}
const DRESSES = [
    {
        id: 1,
        name: "Umbaco",
        price: 3000,
        image: require("../assets/Umbaco.png"),
        description:
          "Xhosa dress ",
    },
    {
        id: 2,
        name: "Overlay",
        price: 1000,
        image: require("../assets/overlay.jpg"),
        description:
            " beautiful tailored dress",
    },
     {
    id: 3,
    name: "Purple",
    price: 950,
    image: require("../assets/Purple.png"),
    description: "purple tailored dress "
    },
    {
        id: 4,
        name: "Yellow Dress",
        price: 979,
        image: require("../assets/YellowDress.jpg"),
        description: ""
        },
        {
            id: 5,
            name: "dress",
            price: 979,
            image: require("../assets/dress.jpg"),
            description: ""
            },
            {
                id: 6,
                name: "amazing ",
                price: 1050,
                image: require("../assets/amazing.png"),
                description: ""
                },
                {
                    id: 7,
                    name: "cheetah ",
                    price: 550,
                    image: require("../assets/cheetah.jpg"),
                    description: ""
                    },

                    {
                        id: 8,
                        name: "sotho",
                        price: 950,
                        image: require("../assets/sotho.jpg"),
                        description: ""
                        },
                        {
                            id: 9,
                            name: "trad4",
                            price: 950,
                            image: require("../assets/trad4.jpg"),
                            description: ""
                            },
                            {
                                id: 10,
                                name: "black and gold",
                                price: 1500,
                                image: require("../assets/blackandgold.jpg"),
                                description: ""
                                },
                                {
                                    id: 11,
                                    name: "black and maroon",
                                    price: 950,
                                    image: require("../assets/blackandmaroon.jpg"),
                                    description: ""
                                    },
                                    {
                                        id: 12,
                                        name: "black and white",
                                        price: 750,
                                        image: require("../assets/blackandwhite.jpg"),
                                        description: ""
                                        },
                                        {
                                            id: 13,
                                            name: "block",
                                            price: 950,
                                            image: require("../assets/block.jpg"),
                                            description: ""
                                            },
                                            {
                                                id: 14,
                                                name: "blue and brown",
                                                price: 950,
                                                image: require("../assets/blueandbrown.jpg"),
                                                description: ""
                                                },
                                                {
                                                    id: 15,
                                                    name: "blue and gold",
                                                    price: 950,
                                                    image: require("../assets/blueandgold.jpg"),
                                                    description: ""
                                                    },
                                                    {
                                                        id: 16,
                                                        name: "green and blue",
                                                        price: 1050,
                                                        image: require("../assets/greenandblue.jpg"),
                                                        description: ""
                                                        },
                                                        {
                                                            id: 17,
                                                            name: "pink",
                                                            price: 1050,
                                                            image: require("../assets/pink.jpg"),
                                                            description: ""
                                                            },
                                                            {
                                                                id: 18,
                                                                name: "plain",
                                                                price: 1500,
                                                                image: require("../assets/plain.jpg"),
                                                                description: ""
                                                                },
                                                                {
                                                                    id: 19,
                                                                    name: "red and white",
                                                                    price: 850,
                                                                    image: require("../assets/redandwhite.jpg"),
                                                                    description: ""
                                                                    },
]

export function getDresses(){
    return DRESSES;
}

export function getDress(id){
    return DRESSES.find((dress) => dress.id == id);
}
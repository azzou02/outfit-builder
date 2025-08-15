export const clothes = [
    { id: 1, name: "purple v-neck tee", type: "top", src: "/clothes/purple-top.png", favorite: false },
    { id: 2, name: "gingham cami", type: "top", src: "/clothes/gingham-tank.png", favorite: false },
    { id: 3, name: "grey longsleeve", type: "top", src: "/clothes/grey-longsleeve.png", favorite: false },
    { id: 4, name: "blue striped longsleeve", type: "top", src: "/clothes/blue-striped-longsleeve.png", favorite: false },
    { id: 5, name: "creamy blouse cami", type: "top", src: "/clothes/white-blouse.png", favorite: false },
    { id: 6, name: "navy off shoulder tee", type: "top", src: "/clothes/off-shoulder-top.png", favorite: false },
    { id: 7, name: "grey cardigan", type: "outerwear", src: "/clothes/grey-cardigan.png", favorite: false },
    { id: 8, name: "beige skirt", type: "bottom", src: "/clothes/beige-skirt.png", favorite: false },
    { id: 9, name: "medium denim short", type: "bottom", src: "clothes/medium-denim-short.png", favorite: false },
    { id: 10, name: "blue linen short", type: "bottom", src: "/clothes/blue-linen-shorts.png", favorite: false },  
];

export const savedFits = [
    {
        id: 1,
        name: 'fit #1',
        notes: 'casual summer look',
        top: clothes[0], // purple v neck
        bottom: clothes[8], // denim shorts
        favorite: true,
    }
];
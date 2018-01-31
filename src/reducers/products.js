var initialState = [
    {
        id: 1,
        name: 'NodeJS',
        price: 500,
        status: true
    },
    {
        id: 2,
        name: 'ReactJS',
        price: 450,
        status: true
    },
    {
        id: 3,
        name: 'Angular',
        price: 550,
        status: false
    },
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
};

export default products; 
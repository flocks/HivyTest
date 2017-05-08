const productsList = [
    {
        id: '1',
        name: 'Plane Ticket',
        fields: [
            {
                'name': 'Departure date',
                'type': 'date'
            },
            {
                'name': 'Departure airport',
                'type': 'text'
            },
            {
                'name': 'Return date',
                'type': 'date'
            },
            {
                'name': 'Return airport',
                'type': 'text'
            },
        ]
    },
    {
        id: '2',
        name: 'Hivy T-Shirt',
        fields: [
            {
                name: 'Size',
                type: 'radio',
                options: ['S', 'M', 'L', 'XL']
            },
            {
                name: 'Sexe',
                type: 'radio',
                options: ['M', 'F' ]
            }
        ]
    },
    {
        id: '3',
        name: 'Madeleine',
        fields: [
            {
                name: 'Coating',
                type: 'radio',
                options: ['None', 'Chocolate']
            }
        ]
    }

];

export default productsList;

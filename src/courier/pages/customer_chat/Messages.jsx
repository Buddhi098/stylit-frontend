const messages = [
    {
        id: 1,
        name: 'Winlarm Wall',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "The order is being processed and will be shipped soon.",
        time: '2024-07-26T12:05:00',
        unread: true,
        unreadCount: 1,
        messages: [
            { text: "I want to know where's My order is...", sender: 'customer', time: '2024-07-26T11:50:00' },
            { text: "Can you provide more details?", sender: 'shop', time: '2024-07-26T11:55:00' },
            { text: "Sure, my order number is 123456.", sender: 'customer', time: '2024-07-26T12:00:00' },
            { text: "The order is being processed and will be shipped soon.", sender: 'shop', time: '2024-07-26T12:05:00' },
            { text: "Thanks for the update!", sender: 'customer', time: '2024-07-28T11:10:00' },
        ]
    },
    {
        id: 2,
        name: 'Ross Taylor',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "Your order is being processed and will be shipped soon.",
        time: '2024-07-26T08:40:00',
        unread: false,
        unreadCount: 0,
        messages: [
            { text: 'Hi', sender: 'customer', time: '2024-07-26T08:20:00' },
            { text: 'I placed an order', sender: 'customer', time: '2024-07-26T08:22:00' },
            { text: 'My order number is 13056189', sender: 'customer', time: '2024-07-26T08:25:00' },
            { text: 'okay madam. we received your parcel', sender: 'shop', time: '2024-07-26T08:30:00' },
            { text: "I want to know where's My order is...", sender: 'customer', time: '2024-07-27T7:35:00' },
            { text: 'Your order is being processed and will be shipped soon.', sender: 'shop', time: '2024-07-27T08:40:00' },
            { text: "Thanks for the update!", sender: 'customer', time: '2024-07-27T08:45:00' } // No unread messages
        ]
    },
    {
        id: 3,
        name: 'Brendon Mccullum',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "Your order is expected to arrive soon.",
        time: '2024-07-26T14:20:00',
        unread: true,
        unreadCount: 2,
        messages: [
            { text: "I want to know where's My order is...", sender: 'customer', time: '2024-07-25T14:00:00' },
            { text: "Can you provide an update on the status?", sender: 'customer', time: '2024-07-25T14:05:00' },
            { text: "We are checking on that and will get back to you shortly.", sender: 'shop', time: '2024-07-25T14:10:00' },
            { text: "Thanks for the update!", sender: 'customer', time: '2024-07-25T14:15:00' },
            { text: "Your order is expected to arrive soon.", sender: 'shop', time: '2024-07-26T14:20:00' },
            { text: "Can you provide an exact delivery date?", sender: 'customer', time: '2024-07-26T14:25:00' }, // Unread messages
            { text: "We will update you once we have more information.", sender: 'shop', time: '2024-07-26T14:30:00' } // Last reply
        ]
    },
    {
        id: 4,
        name: 'Rossie Anne',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "Your order is scheduled for delivery tomorrow.",
        time: '2024-07-26T10:15:00',
        unread: false,
        unreadCount: 0,
        messages: [
            { text: "I want to know where's My order is...", sender: 'customer', time: '2024-07-25T10:00:00' },
            { text: "Your order is scheduled for delivery tomorrow.", sender: 'shop', time: '2024-07-26T10:15:00' },
            { text: "Great, thank you!", sender: 'customer', time: '2024-07-26T10:20:00' } // No unread messages
        ]
    },
    {
        id: 5,
        name: 'Peter Paul',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "The tracking number is 7891011.",
        time: '2024-07-26T09:10:00',
        unread: false,
        unreadCount: 0,
        messages: [
            { text: "I want to know where's My order is...", sender: 'customer', time: '2024-07-24T09:00:00' },
            { text: "Please provide the tracking number.", sender: 'customer', time: '2024-07-24T09:05:00' },
            { text: "The tracking number is 7891011.", sender: 'shop', time: '2024-07-24T09:10:00' },
            { text: "Thank you!", sender: 'customer', time: '2024-07-24T09:15:00' } // No unread messages
        ]
    },
    {
        id: 7,
        name: 'Ben Cook',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "Your order has been dispatched and will arrive soon.",
        time: '2024-07-26T11:45:00',
        unread: true,
        unreadCount: 2,
        messages: [
            { text: "I want to know where's My order is...", sender: 'customer', time: '2024-07-23T11:30:00' },
            { text: "We are looking into it and will update you shortly.", sender: 'shop', time: '2024-07-23T11:35:00' },
            { text: "Thank you for your patience.", sender: 'customer', time: '2024-07-23T11:40:00' },
            { text: "Your order has been dispatched and will arrive soon.", sender: 'shop', time: '2024-07-24T11:45:00' },
            { text: "Great, I’ll wait for the delivery.", sender: 'customer', time: '2024-07-24T11:50:00' },
            { text: "Can I get a receipt for the delivery?", sender: 'customer', time: '2024-07-24T11:55:00' } // Unread messages
        ]
    },
    {
        id: 8,
        name: 'Michael Clarke',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "We have dispatched your order and it should arrive in 2-3 days.",
        time: '2024-07-26T15:10:00',
        unread: true,
        unreadCount: 3,
        messages: [
            { text: "I want to know where's My order is...", sender: 'customer', time: '2024-07-23T15:00:00' },
            { text: "The order is being processed and will be shipped soon.", sender: 'shop', time: '2024-07-23T15:05:00' },
            { text: "Can you provide a more specific delivery date?", sender: 'customer', time: '2024-07-23T15:10:00' },
            { text: "We expect it to arrive in 2-3 days.", sender: 'shop', time: '2024-07-23T15:15:00' },
            { text: "Thanks for the update!", sender: 'customer', time: '2024-07-23T15:20:00' },
            { text: "Will I receive a tracking number?", sender: 'customer', time: '2024-07-24T15:25:00' }, // Unread messages
            { text: "Yes, we will provide a tracking number once it's available.", sender: 'shop', time: '2024-07-24T15:30:00' } // Last reply
        ]
    },
    {
        id: 9,
        name: 'Olivia Brown',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "A receipt will be included with your order confirmation email.",
        time: '2024-07-26T11:35:00',
        unread: false,
        unreadCount: 0,
        messages: [
            { text: "Do you offer gift wrapping?", sender: 'customer', time: '2024-07-22T11:00:00' },
            { text: "Yes, we do offer gift wrapping for an additional fee.", sender: 'shop', time: '2024-07-22T11:05:00' },
            { text: "How much does it cost?", sender: 'customer', time: '2024-07-22T11:10:00' },
            { text: "Gift wrapping costs $5 per item.", sender: 'shop', time: '2024-07-22T11:15:00' },
            { text: "I’d like to add gift wrapping to my order.", sender: 'customer', time: '2024-07-23T11:20:00' },
            { text: "We’ve added gift wrapping to your order. Thank you for your purchase.", sender: 'shop', time: '2024-07-23T11:25:00' },
            { text: "Can I get a receipt for the gift wrapping fee?", sender: 'customer', time: '2024-07-23T11:30:00' },
            { text: "A receipt will be included with your order confirmation email.", sender: 'shop', time: '2024-07-23T11:35:00' } // No unread messages
        ]
    },
    {
        id: 10,
        name: 'Liam Harris',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "Please provide your new delivery address.",
        time: '2024-07-26T15:10:00',
        unread: false,
        unreadCount: 0,
        messages: [
            { text: "Can I change my delivery address?", sender: 'customer', time: '2024-07-22T15:00:00' },
            { text: "Yes, you can update your delivery address by contacting customer service.", sender: 'shop', time: '2024-07-22T15:05:00' },
            { text: "I would like to change my address to 123 New St, City.", sender: 'customer', time: '2024-07-22T15:10:00' },
            { text: "Please provide your new delivery address.", sender: 'shop', time: '2024-07-22T15:15:00' } // No unread messages
        ]
    },
    {
        id: 11,
        name: 'Emily Smith',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "Your refund has been processed.",
        time: '2024-07-26T15:20:00',
        unread: true,
        unreadCount: 1,
        messages: [
            { text: "I want a refund for my recent purchase.", sender: 'customer', time: '2024-07-22T14:50:00' },
            { text: "Your refund has been processed.", sender: 'shop', time: '2024-07-22T15:00:00' },
            { text: "When will the money be credited to my account?", sender: 'customer', time: '2024-07-23T15:10:00' },
            { text: "The money should be credited within 3-5 business days.", sender: 'shop', time: '2024-07-23T15:20:00' } // Unread messages
        ]
    }
];
export default messages;


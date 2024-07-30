const messages = [
    {
        id: 1,
        name: 'FedEx',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "Package has been picked up and is on the way.",
        time: '2024-07-26T12:05:00',
        unread: true,
        unreadCount: 2,
        messages: [
            { text: "Please provide the pickup location.", sender: 'courier', time: '2024-07-26T11:50:00' },
            { text: "Pickup at 123 Main St.", sender: 'shop', time: '2024-07-26T11:55:00' },
            { text: "I have arrived at the location.", sender: 'courier', time: '2024-07-26T12:00:00' },
            { text: "Package has been picked up and is on the way.", sender: 'courier', time: '2024-07-26T12:05:00' },
            { text: "Great, thank you!", sender: 'shop', time: '2024-07-26T12:10:00' },
            { text: "You’re welcome. Expected delivery by 3 PM.", sender: 'courier', time: '2024-07-26T12:15:00' }
        ]
    },
    {
        id: 2,
        name: 'Domex',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "Package has been delivered to the customer.",
        time: '2024-07-25T08:40:00',
        unread: false,
        unreadCount: 0,
        messages: [
            { text: 'Hi, I am ready to pick up the package.', sender: 'courier', time: '2024-07-25T08:20:00' },
            { text: 'Package is ready at 456 Elm St.', sender: 'shop', time: '2024-07-25T08:22:00' },
            { text: 'I have picked up the package.', sender: 'courier', time: '2024-07-25T08:25:00' },
            { text: 'Great, please confirm delivery once completed.', sender: 'shop', time: '2024-07-25T08:30:00' },
            { text: "The package has been delivered to the customer.", sender: 'courier', time: '2024-07-25T08:35:00' },
            { text: 'Thank you!', sender: 'shop', time: '2024-07-25T08:40:00' }
        ]
    },
    {
        id: 3,
        name: 'Pronto Lanka',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "Delivering the package now.",
        time: '2024-07-26T14:20:00',
        unread: true,
        unreadCount: 2,
        messages: [
            { text: "I have accepted the delivery request.", sender: 'courier', time: '2024-07-26T14:00:00' },
            { text: "Thank you. Package is at 789 Pine St.", sender: 'shop', time: '2024-07-26T14:05:00' },
            { text: "I have picked up the package.", sender: 'courier', time: '2024-07-26T14:10:00' },
            { text: "Thanks for the update!", sender: 'shop', time: '2024-07-26T14:15:00' },
            { text: "Delivering the package now.", sender: 'courier', time: '2024-07-26T14:20:00' },
            { text: "Please confirm once delivered.", sender: 'shop', time: '2024-07-26T14:25:00' },
            { text: "Will do. Thank you!", sender: 'courier', time: '2024-07-26T14:30:00' }
        ]
    },
    {
        id: 4,
        name: 'Prompt Xpress',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "Package is ready for pickup.",
        time: '2024-07-26T10:15:00',
        unread: false,
        unreadCount: 0,
        messages: [
            { text: "I am on my way to pick up the package.", sender: 'courier', time: '2024-07-26T10:00:00' },
            { text: "Great, package is ready for pickup.", sender: 'shop', time: '2024-07-26T10:15:00' },
            { text: "On my way!", sender: 'courier', time: '2024-07-26T10:20:00' }
        ]
    },
    {
        id: 5,
        name: 'DHL',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "Package picked up and heading to the customer.",
        time: '2024-07-26T09:10:00',
        unread: false,
        unreadCount: 0,
        messages: [
            { text: "I have reached the pickup location.", sender: 'courier', time: '2024-07-26T09:00:00' },
            { text: "Package is ready. Please collect it.", sender: 'shop', time: '2024-07-26T09:05:00' },
            { text: "Package picked up and heading to the customer.", sender: 'courier', time: '2024-07-26T09:10:00' },
            { text: "Thank you!", sender: 'shop', time: '2024-07-26T09:15:00' }
        ]
    },
    {
        id: 6,
        name: 'RPX',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "Package is ready for delivery.",
        time: '2024-07-26T16:15:00',
        unread: true,
        unreadCount: 2,
        messages: [
            { text: "I am here to pick up the package.", sender: 'courier', time: '2024-07-26T16:00:00' },
            { text: "Package is ready at 321 Oak St.", sender: 'shop', time: '2024-07-26T16:05:00' },
            { text: "I have picked up the package.", sender: 'courier', time: '2024-07-26T16:10:00' },
            { text: "Great, thank you.", sender: 'shop', time: '2024-07-26T16:15:00' },
            { text: "Package is ready for delivery.", sender: 'courier', time: '2024-07-26T16:20:00' },
            { text: "Please confirm once delivered.", sender: 'shop', time: '2024-07-26T16:25:00' }
        ]
    },
    {
        id: 7,
        name: 'UPS',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "Package is on its way to the customer.",
        time: '2024-07-26T11:45:00',
        unread: true,
        unreadCount: 2,
        messages: [
            { text: "I am on my way to pick up the package.", sender: 'courier', time: '2024-07-26T11:30:00' },
            { text: "Package is ready at 654 Birch St.", sender: 'shop', time: '2024-07-26T11:35:00' },
            { text: "Thank you, I have picked it up.", sender: 'courier', time: '2024-07-26T11:40:00' },
            { text: "Package is on its way to the customer.", sender: 'courier', time: '2024-07-26T11:45:00' },
            { text: "Great, thank you.", sender: 'shop', time: '2024-07-26T11:50:00' },
            { text: "You’re welcome.", sender: 'courier', time: '2024-07-26T11:55:00' }
        ]
    },
    {
        id: 8,
        name: 'Dreamco Express',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "Package is on the way to the customer.",
        time: '2024-07-26T15:10:00',
        unread: true,
        unreadCount: 2,
        messages: [
            { text: "I have picked up the package.", sender: 'courier', time: '2024-07-26T15:00:00' },
            { text: 'Package is ready at 987 Maple St.', sender: 'shop', time: '2024-07-26T15:05:00' },
            { text: "Package is on the way to the customer.", sender: 'courier', time: '2024-07-26T15:10:00' },
            { text: "Thanks for the update!", sender: 'shop', time: '2024-07-26T15:15:00' },
            { text: "You’re welcome.", sender: 'courier', time: '2024-07-26T15:20:00' },
            { text: "Please confirm once delivered.", sender: 'shop', time: '2024-07-26T15:25:00' }
        ]
    },
    {
        id: 9,
        name: 'Antron Express',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "Package has been delivered to the customer.",
        time: '2024-07-26T11:35:00',
        unread: false,
        unreadCount: 0,
        messages: [
            { text: "I am here to pick up the package.", sender: 'courier', time: '2024-07-26T11:00:00' },
            { text: "Package is ready at 432 Cedar St.", sender: 'shop', time: '2024-07-26T11:05:00' },
            { text: "I have picked up the package.", sender: 'courier', time: '2024-07-26T11:10:00' },
            { text: "Great, thank you.", sender: 'shop', time: '2024-07-26T11:15:00' },
            { text: "Package has been delivered to the customer.", sender: 'courier', time: '2024-07-26T11:20:00' },
            { text: "Thank you!", sender: 'shop', time: '2024-07-26T11:25:00' },
            { text: "You’re welcome.", sender: 'courier', time: '2024-07-26T11:30:00' },
            { text: "Have a great day!", sender: 'shop', time: '2024-07-26T11:35:00' }
        ]
    }
];

export default messages;

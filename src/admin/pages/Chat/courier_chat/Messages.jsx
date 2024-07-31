import AirtelLogo from '../../../assets/images/Couriers/airtel-logo-vector.png';
import DHLLogo from '../../../assets/images/Couriers/images.jpeg';
import SriLankaPostLogo from '../../../assets/images/Couriers/images (1).jpeg';
import YamunaExpressLogo from '../../../assets/images/Couriers/authority_1586777963479.webp';
import GROCourierLogo from '../../../assets/images/Couriers/images.png';
import RedDotLogo from '../../../assets/images/Couriers/png-transparent-red-dot-design-award-of-the-federal-republic-of-germany-industrial-design-award-sphere-industrial-design-prize-thumbnail.png';
import DialogDeliveryLogo from '../../../assets/images/Couriers/png-clipart-brand-dialog-business-services-sri-lanka-data-sim-card-works-immediately-no-registration-required-500mb-1gb-3gb-and-7gb-upgrades-available-free-voip-calls-logo-dialog-broadband.png';
import LankaLogisticsLogo from '../../../assets/images/Couriers/images (2).jpeg';
import PickMeLogo from '../../../assets/images/Couriers/pick_me.png';
import SriLankaExpressLogo from '../../../assets/images/Couriers/stock-vector-illustration-graphic-design-of-express-logistic-transportation-concept-logo-design-template-2151557443.jpg';


const messages = [
    {
        "id": 8,
        "name": "PickMe",
        "avatar": PickMeLogo,
        "lastMessage": "Package is on its way to the customer.",
        "time": "2024-07-26T13:00:00",
        "unread": true,
        "unreadCount": 1,
        "messages": [
            { "text": "I am on my way to pick up the package.", "sender": "courier", "time": "2024-07-26T12:30:00" },
            { "text": "Package is ready at 123 Galle Road, Colombo.", "sender": "admin", "time": "2024-07-26T12:35:00" },
            { "text": "Thank you, I have picked it up.", "sender": "courier", "time": "2024-07-26T12:40:00" },
            { "text": "Package is on its way to the customer.", "sender": "courier", "time": "2024-07-26T12:45:00" },
            { "text": "Great, thank you.", "sender": "admin", "time": "2024-07-26T12:50:00" },
            { "text": "You’re welcome.", "sender": "courier", "time": "2024-07-26T12:55:00" }
        ]
    },
    {
        "id": 9,
        "name": "DHL Sri Lanka",
        "avatar": DHLLogo,
        "lastMessage": "Returning the package to the seller.",
        "time": "2024-07-26T14:00:00",
        "unread": true,
        "unreadCount": 2,
        "messages": [
            { "text": "I am on my way to pick up the package.", "sender": "courier", "time": "2024-07-26T13:00:00" },
            { "text": "Package is ready at 456 Kandy Road, Kandy.", "sender": "admin", "time": "2024-07-26T13:05:00" },
            { "text": "Thank you, I have picked it up.", "sender": "courier", "time": "2024-07-26T13:10:00" },
            { "text": "Customer not home. What should I do?", "sender": "courier", "time": "2024-07-26T13:50:00" },
            { "text": "Please return the package to the seller.", "sender": "admin", "time": "2024-07-26T13:55:00" },
            { "text": "Returning the package to the seller.", "sender": "courier", "time": "2024-07-26T14:00:00" }
        ]
    },
    {
        "id": 10,
        "name": "Sri Lanka Post",
        "avatar": SriLankaPostLogo,
        "lastMessage": "Delivered and confirmed by the recipient.",
        "time": "2024-07-26T15:15:00",
        "unread": false,
        "unreadCount": 0,
        "messages": [
            { "text": "I am on my way to pick up the package.", "sender": "courier", "time": "2024-07-26T14:00:00" },
            { "text": "Package is ready at 789 Nugegoda Road, Nugegoda.", "sender": "admin", "time": "2024-07-26T14:05:00" },
            { "text": "Thank you, I have picked it up.", "sender": "courier", "time": "2024-07-26T14:10:00" },
            { "text": "Package is on its way to the customer.", "sender": "courier", "time": "2024-07-26T14:20:00" },
            { "text": "Great, thank you.", "sender": "admin", "time": "2024-07-26T14:25:00" },
            { "text": "Delivered and confirmed by the recipient.", "sender": "courier", "time": "2024-07-26T15:15:00" },
            { "text": "Good job!", "sender": "admin", "time": "2024-07-26T15:20:00" }
        ]
    },
    {
        "id": 11,
        "name": "Yamuna Express",
        "avatar": YamunaExpressLogo,
        "lastMessage": "On my way to pick up the urgent package.",
        "time": "2024-07-26T16:30:00",
        "unread": true,
        "unreadCount": 1,
        "messages": [
            { "text": "Schedule change: prioritize Order #67890.", "sender": "admin", "time": "2024-07-26T16:00:00" },
            { "text": "On my way to pick up the urgent package.", "sender": "courier", "time": "2024-07-26T16:30:00" }
        ]
    },
    {
        "id": 12,
        "name": "GRO Courier",
        "avatar": GROCourierLogo,
        "lastMessage": "I have picked it up.",
        "time": "2024-07-26T17:40:00",
        "unread": false,
        "unreadCount": 0,
        "messages": [
            { "text": "I am on my way to pick up the package.", "sender": "courier", "time": "2024-07-26T17:00:00" },
            { "text": "Package is ready at 123 Mount Lavinia, Mount Lavinia.", "sender": "admin", "time": "2024-07-26T17:10:00" },
            { "text": "I have picked it up.", "sender": "courier", "time": "2024-07-26T17:40:00" }
        ]
    },
    {
        "id": 13,
        "name": "Red Dot",
        "avatar": RedDotLogo,
        "lastMessage": "Returning package to the warehouse.",
        "time": "2024-07-26T18:20:00",
        "unread": true,
        "unreadCount": 2,
        "messages": [
            { "text": "I am on my way to pick up the package.", "sender": "courier", "time": "2024-07-26T17:30:00" },
            { "text": "Package is ready at 321 Peradeniya Road, Peradeniya.", "sender": "admin", "time": "2024-07-26T17:35:00" },
            { "text": "Thank you, I have picked it up.", "sender": "courier", "time": "2024-07-26T17:40:00" },
            { "text": "Customer not available. What’s the next step?", "sender": "courier", "time": "2024-07-26T18:10:00" },
            { "text": "Return the package to the warehouse.", "sender": "admin", "time": "2024-07-26T18:15:00" },
            { "text": "Returning package to the warehouse.", "sender": "courier", "time": "2024-07-26T18:20:00" }
        ]
    },
    {
        "id": 14,
        "name": "Dialog Delivery",
        "avatar": DialogDeliveryLogo,
        "lastMessage": "Package delivered to the customer.",
        "time": "2024-07-26T19:00:00",
        "unread": false,
        "unreadCount": 0,
        "messages": [
            { "text": "I am on my way to pick up the package.", "sender": "courier", "time": "2024-07-26T18:00:00" },
            { "text": "Package is ready at 654 Wellawatte, Colombo.", "sender": "admin", "time": "2024-07-26T18:05:00" },
            { "text": "Thank you, I have picked it up.", "sender": "courier", "time": "2024-07-26T18:20:00" },
            { "text": "Package is on its way to the customer.", "sender": "courier", "time": "2024-07-26T18:45:00" },
            { "text": "Delivered and confirmed by the recipient.", "sender": "courier", "time": "2024-07-26T19:00:00" },
            { "text": "Good job!", "sender": "admin", "time": "2024-07-26T19:05:00" }
        ]
    },
    {
        "id": 15,
        "name": "Airtel Logistics",
        "avatar": AirtelLogo,
        "lastMessage": "Package picked up successfully.",
        "time": "2024-07-26T20:10:00",
        "unread": false,
        "unreadCount": 0,
        "messages": [
            { "text": "I am on my way to pick up the package.", "sender": "courier", "time": "2024-07-26T19:00:00" },
            { "text": "Package is ready at 789 Bambalapitiya, Colombo.", "sender": "admin", "time": "2024-07-26T19:10:00" },
            { "text": "Package picked up successfully.", "sender": "courier", "time": "2024-07-26T20:10:00" }
        ]
    },
    {
        "id": 16,
        "name": "Lanka Logistics",
        "avatar": LankaLogisticsLogo,
        "lastMessage": "On my way to deliver the package.",
        "time": "2024-07-26T21:00:00",
        "unread": true,
        "unreadCount": 1,
        "messages": [
            { "text": "I am on my way to pick up the package.", "sender": "courier", "time": "2024-07-26T20:00:00" },
            { "text": "Package is ready at 456 Ratmalana, Colombo.", "sender": "admin", "time": "2024-07-26T20:10:00" },
            { "text": "Thank you, I have picked it up.", "sender": "courier", "time": "2024-07-26T20:30:00" },
            { "text": "On my way to deliver the package.", "sender": "courier", "time": "2024-07-26T21:00:00" }
        ]
    },
    {
        "id": 17,
        "name": "Sri Lanka Express",
        "avatar": SriLankaExpressLogo,
        "lastMessage": "Package delivered and recipient notified.",
        "time": "2024-07-26T22:15:00",
        "unread": false,
        "unreadCount": 0,
        "messages": [
            { "text": "I am on my way to pick up the package.", "sender": "courier", "time": "2024-07-26T21:00:00" },
            { "text": "Package is ready at 321 Borella, Colombo.", "sender": "admin", "time": "2024-07-26T21:15:00" },
            { "text": "Thank you, I have picked it up.", "sender": "courier", "time": "2024-07-26T21:45:00" },
            { "text": "Package delivered and recipient notified.", "sender": "courier", "time": "2024-07-26T22:15:00" }
        ]
    },
    {
        "id": 18,
        "name": "Ceylon Couriers",
        "avatar": "https://www.ceyloncouriers.lk/assets/images/logo.png",
        "lastMessage": "Package returned to sender.",
        "time": "2024-07-26T23:00:00",
        "unread": true,
        "unreadCount": 2,
        "messages": [
            { "text": "I am on my way to pick up the package.", "sender": "courier", "time": "2024-07-26T22:00:00" },
            { "text": "Package is ready at 123 Fort, Colombo.", "sender": "admin", "time": "2024-07-26T22:05:00" },
            { "text": "Thank you, I have picked it up.", "sender": "courier", "time": "2024-07-26T22:30:00" },
            { "text": "Customer not available. What should I do?", "sender": "courier", "time": "2024-07-26T22:45:00" },
            { "text": "Return the package to the sender.", "sender": "admin", "time": "2024-07-26T22:50:00" },
            { "text": "Package returned to sender.", "sender": "courier", "time": "2024-07-26T23:00:00" }
        ]
    },
    {
        "id": 19,
        "name": "Kolonna Logistics",
        "avatar": "https://www.kolonnalogistics.com/assets/images/logo.png",
        "lastMessage": "On my way to deliver the package.",
        "time": "2024-07-27T09:30:00",
        "unread": false,
        "unreadCount": 0,
        "messages": [
            { "text": "I am on my way to pick up the package.", "sender": "courier", "time": "2024-07-27T08:00:00" },
            { "text": "Package is ready at 567 Kolonna, Galle.", "sender": "admin", "time": "2024-07-27T08:15:00" },
            { "text": "Thank you, I have picked it up.", "sender": "courier", "time": "2024-07-27T08:45:00" },
            { "text": "On my way to deliver the package.", "sender": "courier", "time": "2024-07-27T09:30:00" }
        ]
    }
];

export default messages;

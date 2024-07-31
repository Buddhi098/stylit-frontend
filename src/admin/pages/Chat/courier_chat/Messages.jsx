import givenchy from "../../../assets/images/stores/givenchy.png"
import ebony from "../../../assets/images/stores/ebony.png"
import bearappeal from "../../../assets/images/stores/bearappeal.png"
import nolimit from "../../../assets/images/stores/nolimit.png"
import carnage from "../../../assets/images/stores/carnage.png"
import hameedia from "../../../assets/images/stores/hameedia.png"
import coolplanet from "../../../assets/images/stores/coolplanet.png"
import tshirtrepublic from "../../../assets/images/stores/tshirtrepublic.jpeg"
import street82 from "../../../assets/images/stores/street82.png"


const messages = [
    {
        "id": 8,
        "name": "PickMe",
        "avatar": carnage,
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
        "avatar": bearappeal,
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
        "avatar": "https://www.srilankapost.gov.lk/wp-content/themes/srilanka_post/images/logo.png",
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
        "avatar": "https://www.yamunaexpress.lk/assets/images/logo.png",
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
        "avatar": "https://www.grocourier.lk/assets/images/logo.png",
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
        "avatar": "https://www.reddot.lk/assets/images/logo.png",
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
        "avatar": "https://www.dialog.lk/sites/default/files/2020-06/Dialog-Logo.png",
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
        "avatar": "https://www.airtel.lk/assets/images/logo.png",
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
        "avatar": "https://www.lankalogistics.lk/assets/images/logo.png",
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
        "avatar": "https://www.srilankaexpress.lk/assets/images/logo.png",
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
        "avatar": "https://www.kolonnalogistics.lk/assets/images/logo.png",
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

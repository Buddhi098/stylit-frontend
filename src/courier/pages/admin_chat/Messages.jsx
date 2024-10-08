const messages = [
    {
        id: 1,
        name: 'Admin',
        avatar: 'path_to_avatar.jpg',
        lastMessage: "I'll make sure the team is informed. Let's catch up tomorrow.",
        time: '2024-07-26T17:00:00',
        unread: true,
        unreadCount: 3,
        messages: [
            { text: "Good morning! We need to review the pending orders for today.", sender: 'admin', time: '2024-07-26T09:00:00' },
            { text: "Sure, I'll start with the first batch of orders.", sender: 'shop', time: '2024-07-26T09:10:00' },
            { text: "Make sure to prioritize the express deliveries.", sender: 'admin', time: '2024-07-26T09:20:00' },
            { text: "Understood. I'll mark those for expedited processing.", sender: 'shop', time: '2024-07-26T09:25:00' },
            { text: "Please review the latest orders and update their status.", sender: 'admin', time: '2024-07-26T09:30:00' },
            { text: "I'll get on it right away.", sender: 'shop', time: '2024-07-26T09:35:00' },
            { text: "Also, can you provide an update on the stock levels?", sender: 'admin', time: '2024-07-26T09:40:00' },
            { text: "Yes, we have sufficient stock for most items, but we need to reorder some fast-moving products.", sender: 'shop', time: '2024-07-26T09:50:00' },
            { text: "Alright. Let's focus on the bestsellers and ensure they are restocked promptly.", sender: 'admin', time: '2024-07-26T10:00:00' },
            { text: "I'll place the orders for the restock today.", sender: 'shop', time: '2024-07-26T10:10:00' },
            { text: "Great. We also need to handle a few customer service issues. Can you check the support tickets?", sender: 'admin', time: '2024-07-26T10:20:00' },
            { text: "Sure, I'll look into the support tickets now.", sender: 'shop', time: '2024-07-26T10:30:00' },
            { text: "Please prioritize the tickets related to delivery issues.", sender: 'admin', time: '2024-07-26T10:40:00' },
            { text: "Got it. I'll make sure those are addressed first.", sender: 'shop', time: '2024-07-26T10:50:00' },
            { text: "Let's also plan a sale for the upcoming weekend. Any suggestions?", sender: 'admin', time: '2024-07-26T11:00:00' },
            { text: "We could offer a discount on seasonal items to clear out inventory.", sender: 'shop', time: '2024-07-26T11:10:00' },
            { text: "That sounds like a good plan. Start preparing the promotional materials.", sender: 'admin', time: '2024-07-26T11:20:00' },
            { text: "Will do. Anything else?", sender: 'shop', time: '2024-07-26T11:25:00' },
            { text: "Let's schedule a meeting to discuss the new inventory.", sender: 'admin', time: '2024-07-26T11:30:00' },
            { text: "I'll set up a time and send out invites.", sender: 'shop', time: '2024-07-26T11:35:00' },
            { text: "By the way, I noticed some customer feedback mentioning delays in the shipping process.", sender: 'shop', time: '2024-07-27T13:00:00' },
            { text: "Thanks for bringing this up. We'll need to investigate and address these issues.", sender: 'admin', time: '2024-07-27T13:10:00' },
            { text: "I suggest we review our logistics partners and see if there are better options.", sender: 'shop', time: '2024-07-27T13:20:00' },
            { text: "Agreed. Let's gather some data on delivery times and compare providers.", sender: 'admin', time: '2024-07-27T13:30:00' },
            { text: "I'll have the team compile a report on this.", sender: 'shop', time: '2024-07-27T13:40:00' },
            { text: "Perfect. We'll review the report in our next meeting.", sender: 'admin', time: '2024-07-27T13:50:00' },
            { text: "Also, I'm planning to introduce a new product line next month. Should we start the marketing campaign now?", sender: 'shop', time: '2024-07-28T15:00:00' },
            { text: "Yes, it's a good idea to build anticipation. Let's coordinate with the marketing team.", sender: 'admin', time: '2024-07-28T15:10:00' },
            { text: "I'll draft the initial campaign strategy and share it for feedback.", sender: 'shop', time: '2024-07-28T15:20:00' },
            { text: "Sounds good. I'll inform the marketing team to expect your draft.", sender: 'admin', time: '2024-07-28T15:30:00' },
            { text: "One more thing, we need to update our return policy. Some customers have raised concerns.", sender: 'shop', time: '2024-07-28T16:00:00' },
            { text: "Let's review the policy and make the necessary changes. Customer satisfaction is a priority.", sender: 'admin', time: '2024-07-28T16:10:00' },
            { text: "I'll draft the changes and send them for approval.", sender: 'shop', time: '2024-07-28T16:20:00' },
            { text: "Great. Once approved, we'll update the website and notify customers.", sender: 'admin', time: '2024-07-28T16:30:00' },
            { text: "I'll make sure the team is informed. Let's catch up tomorrow.", sender: 'shop', time: '2024-07-28T17:00:00' } // Unread messages
        ]
    }
];

export default messages;

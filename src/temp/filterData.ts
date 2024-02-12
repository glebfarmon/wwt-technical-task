import { FilterItem, FilterType } from '@api/types/Filter'

export const filterData: {
	filterItems: FilterItem[]
} = {
	filterItems: [
		{
			id: 'MEAL_OPTIONS',
			name: 'Meal options',
			description: 'Choose the type of dining',
			type: FilterType.OPTION,
			options: [
				{
					id: 'breakfast',
					name: 'Breakfast included',
					description:
						'The stay comes with a complimentary morning meal to start your day.'
				},
				{
					id: 'lunch',
					name: 'Lunch included',
					description: 'Enjoy a midday meal included with your stay.'
				},
				{
					id: 'dinner',
					name: 'Dinner included',
					description:
						'Evening meals are provided as part of your accommodation package.'
				},
				{
					id: 'all-inclusive',
					name: 'All inclusive',
					description:
						'Covers all meals and drinks during your stay, often including extra services or activities.'
				}
			]
		},
		{
			id: 'RULES_POLICIES_PAYMENT',
			name: 'Rules, Policies, and Payment',
			type: FilterType.OPTION,
			options: [
				{
					id: 'free-cancellation',
					name: 'Free cancellation',
					description:
						'Option to cancel your booking without any charges, up to a certain date.'
				},
				{
					id: 'pets-allowed',
					name: 'Pets allowed',
					description:
						'Accommodations are pet-friendly, allowing you to bring your animal companions.'
				},
				{
					id: 'non-smoking-room',
					name: 'Non-Smoking room',
					description:
						'Rooms specifically designated as smoke-free for your comfort and health.'
				}
			]
		},
		{
			id: 'FACILITIES',
			name: 'Facilities',
			description: 'Room and hotel facilities',
			type: FilterType.OPTION,
			options: [
				{
					id: 'private-bathroom',
					name: 'Private bathroom',
					description:
						'Room includes an exclusive bathroom for your personal use.'
				},
				{
					id: 'air-conditioning',
					name: 'Air conditioning',
					description:
						'Equipped with a system to cool the room for comfortable temperatures.'
				},
				{
					id: 'heating',
					name: 'Heating',
					description:
						'Features a heating system to keep the room warm and cozy.'
				},
				{
					id: 'coffee-tea-maker',
					name: 'Coffee/Tea maker',
					description:
						'Includes facilities to make your own coffee or tea in the room.'
				},
				{
					id: 'shuttle-service',
					name: 'Shuttle service',
					description:
						'Transportation services available for convenient travel to and from the property.'
				},
				{
					id: 'wi-fi',
					name: 'Wi-Fi',
					description:
						'Wireless internet access available throughout the property.'
				},
				{
					id: 'parking',
					name: 'Parking',
					description:
						'Provides space for parking your vehicle during your stay.'
				},
				{
					id: 'pool',
					name: 'Pool',
					description:
						'Access to a swimming pool for relaxation and leisure activities.'
				}
			]
		},
		{
			id: 'BED_TYPE',
			name: 'Bed type',
			description: 'Choose the preferred bed type',
			type: FilterType.OPTION,
			options: [
				{
					id: 'twin-beds',
					name: 'Twin beds',
					description:
						'Two separate single beds, ideal for friends or colleagues traveling together.'
				},
				{
					id: 'double-bed',
					name: 'Double Bed',
					description:
						'One large bed designed for comfortable sleeping of two people.'
				}
			]
		},
		{
			id: 'HEALTH_ENTERTAINMENT_SPORTS',
			name: 'Health, Entertainment, and Sports',
			type: FilterType.OPTION,
			options: [
				{
					id: 'gym',
					name: 'Gym',
					description:
						'A well-equipped fitness center for exercise and physical workouts.'
				},
				{
					id: 'spa',
					name: 'Spa',
					description:
						'A facility offering health and beauty treatments for relaxation and rejuvenation.'
				},
				{
					id: 'sauna',
					name: 'Sauna',
					description:
						'A room for dry or wet heat sessions, ideal for relaxation and detoxification.'
				}
			]
		}
	]
}

// var leftBubbleTemplate = {
		// events:{
		// },
		// properties: {
			// backgroundColor: 'transparent',
			// height: Ti.UI.SIZE
		// },
		// childTemplates:[
			// {
				// type: 'Ti.UI.View',
				// bindId: 'rowView',
				// properties: {
					// height: Ti.UI.SIZE,
					// backgroundColor: 'transparent',
					// layout: "horizontal"
				// },
				// childTemplates:[
					// {
						// //left avatar view
						// type: 'Ti.UI.ImageView',
						// bindId: 'avatarView',
						// properties: {
							// backgroundImage: 'images/avatarView.png',
							// left: "10dp",
							// zIndex: 2,
							// height: "60dp",
							// width: "60dp",
							// //top: "4dp",
							// bottom: '10dp'
							// //borderRadius: 150
						// },
						// events: {},
					// },
					// {
						// type: 'Ti.UI.View',
						// bindId: 'messageView',
							// properties:{
								// //backgroundImage: ,
								// left: '-19dp',
								// //right: '20dp',
								// backgroundImage: '/images/left_speech_bubble.png',
								// height: Ti.UI.SIZE,
								// //top: "13dp",
								// bottom: "5dp",
								// layout: 'absolute',
								// width: Ti.UI.FILL
						// },
						// events: {},
						// childTemplates:[
							// {
								// type: 'Ti.UI.Label',
								// bindId: 'msgLabel',
								// properties:{
									// // width: Ti.UI.FILL,
									// height: Ti.UI.SIZE,
									// top: "10dp",
									// bottom: "8dp",
									// left: "30dp",
									// right: "8dp",
									// //textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
									// //backgroundColor: 'green',
									// //paddingLeft: "30dp",
									// //paddingRight: "10dp",
// 									
									// backgroundColor: "yellow",
									// wordWrap: true,
									// //text: "this is some sample text bla bla bla bla",
									// font: {
										// fontSize: "13dp"
									// }
								// },
								// events: {}
							// }
						// ]
					// }
				// ]
// 				
// 				
			// }
		// ]
	// };
// 	
	// var rightBubbleTemplate = {};
// 	
	// var postData = [
		// {
			// template: "leftBubble",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "leftBubble",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla. this should expand the height of the speech bubble upwards since im entering in way more characters.'
			// }
		// },
		// {
			// template: "leftBubble",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "leftBubble",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "leftBubble",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "leftBubble",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "leftBubble",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "leftBubble",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "leftBubble",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// },
		// {
			// template: "leftBubble",
			// msgLabel: {
				// text: 'this is some sample text bla bla bla bla'
			// }
		// }
	// ];
// 	
	// var lvSection = Ti.UI.createListSection({
		// items: postData
	// });
// 	
	// var listView = Titanium.UI.createListView({
		// templates: {
			// "leftBubble": leftBubbleTemplate,
			// "rightBubble": rightBubbleTemplate
		// },
		// defaultItemTemplate: "leftBubble",
		// backgroundColor: "transparent",
		// separatorColor: "transparent",
		// sections:[lvSection]
		// //items: postData,
		// //data: postData
	// });
import { StyleSheet } from 'react-native';
import StyleVars from './StyleVars';

export default StyleSheet.create({
	screenContainer: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: StyleVars.Colors.mediumBackground
	},
	headingText: {
		color: StyleVars.Colors.primaryText,
		fontFamily: StyleVars.Fonts.heading,
		fontWeight: "600",
		fontSize: 16,
	},
	text: {
		color: StyleVars.Colors.primaryText,
		fontFamily: StyleVars.Fonts.heading,
		fontWeight: "400",
		fontSize: 12
	},
	navBarTitleText: {
		color: StyleVars.Colors.navBarTitle,
		fontFamily: StyleVars.Fonts.heading,
		fontWeight: "600",
		fontSize: 18,
		lineHeight: 22
	}
})

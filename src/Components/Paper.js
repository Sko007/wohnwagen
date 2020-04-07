import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PhoneIcon from '@material-ui/icons/PhoneIphone';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocationOn from '@material-ui/icons/LocationOn';
import EuroSymbol from '@material-ui/icons/EuroSymbol';
import DirectionsTransitIcon from '@material-ui/icons/DirectionsTransit';
import Typography from '@material-ui/core/Typography';
import { HardwareDevicesOther } from 'material-ui/svg-icons';

// .image-wrapper{
//     width:100%;
//     height:100vh;
//     background-image: url("../statics/forest1.jpg");
//     background-repeat: no-repeat;
//     background-attachment: fixed;
//     background-size:cover

// }

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(35),
			height: theme.spacing(35),
		},
		justifyContent: 'space',
	},
}));

export default function SimplePaper() {
	const classes = useStyles();

	function hover() {}

	return (
		<div className={classes.root}>
			<Paper
				onMouseOver={hover()}
				elevation={2}
				style={{ color: '#303030', fontFamily: 'open sans' }}
			>
				<PhoneIcon
					style={{ height: 150, width: 150, color: '#303030' }}
				></PhoneIcon>
				<Typography>
					<strong>
						1. Heute anrufen - Montag bis Freitag von 8 -16 Uhr
					</strong>
				</Typography>
			</Paper>
			<Paper elevation={2} style={{ color: '#303030' }}>
				<SupervisorAccountIcon
					style={{ height: 150, width: 150, color: '#303030' }}
				></SupervisorAccountIcon>

				<Typography>
					<strong>
						2. Expertenschätzung - Experten geben verbindlichen
						Preis für Wohnmobil
					</strong>
				</Typography>
			</Paper>
			<Paper elevation={2} style={{ color: '#303030' }}>
				<LocationOn
					style={{ height: 150, width: 150, color: '#303030' }}
				></LocationOn>

				<Typography>
					<strong>
						3. Termin vereinbaren und Wohnmobil ins Weserbergland
						fahren.
					</strong>
				</Typography>
			</Paper>
			<Paper elevation={2} style={{ color: '#303030' }}>
				<EuroSymbol
					style={{ height: 150, width: 150, color: '#303030' }}
				></EuroSymbol>

				<Typography>
					<strong>
						4. Wohnmobil wird geprüft - vereinbarter Preis und 500 €
						Fahrtkostenpauschale erhalten
					</strong>
				</Typography>
			</Paper>
			<Paper elevation={2} style={{ color: '#303030' }}>
				<DirectionsTransitIcon
					style={{ height: 150, width: 150, color: '#303030' }}
				></DirectionsTransitIcon>

				<Typography>
					<strong>
						5. Unser Servicemitarbeiter bringt Sie zum Bahnhof oder
						nach Hause
					</strong>
				</Typography>
			</Paper>
		</div>
	);
}

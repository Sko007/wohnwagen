import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PhoneIcon from '@material-ui/icons/PhoneIphone';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocationOn from '@material-ui/icons/LocationOn';
import EuroSymbol from '@material-ui/icons/EuroSymbol';
import DirectionsTransitIcon from '@material-ui/icons/DirectionsTransit';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(28),
			height: theme.spacing(28),
		},
		justifyContent: 'space',
	},
}));

export default function SimplePaper() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper
				elevation={0}
				style={{ color: '#303030', fontFamily: 'open sans' }}
			>
				<PhoneIcon
					style={{ height: 150, width: 150, color: '#303030' }}
				></PhoneIcon>
				<Typography>
					<strong>1. Heute Anrufen von 8 -16 Uhr</strong>
				</Typography>
			</Paper>
			<Paper elevation={0} style={{ color: '#303030' }}>
				<SupervisorAccountIcon
					style={{ height: 150, width: 150, color: '#303030' }}
				></SupervisorAccountIcon>

				<Typography>
					<strong>
						2. Expertenschätzung - verbindlichen Preis für ihren
						Wohnwagen
					</strong>
				</Typography>
			</Paper>
			<Paper elevation={0} style={{ color: '#303030' }}>
				<LocationOn
					style={{ height: 150, width: 150, color: '#303030' }}
				></LocationOn>

				<Typography>
					<strong>
						3. Wohnmobil bringen - € 500 Aufwandsentschädigung
					</strong>
				</Typography>
			</Paper>
			<Paper elevation={0} style={{ color: '#303030' }}>
				<EuroSymbol
					style={{ height: 150, width: 150, color: '#303030' }}
				></EuroSymbol>

				<Typography>
					<strong>4. Geld für Wohnwagen erhalten</strong>
				</Typography>
			</Paper>
			<Paper elevation={0} style={{ color: '#303030' }}>
				<DirectionsTransitIcon
					style={{ height: 150, width: 150, color: '#303030' }}
				></DirectionsTransitIcon>

				<Typography>
					<strong>5. Kostenloser Transfer zum Bahnhof</strong>
				</Typography>
			</Paper>
		</div>
	);
}

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import PhoneIcon from '@material-ui/icons/PhoneIphone';
import Brand from '../Statics/Logo.png';
import Box from '@material-ui/core/Box';
import Paper from '../Components/Paper';
import Quality from '../Statics/qualitaetssiegel.png';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocationOn from '@material-ui/icons/LocationOn';
import EuroSymbol from '@material-ui/icons/EuroSymbol';
import DirectionsTransitIcon from '@material-ui/icons/DirectionsTransit';
import ReplyIcon from '@material-ui/icons/Reply';
import Dirk from '../Statics/dirk1_opacity.png';
import Käufer from '../Statics/käufer.jpg';
import Dirksmall from '../Statics/dirk1_opacity_small.png';

function Copyright() {
	return (
		<Typography
			variant="body2"
			color="textSecondary"
			align="center"
			style={{ fontFamily: 'open sans' }}
		>
			{'Copyright © '}
			<Link
				color="inherit"
				href="https://autohaus-benkel-beverungen.de"
				style={{ fontFamily: 'open sans' }}
			>
				Autohaus Benkel
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	numbers: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	// logo: {
	// 	[theme.breakpoints.down('sm')]: {
	// 		display: 'none',
	// 	},
	// },
	picture: {
		backgroundImage: `url(${Dirk})`,
		backgroundRepeat: 'no - repeat',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		height: 'auto',
		display: 'flex',
		[theme.breakpoints.down('md')]: {
			backgroundImage: `url(${Dirksmall})`,
			backgroundRepeat: 'no - repeat',
			backgroundAttachment: 'fixed',
			backgroundSize: 'cover',
			height: 'auto',
			display: 'flex',
		},
	},
	icon1: {
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	},
	anruf: {
		backgroundColor: 'white',
	},
	expert: {},
	bonus: {},
	cash: {},
	transfer: {},
	siegel: {
		position: 'absolute',
		height: 232,
		width: 175,
		top: 2,
		left: 960,
		marginTop: -3,
		marginRight: 5,
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	},
	container: {
		backgroundColor: theme.palette.background.default,
	},

	toolBar: {
		backgroundColor: '#303030',
		margin: 'auto',
		maxWidth: 1024,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	appbar: {
		backgroundColor: '#303030',
	},
	root: {
		flexGrow: 0,
		fontFamily: 'open sans',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(8, 0, 6),
	},

	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		backgroundColor: theme.palette.background.paper,

		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
		backgroundImage: `url(${Käufer})`,
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

const cards = [1, 2, 3];

export default function LandingPage() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position="static"
				color="inherit"
				className={classes.appbar}
			>
				<Toolbar variant="dense" className={classes.toolBar}>
					<Box
						display="flex"
						justifyContent="space-betweem"
						flexWrap="wrap"
					>
						<img
							className={classes.logo}
							src={Brand}
							style={{
								height: 57,
								width: 200,
								marginTop: 3,
								marginRight: 5,
							}}
						></img>

						<img
							className={classes.siegel}
							src={Quality}
							style={{}}
						></img>
					</Box>
					<Typography
						variant="h5"
						align="center"
						color="textSecondary"
						paragraph
						style={{
							color: 'white',
							marginTop: 20,
							paddingRight: 30,
							fontFamily: 'open sans',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<Box>
							<PhoneIcon></PhoneIcon> 05273/3608-0
						</Box>
					</Typography>
				</Toolbar>
			</AppBar>
			<main style={{ backgroundColor: 'white', fontFamily: 'open sans' }}>
				<div>
					<Container maxWidth="xl" className={classes.picture}>
						<Typography
							component="h2"
							variant="h2"
							align="center"
							color="textSecondary"
							style={{
								paddingTop: 200,
								paddingRight: 60,
								height: 450,
								color: 'white',
								fontSize: 30,
								opacity: 0.9,
							}}
						></Typography>
					</Container>

					<Container maxWidth="xl" className={classes.container}>
						<Typography
							component="h2"
							variant="h2"
							align="center"
							color="textSecondary"
							style={{
								paddingTop: 40,
								fontsize: 11,
								fontFamily: 'open sans',
								fontWeight: 'bold',
							}}
						>
							Wir kaufen dein Wohnmobil
							<br></br>
							So gehts...
						</Typography>

						<Box
							display="flex"
							justifyContent="center"
							style={{ paddingTop: 65 }}
						>
							<Paper></Paper>
						</Box>

						<div className={classes.heroButtons}>
							<Grid container spacing={2} justify="center">
								<Grid item></Grid>
							</Grid>
						</div>
					</Container>

					<Container maxWidth="lg">
						<Typography
							variant="h2"
							align="center"
							color="textSecondary"
							paragraph
							style={{
								fontFamily: 'open sans',
								marginBottom: 100,
								paddingTop: 40,
								fontsize: 11,
								fontFamily: 'open sans',
								fontWeight: 'bold',
							}}
						>
							Ablaufplan im Detail
						</Typography>
						<Box
							display="flex"
							justifyContent="flex-start"
							flexWrap="wrap"
							className={classes.anruf}
						>
							<Box
								display="flex"
								flexDirection="column"
								justifyContent="flex-start"
								flexWrap="wrap"
							>
								<Box
									display="flex"
									flexDirection="row"
									justifyContent="flex-start"
									flexWrap="wrap"
								>
									<Typography
										variant="h2"
										align="center"
										color="textSecondary"
										paragraph
										style={{
											fontFamily: 'open sans',
										}}
										className={classes.numbers}
									>
										1.
									</Typography>
									<PhoneIcon
										style={{
											height: 350,
											width: 350,
											color: 'grey',
										}}
									></PhoneIcon>
								</Box>
								<Box>
									<Typography
										variant="p"
										align="center"
										color="textSecondary"
										paragraph
										style={{
											maxWidth: 400,
											fontSize: 20,

											display: 'block',
											marginblockstart: 1,
											marginblockend: 1,
											margininlinestart: 0,
											margininlineend: 0,
										}}
									>
										{' '}
										Im Telefonat wird der Zustand des
										Wohnmobils durch gezielte Fragen
										festgestellt. Dabei stehen der erfahrene
										Dr. Dirk Benkel und seine Partner zu
										Verfügung.
										{/* </p> */}
									</Typography>
								</Box>
							</Box>

							<ReplyIcon
								className={classes.icon1}
								style={{
									marginTop: 120,
									transform: 'scaleX(-1) rotate(310deg)',
									height: 400,
									width: 400,
									color: 'grey',
								}}
							></ReplyIcon>
						</Box>
						<Box
							display="flex"
							justifyContent="flex-end"
							flexWrap="wrap"
							className={classes.expert}
						>
							<ReplyIcon
								className={classes.icon1}
								style={{
									marginTop: 120,
									transform: ' rotate(310deg)',
									height: 400,
									width: 400,
									color: 'grey',
								}}
							></ReplyIcon>
							<Box
								display="flex"
								flexDirection="column"
								justifyContent="flex-start"
								flexWrap="wrap"
							>
								<Box
									display="flex"
									flexDirection="row"
									justifyContent="flex-start"
									flexWrap="wrap"
								>
									<Typography
										variant="h2"
										align="center"
										className={classes.numbers}
										color="textSecondary"
										paragraph
										style={{
											fontFamily: 'open sans',
										}}
									>
										2.
									</Typography>
									<SupervisorAccountIcon
										style={{
											height: 350,
											width: 350,
											color: 'grey',
										}}
									></SupervisorAccountIcon>
								</Box>

								<Typography
									variant="p"
									align="center"
									color="textSecondary"
									paragraph
									style={{
										maxWidth: 400,
										fontSize: 20,
										display: 'block',
										marginblockstart: 1,
										marginblockend: 1,
										margininlinestart: 0,
										margininlineend: 0,
									}}
								>
									Dr. Dirk Benkel führt das Autohaus in 4.
									Generation. Es ist ein Familienunternehmen
									wo eine zuverlässige und kundenorientierte
									Arbeitsweise sowie ein hohes Maß an
									Expertise zusammenkommen. Deswegen sind er
									und seine Mitarbeiter in der Lage ein
									schnelles und verbindlichens Angebot zu
									unterbreiten.
								</Typography>
							</Box>
						</Box>
						<Box
							display="flex"
							flexWrap="wrap"
							justifyContent="flex-start"
							className={classes.bonus}
						>
							<Box
								display="flex"
								flexDirection="column"
								justifyContent="flex-start"
								flexWrap="wrap"
							>
								<Box
									display="flex"
									flexDirection="row"
									justifyContent="flex-start"
									flexWrap="wrap"
								>
									<Typography
										variant="h2"
										align="center"
										color="textSecondary"
										paragraph
										className={classes.numbers}
										style={{
											fontFamily: 'open sans',
										}}
									>
										3.
									</Typography>
									<LocationOn
										style={{
											height: 350,
											width: 350,
											color: 'grey',
										}}
									></LocationOn>
								</Box>
								<Typography
									variant="p"
									align="center"
									color="textSecondary"
									paragraph
									style={{
										maxWidth: 400,
										fontSize: 20,
										display: 'block',
										marginblockstart: 1,
										marginblockend: 1,
										margininlinestart: 0,
										margininlineend: 0,
									}}
								>
									Nachdem das Angebot abgegeben und ein Termin
									vereinbart wurde. Fahren Sie ihr Wohnmobil
									ins Weserbergland - Blankenauer Straße 16,
									37688 Beverungen. Vor Ort wird das Fahrzeug
									geprüft. Es wird geschaut ob der Zustand des
									Fahrzeugs mit der Beschreibung am Telefon
									übereinstimmt.
								</Typography>
							</Box>

							<ReplyIcon
								className={classes.icon1}
								style={{
									marginTop: 120,
									transform: 'scaleX(-1) rotate(310deg)',
									height: 400,
									width: 400,
									color: 'grey',
								}}
							></ReplyIcon>
						</Box>

						<Box
							display="flex"
							flexWrap="wrap"
							justifyContent="flex-end"
							className={classes.cash}
						>
							<ReplyIcon
								className={classes.icon1}
								style={{
									marginTop: 120,
									transform: ' rotate(310deg)',
									height: 400,
									width: 400,
									color: 'grey',
								}}
							></ReplyIcon>

							<Box
								display="flex"
								flexDirection="column"
								justifyContent="flex-start"
								flexWrap="wrap"
							>
								<Box
									display="flex"
									flexDirection="row"
									justifyContent="flex-start"
									flexWrap="wrap"
								>
									<Typography
										variant="h2"
										className={classes.numbers}
										align="center"
										color="textSecondary"
										paragraph
										style={{
											fontFamily: 'open sans',
										}}
									>
										4.
									</Typography>
									<EuroSymbol
										style={{
											height: 350,
											width: 350,
											color: 'grey',
										}}
									></EuroSymbol>
								</Box>
								<Typography
									variant="p"
									align="center"
									color="textSecondary"
									paragraph
									style={{
										maxWidth: 400,
										fontSize: 20,
										display: 'block',
										marginblockstart: 1,
										marginblockend: 1,
										margininlinestart: 0,
										margininlineend: 0,
									}}
								>
									Wenn das Wohnmobil verkauft wird, erhalten
									Sie den vereinbarten Preis und eine
									Fahrtkostenpauschale von € 500. Dieses Geld
									wird ihnen Bar ausgezahlt oder per
									Blitzüberweisung auf ein gewünschtes Konto
									überwiesen.
								</Typography>
							</Box>
						</Box>
						<Box
							display="flex"
							flexWrap="wrap"
							justifyContent="flex-start"
							className={classes.transfer}
						>
							<Box
								display="flex"
								flexDirection="column"
								justifyContent="flex-start"
								flexWrap="wrap"
							>
								<Box
									display="flex"
									flexDirection="row"
									justifyContent="flex-start"
									flexWrap="wrap"
								>
									<Typography
										variant="h2"
										className={classes.numbers}
										align="center"
										color="textSecondary"
										paragraph
										style={{
											fontFamily: 'open sans',
										}}
									>
										5.
									</Typography>
									<DirectionsTransitIcon
										style={{
											height: 350,
											width: 350,
											color: 'grey',
										}}
									></DirectionsTransitIcon>
								</Box>
								<Typography
									variant="p"
									align="center"
									color="textSecondary"
									paragraph
									style={{
										maxWidth: 400,
										fontSize: 20,
										display: 'block',
										marginblockstart: 1,
										marginblockend: 1,
										margininlinestart: 0,
										margininlineend: 0,
									}}
								>
									Im Anschluss fährt Sie unser
									Servicemitarbeiter zu einem nahe gelegenen
									Bahnhof oder wenn möglich direkt zu ihnen
									nach Hause.
								</Typography>
							</Box>
						</Box>
					</Container>

					<Container className={classes.cardGrid} maxWidth="lg">
						<Typography
							component="h2"
							variant="h2"
							align="center"
							color="textSecondary"
							gutterBottom
							style={{
								paddingTop: 40,
								fontsize: 11,
								fontFamily: 'open sans',
								fontWeight: 'bold',
							}}
						>
							Zufriedene Verkäufer
						</Typography>
						<Grid
							container
							style={{ display: 'flex', flexDirection: 'row' }}
							spacing={4}
						>
							{cards.map((card) => (
								<Grid item key={card} xs={12} sm={6} md={4}>
									<Card className={classes.card}>
										<CardMedia
											className={classes.cardMedia}
											// image="https://source.unsplash.com/random"
											title="Image title"
										/>
										<CardContent
											className={classes.cardContent}
										>
											<Typography
												gutterBottom
												variant="h5"
												component="h2"
												style={{
													fontFamily: 'open sans',
												}}
											>
												Werner Müller
											</Typography>
											<Typography
												style={{
													fontFamily: 'open sans',
												}}
											>
												Hat 5000 Euro für sein Wohnwagen
												bekommen!
											</Typography>
										</CardContent>
										<CardActions></CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					</Container>
					<Container maxWidth="lg">
						<Typography
							component="h2"
							variant="h2"
							align="center"
							color="textSecondary"
							gutterBottom
							style={{
								paddingTop: 40,
								fontsize: 11,
								fontFamily: 'open sans',
								// textshadow: '-1 -1 1 #fff, 1 1 1 #000',
								fontWeight: 'bold',
							}}
						>
							Anfahrt
						</Typography>

						<Typography
							variant="p"
							align="center"
							color="textSecondary"
							paragraph
							style={{}}
						>
							Blankenauer Straße 16, 37688 Beverungen
						</Typography>

						<div className={classes.heroButtons}>
							<Grid container spacing={2} justify="center">
								<Grid item></Grid>
							</Grid>
						</div>
						{/* <hr></hr> */}
					</Container>

					{/* </div> */}
				</div>
			</main>
			{/* Footer */}
			<footer className={classes.footer}>
				<Typography
					variant="h6"
					align="center"
					gutterBottom
				></Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="textSecondary"
					component="p"
				>
					<Link
						color="inherit"
						href="https://autohaus-benkel-beverungen.de/index.php?id=395"
						style={{ fontFamily: 'open sans' }}
					>
						Impressum |
					</Link>
					{'  '}
					<Link
						color="inherit"
						href="https://autohaus-benkel-beverungen.de/index.php?id=396"
						style={{ fontFamily: 'open sans' }}
					>
						Datenschutzerkärung |
					</Link>
					{'  '}
					<Link
						color="inherit"
						style={{ fontFamily: 'open sans' }}
						href="https://autohaus-benkel-beverungen.de/index.php?id=435"
					>
						Datenschutzerkärung-Facebook
					</Link>
					{'  '}
				</Typography>
				<Copyright />
			</footer>
			{/* End footer */}
		</React.Fragment>
	);
}

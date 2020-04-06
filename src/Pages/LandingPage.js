import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LinearProgress from '@material-ui/core/LinearProgress';
import PhoneIcon from '@material-ui/icons/PhoneIphone';
import Partner from '../Statics/Partner.png';
import Brand from '../Statics/Logo.png';
import Box from '@material-ui/core/Box';
import Paper from '../Components/Paper';
import Quality from '../Statics/qualitaetssiegel.png';
import ContainerProcess from '../Components/Container';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocationOn from '@material-ui/icons/LocationOn';
import EuroSymbol from '@material-ui/icons/EuroSymbol';
import DirectionsTransitIcon from '@material-ui/icons/DirectionsTransit';
import RedoIcon from '@material-ui/icons/Redo';
import ReplyIcon from '@material-ui/icons/Reply';
import Dirk from '../Statics/dirk1_opacity.png';

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

// const styles = (theme) => ({
// 	siegel: {
// 		[theme.breakpoints.up('md')]: {
// 			display: 'none',
// 		},
// 	},
// });

const useStyles = makeStyles((theme) => ({
	picture: {
		backgroundImage: `url(${Dirk})`,
		backgroundRepeat: 'no - repeat',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		height: 'auto',
		display: 'flex',
		justifyContent: 'flex-end',
	},
	icon: {},
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
		// margintop: 100,
		// marginBottom: 100,
	},
	headline: {
		// marginBottom: 0,
		// paddingTop: 19,
	},
	// logo: {
	// 	maxWidth: 0,
	// },
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
					{/* <IconButton
						edge="false"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					> */}
					<img
						src={Brand}
						style={{
							height: 57,
							width: 200,
							marginTop: 3,
							marginRight: 5,
						}}
					></img>
					{/* </IconButton>
					<IconButton
						edge="false"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						style={{ float: 'right' }}
					> */}

					<img
						className={classes.siegel}
						src={Quality}
						style={{}}
					></img>
					{/* </IconButton> */}
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
						<PhoneIcon></PhoneIcon> 05273/3608-0
					</Typography>
				</Toolbar>
			</AppBar>
			<main style={{ backgroundColor: 'white', fontFamily: 'open sans' }}>
				<div>
					{/* Hero unit */}
					{/* <div className={classes.heroContent}> */}
					{/* <Box boxShadow={1} bgcolor="background.paper" m={1} p={1}> */}

					<Container maxWidth="xl" className={classes.picture}>
						<Typography
							component="h2"
							variant="h2"
							align="center"
							color="textSecondary"
							// gutterBottom
							style={{
								paddingTop: 200,
								paddingRight: 60,
								height: 450,
								color: 'white',
								fontSize: 30,
								opacity: 0.9,
							}}
							// className={classes.headline}
						>
							{/* Autohaus Benkel! <br></br> Wir geben faire und
							verbindliche Preise für ihr Wohnmobil */}
						</Typography>
					</Container>

					<Container maxWidth="xl" className={classes.container}>
						<Typography
							component="h2"
							variant="h2"
							align="center"
							color="textSecondary"
							// gutterBottom
							style={{ paddingTop: 40 }}
							// className={classes.headline}
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
						{/* <Typography
							variant="h4"
							align="center"
							color="textSecondary"
							paragraph
							style={{
								paddingTop: 40,
								fontFamily: 'open sans',
							}}
						>
							<PhoneIcon></PhoneIcon> 05273/3608-0
							{/* </IconButton> */}

						<div className={classes.heroButtons}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									{/* <Button variant="contained" color="primary">
									Main call to action
                                    </Button>
							</Grid>
							<Grid item>
								<Button variant="outlined" color="primary">
                                Secondary action
								</Button> */}
								</Grid>
							</Grid>
						</div>
					</Container>
					{/* </Box> */}

					<Container maxWidth="lg">
						<Typography
							variant="h2"
							align="center"
							color="textSecondary"
							paragraph
							style={{
								fontFamily: 'open sans',
								marginBottom: 100,
							}}
						>
							Prozess Im Detail
						</Typography>
						{/* <Box display="flex" justifyContent="flex-start"></Box> */}
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
								<PhoneIcon
									style={{
										height: 350,
										width: 350,
										color: 'grey',
									}}
								></PhoneIcon>
								{/* <p>Anrufen</p> */}
								<Typography
									variant="p"
									align="center"
									color="textSecondary"
									paragraph
									style={{ maxWidth: 400 }}
								>
									Anrufen Something short and leading about
									the collection below—its contents, the
									creator, etc. Make it short and sweet, but
									not too short so folks don&apos;t simply
									skip over it entirely. Something short and
									leading about the collection below—its
									contents, the creator, etc. Make it short
									and sweet, but not too short so folks
									don&apos;t simply skip over it
									entirely.Something short and leading about
									the collection below—its contents, the
									creator, etc. Make it short and sweet, but
									not too short so folks don&apos;t simply
									skip over it entirely.
								</Typography>
							</Box>
							<ReplyIcon
								// className={classes.icon}
								style={{
									// transform: 'rotate(240deg)',
									transform: 'scaleY(-1)',
									transform: 'rotate(260deg)',
									height: 300,
									width: 300,
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
							<Box
								display="flex"
								flexDirection="column"
								justifyContent="flex-start"
								flexWrap="wrap"
							>
								<SupervisorAccountIcon
									style={{
										height: 350,
										width: 350,
										color: 'grey',
									}}
								></SupervisorAccountIcon>
								<Typography
									variant="p"
									align="center"
									color="textSecondary"
									paragraph
									style={{ maxWidth: 400 }}
								>
									Experteneinschätzung Something short and
									leading about the collection below—its
									contents, the creator, etc. Make it short
									and sweet, but not too short so folks
									don&apos;t simply skip over it entirely.
									Something short and leading about the
									collection below—its contents, the creator,
									etc. Make it short and sweet, but not too
									short so folks don&apos;t simply skip over
									it entirely.Something short and leading
									about the collection below—its contents, the
									creator, etc. Make it short and sweet, but
									not too short so folks don&apos;t simply
									skip over it entirely.
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
								<LocationOn
									style={{
										height: 350,
										width: 350,
										color: 'grey',
									}}
								></LocationOn>
								<Typography
									variant="p"
									align="center"
									color="textSecondary"
									paragraph
									style={{ maxWidth: 400 }}
								>
									Bonus Something short and leading about the
									collection below—its contents, the creator,
									etc. Make it short and sweet, but not too
									short so folks don&apos;t simply skip over
									it entirely. Something short and leading
									about the collection below—its contents, the
									creator, etc. Make it short and sweet, but
									not too short so folks don&apos;t simply
									skip over it entirely.Something short and
									leading about the collection below—its
									contents, the creator, etc. Make it short
									and sweet, but not too short so folks
									don&apos;t simply skip over it entirely.
								</Typography>
							</Box>
						</Box>
						<Box
							display="flex"
							flexWrap="wrap"
							justifyContent="flex-end"
							className={classes.cash}
						>
							<Box
								display="flex"
								flexDirection="column"
								justifyContent="flex-start"
								flexWrap="wrap"
							>
								<EuroSymbol
									style={{
										height: 350,
										width: 350,
										color: 'grey',
									}}
								></EuroSymbol>
								<Typography
									variant="p"
									align="center"
									color="textSecondary"
									paragraph
									style={{ maxWidth: 400 }}
								>
									Abkassieren Something short and leading
									about the collection below—its contents, the
									creator, etc. Make it short and sweet, but
									not too short so folks don&apos;t simply
									skip over it entirely. Something short and
									leading about the collection below—its
									contents, the creator, etc. Make it short
									and sweet, but not too short so folks
									don&apos;t simply skip over it
									entirely.Something short and leading about
									the collection below—its contents, the
									creator, etc. Make it short and sweet, but
									not too short so folks don&apos;t simply
									skip over it entirely.
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
								<DirectionsTransitIcon
									style={{
										height: 350,
										width: 350,
										color: 'grey',
									}}
								></DirectionsTransitIcon>

								<Typography
									variant="p"
									align="center"
									color="textSecondary"
									paragraph
									style={{ maxWidth: 400 }}
								>
									Transfer Something short and leading about
									the collection below—its contents, the
									creator, etc. Make it short and sweet, but
									not too short so folks don&apos;t simply
									skip over it entirely. Something short and
									leading about the collection below—its
									contents, the creator, etc. Make it short
									and sweet, but not too short so folks
									don&apos;t simply skip over it
									entirely.Something short and leading about
									the collection below—its contents, the
									creator, etc. Make it short and sweet, but
									not too short so folks don&apos;t simply
									skip over it entirely.
								</Typography>
							</Box>
						</Box>
					</Container>

					<Container className={classes.cardGrid} maxWidth="md">
						{/* End hero unit */}

						<Typography
							component="h2"
							variant="h2"
							align="center"
							color="textSecondary"
							gutterBottom
							style={{ paddingTop: 80 }}
							// className={classes.headline}
						>
							Zufriedene Verkäufer
						</Typography>
						<Grid container spacing={4}>
							{cards.map((card) => (
								<Grid item key={card} xs={12} sm={6} md={4}>
									<Card className={classes.card}>
										<CardMedia
											className={classes.cardMedia}
											image="https://source.unsplash.com/random"
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
												Hat 5000 Euro für sein
												Wohnwaagen bekommen
											</Typography>
										</CardContent>
										<CardActions>
											{/* <Button size="small" color="primary">
											View
                                            </Button>
                                            <Button size="small" color="primary">
											Edit
										</Button> */}
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					</Container>
					<Container maxWidth="lg">
						{/* <Typography
							component="h2"
							variant="h2"
							align="center"
							color="textSecondary"
							gutterBottom
							style={{ fontFamily: 'open sans' }}
						>
							Autohaus Benkel
						</Typography> */}
						<Typography
							variant="h5"
							align="center"
							color="textSecondary"
							paragraph
							style={{ marginTop: 80 }}
						>
							Something short and leading about the collection
							below—its contents, the creator, etc. Make it short
							and sweet, but not too short so folks don&apos;t
							simply skip over it entirely. Something short and
							leading about the collection below—its contents, the
							creator, etc. Make it short and sweet, but not too
							short so folks don&apos;t simply skip over it
							entirely.Something short and leading about the
							collection below—its contents, the creator, etc.
							Make it short and sweet, but not too short so folks
							don&apos;t simply skip over it entirely.
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

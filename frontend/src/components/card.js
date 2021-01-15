import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmailIcon from '@material-ui/icons/Email';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PaymentIcon from '@material-ui/icons/Payment';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import DehazeIcon from '@material-ui/icons/Dehaze';
import WebIcon from '@material-ui/icons/Web';




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 545,
    paddingTop: '0%', 
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  inlineText: {
    display: 'inline',
  },
  paperHiddenText: {
    // maxWidth: 400,
    // margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(1),
  },
}));

export default function CardComponent(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const record = props.record;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {record.Gender ==='Male' ? (
              <Box component="span">M</Box>
            ) : record.Gender ==='Female' ? (
              <Box component="span">F</Box>
            ) : (
              <Box component="span">
                &times;
              </Box>					
            )}
          </Avatar>
        }
        title={`${record.FirstName} ${record.LastName}`}
        subheader={
          <Box component="span">
            <IconButton aria-label="add to favorites" >
              <EmailIcon fontSize="small" style={{paddingRight:'0.2rem'}} color="error"/>
              <Box component="span" fontSize="small">{record.Email}</Box>
            </IconButton>
          </Box>
        }
      />
      <CardContent pt={1} pb={1}>
        <Typography variant="body2" component="div">
          <List >
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <CreditCardIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Credit Card Number" secondary={`${record.CreditCardNumber}`}/>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <DehazeIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Credit Card Type" secondary={`${record.CreditCardType}`} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PaymentIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Payment Method" secondary={`${record.PaymentMethod}`}/>
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <WebIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText  
                primary="URL" 
                secondary={
                            <Box component="span">
                              {record.URL}
                            </Box>
                          } 
              />
            </ListItem>
          </List>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography >
          {record.UserName}{bull}{record.LastLogin}
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" gutterBottom component="div">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper className={classes.paperHiddenText}>First Name</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paperHiddenText}>{record.FirstName}</Paper>
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" gutterBottom component="div">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper className={classes.paperHiddenText}>Last Name</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paperHiddenText}>{record.LastName}</Paper>
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" gutterBottom component="div">
            <Grid container spacing={2}  wrap="nowrap">
              <Grid item xs={4}>
                <Paper className={classes.paperHiddenText}>Email</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paperHiddenText}>{record.Email}</Paper>
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" gutterBottom component="div">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper className={classes.paperHiddenText}>Gender</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paperHiddenText}>{record.Gender}</Paper>
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" gutterBottom component="div">
            <Grid container spacing={2}  wrap="nowrap" >
              <Grid item xs={4}>
                <Paper className={classes.paperHiddenText}>Phone Number</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paperHiddenText}>{record.PhoneNumber}</Paper>
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" gutterBottom component="div">
            <Grid container spacing={2} wrap="nowrap">
              <Grid item xs={4}>
                <Paper className={classes.paperHiddenText}>URL</Paper>
              </Grid>
              <Grid item xs={8} zeroMinWidth>
                <Paper className={classes.paperHiddenText}>
                  {record.URL}
                </Paper>
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" gutterBottom component="div">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper className={classes.paperHiddenText}>User Name</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paperHiddenText}>{record.UserName}</Paper>
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" gutterBottom component="div">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper className={classes.paperHiddenText}>Credit Card Number</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paperHiddenText}>{record.CreditCardNumber}</Paper>
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" gutterBottom component="div">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper className={classes.paperHiddenText}>Credit Card Type</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paperHiddenText}>{record.CreditCardType}</Paper>
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" gutterBottom component="div">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper className={classes.paperHiddenText}>Domain Name</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paperHiddenText}>{record.DomainName}</Paper>
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" gutterBottom component="div">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper className={classes.paperHiddenText}>Last Login</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paperHiddenText}>{record.LastLogin}</Paper>
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" gutterBottom component="div">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper className={classes.paperHiddenText}>Latitude</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paperHiddenText}>{record.Latitude}</Paper>
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" gutterBottom component="div">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper className={classes.paperHiddenText}>Longitude</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paperHiddenText}>{record.Longitude}</Paper>
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" gutterBottom component="div">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper className={classes.paperHiddenText}>Mac Address</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paperHiddenText}>{record.MacAddress}</Paper>
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" gutterBottom component="div">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper className={classes.paperHiddenText}>Payment Method</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paperHiddenText}>{record.PaymentMethod}</Paper>
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

